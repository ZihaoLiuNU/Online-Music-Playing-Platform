//validation function, check the not null, name and details length, valid date
export const validation = (track)=>{
    let title = track.title;
    let description = track.description;
    let date = track.date;

      //not null
      if(title == null || description == null ){
             throw new Error("attribute cannot be null!");
      }

      // check the length.
      if(title.length<3 || title.length > 20){
            throw new Error("title length should more than 3 and not more then 20");
      }
      
      //if user change the date
      if(date != null) {
             //check the date format 
            let reg = /^[1-9]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;

            let regExp = new RegExp(reg);

            if(!regExp.test(date)){
                throw new Error("Invalid date! Right sample: 2023-01-02");
            }

            //check the date is vaild date.
            
            if(!checkDate(date)){
                    throw new Error("Invalid date! Date should after today!");
            }
      }
     
      return true;
}

export const checkDate = (date)=>{
     //check the date is valid.
     let now_date_array = new Date().toLocaleDateString().split("/");
     let set_date = date.split("-");

     let check_date = new Date(set_date[0],set_date[1],set_date[2]).getTime();
     let now_date = new Date(now_date_array[0],now_date_array[1],now_date_array[2]).getTime();

     if(check_date < now_date){
      return false;
     }
     return true;
}
//Success return function, set the status as 200,201
export const setSuccessfulResponse = (obj, response, code) => {
      response.status(code);
      response.json(obj);
  }
  //Error return function, set the status as 500,400 means server error, and return the error message.
export const setErrorResponse = (err, response, code) => {
      response.status(code);
      response.json({
          error: {
              message: err
          }
      });
  }