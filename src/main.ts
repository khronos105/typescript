import './style.css';
import './topics/09-generics'

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `Hola Mundo`

console.log('Hola Mundo!')