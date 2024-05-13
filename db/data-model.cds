namespace tutorialdemo;
using {managed} from '@sap/cds/common';


entity students:managed{
    key name:String;
    key ID : String(20);
        roll_no:Int16;
        class:String(5);
        valueCreated:String(1)
}

entity FeesDetails:managed{
    key student_id:String(20);
        fees_paid_for_current_year:Boolean;
}