import { CreateDateColumn, UpdateDateColumn, VersionColumn, Generated } from 'typeorm'

export default abstract class Common {
  @Generated()
  id: string

  @CreateDateColumn()
  craeteDate: Date

  @UpdateDateColumn()
  updateDate: Date

  @VersionColumn()
  version: number
}
