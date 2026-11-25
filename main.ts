// The Absurd Clause Contest — version A (picked by specialist).
// A parking clause that reads like ordinary boilerplate until the
// reassignment lands, then escalates once more at the very end.
import { mkdirSync, writeFileSync } from "node:fs";

function assembleClause(): string {
  const opener = "By using this service, you agree that";
  const grant = "your parking space may be reassigned to a goose,";
  const escalation = "including but not limited to the goose's legal heirs.";
  return [opener, grant, escalation].join(" ");
}

const clause = assembleClause().trim();
if (clause.length < 1 || clause.length > 200 || clause.includes("\n")) {
  throw new Error("Clause must be one line of 1-200 characters.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", clause, "utf8");
