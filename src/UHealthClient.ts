import assert from 'assert';
// import { ClientNode } from './ClientNode';
import { logFrame, navBar,navLogButton} from './htmlFrames';
// import { Parser } from './Parser';
// import { manager, predict } from './nlp';
// const client = new ClientNode();
const logText:Array<string> = ['logIn', 'signUp'];
// function printOutput(outputArea: HTMLElement, message: string): void {
//     // append the message to the output area
//     outputArea.innerText += message + '\n';
//     // scroll the output area so that what we just printed is visible
//     outputArea.scrollTop = outputArea.scrollHeight;
// }
// function changeHTML(elementId: HTMLElement, htmlContent: string): void{
//     elementId.innerHTML = htmlContent;
// }
// async function signup(): Promise<void>{
//     const userid = document.querySelector('#name') as HTMLInputElement;
//     const password = document.querySelector('#password') as HTMLInputElement;
//     const usertype = document.querySelector('#usertype') as HTMLInputElement;
//     await client.signup(userid.value,password.value,usertype.value);
// }
// async function login(): Promise<Map<string,string>>{
//     const userid = document.querySelector('#name') as HTMLInputElement;
//     const password = document.querySelector('#password') as HTMLInputElement;
//     const result = await client.login(userid.value,password.value);
//     return Parser(result);
// }
// async function nlpPredict(data: string): Promise<string>{
//     const predicted = await predict(data);
//     return predicted;
// }
function getForm ():FormData {
    var data = new FormData();
    var all = document.querySelectorAll("#user_form input, #user_form textarea, #user_form select") as NodeListOf<HTMLInputElement>;
    for (let field of all) {
      if (field.type != "submit" && field.type != "button") { 
        if (field.type=="radio" || field.type=="checkbox") {
          if (field.checked) { data.append(field.name, field.value); }
        }
        else { data.append(field.name, field.value); }
      }
    }
    return data;
}


function logAction(root:HTMLElement, log:number=0){
    root.innerHTML = navBar(navLogButton(logText[log])) + logFrame(logText[(log+1)%2]);
    const logButtonNav = document.getElementById('navLogButton');
    logButtonNav?.addEventListener("click", () =>{
        log = (log+1)%2;
        logAction(root,log);
    });
    const logButton = document.getElementById('logButton');
    logButton?.addEventListener("click", () =>{
        const formData = getForm();
        console.log(formData);
    });
}

async function main(): Promise<void> {
    const root:HTMLElement = document.getElementById('root')??assert.fail('missing main root');
    logAction(root);
    // await manager.train();
    // const bodyArea: HTMLElement = document.getElementById('bodyArea') ?? assert.fail('missing mainBody');
    // changeHTML(bodyArea, logFrame );
    // const button1 = document.getElementById('signUpButton');
    // button1?.addEventListener("click", signup);
    // const button2 = document.getElementById('loginButton');
    // button2?.addEventListener("click", login);
}
console.log("hello");
void main();