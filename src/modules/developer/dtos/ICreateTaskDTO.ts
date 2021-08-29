export default interface ICreateTaskDTO {
    title: string;
    description: string;
    idResponsable: string;
    isBug: boolean;
    idBacklog: number;
    createdBy: string;
}