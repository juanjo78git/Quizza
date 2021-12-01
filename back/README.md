# Quizza

## Backend
### Database
- [Docker PostgreSQL](https://hub.docker.com/_/postgres)
#### Script
##### Download Docker PostgreSQL
docker pull postgres
##### Create Volume
docker volume create pgdata
##### Run psql
docker run -p 5432:5432 --name quizza-postgres -e POSTGRES_PASSWORD=mysecretpassword -v pgdata:/var/lib/postgresql/data -d postgres
##### Enter psql
docker exec -it quizza-postgres psql -U postgres
##### DB connection
- Host: localhost
- Port: 5432
- User: postgres
- Password: mysecretpassword

#### SQLs
- In database directory

### Aplication
- Java Spring Boot
- In api-quizza directory
