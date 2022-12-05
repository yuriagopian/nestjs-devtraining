export class UpdateCourseDto {
    readonly id: string;
    readonly name?: string;
    readonly description?: string;
    readonly tags?: string[];
    readonly price?: number;
}
