export const ProjectReducer = (state = "Web", action)=>{

    switch(action.type){
        case "Lab":
            return "Lab";

        case "Acd":
            return "Acd";

        case "Web":
            return "Web";
        default:
            return state
    }

}