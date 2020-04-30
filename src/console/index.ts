// 直接调用 Console 对象
// https://developer.mozilla.org/en-US/docs/Web/API/Console
// FIXME: 能否直接导出 console 对象？
export function log(...messages: any[]): void {
	console.log(...messages);
}

export function info(...messages: any[]): void {
	console.info(...messages);
}

export function warn(...messages: any[]): void {
	console.warn(...messages);
}

export function error(...messages: any[]): void {
	console.error(...messages);
}
