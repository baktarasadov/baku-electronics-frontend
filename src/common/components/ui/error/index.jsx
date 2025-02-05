import { AlertCircle } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "../alert";

export function Error({ children }) {
  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  );
}
