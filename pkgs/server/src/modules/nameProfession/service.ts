import { Repository } from 'typeorm';

import { NameProfession } from './entity';

export class NameProfessionService {
  private nameProfessionRepository: Repository<NameProfession>;

  constructor(nameProfessionRepository: Repository<NameProfession>) {
    this.nameProfessionRepository = nameProfessionRepository;
  }

  async getNameProfessions(): Promise<NameProfession[]> {
    return await this.nameProfessionRepository.find();
  }

  async getNameProfessionById(nameId: string): Promise<NameProfession | null> {
    const nameProfession = await this.nameProfessionRepository.findOneById(nameId);

    if (!nameProfession) {
      return null;
    }

    return nameProfession;
  }
}
