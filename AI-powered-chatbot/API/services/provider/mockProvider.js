export default class MockProvider {
async stream(context, onChunk){
const text = "Hello! I'm a demo assistant. I will echo your last message: " + (context.lastUser || '');
// stream one word every 200ms
const words = text.split(' ');
for(let i=0;i<words.length;i++){
await new Promise(r=>setTimeout(r, 120));
onChunk(words[i] + (i<words.length-1? ' ':'') );
}
return;
}
}