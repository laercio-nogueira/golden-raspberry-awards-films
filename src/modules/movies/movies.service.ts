import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from 'database/entities/movies.entity';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private readonly movieRepository: Repository<Movie>,
  ) {}

  async getIntervals(): Promise<any> {
    const movies = await this.movieRepository.find({ where: { winner: true } });

    const producerJoinByYear = {};
    movies.forEach(({ year, producers }) => {
      producers.split(/,|and/).forEach((producer: string) => {
        if (!producerJoinByYear[producer.trim()]) producerJoinByYear[producer.trim()] = [];
        producerJoinByYear[producer.trim()].push(year);
      });
    });

    const intervals = [];
    for (const producer in producerJoinByYear) {
      const yearsInOrder = producerJoinByYear[producer].sort((a, b) => a - b);
      for (let count = 1; count < yearsInOrder.length; count++) {
        intervals.push({
          producer,
          interval: yearsInOrder[count] - yearsInOrder[count - 1],
          previousWin: yearsInOrder[count - 1],
          followingWin: yearsInOrder[count],
        });
      }
    }

    const minInterval = Math.min(...intervals.map(({ interval }) => interval));
    const maxInterval = Math.max(...intervals.map(({ interval }) => interval));

    return {
      min: intervals.filter((i) => i.interval === minInterval),
      max: intervals.filter((i) => i.interval === maxInterval),
    };
  }
}
