import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User {
  // 主键id uuid通用唯一识别码
  @PrimaryGeneratedColumn('uuid')
  id: number

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
  @Column('simple-enum', { enum: ['root', 'author', 'visitor'] })
  role: string

  // 手机号
  @Column('text')
  mobile: string

  // 密码
  @Column('text', { select: false })
  password: string
}
