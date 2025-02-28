export const ProjectReducer = (state = "Web", action)=>{

    switch(action.type){
        case "Lab":
            return "Lab";

        case "Acd":
            return "Acd"

        default:
            return "Web"
    }

}