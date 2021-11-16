# Quizza

## Backend
### Database
- [Docker MySQL](https://hub.docker.com/_/mysql)
#### Script
@ECHO OFF
ECHO Create Volumen
docker volume create mysql-db-data
ECHO create image and add volumen
docker run -d -p 33060:3306 --name mysql-db  -e MYSQL_ROOT_PASSWORD=admin --mount src=mysql-db-data,dst=/var/lib/mysql mysql
pause
ECHO exec the database
docker exec -it mysql-db mysql -padmin
ECHO p: admin

- SQL scripts in database directory

### Aplication
- Java Spring Boot
- In quizza directory
