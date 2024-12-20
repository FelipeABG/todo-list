import { create } from "../utils/fluent.js";
import checkIcon from "/src/img/check.svg";

export default class {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.isDone = false;
  }

  intoNode() {
    const taskDiv = create("div").class("task").build();

    this.#attrIter().forEach((attr) => {
      const node = create("div")
        .class("task-" + attr.name)
        .content(attr.data)
        .build();

      taskDiv.appendChild(node);
    });

    return taskDiv;
  }

  intoMiniNode() {
    return create("div")
      .class("task-mini")
      .child(
        create("img").class("task-img").source(checkIcon).build(),
        create("p").content(this.title).build(),
      )
      .build();
  }

  #attrIter() {
    return [
      { name: "title", data: this.title },
      { name: "description", data: this.description },
      { name: "dueDate", data: this.dueDate },
      { name: "priority", data: this.priority },
    ];
  }
}
