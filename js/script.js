let form = document.forms["car-log"];
form.addEventListener ("submit",getValues);

function getValues(event){
    event.preventDefault();

    let formData =  {
        "name":this.name.value,
        "veh-type:":this['veh-type'].value,
        "make":this.make.value,
        "model":this.model.value,
        "registration ":this.registration.value,
        "condition": this['condition'].value,
        "value":parseInt(this.value.value)
    }
}