# Docker

- [docker desktop 설치](https://www.docker.com/products/docker-desktop/)

- 이미지 풀링 및 실행

```shell
docker compose up -d
# 혹은
docker-compose up -d
```

- connection string

```
mongodb://root:example@localhost:27017
```

### 테스트 데이터 삽입

```
$ npx ts-node src/scripts/createTestUser.ts
```

## MongoDB CLI 도구(mongo)를 실행하여 MongoDB 서버에 연결하는 명령어

```
$ docker run -it --rm --network host mongo mongosh -u root -p example --authenticationDatabase admin
test> use pandamarket_dev
```

```
> show dbs
> use admin
> show collections
> db.users.find().pretty()
```
