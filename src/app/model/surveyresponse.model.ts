export class SurveyResponse {

    constructor(        
        
        public Questions?: [
        {    
            questionBody?: String,
            answer?: String,
            answerType?: String
        }]
    ){}


}
