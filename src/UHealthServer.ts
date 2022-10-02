import assert from 'assert';
import { Server } from 'http';
import express, { Application } from 'express';
import HttpStatus from 'http-status-codes';
import asyncHandler from 'express-async-handler';
import fs from 'fs';

export class WebServer {

    private readonly app: Application;
    private server: Server|undefined;
    public constructor(
        private readonly requestedPort: number
    ) {
        this.app = express();
        this.setServerFunctionality();
    }

    /**
     * Sets up GET request protocols for the server
     */
    private setServerFunctionality(): void {
        this.app.use((request, response, next) => {
            // allow requests from web pages hosted anywhere
            response.set('Access-Control-Allow-Origin', '*');
            next();
        });
        this.app.get('/login/:userid,:password', asyncHandler(async function(request, response) {
            const { userid, password } = request.params;
            //TODO: check if user file exist or not
            const userData = fs.readFileSync("userData/" + userid +'.ky', { encoding: 'utf-8' });
            
            assert(userid+'.ky', "user does not exist");
            response
                .status(HttpStatus.OK)
                .type('text')
                .send(userData);
        }));

        this.app.get('/signup/:userid,:password,:usertype', asyncHandler(async function(request, response) {
            const { userid, password, usertype } = request.params;
            const userData: string = `{userid: ${userid}, password: ${password}, usertype: ${usertype}`;
            fs.writeFileSync("userData/" + userid +'.ky',userData,{ encoding: 'utf-8' });
            assert(userid + '.ky', "user does not exist");
            response
                .status(HttpStatus.OK)
                .type('text')
                .send("Done");
        }));
    }

    /**
     * Start this server.
     * 
     * @returns (a promise that) resolves when the server is listening
     */
    public start(): Promise<void> {
        return new Promise(resolve => {
            this.server = this.app.listen(this.requestedPort, () => {
                console.log('server now listening at', this.port);
                resolve();
            });
        });
    }

    /**
     * @returns the actual port that server is listening at. (May be different
     *          than the requestedPort used in the constructor, since if
     *          requestedPort = 0 then an arbitrary available port is chosen.)
     *          Requires that start() has already been called and completed.
     */
    public get port(): number {
        const address = this.server?.address() ?? 'not connected';
        if (typeof(address) === 'string') {
            throw new Error('server is not listening at a port');
        }
        return address.port;
    }

    /**
     * Stop this server. Once stopped, this server cannot be restarted.
     */
    public stop(): void {
        this.server?.close();
        console.log('server stopped');
    }
}

/**
 * Start a server on localhost:8789.
 */
async function main(): Promise<void> {
    const port = 8789;
    const server: WebServer = new WebServer(port);
    await server.start();
}

if (require.main === module) {
    void main();
}