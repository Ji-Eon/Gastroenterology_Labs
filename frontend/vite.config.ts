import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Gastroenterology_Labs/', // repository-name에 자신의 리포지토리 이름을 입력하세요
  plugins: [react()]
});