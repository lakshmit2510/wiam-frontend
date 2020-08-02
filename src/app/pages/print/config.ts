import { WorkOrderViewModalComponent } from '../../shared/work-order-view-modal/work-order-view-modal.component';
import { PartsListComponent } from '../parts-list/parts-list.component';
export const getConfig = () => {
    return {
        'work-order': {
            name: 'Work Order',
            renderComponent: WorkOrderViewModalComponent,
        },
        'parts-list': {
            name: 'Parts List',
            renderComponent: PartsListComponent,
        },
    };
};
