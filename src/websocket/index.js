const ws = new WebSocket('ws://localhost:3000');

ws.onopen = () => {
  console.log('open');
}

ws.onmessage = (e) => {
  console.log(e.data);
}

ws.onclose = () => {
  console.log('close');
}

ws.onerror = () => {
  console.log('error');
}

export default ws;