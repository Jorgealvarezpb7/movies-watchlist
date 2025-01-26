import { Repository } from 'typeorm';

import { Name } from './entity';

export type CreateNameDto = Omit<Name, 'id'>;

export class NameService {
  private nameRepository: Repository<Name>;

  constructor(nameRepository: Repository<Name>) {
    this.nameRepository = nameRepository;
  }

  async getNames(): Promise<Name[]> {
    return await this.nameRepository.find();
  }

  async getNameById(id: string): Promise<Name | null> {
    const name = await this.nameRepository.findOneById(id);

    if (!name) {
      return null;
    }

    return name;
  }

  async createName(dto: CreateNameDto): Promise<Name[]> {
    const name = new Name();

    name.name = dto.name;
    name.birthDate = dto.birthDate;
    name.deathDate = dto.deathDate;

    const inserted = await this.nameRepository.insert(name);

    return this.nameRepository.findByIds(inserted.identifiers);
  }

  async deleteName(id: string): Promise<boolean> {
    const deleted = await this.nameRepository.delete({
      id
    });

    return !!deleted.affected;
  }
}
