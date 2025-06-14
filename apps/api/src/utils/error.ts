import { ContentfulStatusCode } from "hono/utils/http-status";

export const statusCode: Record<number, string> = {
  200: "OK",
  201: "CREATED",
  202: "ACCEPTED",
  204: "NO_CONTENT",
  300: "MULTIPLE_CHOICES",
  301: "MOVED_PERMANENTLY",
  302: "FOUND",
  303: "SEE_OTHER",
  304: "NOT_MODIFIED",
  307: "TEMPORARY_REDIRECT",
  400: "BAD_REQUEST",
  401: "UNAUTHORIZED",
  402: "PAYMENT_REQUIRED",
  403: "FORBIDDEN",
  404: "NOT_FOUND",
  405: "METHOD_NOT_ALLOWED",
  406: "NOT_ACCEPTABLE",
  407: "PROXY_AUTHENTICATION_REQUIRED",
  408: "REQUEST_TIMEOUT",
  409: "CONFLICT",
  410: "GONE",
  411: "LENGTH_REQUIRED",
  412: "PRECONDITION_FAILED",
  413: "PAYLOAD_TOO_LARGE",
  414: "URI_TOO_LONG",
  415: "UNSUPPORTED_MEDIA_TYPE",
  416: "RANGE_NOT_SATISFIABLE",
  417: "EXPECTATION_FAILED",
  418: "I'M_A_TEAPOT",
  421: "MISDIRECTED_REQUEST",
  422: "UNPROCESSABLE_ENTITY",
  423: "LOCKED",
  424: "FAILED_DEPENDENCY",
  425: "TOO_EARLY",
  426: "UPGRADE_REQUIRED",
  428: "PRECONDITION_REQUIRED",
  429: "TOO_MANY_REQUESTS",
  431: "REQUEST_HEADER_FIELDS_TOO_LARGE",
  451: "UNAVAILABLE_FOR_LEGAL_REASONS",
  500: "INTERNAL_SERVER_ERROR",
  501: "NOT_IMPLEMENTED",
  502: "BAD_GATEWAY",
  503: "SERVICE_UNAVAILABLE",
  504: "GATEWAY_TIMEOUT",
  505: "HTTP_VERSION_NOT_SUPPORTED",
  506: "VARIANT_ALSO_NEGOTIATES",
  507: "INSUFFICIENT_STORAGE",
  508: "LOOP_DETECTED",
  510: "NOT_EXTENDED",
  511: "NETWORK_AUTHENTICATION_REQUIRED",
};

export class AppError extends Error {
  readonly name: string;
  readonly success: boolean;
  readonly type: string;
  constructor(
    public status: ContentfulStatusCode = 500,
    public options?: { message?: string; cause?: unknown }
  ) {
    super();
    this.name = "APIError";
    this.success = false;
    this.type = statusCode[status];
    this.stack = "";
    this.cause = options?.cause;
    this.message = options?.message || "";

    Object.defineProperty(this, "options", {
      value: options,
      enumerable: false,
      writable: false,
      configurable: false,
    });
  }
}
