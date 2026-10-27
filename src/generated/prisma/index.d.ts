
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Business
 * 
 */
export type Business = $Result.DefaultSelection<Prisma.$BusinessPayload>
/**
 * Model Report
 * 
 */
export type Report = $Result.DefaultSelection<Prisma.$ReportPayload>
/**
 * Model AgentResearch
 * 
 */
export type AgentResearch = $Result.DefaultSelection<Prisma.$AgentResearchPayload>
/**
 * Model GeneratedWebsite
 * 
 */
export type GeneratedWebsite = $Result.DefaultSelection<Prisma.$GeneratedWebsitePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ReportStatus: {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED'
};

export type ReportStatus = (typeof ReportStatus)[keyof typeof ReportStatus]


export const ResearchStatus: {
  PENDING: 'PENDING',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED'
};

export type ResearchStatus = (typeof ResearchStatus)[keyof typeof ResearchStatus]


export const GeneratedWebsiteStatus: {
  PENDING: 'PENDING',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED'
};

export type GeneratedWebsiteStatus = (typeof GeneratedWebsiteStatus)[keyof typeof GeneratedWebsiteStatus]

}

export type ReportStatus = $Enums.ReportStatus

export const ReportStatus: typeof $Enums.ReportStatus

export type ResearchStatus = $Enums.ResearchStatus

export const ResearchStatus: typeof $Enums.ResearchStatus

export type GeneratedWebsiteStatus = $Enums.GeneratedWebsiteStatus

export const GeneratedWebsiteStatus: typeof $Enums.GeneratedWebsiteStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Businesses
 * const businesses = await prisma.business.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Businesses
   * const businesses = await prisma.business.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.business`: Exposes CRUD operations for the **Business** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Businesses
    * const businesses = await prisma.business.findMany()
    * ```
    */
  get business(): Prisma.BusinessDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.report`: Exposes CRUD operations for the **Report** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reports
    * const reports = await prisma.report.findMany()
    * ```
    */
  get report(): Prisma.ReportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.agentResearch`: Exposes CRUD operations for the **AgentResearch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AgentResearches
    * const agentResearches = await prisma.agentResearch.findMany()
    * ```
    */
  get agentResearch(): Prisma.AgentResearchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.generatedWebsite`: Exposes CRUD operations for the **GeneratedWebsite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GeneratedWebsites
    * const generatedWebsites = await prisma.generatedWebsite.findMany()
    * ```
    */
  get generatedWebsite(): Prisma.GeneratedWebsiteDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.1
   * Query Engine version: d1b3f377ca835d73fd50954a5e22128b9ebdd6b8
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Business: 'Business',
    Report: 'Report',
    AgentResearch: 'AgentResearch',
    GeneratedWebsite: 'GeneratedWebsite'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "business" | "report" | "agentResearch" | "generatedWebsite"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Business: {
        payload: Prisma.$BusinessPayload<ExtArgs>
        fields: Prisma.BusinessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BusinessFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BusinessFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          findFirst: {
            args: Prisma.BusinessFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BusinessFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          findMany: {
            args: Prisma.BusinessFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>[]
          }
          create: {
            args: Prisma.BusinessCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          createMany: {
            args: Prisma.BusinessCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BusinessCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>[]
          }
          delete: {
            args: Prisma.BusinessDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          update: {
            args: Prisma.BusinessUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          deleteMany: {
            args: Prisma.BusinessDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BusinessUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BusinessUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>[]
          }
          upsert: {
            args: Prisma.BusinessUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          aggregate: {
            args: Prisma.BusinessAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBusiness>
          }
          groupBy: {
            args: Prisma.BusinessGroupByArgs<ExtArgs>
            result: $Utils.Optional<BusinessGroupByOutputType>[]
          }
          count: {
            args: Prisma.BusinessCountArgs<ExtArgs>
            result: $Utils.Optional<BusinessCountAggregateOutputType> | number
          }
        }
      }
      Report: {
        payload: Prisma.$ReportPayload<ExtArgs>
        fields: Prisma.ReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findFirst: {
            args: Prisma.ReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findMany: {
            args: Prisma.ReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          create: {
            args: Prisma.ReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          createMany: {
            args: Prisma.ReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          delete: {
            args: Prisma.ReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          update: {
            args: Prisma.ReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          deleteMany: {
            args: Prisma.ReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          upsert: {
            args: Prisma.ReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          aggregate: {
            args: Prisma.ReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReport>
          }
          groupBy: {
            args: Prisma.ReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReportCountArgs<ExtArgs>
            result: $Utils.Optional<ReportCountAggregateOutputType> | number
          }
        }
      }
      AgentResearch: {
        payload: Prisma.$AgentResearchPayload<ExtArgs>
        fields: Prisma.AgentResearchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgentResearchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentResearchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgentResearchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentResearchPayload>
          }
          findFirst: {
            args: Prisma.AgentResearchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentResearchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgentResearchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentResearchPayload>
          }
          findMany: {
            args: Prisma.AgentResearchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentResearchPayload>[]
          }
          create: {
            args: Prisma.AgentResearchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentResearchPayload>
          }
          createMany: {
            args: Prisma.AgentResearchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AgentResearchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentResearchPayload>[]
          }
          delete: {
            args: Prisma.AgentResearchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentResearchPayload>
          }
          update: {
            args: Prisma.AgentResearchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentResearchPayload>
          }
          deleteMany: {
            args: Prisma.AgentResearchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AgentResearchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AgentResearchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentResearchPayload>[]
          }
          upsert: {
            args: Prisma.AgentResearchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentResearchPayload>
          }
          aggregate: {
            args: Prisma.AgentResearchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgentResearch>
          }
          groupBy: {
            args: Prisma.AgentResearchGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgentResearchGroupByOutputType>[]
          }
          count: {
            args: Prisma.AgentResearchCountArgs<ExtArgs>
            result: $Utils.Optional<AgentResearchCountAggregateOutputType> | number
          }
        }
      }
      GeneratedWebsite: {
        payload: Prisma.$GeneratedWebsitePayload<ExtArgs>
        fields: Prisma.GeneratedWebsiteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GeneratedWebsiteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedWebsitePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GeneratedWebsiteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedWebsitePayload>
          }
          findFirst: {
            args: Prisma.GeneratedWebsiteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedWebsitePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GeneratedWebsiteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedWebsitePayload>
          }
          findMany: {
            args: Prisma.GeneratedWebsiteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedWebsitePayload>[]
          }
          create: {
            args: Prisma.GeneratedWebsiteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedWebsitePayload>
          }
          createMany: {
            args: Prisma.GeneratedWebsiteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GeneratedWebsiteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedWebsitePayload>[]
          }
          delete: {
            args: Prisma.GeneratedWebsiteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedWebsitePayload>
          }
          update: {
            args: Prisma.GeneratedWebsiteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedWebsitePayload>
          }
          deleteMany: {
            args: Prisma.GeneratedWebsiteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GeneratedWebsiteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GeneratedWebsiteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedWebsitePayload>[]
          }
          upsert: {
            args: Prisma.GeneratedWebsiteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedWebsitePayload>
          }
          aggregate: {
            args: Prisma.GeneratedWebsiteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGeneratedWebsite>
          }
          groupBy: {
            args: Prisma.GeneratedWebsiteGroupByArgs<ExtArgs>
            result: $Utils.Optional<GeneratedWebsiteGroupByOutputType>[]
          }
          count: {
            args: Prisma.GeneratedWebsiteCountArgs<ExtArgs>
            result: $Utils.Optional<GeneratedWebsiteCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    business?: BusinessOmit
    report?: ReportOmit
    agentResearch?: AgentResearchOmit
    generatedWebsite?: GeneratedWebsiteOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BusinessCountOutputType
   */

  export type BusinessCountOutputType = {
    reports: number
    agentResearches: number
    generatedWebsites: number
  }

  export type BusinessCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reports?: boolean | BusinessCountOutputTypeCountReportsArgs
    agentResearches?: boolean | BusinessCountOutputTypeCountAgentResearchesArgs
    generatedWebsites?: boolean | BusinessCountOutputTypeCountGeneratedWebsitesArgs
  }

  // Custom InputTypes
  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessCountOutputType
     */
    select?: BusinessCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeCountReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
  }

  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeCountAgentResearchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgentResearchWhereInput
  }

  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeCountGeneratedWebsitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GeneratedWebsiteWhereInput
  }


  /**
   * Count Type AgentResearchCountOutputType
   */

  export type AgentResearchCountOutputType = {
    generatedWebsites: number
  }

  export type AgentResearchCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    generatedWebsites?: boolean | AgentResearchCountOutputTypeCountGeneratedWebsitesArgs
  }

  // Custom InputTypes
  /**
   * AgentResearchCountOutputType without action
   */
  export type AgentResearchCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentResearchCountOutputType
     */
    select?: AgentResearchCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AgentResearchCountOutputType without action
   */
  export type AgentResearchCountOutputTypeCountGeneratedWebsitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GeneratedWebsiteWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Business
   */

  export type AggregateBusiness = {
    _count: BusinessCountAggregateOutputType | null
    _min: BusinessMinAggregateOutputType | null
    _max: BusinessMaxAggregateOutputType | null
  }

  export type BusinessMinAggregateOutputType = {
    id: string | null
    placeId: string | null
    name: string | null
    address: string | null
    phone: string | null
    email: string | null
    website: string | null
    category: string | null
    searchedCategory: string | null
    city: string | null
    googleMapsUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BusinessMaxAggregateOutputType = {
    id: string | null
    placeId: string | null
    name: string | null
    address: string | null
    phone: string | null
    email: string | null
    website: string | null
    category: string | null
    searchedCategory: string | null
    city: string | null
    googleMapsUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BusinessCountAggregateOutputType = {
    id: number
    placeId: number
    name: number
    address: number
    phone: number
    email: number
    website: number
    category: number
    searchedCategory: number
    city: number
    googleMapsUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BusinessMinAggregateInputType = {
    id?: true
    placeId?: true
    name?: true
    address?: true
    phone?: true
    email?: true
    website?: true
    category?: true
    searchedCategory?: true
    city?: true
    googleMapsUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BusinessMaxAggregateInputType = {
    id?: true
    placeId?: true
    name?: true
    address?: true
    phone?: true
    email?: true
    website?: true
    category?: true
    searchedCategory?: true
    city?: true
    googleMapsUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BusinessCountAggregateInputType = {
    id?: true
    placeId?: true
    name?: true
    address?: true
    phone?: true
    email?: true
    website?: true
    category?: true
    searchedCategory?: true
    city?: true
    googleMapsUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BusinessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Business to aggregate.
     */
    where?: BusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businesses to fetch.
     */
    orderBy?: BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Businesses
    **/
    _count?: true | BusinessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusinessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusinessMaxAggregateInputType
  }

  export type GetBusinessAggregateType<T extends BusinessAggregateArgs> = {
        [P in keyof T & keyof AggregateBusiness]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusiness[P]>
      : GetScalarType<T[P], AggregateBusiness[P]>
  }




  export type BusinessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusinessWhereInput
    orderBy?: BusinessOrderByWithAggregationInput | BusinessOrderByWithAggregationInput[]
    by: BusinessScalarFieldEnum[] | BusinessScalarFieldEnum
    having?: BusinessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusinessCountAggregateInputType | true
    _min?: BusinessMinAggregateInputType
    _max?: BusinessMaxAggregateInputType
  }

  export type BusinessGroupByOutputType = {
    id: string
    placeId: string | null
    name: string
    address: string | null
    phone: string | null
    email: string | null
    website: string | null
    category: string | null
    searchedCategory: string | null
    city: string | null
    googleMapsUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: BusinessCountAggregateOutputType | null
    _min: BusinessMinAggregateOutputType | null
    _max: BusinessMaxAggregateOutputType | null
  }

  type GetBusinessGroupByPayload<T extends BusinessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BusinessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusinessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusinessGroupByOutputType[P]>
            : GetScalarType<T[P], BusinessGroupByOutputType[P]>
        }
      >
    >


  export type BusinessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    placeId?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    email?: boolean
    website?: boolean
    category?: boolean
    searchedCategory?: boolean
    city?: boolean
    googleMapsUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reports?: boolean | Business$reportsArgs<ExtArgs>
    agentResearches?: boolean | Business$agentResearchesArgs<ExtArgs>
    generatedWebsites?: boolean | Business$generatedWebsitesArgs<ExtArgs>
    _count?: boolean | BusinessCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["business"]>

  export type BusinessSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    placeId?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    email?: boolean
    website?: boolean
    category?: boolean
    searchedCategory?: boolean
    city?: boolean
    googleMapsUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["business"]>

  export type BusinessSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    placeId?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    email?: boolean
    website?: boolean
    category?: boolean
    searchedCategory?: boolean
    city?: boolean
    googleMapsUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["business"]>

  export type BusinessSelectScalar = {
    id?: boolean
    placeId?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    email?: boolean
    website?: boolean
    category?: boolean
    searchedCategory?: boolean
    city?: boolean
    googleMapsUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BusinessOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "placeId" | "name" | "address" | "phone" | "email" | "website" | "category" | "searchedCategory" | "city" | "googleMapsUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["business"]>
  export type BusinessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reports?: boolean | Business$reportsArgs<ExtArgs>
    agentResearches?: boolean | Business$agentResearchesArgs<ExtArgs>
    generatedWebsites?: boolean | Business$generatedWebsitesArgs<ExtArgs>
    _count?: boolean | BusinessCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BusinessIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BusinessIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BusinessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Business"
    objects: {
      reports: Prisma.$ReportPayload<ExtArgs>[]
      agentResearches: Prisma.$AgentResearchPayload<ExtArgs>[]
      generatedWebsites: Prisma.$GeneratedWebsitePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      placeId: string | null
      name: string
      address: string | null
      phone: string | null
      email: string | null
      website: string | null
      category: string | null
      searchedCategory: string | null
      city: string | null
      googleMapsUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["business"]>
    composites: {}
  }

  type BusinessGetPayload<S extends boolean | null | undefined | BusinessDefaultArgs> = $Result.GetResult<Prisma.$BusinessPayload, S>

  type BusinessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BusinessFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BusinessCountAggregateInputType | true
    }

  export interface BusinessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Business'], meta: { name: 'Business' } }
    /**
     * Find zero or one Business that matches the filter.
     * @param {BusinessFindUniqueArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BusinessFindUniqueArgs>(args: SelectSubset<T, BusinessFindUniqueArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Business that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BusinessFindUniqueOrThrowArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BusinessFindUniqueOrThrowArgs>(args: SelectSubset<T, BusinessFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Business that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessFindFirstArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BusinessFindFirstArgs>(args?: SelectSubset<T, BusinessFindFirstArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Business that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessFindFirstOrThrowArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BusinessFindFirstOrThrowArgs>(args?: SelectSubset<T, BusinessFindFirstOrThrowArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Businesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Businesses
     * const businesses = await prisma.business.findMany()
     * 
     * // Get first 10 Businesses
     * const businesses = await prisma.business.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const businessWithIdOnly = await prisma.business.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BusinessFindManyArgs>(args?: SelectSubset<T, BusinessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Business.
     * @param {BusinessCreateArgs} args - Arguments to create a Business.
     * @example
     * // Create one Business
     * const Business = await prisma.business.create({
     *   data: {
     *     // ... data to create a Business
     *   }
     * })
     * 
     */
    create<T extends BusinessCreateArgs>(args: SelectSubset<T, BusinessCreateArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Businesses.
     * @param {BusinessCreateManyArgs} args - Arguments to create many Businesses.
     * @example
     * // Create many Businesses
     * const business = await prisma.business.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BusinessCreateManyArgs>(args?: SelectSubset<T, BusinessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Businesses and returns the data saved in the database.
     * @param {BusinessCreateManyAndReturnArgs} args - Arguments to create many Businesses.
     * @example
     * // Create many Businesses
     * const business = await prisma.business.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Businesses and only return the `id`
     * const businessWithIdOnly = await prisma.business.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BusinessCreateManyAndReturnArgs>(args?: SelectSubset<T, BusinessCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Business.
     * @param {BusinessDeleteArgs} args - Arguments to delete one Business.
     * @example
     * // Delete one Business
     * const Business = await prisma.business.delete({
     *   where: {
     *     // ... filter to delete one Business
     *   }
     * })
     * 
     */
    delete<T extends BusinessDeleteArgs>(args: SelectSubset<T, BusinessDeleteArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Business.
     * @param {BusinessUpdateArgs} args - Arguments to update one Business.
     * @example
     * // Update one Business
     * const business = await prisma.business.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BusinessUpdateArgs>(args: SelectSubset<T, BusinessUpdateArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Businesses.
     * @param {BusinessDeleteManyArgs} args - Arguments to filter Businesses to delete.
     * @example
     * // Delete a few Businesses
     * const { count } = await prisma.business.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BusinessDeleteManyArgs>(args?: SelectSubset<T, BusinessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Businesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Businesses
     * const business = await prisma.business.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BusinessUpdateManyArgs>(args: SelectSubset<T, BusinessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Businesses and returns the data updated in the database.
     * @param {BusinessUpdateManyAndReturnArgs} args - Arguments to update many Businesses.
     * @example
     * // Update many Businesses
     * const business = await prisma.business.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Businesses and only return the `id`
     * const businessWithIdOnly = await prisma.business.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BusinessUpdateManyAndReturnArgs>(args: SelectSubset<T, BusinessUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Business.
     * @param {BusinessUpsertArgs} args - Arguments to update or create a Business.
     * @example
     * // Update or create a Business
     * const business = await prisma.business.upsert({
     *   create: {
     *     // ... data to create a Business
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Business we want to update
     *   }
     * })
     */
    upsert<T extends BusinessUpsertArgs>(args: SelectSubset<T, BusinessUpsertArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Businesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessCountArgs} args - Arguments to filter Businesses to count.
     * @example
     * // Count the number of Businesses
     * const count = await prisma.business.count({
     *   where: {
     *     // ... the filter for the Businesses we want to count
     *   }
     * })
    **/
    count<T extends BusinessCountArgs>(
      args?: Subset<T, BusinessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusinessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Business.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BusinessAggregateArgs>(args: Subset<T, BusinessAggregateArgs>): Prisma.PrismaPromise<GetBusinessAggregateType<T>>

    /**
     * Group by Business.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BusinessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusinessGroupByArgs['orderBy'] }
        : { orderBy?: BusinessGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BusinessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusinessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Business model
   */
  readonly fields: BusinessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Business.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BusinessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reports<T extends Business$reportsArgs<ExtArgs> = {}>(args?: Subset<T, Business$reportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    agentResearches<T extends Business$agentResearchesArgs<ExtArgs> = {}>(args?: Subset<T, Business$agentResearchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentResearchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    generatedWebsites<T extends Business$generatedWebsitesArgs<ExtArgs> = {}>(args?: Subset<T, Business$generatedWebsitesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneratedWebsitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Business model
   */
  interface BusinessFieldRefs {
    readonly id: FieldRef<"Business", 'String'>
    readonly placeId: FieldRef<"Business", 'String'>
    readonly name: FieldRef<"Business", 'String'>
    readonly address: FieldRef<"Business", 'String'>
    readonly phone: FieldRef<"Business", 'String'>
    readonly email: FieldRef<"Business", 'String'>
    readonly website: FieldRef<"Business", 'String'>
    readonly category: FieldRef<"Business", 'String'>
    readonly searchedCategory: FieldRef<"Business", 'String'>
    readonly city: FieldRef<"Business", 'String'>
    readonly googleMapsUrl: FieldRef<"Business", 'String'>
    readonly createdAt: FieldRef<"Business", 'DateTime'>
    readonly updatedAt: FieldRef<"Business", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Business findUnique
   */
  export type BusinessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Business to fetch.
     */
    where: BusinessWhereUniqueInput
  }

  /**
   * Business findUniqueOrThrow
   */
  export type BusinessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Business to fetch.
     */
    where: BusinessWhereUniqueInput
  }

  /**
   * Business findFirst
   */
  export type BusinessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Business to fetch.
     */
    where?: BusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businesses to fetch.
     */
    orderBy?: BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Businesses.
     */
    cursor?: BusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Businesses.
     */
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[]
  }

  /**
   * Business findFirstOrThrow
   */
  export type BusinessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Business to fetch.
     */
    where?: BusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businesses to fetch.
     */
    orderBy?: BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Businesses.
     */
    cursor?: BusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Businesses.
     */
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[]
  }

  /**
   * Business findMany
   */
  export type BusinessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Businesses to fetch.
     */
    where?: BusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businesses to fetch.
     */
    orderBy?: BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Businesses.
     */
    cursor?: BusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Businesses.
     */
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[]
  }

  /**
   * Business create
   */
  export type BusinessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * The data needed to create a Business.
     */
    data: XOR<BusinessCreateInput, BusinessUncheckedCreateInput>
  }

  /**
   * Business createMany
   */
  export type BusinessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Businesses.
     */
    data: BusinessCreateManyInput | BusinessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Business createManyAndReturn
   */
  export type BusinessCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * The data used to create many Businesses.
     */
    data: BusinessCreateManyInput | BusinessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Business update
   */
  export type BusinessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * The data needed to update a Business.
     */
    data: XOR<BusinessUpdateInput, BusinessUncheckedUpdateInput>
    /**
     * Choose, which Business to update.
     */
    where: BusinessWhereUniqueInput
  }

  /**
   * Business updateMany
   */
  export type BusinessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Businesses.
     */
    data: XOR<BusinessUpdateManyMutationInput, BusinessUncheckedUpdateManyInput>
    /**
     * Filter which Businesses to update
     */
    where?: BusinessWhereInput
    /**
     * Limit how many Businesses to update.
     */
    limit?: number
  }

  /**
   * Business updateManyAndReturn
   */
  export type BusinessUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * The data used to update Businesses.
     */
    data: XOR<BusinessUpdateManyMutationInput, BusinessUncheckedUpdateManyInput>
    /**
     * Filter which Businesses to update
     */
    where?: BusinessWhereInput
    /**
     * Limit how many Businesses to update.
     */
    limit?: number
  }

  /**
   * Business upsert
   */
  export type BusinessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * The filter to search for the Business to update in case it exists.
     */
    where: BusinessWhereUniqueInput
    /**
     * In case the Business found by the `where` argument doesn't exist, create a new Business with this data.
     */
    create: XOR<BusinessCreateInput, BusinessUncheckedCreateInput>
    /**
     * In case the Business was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusinessUpdateInput, BusinessUncheckedUpdateInput>
  }

  /**
   * Business delete
   */
  export type BusinessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter which Business to delete.
     */
    where: BusinessWhereUniqueInput
  }

  /**
   * Business deleteMany
   */
  export type BusinessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Businesses to delete
     */
    where?: BusinessWhereInput
    /**
     * Limit how many Businesses to delete.
     */
    limit?: number
  }

  /**
   * Business.reports
   */
  export type Business$reportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    cursor?: ReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Business.agentResearches
   */
  export type Business$agentResearchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentResearch
     */
    select?: AgentResearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentResearch
     */
    omit?: AgentResearchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentResearchInclude<ExtArgs> | null
    where?: AgentResearchWhereInput
    orderBy?: AgentResearchOrderByWithRelationInput | AgentResearchOrderByWithRelationInput[]
    cursor?: AgentResearchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AgentResearchScalarFieldEnum | AgentResearchScalarFieldEnum[]
  }

  /**
   * Business.generatedWebsites
   */
  export type Business$generatedWebsitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedWebsite
     */
    select?: GeneratedWebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedWebsite
     */
    omit?: GeneratedWebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedWebsiteInclude<ExtArgs> | null
    where?: GeneratedWebsiteWhereInput
    orderBy?: GeneratedWebsiteOrderByWithRelationInput | GeneratedWebsiteOrderByWithRelationInput[]
    cursor?: GeneratedWebsiteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GeneratedWebsiteScalarFieldEnum | GeneratedWebsiteScalarFieldEnum[]
  }

  /**
   * Business without action
   */
  export type BusinessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
  }


  /**
   * Model Report
   */

  export type AggregateReport = {
    _count: ReportCountAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  export type ReportMinAggregateOutputType = {
    id: string | null
    businessId: string | null
    status: $Enums.ReportStatus | null
    pdfUrl: string | null
    error: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReportMaxAggregateOutputType = {
    id: string | null
    businessId: string | null
    status: $Enums.ReportStatus | null
    pdfUrl: string | null
    error: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReportCountAggregateOutputType = {
    id: number
    businessId: number
    status: number
    reportData: number
    pdfUrl: number
    error: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReportMinAggregateInputType = {
    id?: true
    businessId?: true
    status?: true
    pdfUrl?: true
    error?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReportMaxAggregateInputType = {
    id?: true
    businessId?: true
    status?: true
    pdfUrl?: true
    error?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReportCountAggregateInputType = {
    id?: true
    businessId?: true
    status?: true
    reportData?: true
    pdfUrl?: true
    error?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Report to aggregate.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reports
    **/
    _count?: true | ReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReportMaxAggregateInputType
  }

  export type GetReportAggregateType<T extends ReportAggregateArgs> = {
        [P in keyof T & keyof AggregateReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReport[P]>
      : GetScalarType<T[P], AggregateReport[P]>
  }




  export type ReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithAggregationInput | ReportOrderByWithAggregationInput[]
    by: ReportScalarFieldEnum[] | ReportScalarFieldEnum
    having?: ReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportCountAggregateInputType | true
    _min?: ReportMinAggregateInputType
    _max?: ReportMaxAggregateInputType
  }

  export type ReportGroupByOutputType = {
    id: string
    businessId: string
    status: $Enums.ReportStatus
    reportData: JsonValue | null
    pdfUrl: string | null
    error: string | null
    createdAt: Date
    updatedAt: Date
    _count: ReportCountAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  type GetReportGroupByPayload<T extends ReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportGroupByOutputType[P]>
            : GetScalarType<T[P], ReportGroupByOutputType[P]>
        }
      >
    >


  export type ReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    businessId?: boolean
    status?: boolean
    reportData?: boolean
    pdfUrl?: boolean
    error?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    businessId?: boolean
    status?: boolean
    reportData?: boolean
    pdfUrl?: boolean
    error?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    businessId?: boolean
    status?: boolean
    reportData?: boolean
    pdfUrl?: boolean
    error?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectScalar = {
    id?: boolean
    businessId?: boolean
    status?: boolean
    reportData?: boolean
    pdfUrl?: boolean
    error?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "businessId" | "status" | "reportData" | "pdfUrl" | "error" | "createdAt" | "updatedAt", ExtArgs["result"]["report"]>
  export type ReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }
  export type ReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }
  export type ReportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }

  export type $ReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Report"
    objects: {
      business: Prisma.$BusinessPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      businessId: string
      status: $Enums.ReportStatus
      reportData: Prisma.JsonValue | null
      pdfUrl: string | null
      error: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["report"]>
    composites: {}
  }

  type ReportGetPayload<S extends boolean | null | undefined | ReportDefaultArgs> = $Result.GetResult<Prisma.$ReportPayload, S>

  type ReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReportCountAggregateInputType | true
    }

  export interface ReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Report'], meta: { name: 'Report' } }
    /**
     * Find zero or one Report that matches the filter.
     * @param {ReportFindUniqueArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReportFindUniqueArgs>(args: SelectSubset<T, ReportFindUniqueArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Report that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReportFindUniqueOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReportFindUniqueOrThrowArgs>(args: SelectSubset<T, ReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReportFindFirstArgs>(args?: SelectSubset<T, ReportFindFirstArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReportFindFirstOrThrowArgs>(args?: SelectSubset<T, ReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reports
     * const reports = await prisma.report.findMany()
     * 
     * // Get first 10 Reports
     * const reports = await prisma.report.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reportWithIdOnly = await prisma.report.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReportFindManyArgs>(args?: SelectSubset<T, ReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Report.
     * @param {ReportCreateArgs} args - Arguments to create a Report.
     * @example
     * // Create one Report
     * const Report = await prisma.report.create({
     *   data: {
     *     // ... data to create a Report
     *   }
     * })
     * 
     */
    create<T extends ReportCreateArgs>(args: SelectSubset<T, ReportCreateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reports.
     * @param {ReportCreateManyArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReportCreateManyArgs>(args?: SelectSubset<T, ReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reports and returns the data saved in the database.
     * @param {ReportCreateManyAndReturnArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reports and only return the `id`
     * const reportWithIdOnly = await prisma.report.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReportCreateManyAndReturnArgs>(args?: SelectSubset<T, ReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Report.
     * @param {ReportDeleteArgs} args - Arguments to delete one Report.
     * @example
     * // Delete one Report
     * const Report = await prisma.report.delete({
     *   where: {
     *     // ... filter to delete one Report
     *   }
     * })
     * 
     */
    delete<T extends ReportDeleteArgs>(args: SelectSubset<T, ReportDeleteArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Report.
     * @param {ReportUpdateArgs} args - Arguments to update one Report.
     * @example
     * // Update one Report
     * const report = await prisma.report.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReportUpdateArgs>(args: SelectSubset<T, ReportUpdateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reports.
     * @param {ReportDeleteManyArgs} args - Arguments to filter Reports to delete.
     * @example
     * // Delete a few Reports
     * const { count } = await prisma.report.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReportDeleteManyArgs>(args?: SelectSubset<T, ReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReportUpdateManyArgs>(args: SelectSubset<T, ReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports and returns the data updated in the database.
     * @param {ReportUpdateManyAndReturnArgs} args - Arguments to update many Reports.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reports and only return the `id`
     * const reportWithIdOnly = await prisma.report.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReportUpdateManyAndReturnArgs>(args: SelectSubset<T, ReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Report.
     * @param {ReportUpsertArgs} args - Arguments to update or create a Report.
     * @example
     * // Update or create a Report
     * const report = await prisma.report.upsert({
     *   create: {
     *     // ... data to create a Report
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Report we want to update
     *   }
     * })
     */
    upsert<T extends ReportUpsertArgs>(args: SelectSubset<T, ReportUpsertArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportCountArgs} args - Arguments to filter Reports to count.
     * @example
     * // Count the number of Reports
     * const count = await prisma.report.count({
     *   where: {
     *     // ... the filter for the Reports we want to count
     *   }
     * })
    **/
    count<T extends ReportCountArgs>(
      args?: Subset<T, ReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReportAggregateArgs>(args: Subset<T, ReportAggregateArgs>): Prisma.PrismaPromise<GetReportAggregateType<T>>

    /**
     * Group by Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReportGroupByArgs['orderBy'] }
        : { orderBy?: ReportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Report model
   */
  readonly fields: ReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Report.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    business<T extends BusinessDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusinessDefaultArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Report model
   */
  interface ReportFieldRefs {
    readonly id: FieldRef<"Report", 'String'>
    readonly businessId: FieldRef<"Report", 'String'>
    readonly status: FieldRef<"Report", 'ReportStatus'>
    readonly reportData: FieldRef<"Report", 'Json'>
    readonly pdfUrl: FieldRef<"Report", 'String'>
    readonly error: FieldRef<"Report", 'String'>
    readonly createdAt: FieldRef<"Report", 'DateTime'>
    readonly updatedAt: FieldRef<"Report", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Report findUnique
   */
  export type ReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findUniqueOrThrow
   */
  export type ReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findFirst
   */
  export type ReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findFirstOrThrow
   */
  export type ReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findMany
   */
  export type ReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Reports to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report create
   */
  export type ReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The data needed to create a Report.
     */
    data: XOR<ReportCreateInput, ReportUncheckedCreateInput>
  }

  /**
   * Report createMany
   */
  export type ReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reports.
     */
    data: ReportCreateManyInput | ReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Report createManyAndReturn
   */
  export type ReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * The data used to create many Reports.
     */
    data: ReportCreateManyInput | ReportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Report update
   */
  export type ReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The data needed to update a Report.
     */
    data: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
    /**
     * Choose, which Report to update.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report updateMany
   */
  export type ReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reports.
     */
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to update.
     */
    limit?: number
  }

  /**
   * Report updateManyAndReturn
   */
  export type ReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * The data used to update Reports.
     */
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Report upsert
   */
  export type ReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The filter to search for the Report to update in case it exists.
     */
    where: ReportWhereUniqueInput
    /**
     * In case the Report found by the `where` argument doesn't exist, create a new Report with this data.
     */
    create: XOR<ReportCreateInput, ReportUncheckedCreateInput>
    /**
     * In case the Report was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
  }

  /**
   * Report delete
   */
  export type ReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter which Report to delete.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report deleteMany
   */
  export type ReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reports to delete
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to delete.
     */
    limit?: number
  }

  /**
   * Report without action
   */
  export type ReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
  }


  /**
   * Model AgentResearch
   */

  export type AggregateAgentResearch = {
    _count: AgentResearchCountAggregateOutputType | null
    _min: AgentResearchMinAggregateOutputType | null
    _max: AgentResearchMaxAggregateOutputType | null
  }

  export type AgentResearchMinAggregateOutputType = {
    id: string | null
    businessId: string | null
    status: $Enums.ResearchStatus | null
    websiteExists: boolean | null
    error: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AgentResearchMaxAggregateOutputType = {
    id: string | null
    businessId: string | null
    status: $Enums.ResearchStatus | null
    websiteExists: boolean | null
    error: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AgentResearchCountAggregateOutputType = {
    id: number
    businessId: number
    status: number
    websiteExists: number
    researchData: number
    error: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AgentResearchMinAggregateInputType = {
    id?: true
    businessId?: true
    status?: true
    websiteExists?: true
    error?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AgentResearchMaxAggregateInputType = {
    id?: true
    businessId?: true
    status?: true
    websiteExists?: true
    error?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AgentResearchCountAggregateInputType = {
    id?: true
    businessId?: true
    status?: true
    websiteExists?: true
    researchData?: true
    error?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AgentResearchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AgentResearch to aggregate.
     */
    where?: AgentResearchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgentResearches to fetch.
     */
    orderBy?: AgentResearchOrderByWithRelationInput | AgentResearchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgentResearchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgentResearches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgentResearches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AgentResearches
    **/
    _count?: true | AgentResearchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgentResearchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgentResearchMaxAggregateInputType
  }

  export type GetAgentResearchAggregateType<T extends AgentResearchAggregateArgs> = {
        [P in keyof T & keyof AggregateAgentResearch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgentResearch[P]>
      : GetScalarType<T[P], AggregateAgentResearch[P]>
  }




  export type AgentResearchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgentResearchWhereInput
    orderBy?: AgentResearchOrderByWithAggregationInput | AgentResearchOrderByWithAggregationInput[]
    by: AgentResearchScalarFieldEnum[] | AgentResearchScalarFieldEnum
    having?: AgentResearchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgentResearchCountAggregateInputType | true
    _min?: AgentResearchMinAggregateInputType
    _max?: AgentResearchMaxAggregateInputType
  }

  export type AgentResearchGroupByOutputType = {
    id: string
    businessId: string
    status: $Enums.ResearchStatus
    websiteExists: boolean | null
    researchData: JsonValue | null
    error: string | null
    createdAt: Date
    updatedAt: Date
    _count: AgentResearchCountAggregateOutputType | null
    _min: AgentResearchMinAggregateOutputType | null
    _max: AgentResearchMaxAggregateOutputType | null
  }

  type GetAgentResearchGroupByPayload<T extends AgentResearchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgentResearchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgentResearchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgentResearchGroupByOutputType[P]>
            : GetScalarType<T[P], AgentResearchGroupByOutputType[P]>
        }
      >
    >


  export type AgentResearchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    businessId?: boolean
    status?: boolean
    websiteExists?: boolean
    researchData?: boolean
    error?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    generatedWebsites?: boolean | AgentResearch$generatedWebsitesArgs<ExtArgs>
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    _count?: boolean | AgentResearchCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agentResearch"]>

  export type AgentResearchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    businessId?: boolean
    status?: boolean
    websiteExists?: boolean
    researchData?: boolean
    error?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agentResearch"]>

  export type AgentResearchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    businessId?: boolean
    status?: boolean
    websiteExists?: boolean
    researchData?: boolean
    error?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agentResearch"]>

  export type AgentResearchSelectScalar = {
    id?: boolean
    businessId?: boolean
    status?: boolean
    websiteExists?: boolean
    researchData?: boolean
    error?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AgentResearchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "businessId" | "status" | "websiteExists" | "researchData" | "error" | "createdAt" | "updatedAt", ExtArgs["result"]["agentResearch"]>
  export type AgentResearchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    generatedWebsites?: boolean | AgentResearch$generatedWebsitesArgs<ExtArgs>
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    _count?: boolean | AgentResearchCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AgentResearchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }
  export type AgentResearchIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }

  export type $AgentResearchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AgentResearch"
    objects: {
      generatedWebsites: Prisma.$GeneratedWebsitePayload<ExtArgs>[]
      business: Prisma.$BusinessPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      businessId: string
      status: $Enums.ResearchStatus
      websiteExists: boolean | null
      researchData: Prisma.JsonValue | null
      error: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["agentResearch"]>
    composites: {}
  }

  type AgentResearchGetPayload<S extends boolean | null | undefined | AgentResearchDefaultArgs> = $Result.GetResult<Prisma.$AgentResearchPayload, S>

  type AgentResearchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AgentResearchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AgentResearchCountAggregateInputType | true
    }

  export interface AgentResearchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AgentResearch'], meta: { name: 'AgentResearch' } }
    /**
     * Find zero or one AgentResearch that matches the filter.
     * @param {AgentResearchFindUniqueArgs} args - Arguments to find a AgentResearch
     * @example
     * // Get one AgentResearch
     * const agentResearch = await prisma.agentResearch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AgentResearchFindUniqueArgs>(args: SelectSubset<T, AgentResearchFindUniqueArgs<ExtArgs>>): Prisma__AgentResearchClient<$Result.GetResult<Prisma.$AgentResearchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AgentResearch that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AgentResearchFindUniqueOrThrowArgs} args - Arguments to find a AgentResearch
     * @example
     * // Get one AgentResearch
     * const agentResearch = await prisma.agentResearch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AgentResearchFindUniqueOrThrowArgs>(args: SelectSubset<T, AgentResearchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AgentResearchClient<$Result.GetResult<Prisma.$AgentResearchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AgentResearch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentResearchFindFirstArgs} args - Arguments to find a AgentResearch
     * @example
     * // Get one AgentResearch
     * const agentResearch = await prisma.agentResearch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AgentResearchFindFirstArgs>(args?: SelectSubset<T, AgentResearchFindFirstArgs<ExtArgs>>): Prisma__AgentResearchClient<$Result.GetResult<Prisma.$AgentResearchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AgentResearch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentResearchFindFirstOrThrowArgs} args - Arguments to find a AgentResearch
     * @example
     * // Get one AgentResearch
     * const agentResearch = await prisma.agentResearch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AgentResearchFindFirstOrThrowArgs>(args?: SelectSubset<T, AgentResearchFindFirstOrThrowArgs<ExtArgs>>): Prisma__AgentResearchClient<$Result.GetResult<Prisma.$AgentResearchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AgentResearches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentResearchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AgentResearches
     * const agentResearches = await prisma.agentResearch.findMany()
     * 
     * // Get first 10 AgentResearches
     * const agentResearches = await prisma.agentResearch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agentResearchWithIdOnly = await prisma.agentResearch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AgentResearchFindManyArgs>(args?: SelectSubset<T, AgentResearchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentResearchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AgentResearch.
     * @param {AgentResearchCreateArgs} args - Arguments to create a AgentResearch.
     * @example
     * // Create one AgentResearch
     * const AgentResearch = await prisma.agentResearch.create({
     *   data: {
     *     // ... data to create a AgentResearch
     *   }
     * })
     * 
     */
    create<T extends AgentResearchCreateArgs>(args: SelectSubset<T, AgentResearchCreateArgs<ExtArgs>>): Prisma__AgentResearchClient<$Result.GetResult<Prisma.$AgentResearchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AgentResearches.
     * @param {AgentResearchCreateManyArgs} args - Arguments to create many AgentResearches.
     * @example
     * // Create many AgentResearches
     * const agentResearch = await prisma.agentResearch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AgentResearchCreateManyArgs>(args?: SelectSubset<T, AgentResearchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AgentResearches and returns the data saved in the database.
     * @param {AgentResearchCreateManyAndReturnArgs} args - Arguments to create many AgentResearches.
     * @example
     * // Create many AgentResearches
     * const agentResearch = await prisma.agentResearch.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AgentResearches and only return the `id`
     * const agentResearchWithIdOnly = await prisma.agentResearch.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AgentResearchCreateManyAndReturnArgs>(args?: SelectSubset<T, AgentResearchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentResearchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AgentResearch.
     * @param {AgentResearchDeleteArgs} args - Arguments to delete one AgentResearch.
     * @example
     * // Delete one AgentResearch
     * const AgentResearch = await prisma.agentResearch.delete({
     *   where: {
     *     // ... filter to delete one AgentResearch
     *   }
     * })
     * 
     */
    delete<T extends AgentResearchDeleteArgs>(args: SelectSubset<T, AgentResearchDeleteArgs<ExtArgs>>): Prisma__AgentResearchClient<$Result.GetResult<Prisma.$AgentResearchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AgentResearch.
     * @param {AgentResearchUpdateArgs} args - Arguments to update one AgentResearch.
     * @example
     * // Update one AgentResearch
     * const agentResearch = await prisma.agentResearch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AgentResearchUpdateArgs>(args: SelectSubset<T, AgentResearchUpdateArgs<ExtArgs>>): Prisma__AgentResearchClient<$Result.GetResult<Prisma.$AgentResearchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AgentResearches.
     * @param {AgentResearchDeleteManyArgs} args - Arguments to filter AgentResearches to delete.
     * @example
     * // Delete a few AgentResearches
     * const { count } = await prisma.agentResearch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AgentResearchDeleteManyArgs>(args?: SelectSubset<T, AgentResearchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AgentResearches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentResearchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AgentResearches
     * const agentResearch = await prisma.agentResearch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AgentResearchUpdateManyArgs>(args: SelectSubset<T, AgentResearchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AgentResearches and returns the data updated in the database.
     * @param {AgentResearchUpdateManyAndReturnArgs} args - Arguments to update many AgentResearches.
     * @example
     * // Update many AgentResearches
     * const agentResearch = await prisma.agentResearch.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AgentResearches and only return the `id`
     * const agentResearchWithIdOnly = await prisma.agentResearch.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AgentResearchUpdateManyAndReturnArgs>(args: SelectSubset<T, AgentResearchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentResearchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AgentResearch.
     * @param {AgentResearchUpsertArgs} args - Arguments to update or create a AgentResearch.
     * @example
     * // Update or create a AgentResearch
     * const agentResearch = await prisma.agentResearch.upsert({
     *   create: {
     *     // ... data to create a AgentResearch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AgentResearch we want to update
     *   }
     * })
     */
    upsert<T extends AgentResearchUpsertArgs>(args: SelectSubset<T, AgentResearchUpsertArgs<ExtArgs>>): Prisma__AgentResearchClient<$Result.GetResult<Prisma.$AgentResearchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AgentResearches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentResearchCountArgs} args - Arguments to filter AgentResearches to count.
     * @example
     * // Count the number of AgentResearches
     * const count = await prisma.agentResearch.count({
     *   where: {
     *     // ... the filter for the AgentResearches we want to count
     *   }
     * })
    **/
    count<T extends AgentResearchCountArgs>(
      args?: Subset<T, AgentResearchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgentResearchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AgentResearch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentResearchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AgentResearchAggregateArgs>(args: Subset<T, AgentResearchAggregateArgs>): Prisma.PrismaPromise<GetAgentResearchAggregateType<T>>

    /**
     * Group by AgentResearch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentResearchGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AgentResearchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgentResearchGroupByArgs['orderBy'] }
        : { orderBy?: AgentResearchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AgentResearchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgentResearchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AgentResearch model
   */
  readonly fields: AgentResearchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AgentResearch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgentResearchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    generatedWebsites<T extends AgentResearch$generatedWebsitesArgs<ExtArgs> = {}>(args?: Subset<T, AgentResearch$generatedWebsitesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneratedWebsitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    business<T extends BusinessDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusinessDefaultArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AgentResearch model
   */
  interface AgentResearchFieldRefs {
    readonly id: FieldRef<"AgentResearch", 'String'>
    readonly businessId: FieldRef<"AgentResearch", 'String'>
    readonly status: FieldRef<"AgentResearch", 'ResearchStatus'>
    readonly websiteExists: FieldRef<"AgentResearch", 'Boolean'>
    readonly researchData: FieldRef<"AgentResearch", 'Json'>
    readonly error: FieldRef<"AgentResearch", 'String'>
    readonly createdAt: FieldRef<"AgentResearch", 'DateTime'>
    readonly updatedAt: FieldRef<"AgentResearch", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AgentResearch findUnique
   */
  export type AgentResearchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentResearch
     */
    select?: AgentResearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentResearch
     */
    omit?: AgentResearchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentResearchInclude<ExtArgs> | null
    /**
     * Filter, which AgentResearch to fetch.
     */
    where: AgentResearchWhereUniqueInput
  }

  /**
   * AgentResearch findUniqueOrThrow
   */
  export type AgentResearchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentResearch
     */
    select?: AgentResearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentResearch
     */
    omit?: AgentResearchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentResearchInclude<ExtArgs> | null
    /**
     * Filter, which AgentResearch to fetch.
     */
    where: AgentResearchWhereUniqueInput
  }

  /**
   * AgentResearch findFirst
   */
  export type AgentResearchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentResearch
     */
    select?: AgentResearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentResearch
     */
    omit?: AgentResearchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentResearchInclude<ExtArgs> | null
    /**
     * Filter, which AgentResearch to fetch.
     */
    where?: AgentResearchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgentResearches to fetch.
     */
    orderBy?: AgentResearchOrderByWithRelationInput | AgentResearchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AgentResearches.
     */
    cursor?: AgentResearchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgentResearches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgentResearches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AgentResearches.
     */
    distinct?: AgentResearchScalarFieldEnum | AgentResearchScalarFieldEnum[]
  }

  /**
   * AgentResearch findFirstOrThrow
   */
  export type AgentResearchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentResearch
     */
    select?: AgentResearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentResearch
     */
    omit?: AgentResearchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentResearchInclude<ExtArgs> | null
    /**
     * Filter, which AgentResearch to fetch.
     */
    where?: AgentResearchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgentResearches to fetch.
     */
    orderBy?: AgentResearchOrderByWithRelationInput | AgentResearchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AgentResearches.
     */
    cursor?: AgentResearchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgentResearches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgentResearches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AgentResearches.
     */
    distinct?: AgentResearchScalarFieldEnum | AgentResearchScalarFieldEnum[]
  }

  /**
   * AgentResearch findMany
   */
  export type AgentResearchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentResearch
     */
    select?: AgentResearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentResearch
     */
    omit?: AgentResearchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentResearchInclude<ExtArgs> | null
    /**
     * Filter, which AgentResearches to fetch.
     */
    where?: AgentResearchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgentResearches to fetch.
     */
    orderBy?: AgentResearchOrderByWithRelationInput | AgentResearchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AgentResearches.
     */
    cursor?: AgentResearchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgentResearches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgentResearches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AgentResearches.
     */
    distinct?: AgentResearchScalarFieldEnum | AgentResearchScalarFieldEnum[]
  }

  /**
   * AgentResearch create
   */
  export type AgentResearchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentResearch
     */
    select?: AgentResearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentResearch
     */
    omit?: AgentResearchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentResearchInclude<ExtArgs> | null
    /**
     * The data needed to create a AgentResearch.
     */
    data: XOR<AgentResearchCreateInput, AgentResearchUncheckedCreateInput>
  }

  /**
   * AgentResearch createMany
   */
  export type AgentResearchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AgentResearches.
     */
    data: AgentResearchCreateManyInput | AgentResearchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AgentResearch createManyAndReturn
   */
  export type AgentResearchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentResearch
     */
    select?: AgentResearchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AgentResearch
     */
    omit?: AgentResearchOmit<ExtArgs> | null
    /**
     * The data used to create many AgentResearches.
     */
    data: AgentResearchCreateManyInput | AgentResearchCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentResearchIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AgentResearch update
   */
  export type AgentResearchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentResearch
     */
    select?: AgentResearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentResearch
     */
    omit?: AgentResearchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentResearchInclude<ExtArgs> | null
    /**
     * The data needed to update a AgentResearch.
     */
    data: XOR<AgentResearchUpdateInput, AgentResearchUncheckedUpdateInput>
    /**
     * Choose, which AgentResearch to update.
     */
    where: AgentResearchWhereUniqueInput
  }

  /**
   * AgentResearch updateMany
   */
  export type AgentResearchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AgentResearches.
     */
    data: XOR<AgentResearchUpdateManyMutationInput, AgentResearchUncheckedUpdateManyInput>
    /**
     * Filter which AgentResearches to update
     */
    where?: AgentResearchWhereInput
    /**
     * Limit how many AgentResearches to update.
     */
    limit?: number
  }

  /**
   * AgentResearch updateManyAndReturn
   */
  export type AgentResearchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentResearch
     */
    select?: AgentResearchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AgentResearch
     */
    omit?: AgentResearchOmit<ExtArgs> | null
    /**
     * The data used to update AgentResearches.
     */
    data: XOR<AgentResearchUpdateManyMutationInput, AgentResearchUncheckedUpdateManyInput>
    /**
     * Filter which AgentResearches to update
     */
    where?: AgentResearchWhereInput
    /**
     * Limit how many AgentResearches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentResearchIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AgentResearch upsert
   */
  export type AgentResearchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentResearch
     */
    select?: AgentResearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentResearch
     */
    omit?: AgentResearchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentResearchInclude<ExtArgs> | null
    /**
     * The filter to search for the AgentResearch to update in case it exists.
     */
    where: AgentResearchWhereUniqueInput
    /**
     * In case the AgentResearch found by the `where` argument doesn't exist, create a new AgentResearch with this data.
     */
    create: XOR<AgentResearchCreateInput, AgentResearchUncheckedCreateInput>
    /**
     * In case the AgentResearch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgentResearchUpdateInput, AgentResearchUncheckedUpdateInput>
  }

  /**
   * AgentResearch delete
   */
  export type AgentResearchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentResearch
     */
    select?: AgentResearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentResearch
     */
    omit?: AgentResearchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentResearchInclude<ExtArgs> | null
    /**
     * Filter which AgentResearch to delete.
     */
    where: AgentResearchWhereUniqueInput
  }

  /**
   * AgentResearch deleteMany
   */
  export type AgentResearchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AgentResearches to delete
     */
    where?: AgentResearchWhereInput
    /**
     * Limit how many AgentResearches to delete.
     */
    limit?: number
  }

  /**
   * AgentResearch.generatedWebsites
   */
  export type AgentResearch$generatedWebsitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedWebsite
     */
    select?: GeneratedWebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedWebsite
     */
    omit?: GeneratedWebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedWebsiteInclude<ExtArgs> | null
    where?: GeneratedWebsiteWhereInput
    orderBy?: GeneratedWebsiteOrderByWithRelationInput | GeneratedWebsiteOrderByWithRelationInput[]
    cursor?: GeneratedWebsiteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GeneratedWebsiteScalarFieldEnum | GeneratedWebsiteScalarFieldEnum[]
  }

  /**
   * AgentResearch without action
   */
  export type AgentResearchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentResearch
     */
    select?: AgentResearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentResearch
     */
    omit?: AgentResearchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentResearchInclude<ExtArgs> | null
  }


  /**
   * Model GeneratedWebsite
   */

  export type AggregateGeneratedWebsite = {
    _count: GeneratedWebsiteCountAggregateOutputType | null
    _min: GeneratedWebsiteMinAggregateOutputType | null
    _max: GeneratedWebsiteMaxAggregateOutputType | null
  }

  export type GeneratedWebsiteMinAggregateOutputType = {
    id: string | null
    businessId: string | null
    researchId: string | null
    status: $Enums.GeneratedWebsiteStatus | null
    websitePath: string | null
    previewHtml: string | null
    summary: string | null
    error: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deploymentUrl: string | null
    vercelDeploymentId: string | null
    deploymentStatus: string | null
    deployedAt: Date | null
  }

  export type GeneratedWebsiteMaxAggregateOutputType = {
    id: string | null
    businessId: string | null
    researchId: string | null
    status: $Enums.GeneratedWebsiteStatus | null
    websitePath: string | null
    previewHtml: string | null
    summary: string | null
    error: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deploymentUrl: string | null
    vercelDeploymentId: string | null
    deploymentStatus: string | null
    deployedAt: Date | null
  }

  export type GeneratedWebsiteCountAggregateOutputType = {
    id: number
    businessId: number
    researchId: number
    status: number
    websitePath: number
    files: number
    previewHtml: number
    summary: number
    error: number
    createdAt: number
    updatedAt: number
    deploymentUrl: number
    vercelDeploymentId: number
    deploymentStatus: number
    deployedAt: number
    _all: number
  }


  export type GeneratedWebsiteMinAggregateInputType = {
    id?: true
    businessId?: true
    researchId?: true
    status?: true
    websitePath?: true
    previewHtml?: true
    summary?: true
    error?: true
    createdAt?: true
    updatedAt?: true
    deploymentUrl?: true
    vercelDeploymentId?: true
    deploymentStatus?: true
    deployedAt?: true
  }

  export type GeneratedWebsiteMaxAggregateInputType = {
    id?: true
    businessId?: true
    researchId?: true
    status?: true
    websitePath?: true
    previewHtml?: true
    summary?: true
    error?: true
    createdAt?: true
    updatedAt?: true
    deploymentUrl?: true
    vercelDeploymentId?: true
    deploymentStatus?: true
    deployedAt?: true
  }

  export type GeneratedWebsiteCountAggregateInputType = {
    id?: true
    businessId?: true
    researchId?: true
    status?: true
    websitePath?: true
    files?: true
    previewHtml?: true
    summary?: true
    error?: true
    createdAt?: true
    updatedAt?: true
    deploymentUrl?: true
    vercelDeploymentId?: true
    deploymentStatus?: true
    deployedAt?: true
    _all?: true
  }

  export type GeneratedWebsiteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GeneratedWebsite to aggregate.
     */
    where?: GeneratedWebsiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneratedWebsites to fetch.
     */
    orderBy?: GeneratedWebsiteOrderByWithRelationInput | GeneratedWebsiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GeneratedWebsiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneratedWebsites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneratedWebsites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GeneratedWebsites
    **/
    _count?: true | GeneratedWebsiteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GeneratedWebsiteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GeneratedWebsiteMaxAggregateInputType
  }

  export type GetGeneratedWebsiteAggregateType<T extends GeneratedWebsiteAggregateArgs> = {
        [P in keyof T & keyof AggregateGeneratedWebsite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGeneratedWebsite[P]>
      : GetScalarType<T[P], AggregateGeneratedWebsite[P]>
  }




  export type GeneratedWebsiteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GeneratedWebsiteWhereInput
    orderBy?: GeneratedWebsiteOrderByWithAggregationInput | GeneratedWebsiteOrderByWithAggregationInput[]
    by: GeneratedWebsiteScalarFieldEnum[] | GeneratedWebsiteScalarFieldEnum
    having?: GeneratedWebsiteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GeneratedWebsiteCountAggregateInputType | true
    _min?: GeneratedWebsiteMinAggregateInputType
    _max?: GeneratedWebsiteMaxAggregateInputType
  }

  export type GeneratedWebsiteGroupByOutputType = {
    id: string
    businessId: string
    researchId: string | null
    status: $Enums.GeneratedWebsiteStatus
    websitePath: string
    files: JsonValue | null
    previewHtml: string | null
    summary: string | null
    error: string | null
    createdAt: Date
    updatedAt: Date
    deploymentUrl: string | null
    vercelDeploymentId: string | null
    deploymentStatus: string | null
    deployedAt: Date | null
    _count: GeneratedWebsiteCountAggregateOutputType | null
    _min: GeneratedWebsiteMinAggregateOutputType | null
    _max: GeneratedWebsiteMaxAggregateOutputType | null
  }

  type GetGeneratedWebsiteGroupByPayload<T extends GeneratedWebsiteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GeneratedWebsiteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GeneratedWebsiteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GeneratedWebsiteGroupByOutputType[P]>
            : GetScalarType<T[P], GeneratedWebsiteGroupByOutputType[P]>
        }
      >
    >


  export type GeneratedWebsiteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    businessId?: boolean
    researchId?: boolean
    status?: boolean
    websitePath?: boolean
    files?: boolean
    previewHtml?: boolean
    summary?: boolean
    error?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deploymentUrl?: boolean
    vercelDeploymentId?: boolean
    deploymentStatus?: boolean
    deployedAt?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    research?: boolean | GeneratedWebsite$researchArgs<ExtArgs>
  }, ExtArgs["result"]["generatedWebsite"]>

  export type GeneratedWebsiteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    businessId?: boolean
    researchId?: boolean
    status?: boolean
    websitePath?: boolean
    files?: boolean
    previewHtml?: boolean
    summary?: boolean
    error?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deploymentUrl?: boolean
    vercelDeploymentId?: boolean
    deploymentStatus?: boolean
    deployedAt?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    research?: boolean | GeneratedWebsite$researchArgs<ExtArgs>
  }, ExtArgs["result"]["generatedWebsite"]>

  export type GeneratedWebsiteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    businessId?: boolean
    researchId?: boolean
    status?: boolean
    websitePath?: boolean
    files?: boolean
    previewHtml?: boolean
    summary?: boolean
    error?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deploymentUrl?: boolean
    vercelDeploymentId?: boolean
    deploymentStatus?: boolean
    deployedAt?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    research?: boolean | GeneratedWebsite$researchArgs<ExtArgs>
  }, ExtArgs["result"]["generatedWebsite"]>

  export type GeneratedWebsiteSelectScalar = {
    id?: boolean
    businessId?: boolean
    researchId?: boolean
    status?: boolean
    websitePath?: boolean
    files?: boolean
    previewHtml?: boolean
    summary?: boolean
    error?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deploymentUrl?: boolean
    vercelDeploymentId?: boolean
    deploymentStatus?: boolean
    deployedAt?: boolean
  }

  export type GeneratedWebsiteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "businessId" | "researchId" | "status" | "websitePath" | "files" | "previewHtml" | "summary" | "error" | "createdAt" | "updatedAt" | "deploymentUrl" | "vercelDeploymentId" | "deploymentStatus" | "deployedAt", ExtArgs["result"]["generatedWebsite"]>
  export type GeneratedWebsiteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    research?: boolean | GeneratedWebsite$researchArgs<ExtArgs>
  }
  export type GeneratedWebsiteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    research?: boolean | GeneratedWebsite$researchArgs<ExtArgs>
  }
  export type GeneratedWebsiteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    research?: boolean | GeneratedWebsite$researchArgs<ExtArgs>
  }

  export type $GeneratedWebsitePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GeneratedWebsite"
    objects: {
      business: Prisma.$BusinessPayload<ExtArgs>
      research: Prisma.$AgentResearchPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      businessId: string
      researchId: string | null
      status: $Enums.GeneratedWebsiteStatus
      websitePath: string
      files: Prisma.JsonValue | null
      previewHtml: string | null
      summary: string | null
      error: string | null
      createdAt: Date
      updatedAt: Date
      deploymentUrl: string | null
      vercelDeploymentId: string | null
      deploymentStatus: string | null
      deployedAt: Date | null
    }, ExtArgs["result"]["generatedWebsite"]>
    composites: {}
  }

  type GeneratedWebsiteGetPayload<S extends boolean | null | undefined | GeneratedWebsiteDefaultArgs> = $Result.GetResult<Prisma.$GeneratedWebsitePayload, S>

  type GeneratedWebsiteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GeneratedWebsiteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GeneratedWebsiteCountAggregateInputType | true
    }

  export interface GeneratedWebsiteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GeneratedWebsite'], meta: { name: 'GeneratedWebsite' } }
    /**
     * Find zero or one GeneratedWebsite that matches the filter.
     * @param {GeneratedWebsiteFindUniqueArgs} args - Arguments to find a GeneratedWebsite
     * @example
     * // Get one GeneratedWebsite
     * const generatedWebsite = await prisma.generatedWebsite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GeneratedWebsiteFindUniqueArgs>(args: SelectSubset<T, GeneratedWebsiteFindUniqueArgs<ExtArgs>>): Prisma__GeneratedWebsiteClient<$Result.GetResult<Prisma.$GeneratedWebsitePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GeneratedWebsite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GeneratedWebsiteFindUniqueOrThrowArgs} args - Arguments to find a GeneratedWebsite
     * @example
     * // Get one GeneratedWebsite
     * const generatedWebsite = await prisma.generatedWebsite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GeneratedWebsiteFindUniqueOrThrowArgs>(args: SelectSubset<T, GeneratedWebsiteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GeneratedWebsiteClient<$Result.GetResult<Prisma.$GeneratedWebsitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GeneratedWebsite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedWebsiteFindFirstArgs} args - Arguments to find a GeneratedWebsite
     * @example
     * // Get one GeneratedWebsite
     * const generatedWebsite = await prisma.generatedWebsite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GeneratedWebsiteFindFirstArgs>(args?: SelectSubset<T, GeneratedWebsiteFindFirstArgs<ExtArgs>>): Prisma__GeneratedWebsiteClient<$Result.GetResult<Prisma.$GeneratedWebsitePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GeneratedWebsite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedWebsiteFindFirstOrThrowArgs} args - Arguments to find a GeneratedWebsite
     * @example
     * // Get one GeneratedWebsite
     * const generatedWebsite = await prisma.generatedWebsite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GeneratedWebsiteFindFirstOrThrowArgs>(args?: SelectSubset<T, GeneratedWebsiteFindFirstOrThrowArgs<ExtArgs>>): Prisma__GeneratedWebsiteClient<$Result.GetResult<Prisma.$GeneratedWebsitePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GeneratedWebsites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedWebsiteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GeneratedWebsites
     * const generatedWebsites = await prisma.generatedWebsite.findMany()
     * 
     * // Get first 10 GeneratedWebsites
     * const generatedWebsites = await prisma.generatedWebsite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const generatedWebsiteWithIdOnly = await prisma.generatedWebsite.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GeneratedWebsiteFindManyArgs>(args?: SelectSubset<T, GeneratedWebsiteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneratedWebsitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GeneratedWebsite.
     * @param {GeneratedWebsiteCreateArgs} args - Arguments to create a GeneratedWebsite.
     * @example
     * // Create one GeneratedWebsite
     * const GeneratedWebsite = await prisma.generatedWebsite.create({
     *   data: {
     *     // ... data to create a GeneratedWebsite
     *   }
     * })
     * 
     */
    create<T extends GeneratedWebsiteCreateArgs>(args: SelectSubset<T, GeneratedWebsiteCreateArgs<ExtArgs>>): Prisma__GeneratedWebsiteClient<$Result.GetResult<Prisma.$GeneratedWebsitePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GeneratedWebsites.
     * @param {GeneratedWebsiteCreateManyArgs} args - Arguments to create many GeneratedWebsites.
     * @example
     * // Create many GeneratedWebsites
     * const generatedWebsite = await prisma.generatedWebsite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GeneratedWebsiteCreateManyArgs>(args?: SelectSubset<T, GeneratedWebsiteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GeneratedWebsites and returns the data saved in the database.
     * @param {GeneratedWebsiteCreateManyAndReturnArgs} args - Arguments to create many GeneratedWebsites.
     * @example
     * // Create many GeneratedWebsites
     * const generatedWebsite = await prisma.generatedWebsite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GeneratedWebsites and only return the `id`
     * const generatedWebsiteWithIdOnly = await prisma.generatedWebsite.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GeneratedWebsiteCreateManyAndReturnArgs>(args?: SelectSubset<T, GeneratedWebsiteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneratedWebsitePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GeneratedWebsite.
     * @param {GeneratedWebsiteDeleteArgs} args - Arguments to delete one GeneratedWebsite.
     * @example
     * // Delete one GeneratedWebsite
     * const GeneratedWebsite = await prisma.generatedWebsite.delete({
     *   where: {
     *     // ... filter to delete one GeneratedWebsite
     *   }
     * })
     * 
     */
    delete<T extends GeneratedWebsiteDeleteArgs>(args: SelectSubset<T, GeneratedWebsiteDeleteArgs<ExtArgs>>): Prisma__GeneratedWebsiteClient<$Result.GetResult<Prisma.$GeneratedWebsitePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GeneratedWebsite.
     * @param {GeneratedWebsiteUpdateArgs} args - Arguments to update one GeneratedWebsite.
     * @example
     * // Update one GeneratedWebsite
     * const generatedWebsite = await prisma.generatedWebsite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GeneratedWebsiteUpdateArgs>(args: SelectSubset<T, GeneratedWebsiteUpdateArgs<ExtArgs>>): Prisma__GeneratedWebsiteClient<$Result.GetResult<Prisma.$GeneratedWebsitePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GeneratedWebsites.
     * @param {GeneratedWebsiteDeleteManyArgs} args - Arguments to filter GeneratedWebsites to delete.
     * @example
     * // Delete a few GeneratedWebsites
     * const { count } = await prisma.generatedWebsite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GeneratedWebsiteDeleteManyArgs>(args?: SelectSubset<T, GeneratedWebsiteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GeneratedWebsites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedWebsiteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GeneratedWebsites
     * const generatedWebsite = await prisma.generatedWebsite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GeneratedWebsiteUpdateManyArgs>(args: SelectSubset<T, GeneratedWebsiteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GeneratedWebsites and returns the data updated in the database.
     * @param {GeneratedWebsiteUpdateManyAndReturnArgs} args - Arguments to update many GeneratedWebsites.
     * @example
     * // Update many GeneratedWebsites
     * const generatedWebsite = await prisma.generatedWebsite.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GeneratedWebsites and only return the `id`
     * const generatedWebsiteWithIdOnly = await prisma.generatedWebsite.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GeneratedWebsiteUpdateManyAndReturnArgs>(args: SelectSubset<T, GeneratedWebsiteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneratedWebsitePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GeneratedWebsite.
     * @param {GeneratedWebsiteUpsertArgs} args - Arguments to update or create a GeneratedWebsite.
     * @example
     * // Update or create a GeneratedWebsite
     * const generatedWebsite = await prisma.generatedWebsite.upsert({
     *   create: {
     *     // ... data to create a GeneratedWebsite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GeneratedWebsite we want to update
     *   }
     * })
     */
    upsert<T extends GeneratedWebsiteUpsertArgs>(args: SelectSubset<T, GeneratedWebsiteUpsertArgs<ExtArgs>>): Prisma__GeneratedWebsiteClient<$Result.GetResult<Prisma.$GeneratedWebsitePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GeneratedWebsites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedWebsiteCountArgs} args - Arguments to filter GeneratedWebsites to count.
     * @example
     * // Count the number of GeneratedWebsites
     * const count = await prisma.generatedWebsite.count({
     *   where: {
     *     // ... the filter for the GeneratedWebsites we want to count
     *   }
     * })
    **/
    count<T extends GeneratedWebsiteCountArgs>(
      args?: Subset<T, GeneratedWebsiteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GeneratedWebsiteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GeneratedWebsite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedWebsiteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GeneratedWebsiteAggregateArgs>(args: Subset<T, GeneratedWebsiteAggregateArgs>): Prisma.PrismaPromise<GetGeneratedWebsiteAggregateType<T>>

    /**
     * Group by GeneratedWebsite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedWebsiteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GeneratedWebsiteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GeneratedWebsiteGroupByArgs['orderBy'] }
        : { orderBy?: GeneratedWebsiteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GeneratedWebsiteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGeneratedWebsiteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GeneratedWebsite model
   */
  readonly fields: GeneratedWebsiteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GeneratedWebsite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GeneratedWebsiteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    business<T extends BusinessDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusinessDefaultArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    research<T extends GeneratedWebsite$researchArgs<ExtArgs> = {}>(args?: Subset<T, GeneratedWebsite$researchArgs<ExtArgs>>): Prisma__AgentResearchClient<$Result.GetResult<Prisma.$AgentResearchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GeneratedWebsite model
   */
  interface GeneratedWebsiteFieldRefs {
    readonly id: FieldRef<"GeneratedWebsite", 'String'>
    readonly businessId: FieldRef<"GeneratedWebsite", 'String'>
    readonly researchId: FieldRef<"GeneratedWebsite", 'String'>
    readonly status: FieldRef<"GeneratedWebsite", 'GeneratedWebsiteStatus'>
    readonly websitePath: FieldRef<"GeneratedWebsite", 'String'>
    readonly files: FieldRef<"GeneratedWebsite", 'Json'>
    readonly previewHtml: FieldRef<"GeneratedWebsite", 'String'>
    readonly summary: FieldRef<"GeneratedWebsite", 'String'>
    readonly error: FieldRef<"GeneratedWebsite", 'String'>
    readonly createdAt: FieldRef<"GeneratedWebsite", 'DateTime'>
    readonly updatedAt: FieldRef<"GeneratedWebsite", 'DateTime'>
    readonly deploymentUrl: FieldRef<"GeneratedWebsite", 'String'>
    readonly vercelDeploymentId: FieldRef<"GeneratedWebsite", 'String'>
    readonly deploymentStatus: FieldRef<"GeneratedWebsite", 'String'>
    readonly deployedAt: FieldRef<"GeneratedWebsite", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GeneratedWebsite findUnique
   */
  export type GeneratedWebsiteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedWebsite
     */
    select?: GeneratedWebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedWebsite
     */
    omit?: GeneratedWebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedWebsiteInclude<ExtArgs> | null
    /**
     * Filter, which GeneratedWebsite to fetch.
     */
    where: GeneratedWebsiteWhereUniqueInput
  }

  /**
   * GeneratedWebsite findUniqueOrThrow
   */
  export type GeneratedWebsiteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedWebsite
     */
    select?: GeneratedWebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedWebsite
     */
    omit?: GeneratedWebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedWebsiteInclude<ExtArgs> | null
    /**
     * Filter, which GeneratedWebsite to fetch.
     */
    where: GeneratedWebsiteWhereUniqueInput
  }

  /**
   * GeneratedWebsite findFirst
   */
  export type GeneratedWebsiteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedWebsite
     */
    select?: GeneratedWebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedWebsite
     */
    omit?: GeneratedWebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedWebsiteInclude<ExtArgs> | null
    /**
     * Filter, which GeneratedWebsite to fetch.
     */
    where?: GeneratedWebsiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneratedWebsites to fetch.
     */
    orderBy?: GeneratedWebsiteOrderByWithRelationInput | GeneratedWebsiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GeneratedWebsites.
     */
    cursor?: GeneratedWebsiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneratedWebsites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneratedWebsites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GeneratedWebsites.
     */
    distinct?: GeneratedWebsiteScalarFieldEnum | GeneratedWebsiteScalarFieldEnum[]
  }

  /**
   * GeneratedWebsite findFirstOrThrow
   */
  export type GeneratedWebsiteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedWebsite
     */
    select?: GeneratedWebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedWebsite
     */
    omit?: GeneratedWebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedWebsiteInclude<ExtArgs> | null
    /**
     * Filter, which GeneratedWebsite to fetch.
     */
    where?: GeneratedWebsiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneratedWebsites to fetch.
     */
    orderBy?: GeneratedWebsiteOrderByWithRelationInput | GeneratedWebsiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GeneratedWebsites.
     */
    cursor?: GeneratedWebsiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneratedWebsites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneratedWebsites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GeneratedWebsites.
     */
    distinct?: GeneratedWebsiteScalarFieldEnum | GeneratedWebsiteScalarFieldEnum[]
  }

  /**
   * GeneratedWebsite findMany
   */
  export type GeneratedWebsiteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedWebsite
     */
    select?: GeneratedWebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedWebsite
     */
    omit?: GeneratedWebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedWebsiteInclude<ExtArgs> | null
    /**
     * Filter, which GeneratedWebsites to fetch.
     */
    where?: GeneratedWebsiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneratedWebsites to fetch.
     */
    orderBy?: GeneratedWebsiteOrderByWithRelationInput | GeneratedWebsiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GeneratedWebsites.
     */
    cursor?: GeneratedWebsiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneratedWebsites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneratedWebsites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GeneratedWebsites.
     */
    distinct?: GeneratedWebsiteScalarFieldEnum | GeneratedWebsiteScalarFieldEnum[]
  }

  /**
   * GeneratedWebsite create
   */
  export type GeneratedWebsiteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedWebsite
     */
    select?: GeneratedWebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedWebsite
     */
    omit?: GeneratedWebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedWebsiteInclude<ExtArgs> | null
    /**
     * The data needed to create a GeneratedWebsite.
     */
    data: XOR<GeneratedWebsiteCreateInput, GeneratedWebsiteUncheckedCreateInput>
  }

  /**
   * GeneratedWebsite createMany
   */
  export type GeneratedWebsiteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GeneratedWebsites.
     */
    data: GeneratedWebsiteCreateManyInput | GeneratedWebsiteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GeneratedWebsite createManyAndReturn
   */
  export type GeneratedWebsiteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedWebsite
     */
    select?: GeneratedWebsiteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedWebsite
     */
    omit?: GeneratedWebsiteOmit<ExtArgs> | null
    /**
     * The data used to create many GeneratedWebsites.
     */
    data: GeneratedWebsiteCreateManyInput | GeneratedWebsiteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedWebsiteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GeneratedWebsite update
   */
  export type GeneratedWebsiteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedWebsite
     */
    select?: GeneratedWebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedWebsite
     */
    omit?: GeneratedWebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedWebsiteInclude<ExtArgs> | null
    /**
     * The data needed to update a GeneratedWebsite.
     */
    data: XOR<GeneratedWebsiteUpdateInput, GeneratedWebsiteUncheckedUpdateInput>
    /**
     * Choose, which GeneratedWebsite to update.
     */
    where: GeneratedWebsiteWhereUniqueInput
  }

  /**
   * GeneratedWebsite updateMany
   */
  export type GeneratedWebsiteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GeneratedWebsites.
     */
    data: XOR<GeneratedWebsiteUpdateManyMutationInput, GeneratedWebsiteUncheckedUpdateManyInput>
    /**
     * Filter which GeneratedWebsites to update
     */
    where?: GeneratedWebsiteWhereInput
    /**
     * Limit how many GeneratedWebsites to update.
     */
    limit?: number
  }

  /**
   * GeneratedWebsite updateManyAndReturn
   */
  export type GeneratedWebsiteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedWebsite
     */
    select?: GeneratedWebsiteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedWebsite
     */
    omit?: GeneratedWebsiteOmit<ExtArgs> | null
    /**
     * The data used to update GeneratedWebsites.
     */
    data: XOR<GeneratedWebsiteUpdateManyMutationInput, GeneratedWebsiteUncheckedUpdateManyInput>
    /**
     * Filter which GeneratedWebsites to update
     */
    where?: GeneratedWebsiteWhereInput
    /**
     * Limit how many GeneratedWebsites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedWebsiteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GeneratedWebsite upsert
   */
  export type GeneratedWebsiteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedWebsite
     */
    select?: GeneratedWebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedWebsite
     */
    omit?: GeneratedWebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedWebsiteInclude<ExtArgs> | null
    /**
     * The filter to search for the GeneratedWebsite to update in case it exists.
     */
    where: GeneratedWebsiteWhereUniqueInput
    /**
     * In case the GeneratedWebsite found by the `where` argument doesn't exist, create a new GeneratedWebsite with this data.
     */
    create: XOR<GeneratedWebsiteCreateInput, GeneratedWebsiteUncheckedCreateInput>
    /**
     * In case the GeneratedWebsite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GeneratedWebsiteUpdateInput, GeneratedWebsiteUncheckedUpdateInput>
  }

  /**
   * GeneratedWebsite delete
   */
  export type GeneratedWebsiteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedWebsite
     */
    select?: GeneratedWebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedWebsite
     */
    omit?: GeneratedWebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedWebsiteInclude<ExtArgs> | null
    /**
     * Filter which GeneratedWebsite to delete.
     */
    where: GeneratedWebsiteWhereUniqueInput
  }

  /**
   * GeneratedWebsite deleteMany
   */
  export type GeneratedWebsiteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GeneratedWebsites to delete
     */
    where?: GeneratedWebsiteWhereInput
    /**
     * Limit how many GeneratedWebsites to delete.
     */
    limit?: number
  }

  /**
   * GeneratedWebsite.research
   */
  export type GeneratedWebsite$researchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentResearch
     */
    select?: AgentResearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentResearch
     */
    omit?: AgentResearchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentResearchInclude<ExtArgs> | null
    where?: AgentResearchWhereInput
  }

  /**
   * GeneratedWebsite without action
   */
  export type GeneratedWebsiteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedWebsite
     */
    select?: GeneratedWebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedWebsite
     */
    omit?: GeneratedWebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedWebsiteInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BusinessScalarFieldEnum: {
    id: 'id',
    placeId: 'placeId',
    name: 'name',
    address: 'address',
    phone: 'phone',
    email: 'email',
    website: 'website',
    category: 'category',
    searchedCategory: 'searchedCategory',
    city: 'city',
    googleMapsUrl: 'googleMapsUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BusinessScalarFieldEnum = (typeof BusinessScalarFieldEnum)[keyof typeof BusinessScalarFieldEnum]


  export const ReportScalarFieldEnum: {
    id: 'id',
    businessId: 'businessId',
    status: 'status',
    reportData: 'reportData',
    pdfUrl: 'pdfUrl',
    error: 'error',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReportScalarFieldEnum = (typeof ReportScalarFieldEnum)[keyof typeof ReportScalarFieldEnum]


  export const AgentResearchScalarFieldEnum: {
    id: 'id',
    businessId: 'businessId',
    status: 'status',
    websiteExists: 'websiteExists',
    researchData: 'researchData',
    error: 'error',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AgentResearchScalarFieldEnum = (typeof AgentResearchScalarFieldEnum)[keyof typeof AgentResearchScalarFieldEnum]


  export const GeneratedWebsiteScalarFieldEnum: {
    id: 'id',
    businessId: 'businessId',
    researchId: 'researchId',
    status: 'status',
    websitePath: 'websitePath',
    files: 'files',
    previewHtml: 'previewHtml',
    summary: 'summary',
    error: 'error',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deploymentUrl: 'deploymentUrl',
    vercelDeploymentId: 'vercelDeploymentId',
    deploymentStatus: 'deploymentStatus',
    deployedAt: 'deployedAt'
  };

  export type GeneratedWebsiteScalarFieldEnum = (typeof GeneratedWebsiteScalarFieldEnum)[keyof typeof GeneratedWebsiteScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ReportStatus'
   */
  export type EnumReportStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReportStatus'>
    


  /**
   * Reference to a field of type 'ReportStatus[]'
   */
  export type ListEnumReportStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReportStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'ResearchStatus'
   */
  export type EnumResearchStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ResearchStatus'>
    


  /**
   * Reference to a field of type 'ResearchStatus[]'
   */
  export type ListEnumResearchStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ResearchStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'GeneratedWebsiteStatus'
   */
  export type EnumGeneratedWebsiteStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GeneratedWebsiteStatus'>
    


  /**
   * Reference to a field of type 'GeneratedWebsiteStatus[]'
   */
  export type ListEnumGeneratedWebsiteStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GeneratedWebsiteStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type BusinessWhereInput = {
    AND?: BusinessWhereInput | BusinessWhereInput[]
    OR?: BusinessWhereInput[]
    NOT?: BusinessWhereInput | BusinessWhereInput[]
    id?: StringFilter<"Business"> | string
    placeId?: StringNullableFilter<"Business"> | string | null
    name?: StringFilter<"Business"> | string
    address?: StringNullableFilter<"Business"> | string | null
    phone?: StringNullableFilter<"Business"> | string | null
    email?: StringNullableFilter<"Business"> | string | null
    website?: StringNullableFilter<"Business"> | string | null
    category?: StringNullableFilter<"Business"> | string | null
    searchedCategory?: StringNullableFilter<"Business"> | string | null
    city?: StringNullableFilter<"Business"> | string | null
    googleMapsUrl?: StringNullableFilter<"Business"> | string | null
    createdAt?: DateTimeFilter<"Business"> | Date | string
    updatedAt?: DateTimeFilter<"Business"> | Date | string
    reports?: ReportListRelationFilter
    agentResearches?: AgentResearchListRelationFilter
    generatedWebsites?: GeneratedWebsiteListRelationFilter
  }

  export type BusinessOrderByWithRelationInput = {
    id?: SortOrder
    placeId?: SortOrderInput | SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    searchedCategory?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    googleMapsUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reports?: ReportOrderByRelationAggregateInput
    agentResearches?: AgentResearchOrderByRelationAggregateInput
    generatedWebsites?: GeneratedWebsiteOrderByRelationAggregateInput
  }

  export type BusinessWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    placeId?: string
    AND?: BusinessWhereInput | BusinessWhereInput[]
    OR?: BusinessWhereInput[]
    NOT?: BusinessWhereInput | BusinessWhereInput[]
    name?: StringFilter<"Business"> | string
    address?: StringNullableFilter<"Business"> | string | null
    phone?: StringNullableFilter<"Business"> | string | null
    email?: StringNullableFilter<"Business"> | string | null
    website?: StringNullableFilter<"Business"> | string | null
    category?: StringNullableFilter<"Business"> | string | null
    searchedCategory?: StringNullableFilter<"Business"> | string | null
    city?: StringNullableFilter<"Business"> | string | null
    googleMapsUrl?: StringNullableFilter<"Business"> | string | null
    createdAt?: DateTimeFilter<"Business"> | Date | string
    updatedAt?: DateTimeFilter<"Business"> | Date | string
    reports?: ReportListRelationFilter
    agentResearches?: AgentResearchListRelationFilter
    generatedWebsites?: GeneratedWebsiteListRelationFilter
  }, "id" | "placeId">

  export type BusinessOrderByWithAggregationInput = {
    id?: SortOrder
    placeId?: SortOrderInput | SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    searchedCategory?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    googleMapsUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BusinessCountOrderByAggregateInput
    _max?: BusinessMaxOrderByAggregateInput
    _min?: BusinessMinOrderByAggregateInput
  }

  export type BusinessScalarWhereWithAggregatesInput = {
    AND?: BusinessScalarWhereWithAggregatesInput | BusinessScalarWhereWithAggregatesInput[]
    OR?: BusinessScalarWhereWithAggregatesInput[]
    NOT?: BusinessScalarWhereWithAggregatesInput | BusinessScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Business"> | string
    placeId?: StringNullableWithAggregatesFilter<"Business"> | string | null
    name?: StringWithAggregatesFilter<"Business"> | string
    address?: StringNullableWithAggregatesFilter<"Business"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Business"> | string | null
    email?: StringNullableWithAggregatesFilter<"Business"> | string | null
    website?: StringNullableWithAggregatesFilter<"Business"> | string | null
    category?: StringNullableWithAggregatesFilter<"Business"> | string | null
    searchedCategory?: StringNullableWithAggregatesFilter<"Business"> | string | null
    city?: StringNullableWithAggregatesFilter<"Business"> | string | null
    googleMapsUrl?: StringNullableWithAggregatesFilter<"Business"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Business"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Business"> | Date | string
  }

  export type ReportWhereInput = {
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    id?: StringFilter<"Report"> | string
    businessId?: StringFilter<"Report"> | string
    status?: EnumReportStatusFilter<"Report"> | $Enums.ReportStatus
    reportData?: JsonNullableFilter<"Report">
    pdfUrl?: StringNullableFilter<"Report"> | string | null
    error?: StringNullableFilter<"Report"> | string | null
    createdAt?: DateTimeFilter<"Report"> | Date | string
    updatedAt?: DateTimeFilter<"Report"> | Date | string
    business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>
  }

  export type ReportOrderByWithRelationInput = {
    id?: SortOrder
    businessId?: SortOrder
    status?: SortOrder
    reportData?: SortOrderInput | SortOrder
    pdfUrl?: SortOrderInput | SortOrder
    error?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    business?: BusinessOrderByWithRelationInput
  }

  export type ReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    businessId?: StringFilter<"Report"> | string
    status?: EnumReportStatusFilter<"Report"> | $Enums.ReportStatus
    reportData?: JsonNullableFilter<"Report">
    pdfUrl?: StringNullableFilter<"Report"> | string | null
    error?: StringNullableFilter<"Report"> | string | null
    createdAt?: DateTimeFilter<"Report"> | Date | string
    updatedAt?: DateTimeFilter<"Report"> | Date | string
    business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>
  }, "id">

  export type ReportOrderByWithAggregationInput = {
    id?: SortOrder
    businessId?: SortOrder
    status?: SortOrder
    reportData?: SortOrderInput | SortOrder
    pdfUrl?: SortOrderInput | SortOrder
    error?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReportCountOrderByAggregateInput
    _max?: ReportMaxOrderByAggregateInput
    _min?: ReportMinOrderByAggregateInput
  }

  export type ReportScalarWhereWithAggregatesInput = {
    AND?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    OR?: ReportScalarWhereWithAggregatesInput[]
    NOT?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Report"> | string
    businessId?: StringWithAggregatesFilter<"Report"> | string
    status?: EnumReportStatusWithAggregatesFilter<"Report"> | $Enums.ReportStatus
    reportData?: JsonNullableWithAggregatesFilter<"Report">
    pdfUrl?: StringNullableWithAggregatesFilter<"Report"> | string | null
    error?: StringNullableWithAggregatesFilter<"Report"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Report"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Report"> | Date | string
  }

  export type AgentResearchWhereInput = {
    AND?: AgentResearchWhereInput | AgentResearchWhereInput[]
    OR?: AgentResearchWhereInput[]
    NOT?: AgentResearchWhereInput | AgentResearchWhereInput[]
    id?: StringFilter<"AgentResearch"> | string
    businessId?: StringFilter<"AgentResearch"> | string
    status?: EnumResearchStatusFilter<"AgentResearch"> | $Enums.ResearchStatus
    websiteExists?: BoolNullableFilter<"AgentResearch"> | boolean | null
    researchData?: JsonNullableFilter<"AgentResearch">
    error?: StringNullableFilter<"AgentResearch"> | string | null
    createdAt?: DateTimeFilter<"AgentResearch"> | Date | string
    updatedAt?: DateTimeFilter<"AgentResearch"> | Date | string
    generatedWebsites?: GeneratedWebsiteListRelationFilter
    business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>
  }

  export type AgentResearchOrderByWithRelationInput = {
    id?: SortOrder
    businessId?: SortOrder
    status?: SortOrder
    websiteExists?: SortOrderInput | SortOrder
    researchData?: SortOrderInput | SortOrder
    error?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    generatedWebsites?: GeneratedWebsiteOrderByRelationAggregateInput
    business?: BusinessOrderByWithRelationInput
  }

  export type AgentResearchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AgentResearchWhereInput | AgentResearchWhereInput[]
    OR?: AgentResearchWhereInput[]
    NOT?: AgentResearchWhereInput | AgentResearchWhereInput[]
    businessId?: StringFilter<"AgentResearch"> | string
    status?: EnumResearchStatusFilter<"AgentResearch"> | $Enums.ResearchStatus
    websiteExists?: BoolNullableFilter<"AgentResearch"> | boolean | null
    researchData?: JsonNullableFilter<"AgentResearch">
    error?: StringNullableFilter<"AgentResearch"> | string | null
    createdAt?: DateTimeFilter<"AgentResearch"> | Date | string
    updatedAt?: DateTimeFilter<"AgentResearch"> | Date | string
    generatedWebsites?: GeneratedWebsiteListRelationFilter
    business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>
  }, "id">

  export type AgentResearchOrderByWithAggregationInput = {
    id?: SortOrder
    businessId?: SortOrder
    status?: SortOrder
    websiteExists?: SortOrderInput | SortOrder
    researchData?: SortOrderInput | SortOrder
    error?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AgentResearchCountOrderByAggregateInput
    _max?: AgentResearchMaxOrderByAggregateInput
    _min?: AgentResearchMinOrderByAggregateInput
  }

  export type AgentResearchScalarWhereWithAggregatesInput = {
    AND?: AgentResearchScalarWhereWithAggregatesInput | AgentResearchScalarWhereWithAggregatesInput[]
    OR?: AgentResearchScalarWhereWithAggregatesInput[]
    NOT?: AgentResearchScalarWhereWithAggregatesInput | AgentResearchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AgentResearch"> | string
    businessId?: StringWithAggregatesFilter<"AgentResearch"> | string
    status?: EnumResearchStatusWithAggregatesFilter<"AgentResearch"> | $Enums.ResearchStatus
    websiteExists?: BoolNullableWithAggregatesFilter<"AgentResearch"> | boolean | null
    researchData?: JsonNullableWithAggregatesFilter<"AgentResearch">
    error?: StringNullableWithAggregatesFilter<"AgentResearch"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AgentResearch"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AgentResearch"> | Date | string
  }

  export type GeneratedWebsiteWhereInput = {
    AND?: GeneratedWebsiteWhereInput | GeneratedWebsiteWhereInput[]
    OR?: GeneratedWebsiteWhereInput[]
    NOT?: GeneratedWebsiteWhereInput | GeneratedWebsiteWhereInput[]
    id?: StringFilter<"GeneratedWebsite"> | string
    businessId?: StringFilter<"GeneratedWebsite"> | string
    researchId?: StringNullableFilter<"GeneratedWebsite"> | string | null
    status?: EnumGeneratedWebsiteStatusFilter<"GeneratedWebsite"> | $Enums.GeneratedWebsiteStatus
    websitePath?: StringFilter<"GeneratedWebsite"> | string
    files?: JsonNullableFilter<"GeneratedWebsite">
    previewHtml?: StringNullableFilter<"GeneratedWebsite"> | string | null
    summary?: StringNullableFilter<"GeneratedWebsite"> | string | null
    error?: StringNullableFilter<"GeneratedWebsite"> | string | null
    createdAt?: DateTimeFilter<"GeneratedWebsite"> | Date | string
    updatedAt?: DateTimeFilter<"GeneratedWebsite"> | Date | string
    deploymentUrl?: StringNullableFilter<"GeneratedWebsite"> | string | null
    vercelDeploymentId?: StringNullableFilter<"GeneratedWebsite"> | string | null
    deploymentStatus?: StringNullableFilter<"GeneratedWebsite"> | string | null
    deployedAt?: DateTimeNullableFilter<"GeneratedWebsite"> | Date | string | null
    business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>
    research?: XOR<AgentResearchNullableScalarRelationFilter, AgentResearchWhereInput> | null
  }

  export type GeneratedWebsiteOrderByWithRelationInput = {
    id?: SortOrder
    businessId?: SortOrder
    researchId?: SortOrderInput | SortOrder
    status?: SortOrder
    websitePath?: SortOrder
    files?: SortOrderInput | SortOrder
    previewHtml?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    error?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deploymentUrl?: SortOrderInput | SortOrder
    vercelDeploymentId?: SortOrderInput | SortOrder
    deploymentStatus?: SortOrderInput | SortOrder
    deployedAt?: SortOrderInput | SortOrder
    business?: BusinessOrderByWithRelationInput
    research?: AgentResearchOrderByWithRelationInput
  }

  export type GeneratedWebsiteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GeneratedWebsiteWhereInput | GeneratedWebsiteWhereInput[]
    OR?: GeneratedWebsiteWhereInput[]
    NOT?: GeneratedWebsiteWhereInput | GeneratedWebsiteWhereInput[]
    businessId?: StringFilter<"GeneratedWebsite"> | string
    researchId?: StringNullableFilter<"GeneratedWebsite"> | string | null
    status?: EnumGeneratedWebsiteStatusFilter<"GeneratedWebsite"> | $Enums.GeneratedWebsiteStatus
    websitePath?: StringFilter<"GeneratedWebsite"> | string
    files?: JsonNullableFilter<"GeneratedWebsite">
    previewHtml?: StringNullableFilter<"GeneratedWebsite"> | string | null
    summary?: StringNullableFilter<"GeneratedWebsite"> | string | null
    error?: StringNullableFilter<"GeneratedWebsite"> | string | null
    createdAt?: DateTimeFilter<"GeneratedWebsite"> | Date | string
    updatedAt?: DateTimeFilter<"GeneratedWebsite"> | Date | string
    deploymentUrl?: StringNullableFilter<"GeneratedWebsite"> | string | null
    vercelDeploymentId?: StringNullableFilter<"GeneratedWebsite"> | string | null
    deploymentStatus?: StringNullableFilter<"GeneratedWebsite"> | string | null
    deployedAt?: DateTimeNullableFilter<"GeneratedWebsite"> | Date | string | null
    business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>
    research?: XOR<AgentResearchNullableScalarRelationFilter, AgentResearchWhereInput> | null
  }, "id">

  export type GeneratedWebsiteOrderByWithAggregationInput = {
    id?: SortOrder
    businessId?: SortOrder
    researchId?: SortOrderInput | SortOrder
    status?: SortOrder
    websitePath?: SortOrder
    files?: SortOrderInput | SortOrder
    previewHtml?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    error?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deploymentUrl?: SortOrderInput | SortOrder
    vercelDeploymentId?: SortOrderInput | SortOrder
    deploymentStatus?: SortOrderInput | SortOrder
    deployedAt?: SortOrderInput | SortOrder
    _count?: GeneratedWebsiteCountOrderByAggregateInput
    _max?: GeneratedWebsiteMaxOrderByAggregateInput
    _min?: GeneratedWebsiteMinOrderByAggregateInput
  }

  export type GeneratedWebsiteScalarWhereWithAggregatesInput = {
    AND?: GeneratedWebsiteScalarWhereWithAggregatesInput | GeneratedWebsiteScalarWhereWithAggregatesInput[]
    OR?: GeneratedWebsiteScalarWhereWithAggregatesInput[]
    NOT?: GeneratedWebsiteScalarWhereWithAggregatesInput | GeneratedWebsiteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GeneratedWebsite"> | string
    businessId?: StringWithAggregatesFilter<"GeneratedWebsite"> | string
    researchId?: StringNullableWithAggregatesFilter<"GeneratedWebsite"> | string | null
    status?: EnumGeneratedWebsiteStatusWithAggregatesFilter<"GeneratedWebsite"> | $Enums.GeneratedWebsiteStatus
    websitePath?: StringWithAggregatesFilter<"GeneratedWebsite"> | string
    files?: JsonNullableWithAggregatesFilter<"GeneratedWebsite">
    previewHtml?: StringNullableWithAggregatesFilter<"GeneratedWebsite"> | string | null
    summary?: StringNullableWithAggregatesFilter<"GeneratedWebsite"> | string | null
    error?: StringNullableWithAggregatesFilter<"GeneratedWebsite"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"GeneratedWebsite"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GeneratedWebsite"> | Date | string
    deploymentUrl?: StringNullableWithAggregatesFilter<"GeneratedWebsite"> | string | null
    vercelDeploymentId?: StringNullableWithAggregatesFilter<"GeneratedWebsite"> | string | null
    deploymentStatus?: StringNullableWithAggregatesFilter<"GeneratedWebsite"> | string | null
    deployedAt?: DateTimeNullableWithAggregatesFilter<"GeneratedWebsite"> | Date | string | null
  }

  export type BusinessCreateInput = {
    id?: string
    placeId?: string | null
    name: string
    address?: string | null
    phone?: string | null
    email?: string | null
    website?: string | null
    category?: string | null
    searchedCategory?: string | null
    city?: string | null
    googleMapsUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reports?: ReportCreateNestedManyWithoutBusinessInput
    agentResearches?: AgentResearchCreateNestedManyWithoutBusinessInput
    generatedWebsites?: GeneratedWebsiteCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUncheckedCreateInput = {
    id?: string
    placeId?: string | null
    name: string
    address?: string | null
    phone?: string | null
    email?: string | null
    website?: string | null
    category?: string | null
    searchedCategory?: string | null
    city?: string | null
    googleMapsUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reports?: ReportUncheckedCreateNestedManyWithoutBusinessInput
    agentResearches?: AgentResearchUncheckedCreateNestedManyWithoutBusinessInput
    generatedWebsites?: GeneratedWebsiteUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    placeId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    searchedCategory?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    googleMapsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reports?: ReportUpdateManyWithoutBusinessNestedInput
    agentResearches?: AgentResearchUpdateManyWithoutBusinessNestedInput
    generatedWebsites?: GeneratedWebsiteUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    placeId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    searchedCategory?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    googleMapsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reports?: ReportUncheckedUpdateManyWithoutBusinessNestedInput
    agentResearches?: AgentResearchUncheckedUpdateManyWithoutBusinessNestedInput
    generatedWebsites?: GeneratedWebsiteUncheckedUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessCreateManyInput = {
    id?: string
    placeId?: string | null
    name: string
    address?: string | null
    phone?: string | null
    email?: string | null
    website?: string | null
    category?: string | null
    searchedCategory?: string | null
    city?: string | null
    googleMapsUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BusinessUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    placeId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    searchedCategory?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    googleMapsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    placeId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    searchedCategory?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    googleMapsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportCreateInput = {
    id?: string
    status?: $Enums.ReportStatus
    reportData?: NullableJsonNullValueInput | InputJsonValue
    pdfUrl?: string | null
    error?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    business: BusinessCreateNestedOneWithoutReportsInput
  }

  export type ReportUncheckedCreateInput = {
    id?: string
    businessId: string
    status?: $Enums.ReportStatus
    reportData?: NullableJsonNullValueInput | InputJsonValue
    pdfUrl?: string | null
    error?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    reportData?: NullableJsonNullValueInput | InputJsonValue
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    business?: BusinessUpdateOneRequiredWithoutReportsNestedInput
  }

  export type ReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    reportData?: NullableJsonNullValueInput | InputJsonValue
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportCreateManyInput = {
    id?: string
    businessId: string
    status?: $Enums.ReportStatus
    reportData?: NullableJsonNullValueInput | InputJsonValue
    pdfUrl?: string | null
    error?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    reportData?: NullableJsonNullValueInput | InputJsonValue
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    reportData?: NullableJsonNullValueInput | InputJsonValue
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentResearchCreateInput = {
    id?: string
    status?: $Enums.ResearchStatus
    websiteExists?: boolean | null
    researchData?: NullableJsonNullValueInput | InputJsonValue
    error?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    generatedWebsites?: GeneratedWebsiteCreateNestedManyWithoutResearchInput
    business: BusinessCreateNestedOneWithoutAgentResearchesInput
  }

  export type AgentResearchUncheckedCreateInput = {
    id?: string
    businessId: string
    status?: $Enums.ResearchStatus
    websiteExists?: boolean | null
    researchData?: NullableJsonNullValueInput | InputJsonValue
    error?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    generatedWebsites?: GeneratedWebsiteUncheckedCreateNestedManyWithoutResearchInput
  }

  export type AgentResearchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumResearchStatusFieldUpdateOperationsInput | $Enums.ResearchStatus
    websiteExists?: NullableBoolFieldUpdateOperationsInput | boolean | null
    researchData?: NullableJsonNullValueInput | InputJsonValue
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    generatedWebsites?: GeneratedWebsiteUpdateManyWithoutResearchNestedInput
    business?: BusinessUpdateOneRequiredWithoutAgentResearchesNestedInput
  }

  export type AgentResearchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    status?: EnumResearchStatusFieldUpdateOperationsInput | $Enums.ResearchStatus
    websiteExists?: NullableBoolFieldUpdateOperationsInput | boolean | null
    researchData?: NullableJsonNullValueInput | InputJsonValue
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    generatedWebsites?: GeneratedWebsiteUncheckedUpdateManyWithoutResearchNestedInput
  }

  export type AgentResearchCreateManyInput = {
    id?: string
    businessId: string
    status?: $Enums.ResearchStatus
    websiteExists?: boolean | null
    researchData?: NullableJsonNullValueInput | InputJsonValue
    error?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AgentResearchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumResearchStatusFieldUpdateOperationsInput | $Enums.ResearchStatus
    websiteExists?: NullableBoolFieldUpdateOperationsInput | boolean | null
    researchData?: NullableJsonNullValueInput | InputJsonValue
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentResearchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    status?: EnumResearchStatusFieldUpdateOperationsInput | $Enums.ResearchStatus
    websiteExists?: NullableBoolFieldUpdateOperationsInput | boolean | null
    researchData?: NullableJsonNullValueInput | InputJsonValue
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneratedWebsiteCreateInput = {
    id?: string
    status?: $Enums.GeneratedWebsiteStatus
    websitePath: string
    files?: NullableJsonNullValueInput | InputJsonValue
    previewHtml?: string | null
    summary?: string | null
    error?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deploymentUrl?: string | null
    vercelDeploymentId?: string | null
    deploymentStatus?: string | null
    deployedAt?: Date | string | null
    business: BusinessCreateNestedOneWithoutGeneratedWebsitesInput
    research?: AgentResearchCreateNestedOneWithoutGeneratedWebsitesInput
  }

  export type GeneratedWebsiteUncheckedCreateInput = {
    id?: string
    businessId: string
    researchId?: string | null
    status?: $Enums.GeneratedWebsiteStatus
    websitePath: string
    files?: NullableJsonNullValueInput | InputJsonValue
    previewHtml?: string | null
    summary?: string | null
    error?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deploymentUrl?: string | null
    vercelDeploymentId?: string | null
    deploymentStatus?: string | null
    deployedAt?: Date | string | null
  }

  export type GeneratedWebsiteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumGeneratedWebsiteStatusFieldUpdateOperationsInput | $Enums.GeneratedWebsiteStatus
    websitePath?: StringFieldUpdateOperationsInput | string
    files?: NullableJsonNullValueInput | InputJsonValue
    previewHtml?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deploymentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    vercelDeploymentId?: NullableStringFieldUpdateOperationsInput | string | null
    deploymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    deployedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    business?: BusinessUpdateOneRequiredWithoutGeneratedWebsitesNestedInput
    research?: AgentResearchUpdateOneWithoutGeneratedWebsitesNestedInput
  }

  export type GeneratedWebsiteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    researchId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGeneratedWebsiteStatusFieldUpdateOperationsInput | $Enums.GeneratedWebsiteStatus
    websitePath?: StringFieldUpdateOperationsInput | string
    files?: NullableJsonNullValueInput | InputJsonValue
    previewHtml?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deploymentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    vercelDeploymentId?: NullableStringFieldUpdateOperationsInput | string | null
    deploymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    deployedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GeneratedWebsiteCreateManyInput = {
    id?: string
    businessId: string
    researchId?: string | null
    status?: $Enums.GeneratedWebsiteStatus
    websitePath: string
    files?: NullableJsonNullValueInput | InputJsonValue
    previewHtml?: string | null
    summary?: string | null
    error?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deploymentUrl?: string | null
    vercelDeploymentId?: string | null
    deploymentStatus?: string | null
    deployedAt?: Date | string | null
  }

  export type GeneratedWebsiteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumGeneratedWebsiteStatusFieldUpdateOperationsInput | $Enums.GeneratedWebsiteStatus
    websitePath?: StringFieldUpdateOperationsInput | string
    files?: NullableJsonNullValueInput | InputJsonValue
    previewHtml?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deploymentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    vercelDeploymentId?: NullableStringFieldUpdateOperationsInput | string | null
    deploymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    deployedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GeneratedWebsiteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    researchId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGeneratedWebsiteStatusFieldUpdateOperationsInput | $Enums.GeneratedWebsiteStatus
    websitePath?: StringFieldUpdateOperationsInput | string
    files?: NullableJsonNullValueInput | InputJsonValue
    previewHtml?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deploymentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    vercelDeploymentId?: NullableStringFieldUpdateOperationsInput | string | null
    deploymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    deployedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ReportListRelationFilter = {
    every?: ReportWhereInput
    some?: ReportWhereInput
    none?: ReportWhereInput
  }

  export type AgentResearchListRelationFilter = {
    every?: AgentResearchWhereInput
    some?: AgentResearchWhereInput
    none?: AgentResearchWhereInput
  }

  export type GeneratedWebsiteListRelationFilter = {
    every?: GeneratedWebsiteWhereInput
    some?: GeneratedWebsiteWhereInput
    none?: GeneratedWebsiteWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AgentResearchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GeneratedWebsiteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BusinessCountOrderByAggregateInput = {
    id?: SortOrder
    placeId?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    website?: SortOrder
    category?: SortOrder
    searchedCategory?: SortOrder
    city?: SortOrder
    googleMapsUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BusinessMaxOrderByAggregateInput = {
    id?: SortOrder
    placeId?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    website?: SortOrder
    category?: SortOrder
    searchedCategory?: SortOrder
    city?: SortOrder
    googleMapsUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BusinessMinOrderByAggregateInput = {
    id?: SortOrder
    placeId?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    website?: SortOrder
    category?: SortOrder
    searchedCategory?: SortOrder
    city?: SortOrder
    googleMapsUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumReportStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportStatus | EnumReportStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReportStatusFilter<$PrismaModel> | $Enums.ReportStatus
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BusinessScalarRelationFilter = {
    is?: BusinessWhereInput
    isNot?: BusinessWhereInput
  }

  export type ReportCountOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    status?: SortOrder
    reportData?: SortOrder
    pdfUrl?: SortOrder
    error?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReportMaxOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    status?: SortOrder
    pdfUrl?: SortOrder
    error?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReportMinOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    status?: SortOrder
    pdfUrl?: SortOrder
    error?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumReportStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportStatus | EnumReportStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReportStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReportStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReportStatusFilter<$PrismaModel>
    _max?: NestedEnumReportStatusFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumResearchStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ResearchStatus | EnumResearchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ResearchStatus[] | ListEnumResearchStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResearchStatus[] | ListEnumResearchStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumResearchStatusFilter<$PrismaModel> | $Enums.ResearchStatus
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type AgentResearchCountOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    status?: SortOrder
    websiteExists?: SortOrder
    researchData?: SortOrder
    error?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AgentResearchMaxOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    status?: SortOrder
    websiteExists?: SortOrder
    error?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AgentResearchMinOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    status?: SortOrder
    websiteExists?: SortOrder
    error?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumResearchStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ResearchStatus | EnumResearchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ResearchStatus[] | ListEnumResearchStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResearchStatus[] | ListEnumResearchStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumResearchStatusWithAggregatesFilter<$PrismaModel> | $Enums.ResearchStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumResearchStatusFilter<$PrismaModel>
    _max?: NestedEnumResearchStatusFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type EnumGeneratedWebsiteStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GeneratedWebsiteStatus | EnumGeneratedWebsiteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GeneratedWebsiteStatus[] | ListEnumGeneratedWebsiteStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GeneratedWebsiteStatus[] | ListEnumGeneratedWebsiteStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGeneratedWebsiteStatusFilter<$PrismaModel> | $Enums.GeneratedWebsiteStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AgentResearchNullableScalarRelationFilter = {
    is?: AgentResearchWhereInput | null
    isNot?: AgentResearchWhereInput | null
  }

  export type GeneratedWebsiteCountOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    researchId?: SortOrder
    status?: SortOrder
    websitePath?: SortOrder
    files?: SortOrder
    previewHtml?: SortOrder
    summary?: SortOrder
    error?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deploymentUrl?: SortOrder
    vercelDeploymentId?: SortOrder
    deploymentStatus?: SortOrder
    deployedAt?: SortOrder
  }

  export type GeneratedWebsiteMaxOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    researchId?: SortOrder
    status?: SortOrder
    websitePath?: SortOrder
    previewHtml?: SortOrder
    summary?: SortOrder
    error?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deploymentUrl?: SortOrder
    vercelDeploymentId?: SortOrder
    deploymentStatus?: SortOrder
    deployedAt?: SortOrder
  }

  export type GeneratedWebsiteMinOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    researchId?: SortOrder
    status?: SortOrder
    websitePath?: SortOrder
    previewHtml?: SortOrder
    summary?: SortOrder
    error?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deploymentUrl?: SortOrder
    vercelDeploymentId?: SortOrder
    deploymentStatus?: SortOrder
    deployedAt?: SortOrder
  }

  export type EnumGeneratedWebsiteStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GeneratedWebsiteStatus | EnumGeneratedWebsiteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GeneratedWebsiteStatus[] | ListEnumGeneratedWebsiteStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GeneratedWebsiteStatus[] | ListEnumGeneratedWebsiteStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGeneratedWebsiteStatusWithAggregatesFilter<$PrismaModel> | $Enums.GeneratedWebsiteStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGeneratedWebsiteStatusFilter<$PrismaModel>
    _max?: NestedEnumGeneratedWebsiteStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ReportCreateNestedManyWithoutBusinessInput = {
    create?: XOR<ReportCreateWithoutBusinessInput, ReportUncheckedCreateWithoutBusinessInput> | ReportCreateWithoutBusinessInput[] | ReportUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutBusinessInput | ReportCreateOrConnectWithoutBusinessInput[]
    createMany?: ReportCreateManyBusinessInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type AgentResearchCreateNestedManyWithoutBusinessInput = {
    create?: XOR<AgentResearchCreateWithoutBusinessInput, AgentResearchUncheckedCreateWithoutBusinessInput> | AgentResearchCreateWithoutBusinessInput[] | AgentResearchUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: AgentResearchCreateOrConnectWithoutBusinessInput | AgentResearchCreateOrConnectWithoutBusinessInput[]
    createMany?: AgentResearchCreateManyBusinessInputEnvelope
    connect?: AgentResearchWhereUniqueInput | AgentResearchWhereUniqueInput[]
  }

  export type GeneratedWebsiteCreateNestedManyWithoutBusinessInput = {
    create?: XOR<GeneratedWebsiteCreateWithoutBusinessInput, GeneratedWebsiteUncheckedCreateWithoutBusinessInput> | GeneratedWebsiteCreateWithoutBusinessInput[] | GeneratedWebsiteUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: GeneratedWebsiteCreateOrConnectWithoutBusinessInput | GeneratedWebsiteCreateOrConnectWithoutBusinessInput[]
    createMany?: GeneratedWebsiteCreateManyBusinessInputEnvelope
    connect?: GeneratedWebsiteWhereUniqueInput | GeneratedWebsiteWhereUniqueInput[]
  }

  export type ReportUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: XOR<ReportCreateWithoutBusinessInput, ReportUncheckedCreateWithoutBusinessInput> | ReportCreateWithoutBusinessInput[] | ReportUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutBusinessInput | ReportCreateOrConnectWithoutBusinessInput[]
    createMany?: ReportCreateManyBusinessInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type AgentResearchUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: XOR<AgentResearchCreateWithoutBusinessInput, AgentResearchUncheckedCreateWithoutBusinessInput> | AgentResearchCreateWithoutBusinessInput[] | AgentResearchUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: AgentResearchCreateOrConnectWithoutBusinessInput | AgentResearchCreateOrConnectWithoutBusinessInput[]
    createMany?: AgentResearchCreateManyBusinessInputEnvelope
    connect?: AgentResearchWhereUniqueInput | AgentResearchWhereUniqueInput[]
  }

  export type GeneratedWebsiteUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: XOR<GeneratedWebsiteCreateWithoutBusinessInput, GeneratedWebsiteUncheckedCreateWithoutBusinessInput> | GeneratedWebsiteCreateWithoutBusinessInput[] | GeneratedWebsiteUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: GeneratedWebsiteCreateOrConnectWithoutBusinessInput | GeneratedWebsiteCreateOrConnectWithoutBusinessInput[]
    createMany?: GeneratedWebsiteCreateManyBusinessInputEnvelope
    connect?: GeneratedWebsiteWhereUniqueInput | GeneratedWebsiteWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ReportUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<ReportCreateWithoutBusinessInput, ReportUncheckedCreateWithoutBusinessInput> | ReportCreateWithoutBusinessInput[] | ReportUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutBusinessInput | ReportCreateOrConnectWithoutBusinessInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutBusinessInput | ReportUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: ReportCreateManyBusinessInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutBusinessInput | ReportUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutBusinessInput | ReportUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type AgentResearchUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<AgentResearchCreateWithoutBusinessInput, AgentResearchUncheckedCreateWithoutBusinessInput> | AgentResearchCreateWithoutBusinessInput[] | AgentResearchUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: AgentResearchCreateOrConnectWithoutBusinessInput | AgentResearchCreateOrConnectWithoutBusinessInput[]
    upsert?: AgentResearchUpsertWithWhereUniqueWithoutBusinessInput | AgentResearchUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: AgentResearchCreateManyBusinessInputEnvelope
    set?: AgentResearchWhereUniqueInput | AgentResearchWhereUniqueInput[]
    disconnect?: AgentResearchWhereUniqueInput | AgentResearchWhereUniqueInput[]
    delete?: AgentResearchWhereUniqueInput | AgentResearchWhereUniqueInput[]
    connect?: AgentResearchWhereUniqueInput | AgentResearchWhereUniqueInput[]
    update?: AgentResearchUpdateWithWhereUniqueWithoutBusinessInput | AgentResearchUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: AgentResearchUpdateManyWithWhereWithoutBusinessInput | AgentResearchUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: AgentResearchScalarWhereInput | AgentResearchScalarWhereInput[]
  }

  export type GeneratedWebsiteUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<GeneratedWebsiteCreateWithoutBusinessInput, GeneratedWebsiteUncheckedCreateWithoutBusinessInput> | GeneratedWebsiteCreateWithoutBusinessInput[] | GeneratedWebsiteUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: GeneratedWebsiteCreateOrConnectWithoutBusinessInput | GeneratedWebsiteCreateOrConnectWithoutBusinessInput[]
    upsert?: GeneratedWebsiteUpsertWithWhereUniqueWithoutBusinessInput | GeneratedWebsiteUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: GeneratedWebsiteCreateManyBusinessInputEnvelope
    set?: GeneratedWebsiteWhereUniqueInput | GeneratedWebsiteWhereUniqueInput[]
    disconnect?: GeneratedWebsiteWhereUniqueInput | GeneratedWebsiteWhereUniqueInput[]
    delete?: GeneratedWebsiteWhereUniqueInput | GeneratedWebsiteWhereUniqueInput[]
    connect?: GeneratedWebsiteWhereUniqueInput | GeneratedWebsiteWhereUniqueInput[]
    update?: GeneratedWebsiteUpdateWithWhereUniqueWithoutBusinessInput | GeneratedWebsiteUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: GeneratedWebsiteUpdateManyWithWhereWithoutBusinessInput | GeneratedWebsiteUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: GeneratedWebsiteScalarWhereInput | GeneratedWebsiteScalarWhereInput[]
  }

  export type ReportUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<ReportCreateWithoutBusinessInput, ReportUncheckedCreateWithoutBusinessInput> | ReportCreateWithoutBusinessInput[] | ReportUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutBusinessInput | ReportCreateOrConnectWithoutBusinessInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutBusinessInput | ReportUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: ReportCreateManyBusinessInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutBusinessInput | ReportUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutBusinessInput | ReportUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type AgentResearchUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<AgentResearchCreateWithoutBusinessInput, AgentResearchUncheckedCreateWithoutBusinessInput> | AgentResearchCreateWithoutBusinessInput[] | AgentResearchUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: AgentResearchCreateOrConnectWithoutBusinessInput | AgentResearchCreateOrConnectWithoutBusinessInput[]
    upsert?: AgentResearchUpsertWithWhereUniqueWithoutBusinessInput | AgentResearchUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: AgentResearchCreateManyBusinessInputEnvelope
    set?: AgentResearchWhereUniqueInput | AgentResearchWhereUniqueInput[]
    disconnect?: AgentResearchWhereUniqueInput | AgentResearchWhereUniqueInput[]
    delete?: AgentResearchWhereUniqueInput | AgentResearchWhereUniqueInput[]
    connect?: AgentResearchWhereUniqueInput | AgentResearchWhereUniqueInput[]
    update?: AgentResearchUpdateWithWhereUniqueWithoutBusinessInput | AgentResearchUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: AgentResearchUpdateManyWithWhereWithoutBusinessInput | AgentResearchUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: AgentResearchScalarWhereInput | AgentResearchScalarWhereInput[]
  }

  export type GeneratedWebsiteUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<GeneratedWebsiteCreateWithoutBusinessInput, GeneratedWebsiteUncheckedCreateWithoutBusinessInput> | GeneratedWebsiteCreateWithoutBusinessInput[] | GeneratedWebsiteUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: GeneratedWebsiteCreateOrConnectWithoutBusinessInput | GeneratedWebsiteCreateOrConnectWithoutBusinessInput[]
    upsert?: GeneratedWebsiteUpsertWithWhereUniqueWithoutBusinessInput | GeneratedWebsiteUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: GeneratedWebsiteCreateManyBusinessInputEnvelope
    set?: GeneratedWebsiteWhereUniqueInput | GeneratedWebsiteWhereUniqueInput[]
    disconnect?: GeneratedWebsiteWhereUniqueInput | GeneratedWebsiteWhereUniqueInput[]
    delete?: GeneratedWebsiteWhereUniqueInput | GeneratedWebsiteWhereUniqueInput[]
    connect?: GeneratedWebsiteWhereUniqueInput | GeneratedWebsiteWhereUniqueInput[]
    update?: GeneratedWebsiteUpdateWithWhereUniqueWithoutBusinessInput | GeneratedWebsiteUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: GeneratedWebsiteUpdateManyWithWhereWithoutBusinessInput | GeneratedWebsiteUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: GeneratedWebsiteScalarWhereInput | GeneratedWebsiteScalarWhereInput[]
  }

  export type BusinessCreateNestedOneWithoutReportsInput = {
    create?: XOR<BusinessCreateWithoutReportsInput, BusinessUncheckedCreateWithoutReportsInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutReportsInput
    connect?: BusinessWhereUniqueInput
  }

  export type EnumReportStatusFieldUpdateOperationsInput = {
    set?: $Enums.ReportStatus
  }

  export type BusinessUpdateOneRequiredWithoutReportsNestedInput = {
    create?: XOR<BusinessCreateWithoutReportsInput, BusinessUncheckedCreateWithoutReportsInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutReportsInput
    upsert?: BusinessUpsertWithoutReportsInput
    connect?: BusinessWhereUniqueInput
    update?: XOR<XOR<BusinessUpdateToOneWithWhereWithoutReportsInput, BusinessUpdateWithoutReportsInput>, BusinessUncheckedUpdateWithoutReportsInput>
  }

  export type GeneratedWebsiteCreateNestedManyWithoutResearchInput = {
    create?: XOR<GeneratedWebsiteCreateWithoutResearchInput, GeneratedWebsiteUncheckedCreateWithoutResearchInput> | GeneratedWebsiteCreateWithoutResearchInput[] | GeneratedWebsiteUncheckedCreateWithoutResearchInput[]
    connectOrCreate?: GeneratedWebsiteCreateOrConnectWithoutResearchInput | GeneratedWebsiteCreateOrConnectWithoutResearchInput[]
    createMany?: GeneratedWebsiteCreateManyResearchInputEnvelope
    connect?: GeneratedWebsiteWhereUniqueInput | GeneratedWebsiteWhereUniqueInput[]
  }

  export type BusinessCreateNestedOneWithoutAgentResearchesInput = {
    create?: XOR<BusinessCreateWithoutAgentResearchesInput, BusinessUncheckedCreateWithoutAgentResearchesInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutAgentResearchesInput
    connect?: BusinessWhereUniqueInput
  }

  export type GeneratedWebsiteUncheckedCreateNestedManyWithoutResearchInput = {
    create?: XOR<GeneratedWebsiteCreateWithoutResearchInput, GeneratedWebsiteUncheckedCreateWithoutResearchInput> | GeneratedWebsiteCreateWithoutResearchInput[] | GeneratedWebsiteUncheckedCreateWithoutResearchInput[]
    connectOrCreate?: GeneratedWebsiteCreateOrConnectWithoutResearchInput | GeneratedWebsiteCreateOrConnectWithoutResearchInput[]
    createMany?: GeneratedWebsiteCreateManyResearchInputEnvelope
    connect?: GeneratedWebsiteWhereUniqueInput | GeneratedWebsiteWhereUniqueInput[]
  }

  export type EnumResearchStatusFieldUpdateOperationsInput = {
    set?: $Enums.ResearchStatus
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type GeneratedWebsiteUpdateManyWithoutResearchNestedInput = {
    create?: XOR<GeneratedWebsiteCreateWithoutResearchInput, GeneratedWebsiteUncheckedCreateWithoutResearchInput> | GeneratedWebsiteCreateWithoutResearchInput[] | GeneratedWebsiteUncheckedCreateWithoutResearchInput[]
    connectOrCreate?: GeneratedWebsiteCreateOrConnectWithoutResearchInput | GeneratedWebsiteCreateOrConnectWithoutResearchInput[]
    upsert?: GeneratedWebsiteUpsertWithWhereUniqueWithoutResearchInput | GeneratedWebsiteUpsertWithWhereUniqueWithoutResearchInput[]
    createMany?: GeneratedWebsiteCreateManyResearchInputEnvelope
    set?: GeneratedWebsiteWhereUniqueInput | GeneratedWebsiteWhereUniqueInput[]
    disconnect?: GeneratedWebsiteWhereUniqueInput | GeneratedWebsiteWhereUniqueInput[]
    delete?: GeneratedWebsiteWhereUniqueInput | GeneratedWebsiteWhereUniqueInput[]
    connect?: GeneratedWebsiteWhereUniqueInput | GeneratedWebsiteWhereUniqueInput[]
    update?: GeneratedWebsiteUpdateWithWhereUniqueWithoutResearchInput | GeneratedWebsiteUpdateWithWhereUniqueWithoutResearchInput[]
    updateMany?: GeneratedWebsiteUpdateManyWithWhereWithoutResearchInput | GeneratedWebsiteUpdateManyWithWhereWithoutResearchInput[]
    deleteMany?: GeneratedWebsiteScalarWhereInput | GeneratedWebsiteScalarWhereInput[]
  }

  export type BusinessUpdateOneRequiredWithoutAgentResearchesNestedInput = {
    create?: XOR<BusinessCreateWithoutAgentResearchesInput, BusinessUncheckedCreateWithoutAgentResearchesInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutAgentResearchesInput
    upsert?: BusinessUpsertWithoutAgentResearchesInput
    connect?: BusinessWhereUniqueInput
    update?: XOR<XOR<BusinessUpdateToOneWithWhereWithoutAgentResearchesInput, BusinessUpdateWithoutAgentResearchesInput>, BusinessUncheckedUpdateWithoutAgentResearchesInput>
  }

  export type GeneratedWebsiteUncheckedUpdateManyWithoutResearchNestedInput = {
    create?: XOR<GeneratedWebsiteCreateWithoutResearchInput, GeneratedWebsiteUncheckedCreateWithoutResearchInput> | GeneratedWebsiteCreateWithoutResearchInput[] | GeneratedWebsiteUncheckedCreateWithoutResearchInput[]
    connectOrCreate?: GeneratedWebsiteCreateOrConnectWithoutResearchInput | GeneratedWebsiteCreateOrConnectWithoutResearchInput[]
    upsert?: GeneratedWebsiteUpsertWithWhereUniqueWithoutResearchInput | GeneratedWebsiteUpsertWithWhereUniqueWithoutResearchInput[]
    createMany?: GeneratedWebsiteCreateManyResearchInputEnvelope
    set?: GeneratedWebsiteWhereUniqueInput | GeneratedWebsiteWhereUniqueInput[]
    disconnect?: GeneratedWebsiteWhereUniqueInput | GeneratedWebsiteWhereUniqueInput[]
    delete?: GeneratedWebsiteWhereUniqueInput | GeneratedWebsiteWhereUniqueInput[]
    connect?: GeneratedWebsiteWhereUniqueInput | GeneratedWebsiteWhereUniqueInput[]
    update?: GeneratedWebsiteUpdateWithWhereUniqueWithoutResearchInput | GeneratedWebsiteUpdateWithWhereUniqueWithoutResearchInput[]
    updateMany?: GeneratedWebsiteUpdateManyWithWhereWithoutResearchInput | GeneratedWebsiteUpdateManyWithWhereWithoutResearchInput[]
    deleteMany?: GeneratedWebsiteScalarWhereInput | GeneratedWebsiteScalarWhereInput[]
  }

  export type BusinessCreateNestedOneWithoutGeneratedWebsitesInput = {
    create?: XOR<BusinessCreateWithoutGeneratedWebsitesInput, BusinessUncheckedCreateWithoutGeneratedWebsitesInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutGeneratedWebsitesInput
    connect?: BusinessWhereUniqueInput
  }

  export type AgentResearchCreateNestedOneWithoutGeneratedWebsitesInput = {
    create?: XOR<AgentResearchCreateWithoutGeneratedWebsitesInput, AgentResearchUncheckedCreateWithoutGeneratedWebsitesInput>
    connectOrCreate?: AgentResearchCreateOrConnectWithoutGeneratedWebsitesInput
    connect?: AgentResearchWhereUniqueInput
  }

  export type EnumGeneratedWebsiteStatusFieldUpdateOperationsInput = {
    set?: $Enums.GeneratedWebsiteStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BusinessUpdateOneRequiredWithoutGeneratedWebsitesNestedInput = {
    create?: XOR<BusinessCreateWithoutGeneratedWebsitesInput, BusinessUncheckedCreateWithoutGeneratedWebsitesInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutGeneratedWebsitesInput
    upsert?: BusinessUpsertWithoutGeneratedWebsitesInput
    connect?: BusinessWhereUniqueInput
    update?: XOR<XOR<BusinessUpdateToOneWithWhereWithoutGeneratedWebsitesInput, BusinessUpdateWithoutGeneratedWebsitesInput>, BusinessUncheckedUpdateWithoutGeneratedWebsitesInput>
  }

  export type AgentResearchUpdateOneWithoutGeneratedWebsitesNestedInput = {
    create?: XOR<AgentResearchCreateWithoutGeneratedWebsitesInput, AgentResearchUncheckedCreateWithoutGeneratedWebsitesInput>
    connectOrCreate?: AgentResearchCreateOrConnectWithoutGeneratedWebsitesInput
    upsert?: AgentResearchUpsertWithoutGeneratedWebsitesInput
    disconnect?: AgentResearchWhereInput | boolean
    delete?: AgentResearchWhereInput | boolean
    connect?: AgentResearchWhereUniqueInput
    update?: XOR<XOR<AgentResearchUpdateToOneWithWhereWithoutGeneratedWebsitesInput, AgentResearchUpdateWithoutGeneratedWebsitesInput>, AgentResearchUncheckedUpdateWithoutGeneratedWebsitesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumReportStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportStatus | EnumReportStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReportStatusFilter<$PrismaModel> | $Enums.ReportStatus
  }

  export type NestedEnumReportStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportStatus | EnumReportStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReportStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReportStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReportStatusFilter<$PrismaModel>
    _max?: NestedEnumReportStatusFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumResearchStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ResearchStatus | EnumResearchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ResearchStatus[] | ListEnumResearchStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResearchStatus[] | ListEnumResearchStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumResearchStatusFilter<$PrismaModel> | $Enums.ResearchStatus
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedEnumResearchStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ResearchStatus | EnumResearchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ResearchStatus[] | ListEnumResearchStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResearchStatus[] | ListEnumResearchStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumResearchStatusWithAggregatesFilter<$PrismaModel> | $Enums.ResearchStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumResearchStatusFilter<$PrismaModel>
    _max?: NestedEnumResearchStatusFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnumGeneratedWebsiteStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GeneratedWebsiteStatus | EnumGeneratedWebsiteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GeneratedWebsiteStatus[] | ListEnumGeneratedWebsiteStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GeneratedWebsiteStatus[] | ListEnumGeneratedWebsiteStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGeneratedWebsiteStatusFilter<$PrismaModel> | $Enums.GeneratedWebsiteStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumGeneratedWebsiteStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GeneratedWebsiteStatus | EnumGeneratedWebsiteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GeneratedWebsiteStatus[] | ListEnumGeneratedWebsiteStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GeneratedWebsiteStatus[] | ListEnumGeneratedWebsiteStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGeneratedWebsiteStatusWithAggregatesFilter<$PrismaModel> | $Enums.GeneratedWebsiteStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGeneratedWebsiteStatusFilter<$PrismaModel>
    _max?: NestedEnumGeneratedWebsiteStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ReportCreateWithoutBusinessInput = {
    id?: string
    status?: $Enums.ReportStatus
    reportData?: NullableJsonNullValueInput | InputJsonValue
    pdfUrl?: string | null
    error?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportUncheckedCreateWithoutBusinessInput = {
    id?: string
    status?: $Enums.ReportStatus
    reportData?: NullableJsonNullValueInput | InputJsonValue
    pdfUrl?: string | null
    error?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportCreateOrConnectWithoutBusinessInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutBusinessInput, ReportUncheckedCreateWithoutBusinessInput>
  }

  export type ReportCreateManyBusinessInputEnvelope = {
    data: ReportCreateManyBusinessInput | ReportCreateManyBusinessInput[]
    skipDuplicates?: boolean
  }

  export type AgentResearchCreateWithoutBusinessInput = {
    id?: string
    status?: $Enums.ResearchStatus
    websiteExists?: boolean | null
    researchData?: NullableJsonNullValueInput | InputJsonValue
    error?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    generatedWebsites?: GeneratedWebsiteCreateNestedManyWithoutResearchInput
  }

  export type AgentResearchUncheckedCreateWithoutBusinessInput = {
    id?: string
    status?: $Enums.ResearchStatus
    websiteExists?: boolean | null
    researchData?: NullableJsonNullValueInput | InputJsonValue
    error?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    generatedWebsites?: GeneratedWebsiteUncheckedCreateNestedManyWithoutResearchInput
  }

  export type AgentResearchCreateOrConnectWithoutBusinessInput = {
    where: AgentResearchWhereUniqueInput
    create: XOR<AgentResearchCreateWithoutBusinessInput, AgentResearchUncheckedCreateWithoutBusinessInput>
  }

  export type AgentResearchCreateManyBusinessInputEnvelope = {
    data: AgentResearchCreateManyBusinessInput | AgentResearchCreateManyBusinessInput[]
    skipDuplicates?: boolean
  }

  export type GeneratedWebsiteCreateWithoutBusinessInput = {
    id?: string
    status?: $Enums.GeneratedWebsiteStatus
    websitePath: string
    files?: NullableJsonNullValueInput | InputJsonValue
    previewHtml?: string | null
    summary?: string | null
    error?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deploymentUrl?: string | null
    vercelDeploymentId?: string | null
    deploymentStatus?: string | null
    deployedAt?: Date | string | null
    research?: AgentResearchCreateNestedOneWithoutGeneratedWebsitesInput
  }

  export type GeneratedWebsiteUncheckedCreateWithoutBusinessInput = {
    id?: string
    researchId?: string | null
    status?: $Enums.GeneratedWebsiteStatus
    websitePath: string
    files?: NullableJsonNullValueInput | InputJsonValue
    previewHtml?: string | null
    summary?: string | null
    error?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deploymentUrl?: string | null
    vercelDeploymentId?: string | null
    deploymentStatus?: string | null
    deployedAt?: Date | string | null
  }

  export type GeneratedWebsiteCreateOrConnectWithoutBusinessInput = {
    where: GeneratedWebsiteWhereUniqueInput
    create: XOR<GeneratedWebsiteCreateWithoutBusinessInput, GeneratedWebsiteUncheckedCreateWithoutBusinessInput>
  }

  export type GeneratedWebsiteCreateManyBusinessInputEnvelope = {
    data: GeneratedWebsiteCreateManyBusinessInput | GeneratedWebsiteCreateManyBusinessInput[]
    skipDuplicates?: boolean
  }

  export type ReportUpsertWithWhereUniqueWithoutBusinessInput = {
    where: ReportWhereUniqueInput
    update: XOR<ReportUpdateWithoutBusinessInput, ReportUncheckedUpdateWithoutBusinessInput>
    create: XOR<ReportCreateWithoutBusinessInput, ReportUncheckedCreateWithoutBusinessInput>
  }

  export type ReportUpdateWithWhereUniqueWithoutBusinessInput = {
    where: ReportWhereUniqueInput
    data: XOR<ReportUpdateWithoutBusinessInput, ReportUncheckedUpdateWithoutBusinessInput>
  }

  export type ReportUpdateManyWithWhereWithoutBusinessInput = {
    where: ReportScalarWhereInput
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyWithoutBusinessInput>
  }

  export type ReportScalarWhereInput = {
    AND?: ReportScalarWhereInput | ReportScalarWhereInput[]
    OR?: ReportScalarWhereInput[]
    NOT?: ReportScalarWhereInput | ReportScalarWhereInput[]
    id?: StringFilter<"Report"> | string
    businessId?: StringFilter<"Report"> | string
    status?: EnumReportStatusFilter<"Report"> | $Enums.ReportStatus
    reportData?: JsonNullableFilter<"Report">
    pdfUrl?: StringNullableFilter<"Report"> | string | null
    error?: StringNullableFilter<"Report"> | string | null
    createdAt?: DateTimeFilter<"Report"> | Date | string
    updatedAt?: DateTimeFilter<"Report"> | Date | string
  }

  export type AgentResearchUpsertWithWhereUniqueWithoutBusinessInput = {
    where: AgentResearchWhereUniqueInput
    update: XOR<AgentResearchUpdateWithoutBusinessInput, AgentResearchUncheckedUpdateWithoutBusinessInput>
    create: XOR<AgentResearchCreateWithoutBusinessInput, AgentResearchUncheckedCreateWithoutBusinessInput>
  }

  export type AgentResearchUpdateWithWhereUniqueWithoutBusinessInput = {
    where: AgentResearchWhereUniqueInput
    data: XOR<AgentResearchUpdateWithoutBusinessInput, AgentResearchUncheckedUpdateWithoutBusinessInput>
  }

  export type AgentResearchUpdateManyWithWhereWithoutBusinessInput = {
    where: AgentResearchScalarWhereInput
    data: XOR<AgentResearchUpdateManyMutationInput, AgentResearchUncheckedUpdateManyWithoutBusinessInput>
  }

  export type AgentResearchScalarWhereInput = {
    AND?: AgentResearchScalarWhereInput | AgentResearchScalarWhereInput[]
    OR?: AgentResearchScalarWhereInput[]
    NOT?: AgentResearchScalarWhereInput | AgentResearchScalarWhereInput[]
    id?: StringFilter<"AgentResearch"> | string
    businessId?: StringFilter<"AgentResearch"> | string
    status?: EnumResearchStatusFilter<"AgentResearch"> | $Enums.ResearchStatus
    websiteExists?: BoolNullableFilter<"AgentResearch"> | boolean | null
    researchData?: JsonNullableFilter<"AgentResearch">
    error?: StringNullableFilter<"AgentResearch"> | string | null
    createdAt?: DateTimeFilter<"AgentResearch"> | Date | string
    updatedAt?: DateTimeFilter<"AgentResearch"> | Date | string
  }

  export type GeneratedWebsiteUpsertWithWhereUniqueWithoutBusinessInput = {
    where: GeneratedWebsiteWhereUniqueInput
    update: XOR<GeneratedWebsiteUpdateWithoutBusinessInput, GeneratedWebsiteUncheckedUpdateWithoutBusinessInput>
    create: XOR<GeneratedWebsiteCreateWithoutBusinessInput, GeneratedWebsiteUncheckedCreateWithoutBusinessInput>
  }

  export type GeneratedWebsiteUpdateWithWhereUniqueWithoutBusinessInput = {
    where: GeneratedWebsiteWhereUniqueInput
    data: XOR<GeneratedWebsiteUpdateWithoutBusinessInput, GeneratedWebsiteUncheckedUpdateWithoutBusinessInput>
  }

  export type GeneratedWebsiteUpdateManyWithWhereWithoutBusinessInput = {
    where: GeneratedWebsiteScalarWhereInput
    data: XOR<GeneratedWebsiteUpdateManyMutationInput, GeneratedWebsiteUncheckedUpdateManyWithoutBusinessInput>
  }

  export type GeneratedWebsiteScalarWhereInput = {
    AND?: GeneratedWebsiteScalarWhereInput | GeneratedWebsiteScalarWhereInput[]
    OR?: GeneratedWebsiteScalarWhereInput[]
    NOT?: GeneratedWebsiteScalarWhereInput | GeneratedWebsiteScalarWhereInput[]
    id?: StringFilter<"GeneratedWebsite"> | string
    businessId?: StringFilter<"GeneratedWebsite"> | string
    researchId?: StringNullableFilter<"GeneratedWebsite"> | string | null
    status?: EnumGeneratedWebsiteStatusFilter<"GeneratedWebsite"> | $Enums.GeneratedWebsiteStatus
    websitePath?: StringFilter<"GeneratedWebsite"> | string
    files?: JsonNullableFilter<"GeneratedWebsite">
    previewHtml?: StringNullableFilter<"GeneratedWebsite"> | string | null
    summary?: StringNullableFilter<"GeneratedWebsite"> | string | null
    error?: StringNullableFilter<"GeneratedWebsite"> | string | null
    createdAt?: DateTimeFilter<"GeneratedWebsite"> | Date | string
    updatedAt?: DateTimeFilter<"GeneratedWebsite"> | Date | string
    deploymentUrl?: StringNullableFilter<"GeneratedWebsite"> | string | null
    vercelDeploymentId?: StringNullableFilter<"GeneratedWebsite"> | string | null
    deploymentStatus?: StringNullableFilter<"GeneratedWebsite"> | string | null
    deployedAt?: DateTimeNullableFilter<"GeneratedWebsite"> | Date | string | null
  }

  export type BusinessCreateWithoutReportsInput = {
    id?: string
    placeId?: string | null
    name: string
    address?: string | null
    phone?: string | null
    email?: string | null
    website?: string | null
    category?: string | null
    searchedCategory?: string | null
    city?: string | null
    googleMapsUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    agentResearches?: AgentResearchCreateNestedManyWithoutBusinessInput
    generatedWebsites?: GeneratedWebsiteCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUncheckedCreateWithoutReportsInput = {
    id?: string
    placeId?: string | null
    name: string
    address?: string | null
    phone?: string | null
    email?: string | null
    website?: string | null
    category?: string | null
    searchedCategory?: string | null
    city?: string | null
    googleMapsUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    agentResearches?: AgentResearchUncheckedCreateNestedManyWithoutBusinessInput
    generatedWebsites?: GeneratedWebsiteUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessCreateOrConnectWithoutReportsInput = {
    where: BusinessWhereUniqueInput
    create: XOR<BusinessCreateWithoutReportsInput, BusinessUncheckedCreateWithoutReportsInput>
  }

  export type BusinessUpsertWithoutReportsInput = {
    update: XOR<BusinessUpdateWithoutReportsInput, BusinessUncheckedUpdateWithoutReportsInput>
    create: XOR<BusinessCreateWithoutReportsInput, BusinessUncheckedCreateWithoutReportsInput>
    where?: BusinessWhereInput
  }

  export type BusinessUpdateToOneWithWhereWithoutReportsInput = {
    where?: BusinessWhereInput
    data: XOR<BusinessUpdateWithoutReportsInput, BusinessUncheckedUpdateWithoutReportsInput>
  }

  export type BusinessUpdateWithoutReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    placeId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    searchedCategory?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    googleMapsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agentResearches?: AgentResearchUpdateManyWithoutBusinessNestedInput
    generatedWebsites?: GeneratedWebsiteUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessUncheckedUpdateWithoutReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    placeId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    searchedCategory?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    googleMapsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agentResearches?: AgentResearchUncheckedUpdateManyWithoutBusinessNestedInput
    generatedWebsites?: GeneratedWebsiteUncheckedUpdateManyWithoutBusinessNestedInput
  }

  export type GeneratedWebsiteCreateWithoutResearchInput = {
    id?: string
    status?: $Enums.GeneratedWebsiteStatus
    websitePath: string
    files?: NullableJsonNullValueInput | InputJsonValue
    previewHtml?: string | null
    summary?: string | null
    error?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deploymentUrl?: string | null
    vercelDeploymentId?: string | null
    deploymentStatus?: string | null
    deployedAt?: Date | string | null
    business: BusinessCreateNestedOneWithoutGeneratedWebsitesInput
  }

  export type GeneratedWebsiteUncheckedCreateWithoutResearchInput = {
    id?: string
    businessId: string
    status?: $Enums.GeneratedWebsiteStatus
    websitePath: string
    files?: NullableJsonNullValueInput | InputJsonValue
    previewHtml?: string | null
    summary?: string | null
    error?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deploymentUrl?: string | null
    vercelDeploymentId?: string | null
    deploymentStatus?: string | null
    deployedAt?: Date | string | null
  }

  export type GeneratedWebsiteCreateOrConnectWithoutResearchInput = {
    where: GeneratedWebsiteWhereUniqueInput
    create: XOR<GeneratedWebsiteCreateWithoutResearchInput, GeneratedWebsiteUncheckedCreateWithoutResearchInput>
  }

  export type GeneratedWebsiteCreateManyResearchInputEnvelope = {
    data: GeneratedWebsiteCreateManyResearchInput | GeneratedWebsiteCreateManyResearchInput[]
    skipDuplicates?: boolean
  }

  export type BusinessCreateWithoutAgentResearchesInput = {
    id?: string
    placeId?: string | null
    name: string
    address?: string | null
    phone?: string | null
    email?: string | null
    website?: string | null
    category?: string | null
    searchedCategory?: string | null
    city?: string | null
    googleMapsUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reports?: ReportCreateNestedManyWithoutBusinessInput
    generatedWebsites?: GeneratedWebsiteCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUncheckedCreateWithoutAgentResearchesInput = {
    id?: string
    placeId?: string | null
    name: string
    address?: string | null
    phone?: string | null
    email?: string | null
    website?: string | null
    category?: string | null
    searchedCategory?: string | null
    city?: string | null
    googleMapsUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reports?: ReportUncheckedCreateNestedManyWithoutBusinessInput
    generatedWebsites?: GeneratedWebsiteUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessCreateOrConnectWithoutAgentResearchesInput = {
    where: BusinessWhereUniqueInput
    create: XOR<BusinessCreateWithoutAgentResearchesInput, BusinessUncheckedCreateWithoutAgentResearchesInput>
  }

  export type GeneratedWebsiteUpsertWithWhereUniqueWithoutResearchInput = {
    where: GeneratedWebsiteWhereUniqueInput
    update: XOR<GeneratedWebsiteUpdateWithoutResearchInput, GeneratedWebsiteUncheckedUpdateWithoutResearchInput>
    create: XOR<GeneratedWebsiteCreateWithoutResearchInput, GeneratedWebsiteUncheckedCreateWithoutResearchInput>
  }

  export type GeneratedWebsiteUpdateWithWhereUniqueWithoutResearchInput = {
    where: GeneratedWebsiteWhereUniqueInput
    data: XOR<GeneratedWebsiteUpdateWithoutResearchInput, GeneratedWebsiteUncheckedUpdateWithoutResearchInput>
  }

  export type GeneratedWebsiteUpdateManyWithWhereWithoutResearchInput = {
    where: GeneratedWebsiteScalarWhereInput
    data: XOR<GeneratedWebsiteUpdateManyMutationInput, GeneratedWebsiteUncheckedUpdateManyWithoutResearchInput>
  }

  export type BusinessUpsertWithoutAgentResearchesInput = {
    update: XOR<BusinessUpdateWithoutAgentResearchesInput, BusinessUncheckedUpdateWithoutAgentResearchesInput>
    create: XOR<BusinessCreateWithoutAgentResearchesInput, BusinessUncheckedCreateWithoutAgentResearchesInput>
    where?: BusinessWhereInput
  }

  export type BusinessUpdateToOneWithWhereWithoutAgentResearchesInput = {
    where?: BusinessWhereInput
    data: XOR<BusinessUpdateWithoutAgentResearchesInput, BusinessUncheckedUpdateWithoutAgentResearchesInput>
  }

  export type BusinessUpdateWithoutAgentResearchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    placeId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    searchedCategory?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    googleMapsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reports?: ReportUpdateManyWithoutBusinessNestedInput
    generatedWebsites?: GeneratedWebsiteUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessUncheckedUpdateWithoutAgentResearchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    placeId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    searchedCategory?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    googleMapsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reports?: ReportUncheckedUpdateManyWithoutBusinessNestedInput
    generatedWebsites?: GeneratedWebsiteUncheckedUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessCreateWithoutGeneratedWebsitesInput = {
    id?: string
    placeId?: string | null
    name: string
    address?: string | null
    phone?: string | null
    email?: string | null
    website?: string | null
    category?: string | null
    searchedCategory?: string | null
    city?: string | null
    googleMapsUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reports?: ReportCreateNestedManyWithoutBusinessInput
    agentResearches?: AgentResearchCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUncheckedCreateWithoutGeneratedWebsitesInput = {
    id?: string
    placeId?: string | null
    name: string
    address?: string | null
    phone?: string | null
    email?: string | null
    website?: string | null
    category?: string | null
    searchedCategory?: string | null
    city?: string | null
    googleMapsUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reports?: ReportUncheckedCreateNestedManyWithoutBusinessInput
    agentResearches?: AgentResearchUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessCreateOrConnectWithoutGeneratedWebsitesInput = {
    where: BusinessWhereUniqueInput
    create: XOR<BusinessCreateWithoutGeneratedWebsitesInput, BusinessUncheckedCreateWithoutGeneratedWebsitesInput>
  }

  export type AgentResearchCreateWithoutGeneratedWebsitesInput = {
    id?: string
    status?: $Enums.ResearchStatus
    websiteExists?: boolean | null
    researchData?: NullableJsonNullValueInput | InputJsonValue
    error?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    business: BusinessCreateNestedOneWithoutAgentResearchesInput
  }

  export type AgentResearchUncheckedCreateWithoutGeneratedWebsitesInput = {
    id?: string
    businessId: string
    status?: $Enums.ResearchStatus
    websiteExists?: boolean | null
    researchData?: NullableJsonNullValueInput | InputJsonValue
    error?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AgentResearchCreateOrConnectWithoutGeneratedWebsitesInput = {
    where: AgentResearchWhereUniqueInput
    create: XOR<AgentResearchCreateWithoutGeneratedWebsitesInput, AgentResearchUncheckedCreateWithoutGeneratedWebsitesInput>
  }

  export type BusinessUpsertWithoutGeneratedWebsitesInput = {
    update: XOR<BusinessUpdateWithoutGeneratedWebsitesInput, BusinessUncheckedUpdateWithoutGeneratedWebsitesInput>
    create: XOR<BusinessCreateWithoutGeneratedWebsitesInput, BusinessUncheckedCreateWithoutGeneratedWebsitesInput>
    where?: BusinessWhereInput
  }

  export type BusinessUpdateToOneWithWhereWithoutGeneratedWebsitesInput = {
    where?: BusinessWhereInput
    data: XOR<BusinessUpdateWithoutGeneratedWebsitesInput, BusinessUncheckedUpdateWithoutGeneratedWebsitesInput>
  }

  export type BusinessUpdateWithoutGeneratedWebsitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    placeId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    searchedCategory?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    googleMapsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reports?: ReportUpdateManyWithoutBusinessNestedInput
    agentResearches?: AgentResearchUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessUncheckedUpdateWithoutGeneratedWebsitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    placeId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    searchedCategory?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    googleMapsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reports?: ReportUncheckedUpdateManyWithoutBusinessNestedInput
    agentResearches?: AgentResearchUncheckedUpdateManyWithoutBusinessNestedInput
  }

  export type AgentResearchUpsertWithoutGeneratedWebsitesInput = {
    update: XOR<AgentResearchUpdateWithoutGeneratedWebsitesInput, AgentResearchUncheckedUpdateWithoutGeneratedWebsitesInput>
    create: XOR<AgentResearchCreateWithoutGeneratedWebsitesInput, AgentResearchUncheckedCreateWithoutGeneratedWebsitesInput>
    where?: AgentResearchWhereInput
  }

  export type AgentResearchUpdateToOneWithWhereWithoutGeneratedWebsitesInput = {
    where?: AgentResearchWhereInput
    data: XOR<AgentResearchUpdateWithoutGeneratedWebsitesInput, AgentResearchUncheckedUpdateWithoutGeneratedWebsitesInput>
  }

  export type AgentResearchUpdateWithoutGeneratedWebsitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumResearchStatusFieldUpdateOperationsInput | $Enums.ResearchStatus
    websiteExists?: NullableBoolFieldUpdateOperationsInput | boolean | null
    researchData?: NullableJsonNullValueInput | InputJsonValue
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    business?: BusinessUpdateOneRequiredWithoutAgentResearchesNestedInput
  }

  export type AgentResearchUncheckedUpdateWithoutGeneratedWebsitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    status?: EnumResearchStatusFieldUpdateOperationsInput | $Enums.ResearchStatus
    websiteExists?: NullableBoolFieldUpdateOperationsInput | boolean | null
    researchData?: NullableJsonNullValueInput | InputJsonValue
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportCreateManyBusinessInput = {
    id?: string
    status?: $Enums.ReportStatus
    reportData?: NullableJsonNullValueInput | InputJsonValue
    pdfUrl?: string | null
    error?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AgentResearchCreateManyBusinessInput = {
    id?: string
    status?: $Enums.ResearchStatus
    websiteExists?: boolean | null
    researchData?: NullableJsonNullValueInput | InputJsonValue
    error?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GeneratedWebsiteCreateManyBusinessInput = {
    id?: string
    researchId?: string | null
    status?: $Enums.GeneratedWebsiteStatus
    websitePath: string
    files?: NullableJsonNullValueInput | InputJsonValue
    previewHtml?: string | null
    summary?: string | null
    error?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deploymentUrl?: string | null
    vercelDeploymentId?: string | null
    deploymentStatus?: string | null
    deployedAt?: Date | string | null
  }

  export type ReportUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    reportData?: NullableJsonNullValueInput | InputJsonValue
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    reportData?: NullableJsonNullValueInput | InputJsonValue
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateManyWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    reportData?: NullableJsonNullValueInput | InputJsonValue
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentResearchUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumResearchStatusFieldUpdateOperationsInput | $Enums.ResearchStatus
    websiteExists?: NullableBoolFieldUpdateOperationsInput | boolean | null
    researchData?: NullableJsonNullValueInput | InputJsonValue
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    generatedWebsites?: GeneratedWebsiteUpdateManyWithoutResearchNestedInput
  }

  export type AgentResearchUncheckedUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumResearchStatusFieldUpdateOperationsInput | $Enums.ResearchStatus
    websiteExists?: NullableBoolFieldUpdateOperationsInput | boolean | null
    researchData?: NullableJsonNullValueInput | InputJsonValue
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    generatedWebsites?: GeneratedWebsiteUncheckedUpdateManyWithoutResearchNestedInput
  }

  export type AgentResearchUncheckedUpdateManyWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumResearchStatusFieldUpdateOperationsInput | $Enums.ResearchStatus
    websiteExists?: NullableBoolFieldUpdateOperationsInput | boolean | null
    researchData?: NullableJsonNullValueInput | InputJsonValue
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneratedWebsiteUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumGeneratedWebsiteStatusFieldUpdateOperationsInput | $Enums.GeneratedWebsiteStatus
    websitePath?: StringFieldUpdateOperationsInput | string
    files?: NullableJsonNullValueInput | InputJsonValue
    previewHtml?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deploymentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    vercelDeploymentId?: NullableStringFieldUpdateOperationsInput | string | null
    deploymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    deployedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    research?: AgentResearchUpdateOneWithoutGeneratedWebsitesNestedInput
  }

  export type GeneratedWebsiteUncheckedUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    researchId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGeneratedWebsiteStatusFieldUpdateOperationsInput | $Enums.GeneratedWebsiteStatus
    websitePath?: StringFieldUpdateOperationsInput | string
    files?: NullableJsonNullValueInput | InputJsonValue
    previewHtml?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deploymentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    vercelDeploymentId?: NullableStringFieldUpdateOperationsInput | string | null
    deploymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    deployedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GeneratedWebsiteUncheckedUpdateManyWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    researchId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGeneratedWebsiteStatusFieldUpdateOperationsInput | $Enums.GeneratedWebsiteStatus
    websitePath?: StringFieldUpdateOperationsInput | string
    files?: NullableJsonNullValueInput | InputJsonValue
    previewHtml?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deploymentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    vercelDeploymentId?: NullableStringFieldUpdateOperationsInput | string | null
    deploymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    deployedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GeneratedWebsiteCreateManyResearchInput = {
    id?: string
    businessId: string
    status?: $Enums.GeneratedWebsiteStatus
    websitePath: string
    files?: NullableJsonNullValueInput | InputJsonValue
    previewHtml?: string | null
    summary?: string | null
    error?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deploymentUrl?: string | null
    vercelDeploymentId?: string | null
    deploymentStatus?: string | null
    deployedAt?: Date | string | null
  }

  export type GeneratedWebsiteUpdateWithoutResearchInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumGeneratedWebsiteStatusFieldUpdateOperationsInput | $Enums.GeneratedWebsiteStatus
    websitePath?: StringFieldUpdateOperationsInput | string
    files?: NullableJsonNullValueInput | InputJsonValue
    previewHtml?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deploymentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    vercelDeploymentId?: NullableStringFieldUpdateOperationsInput | string | null
    deploymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    deployedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    business?: BusinessUpdateOneRequiredWithoutGeneratedWebsitesNestedInput
  }

  export type GeneratedWebsiteUncheckedUpdateWithoutResearchInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    status?: EnumGeneratedWebsiteStatusFieldUpdateOperationsInput | $Enums.GeneratedWebsiteStatus
    websitePath?: StringFieldUpdateOperationsInput | string
    files?: NullableJsonNullValueInput | InputJsonValue
    previewHtml?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deploymentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    vercelDeploymentId?: NullableStringFieldUpdateOperationsInput | string | null
    deploymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    deployedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GeneratedWebsiteUncheckedUpdateManyWithoutResearchInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    status?: EnumGeneratedWebsiteStatusFieldUpdateOperationsInput | $Enums.GeneratedWebsiteStatus
    websitePath?: StringFieldUpdateOperationsInput | string
    files?: NullableJsonNullValueInput | InputJsonValue
    previewHtml?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deploymentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    vercelDeploymentId?: NullableStringFieldUpdateOperationsInput | string | null
    deploymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    deployedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}