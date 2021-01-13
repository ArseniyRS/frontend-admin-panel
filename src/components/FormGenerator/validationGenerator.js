import * as Yup from "yup";

export const validationGenerator = (key, config)=>{
    let schema = {}
    for (let i=0;i<key.length;i++){
        for (let j=0;j<config.length;j++){
            if(key[i]===config[j]?.key){
                schema[key[i]]  =chooseSchema(config[j])
            }
        }
    }
    return schema
}

const chooseSchema = (config)=>{
    let pattern
    if(config?.dataType) {
        switch (config.dataType) {
            case 'number': pattern = Yup.number();
                break;
            case 'array': pattern = Yup.array();
                break;
            case 'obj': pattern = Yup.object();
                break;
            default: pattern = Yup.string()
        }
    }
    else{ pattern = Yup.string()
    }

    if(config?.required){ pattern =  pattern.required(config.required)
    }
    if(config?.min){ pattern =   pattern.min(config.min)
    }
    if(config?.max){ pattern =  pattern.min(config.max)
    }
    if(config?.nullable){ pattern =  pattern.nullable(config.nullable)
    }
    return pattern
}