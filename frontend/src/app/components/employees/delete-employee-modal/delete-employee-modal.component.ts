import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-delete-employee-modal',
    templateUrl: './delete-employee-modal.component.html',
    styleUrl: './delete-employee-modal.component.css'
})

export class DeleteEmployeeModalComponent {
    
    @Output() confirm = new EventEmitter<boolean>();

    constructor() { }

    /**
     * Emits a true value to the `confirm` event emitters when the user confirms the deletion.
     * This is called when the user clicks the "Sí, eliminar" button in the modal.
     */
    delete(): void {
        this.confirm.emit(true);
    }

    /**
     * Closes the modal without confirming the deletion.
     * 
     * Emits a false value to the `confirm` event emitters.
     * This is called when the user clicks the "Cancelar" button in the modal.
     */
    closeDialog(): void {
        this.confirm.emit(false);
    }

}
