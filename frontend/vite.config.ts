import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Gastroenterology_Labs/',
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // 폴링을 사용하여 파일 변경 감지
    },
    hmr: {
      overlay: true, // 오류 발생 시 오버레이를 표시
    },
  },
});
