import Common from './common.entity'
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

enum UserRole {
  ROOT = 'root',
  AUTHOR = 'author',
  VISITOR = 'visitor'
}

@Entity()
export default class User extends Common {
  // 主键id uuid通用唯一识别码
  @PrimaryGeneratedColumn('uuid')
  uuid: number

  // 用户名
  @Column({ length: 100 })
  username: string

  // 软删除
  @Column({
    default: false
  })
  isDelete: boolean

  // 邮箱
  @Column()
  email: string

  // 用户角色
  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.VISITOR
  })
  role: string

  // 手机号
  @Column('text')
  mobile: string

  // 密码
  @Column('text', { select: false })
  password: string
}
