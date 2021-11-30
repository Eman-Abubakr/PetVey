export class Survey {

    constructor(
        
    public _id?: String,
    public owner?: String,
    public CreationDate?: String,
    public StartDate?: String,
    public ExpiryDate?: String,
    public Title?: String,
    public Author?: String,
    public Description?: String,
    public Questions?: [
       {
        QuestionBody?: String,
        AnswerType?: String,
        MultipleChoiceAnswers?: String[]
    }]
    ){}


}
