import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Category } from 'src/app/models/category';
import { Descriptor } from 'src/app/models/descriptor';

@Component({
  selector: 'lwl-descriptor-view',
  templateUrl: './descriptor-view.component.html',
  styleUrls: ['./descriptor-view.component.scss']
})
export class DescriptorViewComponent implements OnInit {

  @Input() categories: Category[];
  @Input() selectedDescriptors: Descriptor[];
  @Output() selectedDescriptorsChange = new EventEmitter<Descriptor[]>();
  searchFilter = new FormControl();
  categoryFilter = new FormControl();
  
  constructor() { }

  ngOnInit() {
  }

  isSelectedDescriptor(descriptor: Descriptor): boolean {
    return this.selectedDescriptors.some(selectedDescriptor => selectedDescriptor.Id === descriptor.Id);
  }

  descriptorSelected(descriptor: Descriptor): void {
    const index = this.selectedDescriptors.findIndex(selectedDescriptor => selectedDescriptor.Id === descriptor.Id);

    if (index !== -1) this.selectedDescriptors.splice(index, 1);
    else this.selectedDescriptors.push(descriptor);

    this.selectedDescriptorsChange.emit(this.selectedDescriptors);
  }

}
