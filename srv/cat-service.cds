using {tutorialdemo as demo } from '../db/data-model';


service Studentservice{
    entity Students as projection on demo.students;
    entity FeesDetails as projection on demo.FeesDetails;
}