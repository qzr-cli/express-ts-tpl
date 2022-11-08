import { DataSource } from 'typeorm'

const dataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '66668888',
  database: 'page',
  entities: ['src/entity/*.ts'],
  logging: true,
  synchronize: true
})

export default dataSource
