import { Repository } from 'typeorm';

import { Title } from './entity';
import { dot } from 'node:test/reporters';

export type CreateTitleDto = Omit<Title, 'id' | 'createdAt' | 'updatedAt'>;

export class TitleService {
  private titleRepository: Repository<Title>;

  constructor(titleRepository: Repository<Title>) {
    this.titleRepository = titleRepository;
  }

  async getTitles(): Promise<Title[]> {
    return this.titleRepository.find();
  }

  async createTitle(dto: CreateTitleDto): Promise<Title[]> {
    const title = new Title();

    title.title = dto.title;
    title.starRating = dto.starRating;
    title.releaseDate = dto.releaseDate;
    title.audienceRating = dto.audienceRating;
    title.contentType = dto.contentType;

    const inserted = await this.titleRepository.insert(title);

    return this.titleRepository.findByIds(inserted.identifiers);
  }

  async deleteTitle(id: string): Promise<boolean> {
    const inserted = await this.titleRepository.delete({
      id
    });

    return !!inserted.affected;
  }
}
