import { NgModule } from "@angular/core";

import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
    imports: [
        CalendarModule,
        DropdownModule,
        InputNumberModule,
        MultiSelectModule,
        InputTextModule,
        CheckboxModule,
        RadioButtonModule,
        TableModule
    ],
    exports: [
        CalendarModule,
        DropdownModule,
        InputNumberModule,
        MultiSelectModule,
        InputTextModule,
        CheckboxModule,
        RadioButtonModule,
        TableModule
    ]
})

export class PrimeNgModule {}