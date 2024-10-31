# 기본 Node 이미지를 사용
FROM node:18-alpine

# 앱 디렉토리 생성
WORKDIR /usr/src/app

# 앱 의존성 설치
COPY package*.json ./
RUN npm install

# 앱 소스 추가
COPY . .

# Next.js 빌드
RUN npm run build

# # 앱 시작
# CMD ["npm", "start"]

# # 애플리케이션이 사용하는 포트를 노출
# EXPOSE 3000
