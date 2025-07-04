export class GetAllHobbiesUseCase {
    constructor(hobbyRepository) {
        this.hobbyRepository = hobbyRepository;
    }
    async execute({ page = 1, limit = 10 }) {
        const skip = (page - 1) * limit;
        return await this.hobbyRepository.findAll({ skip, take: limit });
    }
}
