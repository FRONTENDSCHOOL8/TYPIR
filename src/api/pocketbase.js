import PocketBase from 'pocketbase';

// 포켓호스트 인스턴스(싱글톤) 반환
// const pb = new PocketBase(import.meta.env.VITE_PB_API);
const pb = new PocketBase('https://pocket10.kro.kr');

export default pb;
