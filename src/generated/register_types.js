// Import types from dependencies
import "my-test-package"
import "my-test-package/codegen/register_types.js"

import { TypeStore } from "@needle-tools/engine"

// Import types
import { Rotate } from "../scripts/Rotate";
import { Translate } from "../scripts/Translate";

// Register types
TypeStore.add("Rotate", Rotate);
TypeStore.add("Translate", Translate);
