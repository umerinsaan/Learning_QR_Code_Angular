import { SelectedItem } from "./SelectedItem.model";

export interface Order {
    id: string,
    selectedItems: SelectedItem[],
    total: number
}