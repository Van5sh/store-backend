
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model City
 * 
 */
export type City = $Result.DefaultSelection<Prisma.$CityPayload>
/**
 * Model WareHouse
 * 
 */
export type WareHouse = $Result.DefaultSelection<Prisma.$WareHousePayload>
/**
 * Model WarehouseDetails
 * 
 */
export type WarehouseDetails = $Result.DefaultSelection<Prisma.$WarehouseDetailsPayload>
/**
 * Model Sales
 * 
 */
export type Sales = $Result.DefaultSelection<Prisma.$SalesPayload>
/**
 * Model Store
 * 
 */
export type Store = $Result.DefaultSelection<Prisma.$StorePayload>
/**
 * Model StoreAndProduct
 * 
 */
export type StoreAndProduct = $Result.DefaultSelection<Prisma.$StoreAndProductPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model OrderDetails
 * 
 */
export type OrderDetails = $Result.DefaultSelection<Prisma.$OrderDetailsPayload>
/**
 * Model Complaint
 * 
 */
export type Complaint = $Result.DefaultSelection<Prisma.$ComplaintPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserType: {
  vendor: 'vendor',
  customer: 'customer',
  admin: 'admin'
};

export type UserType = (typeof UserType)[keyof typeof UserType]

}

export type UserType = $Enums.UserType

export const UserType: typeof $Enums.UserType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.city`: Exposes CRUD operations for the **City** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cities
    * const cities = await prisma.city.findMany()
    * ```
    */
  get city(): Prisma.CityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.wareHouse`: Exposes CRUD operations for the **WareHouse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WareHouses
    * const wareHouses = await prisma.wareHouse.findMany()
    * ```
    */
  get wareHouse(): Prisma.WareHouseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.warehouseDetails`: Exposes CRUD operations for the **WarehouseDetails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WarehouseDetails
    * const warehouseDetails = await prisma.warehouseDetails.findMany()
    * ```
    */
  get warehouseDetails(): Prisma.WarehouseDetailsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sales`: Exposes CRUD operations for the **Sales** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sales
    * const sales = await prisma.sales.findMany()
    * ```
    */
  get sales(): Prisma.SalesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.store`: Exposes CRUD operations for the **Store** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stores
    * const stores = await prisma.store.findMany()
    * ```
    */
  get store(): Prisma.StoreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.storeAndProduct`: Exposes CRUD operations for the **StoreAndProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StoreAndProducts
    * const storeAndProducts = await prisma.storeAndProduct.findMany()
    * ```
    */
  get storeAndProduct(): Prisma.StoreAndProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderDetails`: Exposes CRUD operations for the **OrderDetails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderDetails
    * const orderDetails = await prisma.orderDetails.findMany()
    * ```
    */
  get orderDetails(): Prisma.OrderDetailsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.complaint`: Exposes CRUD operations for the **Complaint** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Complaints
    * const complaints = await prisma.complaint.findMany()
    * ```
    */
  get complaint(): Prisma.ComplaintDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.0.0
   * Query Engine version: 0c19ccc313cf9911a90d99d2ac2eb0280c76c513
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
      (Without<T, U> & U) | (Without<U, T> & T)
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
    User: 'User',
    Product: 'Product',
    City: 'City',
    WareHouse: 'WareHouse',
    WarehouseDetails: 'WarehouseDetails',
    Sales: 'Sales',
    Store: 'Store',
    StoreAndProduct: 'StoreAndProduct',
    Order: 'Order',
    OrderDetails: 'OrderDetails',
    Complaint: 'Complaint'
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
      modelProps: "user" | "product" | "city" | "wareHouse" | "warehouseDetails" | "sales" | "store" | "storeAndProduct" | "order" | "orderDetails" | "complaint"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      City: {
        payload: Prisma.$CityPayload<ExtArgs>
        fields: Prisma.CityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          findFirst: {
            args: Prisma.CityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          findMany: {
            args: Prisma.CityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>[]
          }
          create: {
            args: Prisma.CityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          createMany: {
            args: Prisma.CityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>[]
          }
          delete: {
            args: Prisma.CityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          update: {
            args: Prisma.CityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          deleteMany: {
            args: Prisma.CityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>[]
          }
          upsert: {
            args: Prisma.CityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          aggregate: {
            args: Prisma.CityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCity>
          }
          groupBy: {
            args: Prisma.CityGroupByArgs<ExtArgs>
            result: $Utils.Optional<CityGroupByOutputType>[]
          }
          count: {
            args: Prisma.CityCountArgs<ExtArgs>
            result: $Utils.Optional<CityCountAggregateOutputType> | number
          }
        }
      }
      WareHouse: {
        payload: Prisma.$WareHousePayload<ExtArgs>
        fields: Prisma.WareHouseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WareHouseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WareHousePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WareHouseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WareHousePayload>
          }
          findFirst: {
            args: Prisma.WareHouseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WareHousePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WareHouseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WareHousePayload>
          }
          findMany: {
            args: Prisma.WareHouseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WareHousePayload>[]
          }
          create: {
            args: Prisma.WareHouseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WareHousePayload>
          }
          createMany: {
            args: Prisma.WareHouseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WareHouseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WareHousePayload>[]
          }
          delete: {
            args: Prisma.WareHouseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WareHousePayload>
          }
          update: {
            args: Prisma.WareHouseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WareHousePayload>
          }
          deleteMany: {
            args: Prisma.WareHouseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WareHouseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WareHouseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WareHousePayload>[]
          }
          upsert: {
            args: Prisma.WareHouseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WareHousePayload>
          }
          aggregate: {
            args: Prisma.WareHouseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWareHouse>
          }
          groupBy: {
            args: Prisma.WareHouseGroupByArgs<ExtArgs>
            result: $Utils.Optional<WareHouseGroupByOutputType>[]
          }
          count: {
            args: Prisma.WareHouseCountArgs<ExtArgs>
            result: $Utils.Optional<WareHouseCountAggregateOutputType> | number
          }
        }
      }
      WarehouseDetails: {
        payload: Prisma.$WarehouseDetailsPayload<ExtArgs>
        fields: Prisma.WarehouseDetailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WarehouseDetailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehouseDetailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WarehouseDetailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehouseDetailsPayload>
          }
          findFirst: {
            args: Prisma.WarehouseDetailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehouseDetailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WarehouseDetailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehouseDetailsPayload>
          }
          findMany: {
            args: Prisma.WarehouseDetailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehouseDetailsPayload>[]
          }
          create: {
            args: Prisma.WarehouseDetailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehouseDetailsPayload>
          }
          createMany: {
            args: Prisma.WarehouseDetailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WarehouseDetailsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehouseDetailsPayload>[]
          }
          delete: {
            args: Prisma.WarehouseDetailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehouseDetailsPayload>
          }
          update: {
            args: Prisma.WarehouseDetailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehouseDetailsPayload>
          }
          deleteMany: {
            args: Prisma.WarehouseDetailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WarehouseDetailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WarehouseDetailsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehouseDetailsPayload>[]
          }
          upsert: {
            args: Prisma.WarehouseDetailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehouseDetailsPayload>
          }
          aggregate: {
            args: Prisma.WarehouseDetailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWarehouseDetails>
          }
          groupBy: {
            args: Prisma.WarehouseDetailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<WarehouseDetailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.WarehouseDetailsCountArgs<ExtArgs>
            result: $Utils.Optional<WarehouseDetailsCountAggregateOutputType> | number
          }
        }
      }
      Sales: {
        payload: Prisma.$SalesPayload<ExtArgs>
        fields: Prisma.SalesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SalesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SalesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>
          }
          findFirst: {
            args: Prisma.SalesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SalesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>
          }
          findMany: {
            args: Prisma.SalesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>[]
          }
          create: {
            args: Prisma.SalesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>
          }
          createMany: {
            args: Prisma.SalesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SalesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>[]
          }
          delete: {
            args: Prisma.SalesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>
          }
          update: {
            args: Prisma.SalesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>
          }
          deleteMany: {
            args: Prisma.SalesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SalesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SalesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>[]
          }
          upsert: {
            args: Prisma.SalesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>
          }
          aggregate: {
            args: Prisma.SalesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSales>
          }
          groupBy: {
            args: Prisma.SalesGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalesGroupByOutputType>[]
          }
          count: {
            args: Prisma.SalesCountArgs<ExtArgs>
            result: $Utils.Optional<SalesCountAggregateOutputType> | number
          }
        }
      }
      Store: {
        payload: Prisma.$StorePayload<ExtArgs>
        fields: Prisma.StoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          findFirst: {
            args: Prisma.StoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          findMany: {
            args: Prisma.StoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>[]
          }
          create: {
            args: Prisma.StoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          createMany: {
            args: Prisma.StoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StoreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>[]
          }
          delete: {
            args: Prisma.StoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          update: {
            args: Prisma.StoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          deleteMany: {
            args: Prisma.StoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StoreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>[]
          }
          upsert: {
            args: Prisma.StoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          aggregate: {
            args: Prisma.StoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStore>
          }
          groupBy: {
            args: Prisma.StoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.StoreCountArgs<ExtArgs>
            result: $Utils.Optional<StoreCountAggregateOutputType> | number
          }
        }
      }
      StoreAndProduct: {
        payload: Prisma.$StoreAndProductPayload<ExtArgs>
        fields: Prisma.StoreAndProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StoreAndProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreAndProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StoreAndProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreAndProductPayload>
          }
          findFirst: {
            args: Prisma.StoreAndProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreAndProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StoreAndProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreAndProductPayload>
          }
          findMany: {
            args: Prisma.StoreAndProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreAndProductPayload>[]
          }
          create: {
            args: Prisma.StoreAndProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreAndProductPayload>
          }
          createMany: {
            args: Prisma.StoreAndProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StoreAndProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreAndProductPayload>[]
          }
          delete: {
            args: Prisma.StoreAndProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreAndProductPayload>
          }
          update: {
            args: Prisma.StoreAndProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreAndProductPayload>
          }
          deleteMany: {
            args: Prisma.StoreAndProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StoreAndProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StoreAndProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreAndProductPayload>[]
          }
          upsert: {
            args: Prisma.StoreAndProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreAndProductPayload>
          }
          aggregate: {
            args: Prisma.StoreAndProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStoreAndProduct>
          }
          groupBy: {
            args: Prisma.StoreAndProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoreAndProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.StoreAndProductCountArgs<ExtArgs>
            result: $Utils.Optional<StoreAndProductCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      OrderDetails: {
        payload: Prisma.$OrderDetailsPayload<ExtArgs>
        fields: Prisma.OrderDetailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderDetailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderDetailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>
          }
          findFirst: {
            args: Prisma.OrderDetailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderDetailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>
          }
          findMany: {
            args: Prisma.OrderDetailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>[]
          }
          create: {
            args: Prisma.OrderDetailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>
          }
          createMany: {
            args: Prisma.OrderDetailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderDetailsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>[]
          }
          delete: {
            args: Prisma.OrderDetailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>
          }
          update: {
            args: Prisma.OrderDetailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>
          }
          deleteMany: {
            args: Prisma.OrderDetailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderDetailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderDetailsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>[]
          }
          upsert: {
            args: Prisma.OrderDetailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>
          }
          aggregate: {
            args: Prisma.OrderDetailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderDetails>
          }
          groupBy: {
            args: Prisma.OrderDetailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderDetailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderDetailsCountArgs<ExtArgs>
            result: $Utils.Optional<OrderDetailsCountAggregateOutputType> | number
          }
        }
      }
      Complaint: {
        payload: Prisma.$ComplaintPayload<ExtArgs>
        fields: Prisma.ComplaintFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ComplaintFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplaintPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ComplaintFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplaintPayload>
          }
          findFirst: {
            args: Prisma.ComplaintFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplaintPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ComplaintFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplaintPayload>
          }
          findMany: {
            args: Prisma.ComplaintFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplaintPayload>[]
          }
          create: {
            args: Prisma.ComplaintCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplaintPayload>
          }
          createMany: {
            args: Prisma.ComplaintCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ComplaintCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplaintPayload>[]
          }
          delete: {
            args: Prisma.ComplaintDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplaintPayload>
          }
          update: {
            args: Prisma.ComplaintUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplaintPayload>
          }
          deleteMany: {
            args: Prisma.ComplaintDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ComplaintUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ComplaintUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplaintPayload>[]
          }
          upsert: {
            args: Prisma.ComplaintUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplaintPayload>
          }
          aggregate: {
            args: Prisma.ComplaintAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComplaint>
          }
          groupBy: {
            args: Prisma.ComplaintGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComplaintGroupByOutputType>[]
          }
          count: {
            args: Prisma.ComplaintCountArgs<ExtArgs>
            result: $Utils.Optional<ComplaintCountAggregateOutputType> | number
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    product?: ProductOmit
    city?: CityOmit
    wareHouse?: WareHouseOmit
    warehouseDetails?: WarehouseDetailsOmit
    sales?: SalesOmit
    store?: StoreOmit
    storeAndProduct?: StoreAndProductOmit
    order?: OrderOmit
    orderDetails?: OrderDetailsOmit
    complaint?: ComplaintOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    orderDetails: number
    stores: number
    Complaints: number
    WarehouseDetails: number
    orders: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderDetails?: boolean | UserCountOutputTypeCountOrderDetailsArgs
    stores?: boolean | UserCountOutputTypeCountStoresArgs
    Complaints?: boolean | UserCountOutputTypeCountComplaintsArgs
    WarehouseDetails?: boolean | UserCountOutputTypeCountWarehouseDetailsArgs
    orders?: boolean | UserCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrderDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderDetailsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountComplaintsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComplaintWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWarehouseDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WarehouseDetailsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    sales: number
    orders: number
    storeProducts: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sales?: boolean | ProductCountOutputTypeCountSalesArgs
    orders?: boolean | ProductCountOutputTypeCountOrdersArgs
    storeProducts?: boolean | ProductCountOutputTypeCountStoreProductsArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalesWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountStoreProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreAndProductWhereInput
  }


  /**
   * Count Type CityCountOutputType
   */

  export type CityCountOutputType = {
    warehouses: number
    warehouseDetails: number
    Stores: number
  }

  export type CityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    warehouses?: boolean | CityCountOutputTypeCountWarehousesArgs
    warehouseDetails?: boolean | CityCountOutputTypeCountWarehouseDetailsArgs
    Stores?: boolean | CityCountOutputTypeCountStoresArgs
  }

  // Custom InputTypes
  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityCountOutputType
     */
    select?: CityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeCountWarehousesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WareHouseWhereInput
  }

  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeCountWarehouseDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WarehouseDetailsWhereInput
  }

  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeCountStoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreWhereInput
  }


  /**
   * Count Type WareHouseCountOutputType
   */

  export type WareHouseCountOutputType = {
    products: number
    warehouseDetails: number
  }

  export type WareHouseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | WareHouseCountOutputTypeCountProductsArgs
    warehouseDetails?: boolean | WareHouseCountOutputTypeCountWarehouseDetailsArgs
  }

  // Custom InputTypes
  /**
   * WareHouseCountOutputType without action
   */
  export type WareHouseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WareHouseCountOutputType
     */
    select?: WareHouseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WareHouseCountOutputType without action
   */
  export type WareHouseCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }

  /**
   * WareHouseCountOutputType without action
   */
  export type WareHouseCountOutputTypeCountWarehouseDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WarehouseDetailsWhereInput
  }


  /**
   * Count Type StoreCountOutputType
   */

  export type StoreCountOutputType = {
    storeProducts: number
  }

  export type StoreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    storeProducts?: boolean | StoreCountOutputTypeCountStoreProductsArgs
  }

  // Custom InputTypes
  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreCountOutputType
     */
    select?: StoreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountStoreProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreAndProductWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    orderDetails: number
    complaints: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderDetails?: boolean | OrderCountOutputTypeCountOrderDetailsArgs
    complaints?: boolean | OrderCountOutputTypeCountComplaintsArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountOrderDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderDetailsWhereInput
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountComplaintsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComplaintWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    userid: string | null
    email: string | null
    name: string | null
    role: $Enums.UserType | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    userid: string | null
    email: string | null
    name: string | null
    role: $Enums.UserType | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    userid: number
    email: number
    name: number
    role: number
    password: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    userid?: true
    email?: true
    name?: true
    role?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    userid?: true
    email?: true
    name?: true
    role?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    userid?: true
    email?: true
    name?: true
    role?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    userid: string
    email: string
    name: string | null
    role: $Enums.UserType
    password: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userid?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    password?: boolean
    orderDetails?: boolean | User$orderDetailsArgs<ExtArgs>
    stores?: boolean | User$storesArgs<ExtArgs>
    Complaints?: boolean | User$ComplaintsArgs<ExtArgs>
    WarehouseDetails?: boolean | User$WarehouseDetailsArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userid?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userid?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    userid?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userid" | "email" | "name" | "role" | "password", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderDetails?: boolean | User$orderDetailsArgs<ExtArgs>
    stores?: boolean | User$storesArgs<ExtArgs>
    Complaints?: boolean | User$ComplaintsArgs<ExtArgs>
    WarehouseDetails?: boolean | User$WarehouseDetailsArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      orderDetails: Prisma.$OrderDetailsPayload<ExtArgs>[]
      stores: Prisma.$StorePayload<ExtArgs>[]
      Complaints: Prisma.$ComplaintPayload<ExtArgs>[]
      WarehouseDetails: Prisma.$WarehouseDetailsPayload<ExtArgs>[]
      orders: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userid: string
      email: string
      name: string | null
      role: $Enums.UserType
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `userid`
     * const userWithUseridOnly = await prisma.user.findMany({ select: { userid: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `userid`
     * const userWithUseridOnly = await prisma.user.createManyAndReturn({
     *   select: { userid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `userid`
     * const userWithUseridOnly = await prisma.user.updateManyAndReturn({
     *   select: { userid: true },
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orderDetails<T extends User$orderDetailsArgs<ExtArgs> = {}>(args?: Subset<T, User$orderDetailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stores<T extends User$storesArgs<ExtArgs> = {}>(args?: Subset<T, User$storesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Complaints<T extends User$ComplaintsArgs<ExtArgs> = {}>(args?: Subset<T, User$ComplaintsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComplaintPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    WarehouseDetails<T extends User$WarehouseDetailsArgs<ExtArgs> = {}>(args?: Subset<T, User$WarehouseDetailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarehouseDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends User$ordersArgs<ExtArgs> = {}>(args?: Subset<T, User$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly userid: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserType'>
    readonly password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.orderDetails
   */
  export type User$orderDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    where?: OrderDetailsWhereInput
    orderBy?: OrderDetailsOrderByWithRelationInput | OrderDetailsOrderByWithRelationInput[]
    cursor?: OrderDetailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderDetailsScalarFieldEnum | OrderDetailsScalarFieldEnum[]
  }

  /**
   * User.stores
   */
  export type User$storesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    where?: StoreWhereInput
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    cursor?: StoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * User.Complaints
   */
  export type User$ComplaintsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complaint
     */
    select?: ComplaintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complaint
     */
    omit?: ComplaintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplaintInclude<ExtArgs> | null
    where?: ComplaintWhereInput
    orderBy?: ComplaintOrderByWithRelationInput | ComplaintOrderByWithRelationInput[]
    cursor?: ComplaintWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComplaintScalarFieldEnum | ComplaintScalarFieldEnum[]
  }

  /**
   * User.WarehouseDetails
   */
  export type User$WarehouseDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehouseDetails
     */
    select?: WarehouseDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WarehouseDetails
     */
    omit?: WarehouseDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseDetailsInclude<ExtArgs> | null
    where?: WarehouseDetailsWhereInput
    orderBy?: WarehouseDetailsOrderByWithRelationInput | WarehouseDetailsOrderByWithRelationInput[]
    cursor?: WarehouseDetailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WarehouseDetailsScalarFieldEnum | WarehouseDetailsScalarFieldEnum[]
  }

  /**
   * User.orders
   */
  export type User$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    productPrice: number | null
  }

  export type ProductSumAggregateOutputType = {
    productPrice: number | null
  }

  export type ProductMinAggregateOutputType = {
    productId: string | null
    productName: string | null
    productPrice: number | null
    warehouseId: string | null
  }

  export type ProductMaxAggregateOutputType = {
    productId: string | null
    productName: string | null
    productPrice: number | null
    warehouseId: string | null
  }

  export type ProductCountAggregateOutputType = {
    productId: number
    productName: number
    productPrice: number
    warehouseId: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    productPrice?: true
  }

  export type ProductSumAggregateInputType = {
    productPrice?: true
  }

  export type ProductMinAggregateInputType = {
    productId?: true
    productName?: true
    productPrice?: true
    warehouseId?: true
  }

  export type ProductMaxAggregateInputType = {
    productId?: true
    productName?: true
    productPrice?: true
    warehouseId?: true
  }

  export type ProductCountAggregateInputType = {
    productId?: true
    productName?: true
    productPrice?: true
    warehouseId?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    productId: string
    productName: string
    productPrice: number
    warehouseId: string
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productId?: boolean
    productName?: boolean
    productPrice?: boolean
    warehouseId?: boolean
    warehouse?: boolean | WareHouseDefaultArgs<ExtArgs>
    sales?: boolean | Product$salesArgs<ExtArgs>
    orders?: boolean | Product$ordersArgs<ExtArgs>
    storeProducts?: boolean | Product$storeProductsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productId?: boolean
    productName?: boolean
    productPrice?: boolean
    warehouseId?: boolean
    warehouse?: boolean | WareHouseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productId?: boolean
    productName?: boolean
    productPrice?: boolean
    warehouseId?: boolean
    warehouse?: boolean | WareHouseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    productId?: boolean
    productName?: boolean
    productPrice?: boolean
    warehouseId?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"productId" | "productName" | "productPrice" | "warehouseId", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    warehouse?: boolean | WareHouseDefaultArgs<ExtArgs>
    sales?: boolean | Product$salesArgs<ExtArgs>
    orders?: boolean | Product$ordersArgs<ExtArgs>
    storeProducts?: boolean | Product$storeProductsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    warehouse?: boolean | WareHouseDefaultArgs<ExtArgs>
  }
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    warehouse?: boolean | WareHouseDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      warehouse: Prisma.$WareHousePayload<ExtArgs>
      sales: Prisma.$SalesPayload<ExtArgs>[]
      orders: Prisma.$OrderPayload<ExtArgs>[]
      storeProducts: Prisma.$StoreAndProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      productId: string
      productName: string
      productPrice: number
      warehouseId: string
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `productId`
     * const productWithProductIdOnly = await prisma.product.findMany({ select: { productId: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `productId`
     * const productWithProductIdOnly = await prisma.product.createManyAndReturn({
     *   select: { productId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `productId`
     * const productWithProductIdOnly = await prisma.product.updateManyAndReturn({
     *   select: { productId: true },
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
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    warehouse<T extends WareHouseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WareHouseDefaultArgs<ExtArgs>>): Prisma__WareHouseClient<$Result.GetResult<Prisma.$WareHousePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sales<T extends Product$salesArgs<ExtArgs> = {}>(args?: Subset<T, Product$salesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends Product$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Product$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    storeProducts<T extends Product$storeProductsArgs<ExtArgs> = {}>(args?: Subset<T, Product$storeProductsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoreAndProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly productId: FieldRef<"Product", 'String'>
    readonly productName: FieldRef<"Product", 'String'>
    readonly productPrice: FieldRef<"Product", 'Float'>
    readonly warehouseId: FieldRef<"Product", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.sales
   */
  export type Product$salesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
    where?: SalesWhereInput
    orderBy?: SalesOrderByWithRelationInput | SalesOrderByWithRelationInput[]
    cursor?: SalesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[]
  }

  /**
   * Product.orders
   */
  export type Product$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Product.storeProducts
   */
  export type Product$storeProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreAndProduct
     */
    select?: StoreAndProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreAndProduct
     */
    omit?: StoreAndProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreAndProductInclude<ExtArgs> | null
    where?: StoreAndProductWhereInput
    orderBy?: StoreAndProductOrderByWithRelationInput | StoreAndProductOrderByWithRelationInput[]
    cursor?: StoreAndProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StoreAndProductScalarFieldEnum | StoreAndProductScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model City
   */

  export type AggregateCity = {
    _count: CityCountAggregateOutputType | null
    _min: CityMinAggregateOutputType | null
    _max: CityMaxAggregateOutputType | null
  }

  export type CityMinAggregateOutputType = {
    cityId: string | null
    cityName: string | null
    state: string | null
  }

  export type CityMaxAggregateOutputType = {
    cityId: string | null
    cityName: string | null
    state: string | null
  }

  export type CityCountAggregateOutputType = {
    cityId: number
    cityName: number
    state: number
    _all: number
  }


  export type CityMinAggregateInputType = {
    cityId?: true
    cityName?: true
    state?: true
  }

  export type CityMaxAggregateInputType = {
    cityId?: true
    cityName?: true
    state?: true
  }

  export type CityCountAggregateInputType = {
    cityId?: true
    cityName?: true
    state?: true
    _all?: true
  }

  export type CityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which City to aggregate.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cities
    **/
    _count?: true | CityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CityMaxAggregateInputType
  }

  export type GetCityAggregateType<T extends CityAggregateArgs> = {
        [P in keyof T & keyof AggregateCity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCity[P]>
      : GetScalarType<T[P], AggregateCity[P]>
  }




  export type CityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CityWhereInput
    orderBy?: CityOrderByWithAggregationInput | CityOrderByWithAggregationInput[]
    by: CityScalarFieldEnum[] | CityScalarFieldEnum
    having?: CityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CityCountAggregateInputType | true
    _min?: CityMinAggregateInputType
    _max?: CityMaxAggregateInputType
  }

  export type CityGroupByOutputType = {
    cityId: string
    cityName: string
    state: string
    _count: CityCountAggregateOutputType | null
    _min: CityMinAggregateOutputType | null
    _max: CityMaxAggregateOutputType | null
  }

  type GetCityGroupByPayload<T extends CityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CityGroupByOutputType[P]>
            : GetScalarType<T[P], CityGroupByOutputType[P]>
        }
      >
    >


  export type CitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cityId?: boolean
    cityName?: boolean
    state?: boolean
    warehouses?: boolean | City$warehousesArgs<ExtArgs>
    warehouseDetails?: boolean | City$warehouseDetailsArgs<ExtArgs>
    Stores?: boolean | City$StoresArgs<ExtArgs>
    _count?: boolean | CityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["city"]>

  export type CitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cityId?: boolean
    cityName?: boolean
    state?: boolean
  }, ExtArgs["result"]["city"]>

  export type CitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cityId?: boolean
    cityName?: boolean
    state?: boolean
  }, ExtArgs["result"]["city"]>

  export type CitySelectScalar = {
    cityId?: boolean
    cityName?: boolean
    state?: boolean
  }

  export type CityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"cityId" | "cityName" | "state", ExtArgs["result"]["city"]>
  export type CityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    warehouses?: boolean | City$warehousesArgs<ExtArgs>
    warehouseDetails?: boolean | City$warehouseDetailsArgs<ExtArgs>
    Stores?: boolean | City$StoresArgs<ExtArgs>
    _count?: boolean | CityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "City"
    objects: {
      warehouses: Prisma.$WareHousePayload<ExtArgs>[]
      warehouseDetails: Prisma.$WarehouseDetailsPayload<ExtArgs>[]
      Stores: Prisma.$StorePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      cityId: string
      cityName: string
      state: string
    }, ExtArgs["result"]["city"]>
    composites: {}
  }

  type CityGetPayload<S extends boolean | null | undefined | CityDefaultArgs> = $Result.GetResult<Prisma.$CityPayload, S>

  type CityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CityCountAggregateInputType | true
    }

  export interface CityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['City'], meta: { name: 'City' } }
    /**
     * Find zero or one City that matches the filter.
     * @param {CityFindUniqueArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CityFindUniqueArgs>(args: SelectSubset<T, CityFindUniqueArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one City that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CityFindUniqueOrThrowArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CityFindUniqueOrThrowArgs>(args: SelectSubset<T, CityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first City that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindFirstArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CityFindFirstArgs>(args?: SelectSubset<T, CityFindFirstArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first City that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindFirstOrThrowArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CityFindFirstOrThrowArgs>(args?: SelectSubset<T, CityFindFirstOrThrowArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cities
     * const cities = await prisma.city.findMany()
     * 
     * // Get first 10 Cities
     * const cities = await prisma.city.findMany({ take: 10 })
     * 
     * // Only select the `cityId`
     * const cityWithCityIdOnly = await prisma.city.findMany({ select: { cityId: true } })
     * 
     */
    findMany<T extends CityFindManyArgs>(args?: SelectSubset<T, CityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a City.
     * @param {CityCreateArgs} args - Arguments to create a City.
     * @example
     * // Create one City
     * const City = await prisma.city.create({
     *   data: {
     *     // ... data to create a City
     *   }
     * })
     * 
     */
    create<T extends CityCreateArgs>(args: SelectSubset<T, CityCreateArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cities.
     * @param {CityCreateManyArgs} args - Arguments to create many Cities.
     * @example
     * // Create many Cities
     * const city = await prisma.city.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CityCreateManyArgs>(args?: SelectSubset<T, CityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cities and returns the data saved in the database.
     * @param {CityCreateManyAndReturnArgs} args - Arguments to create many Cities.
     * @example
     * // Create many Cities
     * const city = await prisma.city.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cities and only return the `cityId`
     * const cityWithCityIdOnly = await prisma.city.createManyAndReturn({
     *   select: { cityId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CityCreateManyAndReturnArgs>(args?: SelectSubset<T, CityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a City.
     * @param {CityDeleteArgs} args - Arguments to delete one City.
     * @example
     * // Delete one City
     * const City = await prisma.city.delete({
     *   where: {
     *     // ... filter to delete one City
     *   }
     * })
     * 
     */
    delete<T extends CityDeleteArgs>(args: SelectSubset<T, CityDeleteArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one City.
     * @param {CityUpdateArgs} args - Arguments to update one City.
     * @example
     * // Update one City
     * const city = await prisma.city.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CityUpdateArgs>(args: SelectSubset<T, CityUpdateArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cities.
     * @param {CityDeleteManyArgs} args - Arguments to filter Cities to delete.
     * @example
     * // Delete a few Cities
     * const { count } = await prisma.city.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CityDeleteManyArgs>(args?: SelectSubset<T, CityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cities
     * const city = await prisma.city.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CityUpdateManyArgs>(args: SelectSubset<T, CityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cities and returns the data updated in the database.
     * @param {CityUpdateManyAndReturnArgs} args - Arguments to update many Cities.
     * @example
     * // Update many Cities
     * const city = await prisma.city.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cities and only return the `cityId`
     * const cityWithCityIdOnly = await prisma.city.updateManyAndReturn({
     *   select: { cityId: true },
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
    updateManyAndReturn<T extends CityUpdateManyAndReturnArgs>(args: SelectSubset<T, CityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one City.
     * @param {CityUpsertArgs} args - Arguments to update or create a City.
     * @example
     * // Update or create a City
     * const city = await prisma.city.upsert({
     *   create: {
     *     // ... data to create a City
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the City we want to update
     *   }
     * })
     */
    upsert<T extends CityUpsertArgs>(args: SelectSubset<T, CityUpsertArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityCountArgs} args - Arguments to filter Cities to count.
     * @example
     * // Count the number of Cities
     * const count = await prisma.city.count({
     *   where: {
     *     // ... the filter for the Cities we want to count
     *   }
     * })
    **/
    count<T extends CityCountArgs>(
      args?: Subset<T, CityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a City.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CityAggregateArgs>(args: Subset<T, CityAggregateArgs>): Prisma.PrismaPromise<GetCityAggregateType<T>>

    /**
     * Group by City.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityGroupByArgs} args - Group by arguments.
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
      T extends CityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CityGroupByArgs['orderBy'] }
        : { orderBy?: CityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the City model
   */
  readonly fields: CityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for City.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    warehouses<T extends City$warehousesArgs<ExtArgs> = {}>(args?: Subset<T, City$warehousesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WareHousePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    warehouseDetails<T extends City$warehouseDetailsArgs<ExtArgs> = {}>(args?: Subset<T, City$warehouseDetailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarehouseDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Stores<T extends City$StoresArgs<ExtArgs> = {}>(args?: Subset<T, City$StoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the City model
   */
  interface CityFieldRefs {
    readonly cityId: FieldRef<"City", 'String'>
    readonly cityName: FieldRef<"City", 'String'>
    readonly state: FieldRef<"City", 'String'>
  }
    

  // Custom InputTypes
  /**
   * City findUnique
   */
  export type CityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City findUniqueOrThrow
   */
  export type CityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City findFirst
   */
  export type CityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cities.
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cities.
     */
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * City findFirstOrThrow
   */
  export type CityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cities.
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cities.
     */
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * City findMany
   */
  export type CityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which Cities to fetch.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cities.
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * City create
   */
  export type CityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * The data needed to create a City.
     */
    data: XOR<CityCreateInput, CityUncheckedCreateInput>
  }

  /**
   * City createMany
   */
  export type CityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cities.
     */
    data: CityCreateManyInput | CityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * City createManyAndReturn
   */
  export type CityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * The data used to create many Cities.
     */
    data: CityCreateManyInput | CityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * City update
   */
  export type CityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * The data needed to update a City.
     */
    data: XOR<CityUpdateInput, CityUncheckedUpdateInput>
    /**
     * Choose, which City to update.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City updateMany
   */
  export type CityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cities.
     */
    data: XOR<CityUpdateManyMutationInput, CityUncheckedUpdateManyInput>
    /**
     * Filter which Cities to update
     */
    where?: CityWhereInput
    /**
     * Limit how many Cities to update.
     */
    limit?: number
  }

  /**
   * City updateManyAndReturn
   */
  export type CityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * The data used to update Cities.
     */
    data: XOR<CityUpdateManyMutationInput, CityUncheckedUpdateManyInput>
    /**
     * Filter which Cities to update
     */
    where?: CityWhereInput
    /**
     * Limit how many Cities to update.
     */
    limit?: number
  }

  /**
   * City upsert
   */
  export type CityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * The filter to search for the City to update in case it exists.
     */
    where: CityWhereUniqueInput
    /**
     * In case the City found by the `where` argument doesn't exist, create a new City with this data.
     */
    create: XOR<CityCreateInput, CityUncheckedCreateInput>
    /**
     * In case the City was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CityUpdateInput, CityUncheckedUpdateInput>
  }

  /**
   * City delete
   */
  export type CityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter which City to delete.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City deleteMany
   */
  export type CityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cities to delete
     */
    where?: CityWhereInput
    /**
     * Limit how many Cities to delete.
     */
    limit?: number
  }

  /**
   * City.warehouses
   */
  export type City$warehousesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WareHouse
     */
    select?: WareHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WareHouse
     */
    omit?: WareHouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WareHouseInclude<ExtArgs> | null
    where?: WareHouseWhereInput
    orderBy?: WareHouseOrderByWithRelationInput | WareHouseOrderByWithRelationInput[]
    cursor?: WareHouseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WareHouseScalarFieldEnum | WareHouseScalarFieldEnum[]
  }

  /**
   * City.warehouseDetails
   */
  export type City$warehouseDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehouseDetails
     */
    select?: WarehouseDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WarehouseDetails
     */
    omit?: WarehouseDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseDetailsInclude<ExtArgs> | null
    where?: WarehouseDetailsWhereInput
    orderBy?: WarehouseDetailsOrderByWithRelationInput | WarehouseDetailsOrderByWithRelationInput[]
    cursor?: WarehouseDetailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WarehouseDetailsScalarFieldEnum | WarehouseDetailsScalarFieldEnum[]
  }

  /**
   * City.Stores
   */
  export type City$StoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    where?: StoreWhereInput
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    cursor?: StoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * City without action
   */
  export type CityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
  }


  /**
   * Model WareHouse
   */

  export type AggregateWareHouse = {
    _count: WareHouseCountAggregateOutputType | null
    _avg: WareHouseAvgAggregateOutputType | null
    _sum: WareHouseSumAggregateOutputType | null
    _min: WareHouseMinAggregateOutputType | null
    _max: WareHouseMaxAggregateOutputType | null
  }

  export type WareHouseAvgAggregateOutputType = {
    warehouseCapacity: number | null
  }

  export type WareHouseSumAggregateOutputType = {
    warehouseCapacity: number | null
  }

  export type WareHouseMinAggregateOutputType = {
    warehouseId: string | null
    warehouseName: string | null
    warehouseCapacity: number | null
    cityId: string | null
  }

  export type WareHouseMaxAggregateOutputType = {
    warehouseId: string | null
    warehouseName: string | null
    warehouseCapacity: number | null
    cityId: string | null
  }

  export type WareHouseCountAggregateOutputType = {
    warehouseId: number
    warehouseName: number
    warehouseCapacity: number
    cityId: number
    _all: number
  }


  export type WareHouseAvgAggregateInputType = {
    warehouseCapacity?: true
  }

  export type WareHouseSumAggregateInputType = {
    warehouseCapacity?: true
  }

  export type WareHouseMinAggregateInputType = {
    warehouseId?: true
    warehouseName?: true
    warehouseCapacity?: true
    cityId?: true
  }

  export type WareHouseMaxAggregateInputType = {
    warehouseId?: true
    warehouseName?: true
    warehouseCapacity?: true
    cityId?: true
  }

  export type WareHouseCountAggregateInputType = {
    warehouseId?: true
    warehouseName?: true
    warehouseCapacity?: true
    cityId?: true
    _all?: true
  }

  export type WareHouseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WareHouse to aggregate.
     */
    where?: WareHouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WareHouses to fetch.
     */
    orderBy?: WareHouseOrderByWithRelationInput | WareHouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WareHouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WareHouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WareHouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WareHouses
    **/
    _count?: true | WareHouseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WareHouseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WareHouseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WareHouseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WareHouseMaxAggregateInputType
  }

  export type GetWareHouseAggregateType<T extends WareHouseAggregateArgs> = {
        [P in keyof T & keyof AggregateWareHouse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWareHouse[P]>
      : GetScalarType<T[P], AggregateWareHouse[P]>
  }




  export type WareHouseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WareHouseWhereInput
    orderBy?: WareHouseOrderByWithAggregationInput | WareHouseOrderByWithAggregationInput[]
    by: WareHouseScalarFieldEnum[] | WareHouseScalarFieldEnum
    having?: WareHouseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WareHouseCountAggregateInputType | true
    _avg?: WareHouseAvgAggregateInputType
    _sum?: WareHouseSumAggregateInputType
    _min?: WareHouseMinAggregateInputType
    _max?: WareHouseMaxAggregateInputType
  }

  export type WareHouseGroupByOutputType = {
    warehouseId: string
    warehouseName: string
    warehouseCapacity: number
    cityId: string
    _count: WareHouseCountAggregateOutputType | null
    _avg: WareHouseAvgAggregateOutputType | null
    _sum: WareHouseSumAggregateOutputType | null
    _min: WareHouseMinAggregateOutputType | null
    _max: WareHouseMaxAggregateOutputType | null
  }

  type GetWareHouseGroupByPayload<T extends WareHouseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WareHouseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WareHouseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WareHouseGroupByOutputType[P]>
            : GetScalarType<T[P], WareHouseGroupByOutputType[P]>
        }
      >
    >


  export type WareHouseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    warehouseId?: boolean
    warehouseName?: boolean
    warehouseCapacity?: boolean
    cityId?: boolean
    city?: boolean | CityDefaultArgs<ExtArgs>
    products?: boolean | WareHouse$productsArgs<ExtArgs>
    warehouseDetails?: boolean | WareHouse$warehouseDetailsArgs<ExtArgs>
    _count?: boolean | WareHouseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wareHouse"]>

  export type WareHouseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    warehouseId?: boolean
    warehouseName?: boolean
    warehouseCapacity?: boolean
    cityId?: boolean
    city?: boolean | CityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wareHouse"]>

  export type WareHouseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    warehouseId?: boolean
    warehouseName?: boolean
    warehouseCapacity?: boolean
    cityId?: boolean
    city?: boolean | CityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wareHouse"]>

  export type WareHouseSelectScalar = {
    warehouseId?: boolean
    warehouseName?: boolean
    warehouseCapacity?: boolean
    cityId?: boolean
  }

  export type WareHouseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"warehouseId" | "warehouseName" | "warehouseCapacity" | "cityId", ExtArgs["result"]["wareHouse"]>
  export type WareHouseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    city?: boolean | CityDefaultArgs<ExtArgs>
    products?: boolean | WareHouse$productsArgs<ExtArgs>
    warehouseDetails?: boolean | WareHouse$warehouseDetailsArgs<ExtArgs>
    _count?: boolean | WareHouseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WareHouseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    city?: boolean | CityDefaultArgs<ExtArgs>
  }
  export type WareHouseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    city?: boolean | CityDefaultArgs<ExtArgs>
  }

  export type $WareHousePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WareHouse"
    objects: {
      city: Prisma.$CityPayload<ExtArgs>
      products: Prisma.$ProductPayload<ExtArgs>[]
      warehouseDetails: Prisma.$WarehouseDetailsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      warehouseId: string
      warehouseName: string
      warehouseCapacity: number
      cityId: string
    }, ExtArgs["result"]["wareHouse"]>
    composites: {}
  }

  type WareHouseGetPayload<S extends boolean | null | undefined | WareHouseDefaultArgs> = $Result.GetResult<Prisma.$WareHousePayload, S>

  type WareHouseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WareHouseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WareHouseCountAggregateInputType | true
    }

  export interface WareHouseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WareHouse'], meta: { name: 'WareHouse' } }
    /**
     * Find zero or one WareHouse that matches the filter.
     * @param {WareHouseFindUniqueArgs} args - Arguments to find a WareHouse
     * @example
     * // Get one WareHouse
     * const wareHouse = await prisma.wareHouse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WareHouseFindUniqueArgs>(args: SelectSubset<T, WareHouseFindUniqueArgs<ExtArgs>>): Prisma__WareHouseClient<$Result.GetResult<Prisma.$WareHousePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WareHouse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WareHouseFindUniqueOrThrowArgs} args - Arguments to find a WareHouse
     * @example
     * // Get one WareHouse
     * const wareHouse = await prisma.wareHouse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WareHouseFindUniqueOrThrowArgs>(args: SelectSubset<T, WareHouseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WareHouseClient<$Result.GetResult<Prisma.$WareHousePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WareHouse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WareHouseFindFirstArgs} args - Arguments to find a WareHouse
     * @example
     * // Get one WareHouse
     * const wareHouse = await prisma.wareHouse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WareHouseFindFirstArgs>(args?: SelectSubset<T, WareHouseFindFirstArgs<ExtArgs>>): Prisma__WareHouseClient<$Result.GetResult<Prisma.$WareHousePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WareHouse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WareHouseFindFirstOrThrowArgs} args - Arguments to find a WareHouse
     * @example
     * // Get one WareHouse
     * const wareHouse = await prisma.wareHouse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WareHouseFindFirstOrThrowArgs>(args?: SelectSubset<T, WareHouseFindFirstOrThrowArgs<ExtArgs>>): Prisma__WareHouseClient<$Result.GetResult<Prisma.$WareHousePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WareHouses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WareHouseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WareHouses
     * const wareHouses = await prisma.wareHouse.findMany()
     * 
     * // Get first 10 WareHouses
     * const wareHouses = await prisma.wareHouse.findMany({ take: 10 })
     * 
     * // Only select the `warehouseId`
     * const wareHouseWithWarehouseIdOnly = await prisma.wareHouse.findMany({ select: { warehouseId: true } })
     * 
     */
    findMany<T extends WareHouseFindManyArgs>(args?: SelectSubset<T, WareHouseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WareHousePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WareHouse.
     * @param {WareHouseCreateArgs} args - Arguments to create a WareHouse.
     * @example
     * // Create one WareHouse
     * const WareHouse = await prisma.wareHouse.create({
     *   data: {
     *     // ... data to create a WareHouse
     *   }
     * })
     * 
     */
    create<T extends WareHouseCreateArgs>(args: SelectSubset<T, WareHouseCreateArgs<ExtArgs>>): Prisma__WareHouseClient<$Result.GetResult<Prisma.$WareHousePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WareHouses.
     * @param {WareHouseCreateManyArgs} args - Arguments to create many WareHouses.
     * @example
     * // Create many WareHouses
     * const wareHouse = await prisma.wareHouse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WareHouseCreateManyArgs>(args?: SelectSubset<T, WareHouseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WareHouses and returns the data saved in the database.
     * @param {WareHouseCreateManyAndReturnArgs} args - Arguments to create many WareHouses.
     * @example
     * // Create many WareHouses
     * const wareHouse = await prisma.wareHouse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WareHouses and only return the `warehouseId`
     * const wareHouseWithWarehouseIdOnly = await prisma.wareHouse.createManyAndReturn({
     *   select: { warehouseId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WareHouseCreateManyAndReturnArgs>(args?: SelectSubset<T, WareHouseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WareHousePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WareHouse.
     * @param {WareHouseDeleteArgs} args - Arguments to delete one WareHouse.
     * @example
     * // Delete one WareHouse
     * const WareHouse = await prisma.wareHouse.delete({
     *   where: {
     *     // ... filter to delete one WareHouse
     *   }
     * })
     * 
     */
    delete<T extends WareHouseDeleteArgs>(args: SelectSubset<T, WareHouseDeleteArgs<ExtArgs>>): Prisma__WareHouseClient<$Result.GetResult<Prisma.$WareHousePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WareHouse.
     * @param {WareHouseUpdateArgs} args - Arguments to update one WareHouse.
     * @example
     * // Update one WareHouse
     * const wareHouse = await prisma.wareHouse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WareHouseUpdateArgs>(args: SelectSubset<T, WareHouseUpdateArgs<ExtArgs>>): Prisma__WareHouseClient<$Result.GetResult<Prisma.$WareHousePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WareHouses.
     * @param {WareHouseDeleteManyArgs} args - Arguments to filter WareHouses to delete.
     * @example
     * // Delete a few WareHouses
     * const { count } = await prisma.wareHouse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WareHouseDeleteManyArgs>(args?: SelectSubset<T, WareHouseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WareHouses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WareHouseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WareHouses
     * const wareHouse = await prisma.wareHouse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WareHouseUpdateManyArgs>(args: SelectSubset<T, WareHouseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WareHouses and returns the data updated in the database.
     * @param {WareHouseUpdateManyAndReturnArgs} args - Arguments to update many WareHouses.
     * @example
     * // Update many WareHouses
     * const wareHouse = await prisma.wareHouse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WareHouses and only return the `warehouseId`
     * const wareHouseWithWarehouseIdOnly = await prisma.wareHouse.updateManyAndReturn({
     *   select: { warehouseId: true },
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
    updateManyAndReturn<T extends WareHouseUpdateManyAndReturnArgs>(args: SelectSubset<T, WareHouseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WareHousePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WareHouse.
     * @param {WareHouseUpsertArgs} args - Arguments to update or create a WareHouse.
     * @example
     * // Update or create a WareHouse
     * const wareHouse = await prisma.wareHouse.upsert({
     *   create: {
     *     // ... data to create a WareHouse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WareHouse we want to update
     *   }
     * })
     */
    upsert<T extends WareHouseUpsertArgs>(args: SelectSubset<T, WareHouseUpsertArgs<ExtArgs>>): Prisma__WareHouseClient<$Result.GetResult<Prisma.$WareHousePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WareHouses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WareHouseCountArgs} args - Arguments to filter WareHouses to count.
     * @example
     * // Count the number of WareHouses
     * const count = await prisma.wareHouse.count({
     *   where: {
     *     // ... the filter for the WareHouses we want to count
     *   }
     * })
    **/
    count<T extends WareHouseCountArgs>(
      args?: Subset<T, WareHouseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WareHouseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WareHouse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WareHouseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WareHouseAggregateArgs>(args: Subset<T, WareHouseAggregateArgs>): Prisma.PrismaPromise<GetWareHouseAggregateType<T>>

    /**
     * Group by WareHouse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WareHouseGroupByArgs} args - Group by arguments.
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
      T extends WareHouseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WareHouseGroupByArgs['orderBy'] }
        : { orderBy?: WareHouseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WareHouseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWareHouseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WareHouse model
   */
  readonly fields: WareHouseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WareHouse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WareHouseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    city<T extends CityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CityDefaultArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    products<T extends WareHouse$productsArgs<ExtArgs> = {}>(args?: Subset<T, WareHouse$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    warehouseDetails<T extends WareHouse$warehouseDetailsArgs<ExtArgs> = {}>(args?: Subset<T, WareHouse$warehouseDetailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarehouseDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the WareHouse model
   */
  interface WareHouseFieldRefs {
    readonly warehouseId: FieldRef<"WareHouse", 'String'>
    readonly warehouseName: FieldRef<"WareHouse", 'String'>
    readonly warehouseCapacity: FieldRef<"WareHouse", 'Int'>
    readonly cityId: FieldRef<"WareHouse", 'String'>
  }
    

  // Custom InputTypes
  /**
   * WareHouse findUnique
   */
  export type WareHouseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WareHouse
     */
    select?: WareHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WareHouse
     */
    omit?: WareHouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WareHouseInclude<ExtArgs> | null
    /**
     * Filter, which WareHouse to fetch.
     */
    where: WareHouseWhereUniqueInput
  }

  /**
   * WareHouse findUniqueOrThrow
   */
  export type WareHouseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WareHouse
     */
    select?: WareHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WareHouse
     */
    omit?: WareHouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WareHouseInclude<ExtArgs> | null
    /**
     * Filter, which WareHouse to fetch.
     */
    where: WareHouseWhereUniqueInput
  }

  /**
   * WareHouse findFirst
   */
  export type WareHouseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WareHouse
     */
    select?: WareHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WareHouse
     */
    omit?: WareHouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WareHouseInclude<ExtArgs> | null
    /**
     * Filter, which WareHouse to fetch.
     */
    where?: WareHouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WareHouses to fetch.
     */
    orderBy?: WareHouseOrderByWithRelationInput | WareHouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WareHouses.
     */
    cursor?: WareHouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WareHouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WareHouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WareHouses.
     */
    distinct?: WareHouseScalarFieldEnum | WareHouseScalarFieldEnum[]
  }

  /**
   * WareHouse findFirstOrThrow
   */
  export type WareHouseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WareHouse
     */
    select?: WareHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WareHouse
     */
    omit?: WareHouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WareHouseInclude<ExtArgs> | null
    /**
     * Filter, which WareHouse to fetch.
     */
    where?: WareHouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WareHouses to fetch.
     */
    orderBy?: WareHouseOrderByWithRelationInput | WareHouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WareHouses.
     */
    cursor?: WareHouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WareHouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WareHouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WareHouses.
     */
    distinct?: WareHouseScalarFieldEnum | WareHouseScalarFieldEnum[]
  }

  /**
   * WareHouse findMany
   */
  export type WareHouseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WareHouse
     */
    select?: WareHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WareHouse
     */
    omit?: WareHouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WareHouseInclude<ExtArgs> | null
    /**
     * Filter, which WareHouses to fetch.
     */
    where?: WareHouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WareHouses to fetch.
     */
    orderBy?: WareHouseOrderByWithRelationInput | WareHouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WareHouses.
     */
    cursor?: WareHouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WareHouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WareHouses.
     */
    skip?: number
    distinct?: WareHouseScalarFieldEnum | WareHouseScalarFieldEnum[]
  }

  /**
   * WareHouse create
   */
  export type WareHouseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WareHouse
     */
    select?: WareHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WareHouse
     */
    omit?: WareHouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WareHouseInclude<ExtArgs> | null
    /**
     * The data needed to create a WareHouse.
     */
    data: XOR<WareHouseCreateInput, WareHouseUncheckedCreateInput>
  }

  /**
   * WareHouse createMany
   */
  export type WareHouseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WareHouses.
     */
    data: WareHouseCreateManyInput | WareHouseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WareHouse createManyAndReturn
   */
  export type WareHouseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WareHouse
     */
    select?: WareHouseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WareHouse
     */
    omit?: WareHouseOmit<ExtArgs> | null
    /**
     * The data used to create many WareHouses.
     */
    data: WareHouseCreateManyInput | WareHouseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WareHouseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WareHouse update
   */
  export type WareHouseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WareHouse
     */
    select?: WareHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WareHouse
     */
    omit?: WareHouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WareHouseInclude<ExtArgs> | null
    /**
     * The data needed to update a WareHouse.
     */
    data: XOR<WareHouseUpdateInput, WareHouseUncheckedUpdateInput>
    /**
     * Choose, which WareHouse to update.
     */
    where: WareHouseWhereUniqueInput
  }

  /**
   * WareHouse updateMany
   */
  export type WareHouseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WareHouses.
     */
    data: XOR<WareHouseUpdateManyMutationInput, WareHouseUncheckedUpdateManyInput>
    /**
     * Filter which WareHouses to update
     */
    where?: WareHouseWhereInput
    /**
     * Limit how many WareHouses to update.
     */
    limit?: number
  }

  /**
   * WareHouse updateManyAndReturn
   */
  export type WareHouseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WareHouse
     */
    select?: WareHouseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WareHouse
     */
    omit?: WareHouseOmit<ExtArgs> | null
    /**
     * The data used to update WareHouses.
     */
    data: XOR<WareHouseUpdateManyMutationInput, WareHouseUncheckedUpdateManyInput>
    /**
     * Filter which WareHouses to update
     */
    where?: WareHouseWhereInput
    /**
     * Limit how many WareHouses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WareHouseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WareHouse upsert
   */
  export type WareHouseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WareHouse
     */
    select?: WareHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WareHouse
     */
    omit?: WareHouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WareHouseInclude<ExtArgs> | null
    /**
     * The filter to search for the WareHouse to update in case it exists.
     */
    where: WareHouseWhereUniqueInput
    /**
     * In case the WareHouse found by the `where` argument doesn't exist, create a new WareHouse with this data.
     */
    create: XOR<WareHouseCreateInput, WareHouseUncheckedCreateInput>
    /**
     * In case the WareHouse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WareHouseUpdateInput, WareHouseUncheckedUpdateInput>
  }

  /**
   * WareHouse delete
   */
  export type WareHouseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WareHouse
     */
    select?: WareHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WareHouse
     */
    omit?: WareHouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WareHouseInclude<ExtArgs> | null
    /**
     * Filter which WareHouse to delete.
     */
    where: WareHouseWhereUniqueInput
  }

  /**
   * WareHouse deleteMany
   */
  export type WareHouseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WareHouses to delete
     */
    where?: WareHouseWhereInput
    /**
     * Limit how many WareHouses to delete.
     */
    limit?: number
  }

  /**
   * WareHouse.products
   */
  export type WareHouse$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * WareHouse.warehouseDetails
   */
  export type WareHouse$warehouseDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehouseDetails
     */
    select?: WarehouseDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WarehouseDetails
     */
    omit?: WarehouseDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseDetailsInclude<ExtArgs> | null
    where?: WarehouseDetailsWhereInput
    orderBy?: WarehouseDetailsOrderByWithRelationInput | WarehouseDetailsOrderByWithRelationInput[]
    cursor?: WarehouseDetailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WarehouseDetailsScalarFieldEnum | WarehouseDetailsScalarFieldEnum[]
  }

  /**
   * WareHouse without action
   */
  export type WareHouseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WareHouse
     */
    select?: WareHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WareHouse
     */
    omit?: WareHouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WareHouseInclude<ExtArgs> | null
  }


  /**
   * Model WarehouseDetails
   */

  export type AggregateWarehouseDetails = {
    _count: WarehouseDetailsCountAggregateOutputType | null
    _min: WarehouseDetailsMinAggregateOutputType | null
    _max: WarehouseDetailsMaxAggregateOutputType | null
  }

  export type WarehouseDetailsMinAggregateOutputType = {
    warehouseId: string | null
    cityId: string | null
    userId: string | null
  }

  export type WarehouseDetailsMaxAggregateOutputType = {
    warehouseId: string | null
    cityId: string | null
    userId: string | null
  }

  export type WarehouseDetailsCountAggregateOutputType = {
    warehouseId: number
    cityId: number
    userId: number
    _all: number
  }


  export type WarehouseDetailsMinAggregateInputType = {
    warehouseId?: true
    cityId?: true
    userId?: true
  }

  export type WarehouseDetailsMaxAggregateInputType = {
    warehouseId?: true
    cityId?: true
    userId?: true
  }

  export type WarehouseDetailsCountAggregateInputType = {
    warehouseId?: true
    cityId?: true
    userId?: true
    _all?: true
  }

  export type WarehouseDetailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WarehouseDetails to aggregate.
     */
    where?: WarehouseDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WarehouseDetails to fetch.
     */
    orderBy?: WarehouseDetailsOrderByWithRelationInput | WarehouseDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WarehouseDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WarehouseDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WarehouseDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WarehouseDetails
    **/
    _count?: true | WarehouseDetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WarehouseDetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WarehouseDetailsMaxAggregateInputType
  }

  export type GetWarehouseDetailsAggregateType<T extends WarehouseDetailsAggregateArgs> = {
        [P in keyof T & keyof AggregateWarehouseDetails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWarehouseDetails[P]>
      : GetScalarType<T[P], AggregateWarehouseDetails[P]>
  }




  export type WarehouseDetailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WarehouseDetailsWhereInput
    orderBy?: WarehouseDetailsOrderByWithAggregationInput | WarehouseDetailsOrderByWithAggregationInput[]
    by: WarehouseDetailsScalarFieldEnum[] | WarehouseDetailsScalarFieldEnum
    having?: WarehouseDetailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WarehouseDetailsCountAggregateInputType | true
    _min?: WarehouseDetailsMinAggregateInputType
    _max?: WarehouseDetailsMaxAggregateInputType
  }

  export type WarehouseDetailsGroupByOutputType = {
    warehouseId: string
    cityId: string
    userId: string
    _count: WarehouseDetailsCountAggregateOutputType | null
    _min: WarehouseDetailsMinAggregateOutputType | null
    _max: WarehouseDetailsMaxAggregateOutputType | null
  }

  type GetWarehouseDetailsGroupByPayload<T extends WarehouseDetailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WarehouseDetailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WarehouseDetailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WarehouseDetailsGroupByOutputType[P]>
            : GetScalarType<T[P], WarehouseDetailsGroupByOutputType[P]>
        }
      >
    >


  export type WarehouseDetailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    warehouseId?: boolean
    cityId?: boolean
    userId?: boolean
    warehouse?: boolean | WareHouseDefaultArgs<ExtArgs>
    city?: boolean | CityDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["warehouseDetails"]>

  export type WarehouseDetailsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    warehouseId?: boolean
    cityId?: boolean
    userId?: boolean
    warehouse?: boolean | WareHouseDefaultArgs<ExtArgs>
    city?: boolean | CityDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["warehouseDetails"]>

  export type WarehouseDetailsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    warehouseId?: boolean
    cityId?: boolean
    userId?: boolean
    warehouse?: boolean | WareHouseDefaultArgs<ExtArgs>
    city?: boolean | CityDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["warehouseDetails"]>

  export type WarehouseDetailsSelectScalar = {
    warehouseId?: boolean
    cityId?: boolean
    userId?: boolean
  }

  export type WarehouseDetailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"warehouseId" | "cityId" | "userId", ExtArgs["result"]["warehouseDetails"]>
  export type WarehouseDetailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    warehouse?: boolean | WareHouseDefaultArgs<ExtArgs>
    city?: boolean | CityDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WarehouseDetailsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    warehouse?: boolean | WareHouseDefaultArgs<ExtArgs>
    city?: boolean | CityDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WarehouseDetailsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    warehouse?: boolean | WareHouseDefaultArgs<ExtArgs>
    city?: boolean | CityDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WarehouseDetailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WarehouseDetails"
    objects: {
      warehouse: Prisma.$WareHousePayload<ExtArgs>
      city: Prisma.$CityPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      warehouseId: string
      cityId: string
      userId: string
    }, ExtArgs["result"]["warehouseDetails"]>
    composites: {}
  }

  type WarehouseDetailsGetPayload<S extends boolean | null | undefined | WarehouseDetailsDefaultArgs> = $Result.GetResult<Prisma.$WarehouseDetailsPayload, S>

  type WarehouseDetailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WarehouseDetailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WarehouseDetailsCountAggregateInputType | true
    }

  export interface WarehouseDetailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WarehouseDetails'], meta: { name: 'WarehouseDetails' } }
    /**
     * Find zero or one WarehouseDetails that matches the filter.
     * @param {WarehouseDetailsFindUniqueArgs} args - Arguments to find a WarehouseDetails
     * @example
     * // Get one WarehouseDetails
     * const warehouseDetails = await prisma.warehouseDetails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WarehouseDetailsFindUniqueArgs>(args: SelectSubset<T, WarehouseDetailsFindUniqueArgs<ExtArgs>>): Prisma__WarehouseDetailsClient<$Result.GetResult<Prisma.$WarehouseDetailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WarehouseDetails that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WarehouseDetailsFindUniqueOrThrowArgs} args - Arguments to find a WarehouseDetails
     * @example
     * // Get one WarehouseDetails
     * const warehouseDetails = await prisma.warehouseDetails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WarehouseDetailsFindUniqueOrThrowArgs>(args: SelectSubset<T, WarehouseDetailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WarehouseDetailsClient<$Result.GetResult<Prisma.$WarehouseDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WarehouseDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseDetailsFindFirstArgs} args - Arguments to find a WarehouseDetails
     * @example
     * // Get one WarehouseDetails
     * const warehouseDetails = await prisma.warehouseDetails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WarehouseDetailsFindFirstArgs>(args?: SelectSubset<T, WarehouseDetailsFindFirstArgs<ExtArgs>>): Prisma__WarehouseDetailsClient<$Result.GetResult<Prisma.$WarehouseDetailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WarehouseDetails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseDetailsFindFirstOrThrowArgs} args - Arguments to find a WarehouseDetails
     * @example
     * // Get one WarehouseDetails
     * const warehouseDetails = await prisma.warehouseDetails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WarehouseDetailsFindFirstOrThrowArgs>(args?: SelectSubset<T, WarehouseDetailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__WarehouseDetailsClient<$Result.GetResult<Prisma.$WarehouseDetailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WarehouseDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseDetailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WarehouseDetails
     * const warehouseDetails = await prisma.warehouseDetails.findMany()
     * 
     * // Get first 10 WarehouseDetails
     * const warehouseDetails = await prisma.warehouseDetails.findMany({ take: 10 })
     * 
     * // Only select the `warehouseId`
     * const warehouseDetailsWithWarehouseIdOnly = await prisma.warehouseDetails.findMany({ select: { warehouseId: true } })
     * 
     */
    findMany<T extends WarehouseDetailsFindManyArgs>(args?: SelectSubset<T, WarehouseDetailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarehouseDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WarehouseDetails.
     * @param {WarehouseDetailsCreateArgs} args - Arguments to create a WarehouseDetails.
     * @example
     * // Create one WarehouseDetails
     * const WarehouseDetails = await prisma.warehouseDetails.create({
     *   data: {
     *     // ... data to create a WarehouseDetails
     *   }
     * })
     * 
     */
    create<T extends WarehouseDetailsCreateArgs>(args: SelectSubset<T, WarehouseDetailsCreateArgs<ExtArgs>>): Prisma__WarehouseDetailsClient<$Result.GetResult<Prisma.$WarehouseDetailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WarehouseDetails.
     * @param {WarehouseDetailsCreateManyArgs} args - Arguments to create many WarehouseDetails.
     * @example
     * // Create many WarehouseDetails
     * const warehouseDetails = await prisma.warehouseDetails.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WarehouseDetailsCreateManyArgs>(args?: SelectSubset<T, WarehouseDetailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WarehouseDetails and returns the data saved in the database.
     * @param {WarehouseDetailsCreateManyAndReturnArgs} args - Arguments to create many WarehouseDetails.
     * @example
     * // Create many WarehouseDetails
     * const warehouseDetails = await prisma.warehouseDetails.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WarehouseDetails and only return the `warehouseId`
     * const warehouseDetailsWithWarehouseIdOnly = await prisma.warehouseDetails.createManyAndReturn({
     *   select: { warehouseId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WarehouseDetailsCreateManyAndReturnArgs>(args?: SelectSubset<T, WarehouseDetailsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarehouseDetailsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WarehouseDetails.
     * @param {WarehouseDetailsDeleteArgs} args - Arguments to delete one WarehouseDetails.
     * @example
     * // Delete one WarehouseDetails
     * const WarehouseDetails = await prisma.warehouseDetails.delete({
     *   where: {
     *     // ... filter to delete one WarehouseDetails
     *   }
     * })
     * 
     */
    delete<T extends WarehouseDetailsDeleteArgs>(args: SelectSubset<T, WarehouseDetailsDeleteArgs<ExtArgs>>): Prisma__WarehouseDetailsClient<$Result.GetResult<Prisma.$WarehouseDetailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WarehouseDetails.
     * @param {WarehouseDetailsUpdateArgs} args - Arguments to update one WarehouseDetails.
     * @example
     * // Update one WarehouseDetails
     * const warehouseDetails = await prisma.warehouseDetails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WarehouseDetailsUpdateArgs>(args: SelectSubset<T, WarehouseDetailsUpdateArgs<ExtArgs>>): Prisma__WarehouseDetailsClient<$Result.GetResult<Prisma.$WarehouseDetailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WarehouseDetails.
     * @param {WarehouseDetailsDeleteManyArgs} args - Arguments to filter WarehouseDetails to delete.
     * @example
     * // Delete a few WarehouseDetails
     * const { count } = await prisma.warehouseDetails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WarehouseDetailsDeleteManyArgs>(args?: SelectSubset<T, WarehouseDetailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WarehouseDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseDetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WarehouseDetails
     * const warehouseDetails = await prisma.warehouseDetails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WarehouseDetailsUpdateManyArgs>(args: SelectSubset<T, WarehouseDetailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WarehouseDetails and returns the data updated in the database.
     * @param {WarehouseDetailsUpdateManyAndReturnArgs} args - Arguments to update many WarehouseDetails.
     * @example
     * // Update many WarehouseDetails
     * const warehouseDetails = await prisma.warehouseDetails.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WarehouseDetails and only return the `warehouseId`
     * const warehouseDetailsWithWarehouseIdOnly = await prisma.warehouseDetails.updateManyAndReturn({
     *   select: { warehouseId: true },
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
    updateManyAndReturn<T extends WarehouseDetailsUpdateManyAndReturnArgs>(args: SelectSubset<T, WarehouseDetailsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarehouseDetailsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WarehouseDetails.
     * @param {WarehouseDetailsUpsertArgs} args - Arguments to update or create a WarehouseDetails.
     * @example
     * // Update or create a WarehouseDetails
     * const warehouseDetails = await prisma.warehouseDetails.upsert({
     *   create: {
     *     // ... data to create a WarehouseDetails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WarehouseDetails we want to update
     *   }
     * })
     */
    upsert<T extends WarehouseDetailsUpsertArgs>(args: SelectSubset<T, WarehouseDetailsUpsertArgs<ExtArgs>>): Prisma__WarehouseDetailsClient<$Result.GetResult<Prisma.$WarehouseDetailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WarehouseDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseDetailsCountArgs} args - Arguments to filter WarehouseDetails to count.
     * @example
     * // Count the number of WarehouseDetails
     * const count = await prisma.warehouseDetails.count({
     *   where: {
     *     // ... the filter for the WarehouseDetails we want to count
     *   }
     * })
    **/
    count<T extends WarehouseDetailsCountArgs>(
      args?: Subset<T, WarehouseDetailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WarehouseDetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WarehouseDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseDetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WarehouseDetailsAggregateArgs>(args: Subset<T, WarehouseDetailsAggregateArgs>): Prisma.PrismaPromise<GetWarehouseDetailsAggregateType<T>>

    /**
     * Group by WarehouseDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseDetailsGroupByArgs} args - Group by arguments.
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
      T extends WarehouseDetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WarehouseDetailsGroupByArgs['orderBy'] }
        : { orderBy?: WarehouseDetailsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WarehouseDetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWarehouseDetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WarehouseDetails model
   */
  readonly fields: WarehouseDetailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WarehouseDetails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WarehouseDetailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    warehouse<T extends WareHouseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WareHouseDefaultArgs<ExtArgs>>): Prisma__WareHouseClient<$Result.GetResult<Prisma.$WareHousePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    city<T extends CityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CityDefaultArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WarehouseDetails model
   */
  interface WarehouseDetailsFieldRefs {
    readonly warehouseId: FieldRef<"WarehouseDetails", 'String'>
    readonly cityId: FieldRef<"WarehouseDetails", 'String'>
    readonly userId: FieldRef<"WarehouseDetails", 'String'>
  }
    

  // Custom InputTypes
  /**
   * WarehouseDetails findUnique
   */
  export type WarehouseDetailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehouseDetails
     */
    select?: WarehouseDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WarehouseDetails
     */
    omit?: WarehouseDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseDetailsInclude<ExtArgs> | null
    /**
     * Filter, which WarehouseDetails to fetch.
     */
    where: WarehouseDetailsWhereUniqueInput
  }

  /**
   * WarehouseDetails findUniqueOrThrow
   */
  export type WarehouseDetailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehouseDetails
     */
    select?: WarehouseDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WarehouseDetails
     */
    omit?: WarehouseDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseDetailsInclude<ExtArgs> | null
    /**
     * Filter, which WarehouseDetails to fetch.
     */
    where: WarehouseDetailsWhereUniqueInput
  }

  /**
   * WarehouseDetails findFirst
   */
  export type WarehouseDetailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehouseDetails
     */
    select?: WarehouseDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WarehouseDetails
     */
    omit?: WarehouseDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseDetailsInclude<ExtArgs> | null
    /**
     * Filter, which WarehouseDetails to fetch.
     */
    where?: WarehouseDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WarehouseDetails to fetch.
     */
    orderBy?: WarehouseDetailsOrderByWithRelationInput | WarehouseDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WarehouseDetails.
     */
    cursor?: WarehouseDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WarehouseDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WarehouseDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WarehouseDetails.
     */
    distinct?: WarehouseDetailsScalarFieldEnum | WarehouseDetailsScalarFieldEnum[]
  }

  /**
   * WarehouseDetails findFirstOrThrow
   */
  export type WarehouseDetailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehouseDetails
     */
    select?: WarehouseDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WarehouseDetails
     */
    omit?: WarehouseDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseDetailsInclude<ExtArgs> | null
    /**
     * Filter, which WarehouseDetails to fetch.
     */
    where?: WarehouseDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WarehouseDetails to fetch.
     */
    orderBy?: WarehouseDetailsOrderByWithRelationInput | WarehouseDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WarehouseDetails.
     */
    cursor?: WarehouseDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WarehouseDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WarehouseDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WarehouseDetails.
     */
    distinct?: WarehouseDetailsScalarFieldEnum | WarehouseDetailsScalarFieldEnum[]
  }

  /**
   * WarehouseDetails findMany
   */
  export type WarehouseDetailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehouseDetails
     */
    select?: WarehouseDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WarehouseDetails
     */
    omit?: WarehouseDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseDetailsInclude<ExtArgs> | null
    /**
     * Filter, which WarehouseDetails to fetch.
     */
    where?: WarehouseDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WarehouseDetails to fetch.
     */
    orderBy?: WarehouseDetailsOrderByWithRelationInput | WarehouseDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WarehouseDetails.
     */
    cursor?: WarehouseDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WarehouseDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WarehouseDetails.
     */
    skip?: number
    distinct?: WarehouseDetailsScalarFieldEnum | WarehouseDetailsScalarFieldEnum[]
  }

  /**
   * WarehouseDetails create
   */
  export type WarehouseDetailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehouseDetails
     */
    select?: WarehouseDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WarehouseDetails
     */
    omit?: WarehouseDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseDetailsInclude<ExtArgs> | null
    /**
     * The data needed to create a WarehouseDetails.
     */
    data: XOR<WarehouseDetailsCreateInput, WarehouseDetailsUncheckedCreateInput>
  }

  /**
   * WarehouseDetails createMany
   */
  export type WarehouseDetailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WarehouseDetails.
     */
    data: WarehouseDetailsCreateManyInput | WarehouseDetailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WarehouseDetails createManyAndReturn
   */
  export type WarehouseDetailsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehouseDetails
     */
    select?: WarehouseDetailsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WarehouseDetails
     */
    omit?: WarehouseDetailsOmit<ExtArgs> | null
    /**
     * The data used to create many WarehouseDetails.
     */
    data: WarehouseDetailsCreateManyInput | WarehouseDetailsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseDetailsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WarehouseDetails update
   */
  export type WarehouseDetailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehouseDetails
     */
    select?: WarehouseDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WarehouseDetails
     */
    omit?: WarehouseDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseDetailsInclude<ExtArgs> | null
    /**
     * The data needed to update a WarehouseDetails.
     */
    data: XOR<WarehouseDetailsUpdateInput, WarehouseDetailsUncheckedUpdateInput>
    /**
     * Choose, which WarehouseDetails to update.
     */
    where: WarehouseDetailsWhereUniqueInput
  }

  /**
   * WarehouseDetails updateMany
   */
  export type WarehouseDetailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WarehouseDetails.
     */
    data: XOR<WarehouseDetailsUpdateManyMutationInput, WarehouseDetailsUncheckedUpdateManyInput>
    /**
     * Filter which WarehouseDetails to update
     */
    where?: WarehouseDetailsWhereInput
    /**
     * Limit how many WarehouseDetails to update.
     */
    limit?: number
  }

  /**
   * WarehouseDetails updateManyAndReturn
   */
  export type WarehouseDetailsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehouseDetails
     */
    select?: WarehouseDetailsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WarehouseDetails
     */
    omit?: WarehouseDetailsOmit<ExtArgs> | null
    /**
     * The data used to update WarehouseDetails.
     */
    data: XOR<WarehouseDetailsUpdateManyMutationInput, WarehouseDetailsUncheckedUpdateManyInput>
    /**
     * Filter which WarehouseDetails to update
     */
    where?: WarehouseDetailsWhereInput
    /**
     * Limit how many WarehouseDetails to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseDetailsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WarehouseDetails upsert
   */
  export type WarehouseDetailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehouseDetails
     */
    select?: WarehouseDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WarehouseDetails
     */
    omit?: WarehouseDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseDetailsInclude<ExtArgs> | null
    /**
     * The filter to search for the WarehouseDetails to update in case it exists.
     */
    where: WarehouseDetailsWhereUniqueInput
    /**
     * In case the WarehouseDetails found by the `where` argument doesn't exist, create a new WarehouseDetails with this data.
     */
    create: XOR<WarehouseDetailsCreateInput, WarehouseDetailsUncheckedCreateInput>
    /**
     * In case the WarehouseDetails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WarehouseDetailsUpdateInput, WarehouseDetailsUncheckedUpdateInput>
  }

  /**
   * WarehouseDetails delete
   */
  export type WarehouseDetailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehouseDetails
     */
    select?: WarehouseDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WarehouseDetails
     */
    omit?: WarehouseDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseDetailsInclude<ExtArgs> | null
    /**
     * Filter which WarehouseDetails to delete.
     */
    where: WarehouseDetailsWhereUniqueInput
  }

  /**
   * WarehouseDetails deleteMany
   */
  export type WarehouseDetailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WarehouseDetails to delete
     */
    where?: WarehouseDetailsWhereInput
    /**
     * Limit how many WarehouseDetails to delete.
     */
    limit?: number
  }

  /**
   * WarehouseDetails without action
   */
  export type WarehouseDetailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehouseDetails
     */
    select?: WarehouseDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WarehouseDetails
     */
    omit?: WarehouseDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseDetailsInclude<ExtArgs> | null
  }


  /**
   * Model Sales
   */

  export type AggregateSales = {
    _count: SalesCountAggregateOutputType | null
    _avg: SalesAvgAggregateOutputType | null
    _sum: SalesSumAggregateOutputType | null
    _min: SalesMinAggregateOutputType | null
    _max: SalesMaxAggregateOutputType | null
  }

  export type SalesAvgAggregateOutputType = {
    quantity: number | null
    price: number | null
  }

  export type SalesSumAggregateOutputType = {
    quantity: number | null
    price: number | null
  }

  export type SalesMinAggregateOutputType = {
    id: string | null
    productName: string | null
    quantity: number | null
    price: number | null
    productId: string | null
  }

  export type SalesMaxAggregateOutputType = {
    id: string | null
    productName: string | null
    quantity: number | null
    price: number | null
    productId: string | null
  }

  export type SalesCountAggregateOutputType = {
    id: number
    productName: number
    quantity: number
    price: number
    productId: number
    _all: number
  }


  export type SalesAvgAggregateInputType = {
    quantity?: true
    price?: true
  }

  export type SalesSumAggregateInputType = {
    quantity?: true
    price?: true
  }

  export type SalesMinAggregateInputType = {
    id?: true
    productName?: true
    quantity?: true
    price?: true
    productId?: true
  }

  export type SalesMaxAggregateInputType = {
    id?: true
    productName?: true
    quantity?: true
    price?: true
    productId?: true
  }

  export type SalesCountAggregateInputType = {
    id?: true
    productName?: true
    quantity?: true
    price?: true
    productId?: true
    _all?: true
  }

  export type SalesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sales to aggregate.
     */
    where?: SalesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SalesOrderByWithRelationInput | SalesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SalesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sales
    **/
    _count?: true | SalesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SalesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SalesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalesMaxAggregateInputType
  }

  export type GetSalesAggregateType<T extends SalesAggregateArgs> = {
        [P in keyof T & keyof AggregateSales]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSales[P]>
      : GetScalarType<T[P], AggregateSales[P]>
  }




  export type SalesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalesWhereInput
    orderBy?: SalesOrderByWithAggregationInput | SalesOrderByWithAggregationInput[]
    by: SalesScalarFieldEnum[] | SalesScalarFieldEnum
    having?: SalesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalesCountAggregateInputType | true
    _avg?: SalesAvgAggregateInputType
    _sum?: SalesSumAggregateInputType
    _min?: SalesMinAggregateInputType
    _max?: SalesMaxAggregateInputType
  }

  export type SalesGroupByOutputType = {
    id: string
    productName: string
    quantity: number
    price: number
    productId: string
    _count: SalesCountAggregateOutputType | null
    _avg: SalesAvgAggregateOutputType | null
    _sum: SalesSumAggregateOutputType | null
    _min: SalesMinAggregateOutputType | null
    _max: SalesMaxAggregateOutputType | null
  }

  type GetSalesGroupByPayload<T extends SalesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalesGroupByOutputType[P]>
            : GetScalarType<T[P], SalesGroupByOutputType[P]>
        }
      >
    >


  export type SalesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productName?: boolean
    quantity?: boolean
    price?: boolean
    productId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sales"]>

  export type SalesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productName?: boolean
    quantity?: boolean
    price?: boolean
    productId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sales"]>

  export type SalesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productName?: boolean
    quantity?: boolean
    price?: boolean
    productId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sales"]>

  export type SalesSelectScalar = {
    id?: boolean
    productName?: boolean
    quantity?: boolean
    price?: boolean
    productId?: boolean
  }

  export type SalesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productName" | "quantity" | "price" | "productId", ExtArgs["result"]["sales"]>
  export type SalesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type SalesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type SalesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $SalesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sales"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productName: string
      quantity: number
      price: number
      productId: string
    }, ExtArgs["result"]["sales"]>
    composites: {}
  }

  type SalesGetPayload<S extends boolean | null | undefined | SalesDefaultArgs> = $Result.GetResult<Prisma.$SalesPayload, S>

  type SalesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SalesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SalesCountAggregateInputType | true
    }

  export interface SalesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sales'], meta: { name: 'Sales' } }
    /**
     * Find zero or one Sales that matches the filter.
     * @param {SalesFindUniqueArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SalesFindUniqueArgs>(args: SelectSubset<T, SalesFindUniqueArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sales that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SalesFindUniqueOrThrowArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SalesFindUniqueOrThrowArgs>(args: SelectSubset<T, SalesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesFindFirstArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SalesFindFirstArgs>(args?: SelectSubset<T, SalesFindFirstArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sales that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesFindFirstOrThrowArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SalesFindFirstOrThrowArgs>(args?: SelectSubset<T, SalesFindFirstOrThrowArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sales
     * const sales = await prisma.sales.findMany()
     * 
     * // Get first 10 Sales
     * const sales = await prisma.sales.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const salesWithIdOnly = await prisma.sales.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SalesFindManyArgs>(args?: SelectSubset<T, SalesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sales.
     * @param {SalesCreateArgs} args - Arguments to create a Sales.
     * @example
     * // Create one Sales
     * const Sales = await prisma.sales.create({
     *   data: {
     *     // ... data to create a Sales
     *   }
     * })
     * 
     */
    create<T extends SalesCreateArgs>(args: SelectSubset<T, SalesCreateArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sales.
     * @param {SalesCreateManyArgs} args - Arguments to create many Sales.
     * @example
     * // Create many Sales
     * const sales = await prisma.sales.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SalesCreateManyArgs>(args?: SelectSubset<T, SalesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sales and returns the data saved in the database.
     * @param {SalesCreateManyAndReturnArgs} args - Arguments to create many Sales.
     * @example
     * // Create many Sales
     * const sales = await prisma.sales.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sales and only return the `id`
     * const salesWithIdOnly = await prisma.sales.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SalesCreateManyAndReturnArgs>(args?: SelectSubset<T, SalesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sales.
     * @param {SalesDeleteArgs} args - Arguments to delete one Sales.
     * @example
     * // Delete one Sales
     * const Sales = await prisma.sales.delete({
     *   where: {
     *     // ... filter to delete one Sales
     *   }
     * })
     * 
     */
    delete<T extends SalesDeleteArgs>(args: SelectSubset<T, SalesDeleteArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sales.
     * @param {SalesUpdateArgs} args - Arguments to update one Sales.
     * @example
     * // Update one Sales
     * const sales = await prisma.sales.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SalesUpdateArgs>(args: SelectSubset<T, SalesUpdateArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sales.
     * @param {SalesDeleteManyArgs} args - Arguments to filter Sales to delete.
     * @example
     * // Delete a few Sales
     * const { count } = await prisma.sales.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SalesDeleteManyArgs>(args?: SelectSubset<T, SalesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sales
     * const sales = await prisma.sales.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SalesUpdateManyArgs>(args: SelectSubset<T, SalesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales and returns the data updated in the database.
     * @param {SalesUpdateManyAndReturnArgs} args - Arguments to update many Sales.
     * @example
     * // Update many Sales
     * const sales = await prisma.sales.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sales and only return the `id`
     * const salesWithIdOnly = await prisma.sales.updateManyAndReturn({
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
    updateManyAndReturn<T extends SalesUpdateManyAndReturnArgs>(args: SelectSubset<T, SalesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sales.
     * @param {SalesUpsertArgs} args - Arguments to update or create a Sales.
     * @example
     * // Update or create a Sales
     * const sales = await prisma.sales.upsert({
     *   create: {
     *     // ... data to create a Sales
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sales we want to update
     *   }
     * })
     */
    upsert<T extends SalesUpsertArgs>(args: SelectSubset<T, SalesUpsertArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesCountArgs} args - Arguments to filter Sales to count.
     * @example
     * // Count the number of Sales
     * const count = await prisma.sales.count({
     *   where: {
     *     // ... the filter for the Sales we want to count
     *   }
     * })
    **/
    count<T extends SalesCountArgs>(
      args?: Subset<T, SalesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SalesAggregateArgs>(args: Subset<T, SalesAggregateArgs>): Prisma.PrismaPromise<GetSalesAggregateType<T>>

    /**
     * Group by Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesGroupByArgs} args - Group by arguments.
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
      T extends SalesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalesGroupByArgs['orderBy'] }
        : { orderBy?: SalesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SalesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sales model
   */
  readonly fields: SalesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sales.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SalesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Sales model
   */
  interface SalesFieldRefs {
    readonly id: FieldRef<"Sales", 'String'>
    readonly productName: FieldRef<"Sales", 'String'>
    readonly quantity: FieldRef<"Sales", 'Int'>
    readonly price: FieldRef<"Sales", 'Float'>
    readonly productId: FieldRef<"Sales", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Sales findUnique
   */
  export type SalesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
    /**
     * Filter, which Sales to fetch.
     */
    where: SalesWhereUniqueInput
  }

  /**
   * Sales findUniqueOrThrow
   */
  export type SalesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
    /**
     * Filter, which Sales to fetch.
     */
    where: SalesWhereUniqueInput
  }

  /**
   * Sales findFirst
   */
  export type SalesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
    /**
     * Filter, which Sales to fetch.
     */
    where?: SalesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SalesOrderByWithRelationInput | SalesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sales.
     */
    cursor?: SalesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sales.
     */
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[]
  }

  /**
   * Sales findFirstOrThrow
   */
  export type SalesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
    /**
     * Filter, which Sales to fetch.
     */
    where?: SalesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SalesOrderByWithRelationInput | SalesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sales.
     */
    cursor?: SalesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sales.
     */
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[]
  }

  /**
   * Sales findMany
   */
  export type SalesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
    /**
     * Filter, which Sales to fetch.
     */
    where?: SalesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SalesOrderByWithRelationInput | SalesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sales.
     */
    cursor?: SalesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[]
  }

  /**
   * Sales create
   */
  export type SalesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
    /**
     * The data needed to create a Sales.
     */
    data: XOR<SalesCreateInput, SalesUncheckedCreateInput>
  }

  /**
   * Sales createMany
   */
  export type SalesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sales.
     */
    data: SalesCreateManyInput | SalesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sales createManyAndReturn
   */
  export type SalesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * The data used to create many Sales.
     */
    data: SalesCreateManyInput | SalesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sales update
   */
  export type SalesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
    /**
     * The data needed to update a Sales.
     */
    data: XOR<SalesUpdateInput, SalesUncheckedUpdateInput>
    /**
     * Choose, which Sales to update.
     */
    where: SalesWhereUniqueInput
  }

  /**
   * Sales updateMany
   */
  export type SalesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sales.
     */
    data: XOR<SalesUpdateManyMutationInput, SalesUncheckedUpdateManyInput>
    /**
     * Filter which Sales to update
     */
    where?: SalesWhereInput
    /**
     * Limit how many Sales to update.
     */
    limit?: number
  }

  /**
   * Sales updateManyAndReturn
   */
  export type SalesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * The data used to update Sales.
     */
    data: XOR<SalesUpdateManyMutationInput, SalesUncheckedUpdateManyInput>
    /**
     * Filter which Sales to update
     */
    where?: SalesWhereInput
    /**
     * Limit how many Sales to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sales upsert
   */
  export type SalesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
    /**
     * The filter to search for the Sales to update in case it exists.
     */
    where: SalesWhereUniqueInput
    /**
     * In case the Sales found by the `where` argument doesn't exist, create a new Sales with this data.
     */
    create: XOR<SalesCreateInput, SalesUncheckedCreateInput>
    /**
     * In case the Sales was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalesUpdateInput, SalesUncheckedUpdateInput>
  }

  /**
   * Sales delete
   */
  export type SalesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
    /**
     * Filter which Sales to delete.
     */
    where: SalesWhereUniqueInput
  }

  /**
   * Sales deleteMany
   */
  export type SalesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sales to delete
     */
    where?: SalesWhereInput
    /**
     * Limit how many Sales to delete.
     */
    limit?: number
  }

  /**
   * Sales without action
   */
  export type SalesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
  }


  /**
   * Model Store
   */

  export type AggregateStore = {
    _count: StoreCountAggregateOutputType | null
    _min: StoreMinAggregateOutputType | null
    _max: StoreMaxAggregateOutputType | null
  }

  export type StoreMinAggregateOutputType = {
    storeId: string | null
    storeName: string | null
    vendorId: string | null
    cityId: string | null
  }

  export type StoreMaxAggregateOutputType = {
    storeId: string | null
    storeName: string | null
    vendorId: string | null
    cityId: string | null
  }

  export type StoreCountAggregateOutputType = {
    storeId: number
    storeName: number
    vendorId: number
    cityId: number
    _all: number
  }


  export type StoreMinAggregateInputType = {
    storeId?: true
    storeName?: true
    vendorId?: true
    cityId?: true
  }

  export type StoreMaxAggregateInputType = {
    storeId?: true
    storeName?: true
    vendorId?: true
    cityId?: true
  }

  export type StoreCountAggregateInputType = {
    storeId?: true
    storeName?: true
    vendorId?: true
    cityId?: true
    _all?: true
  }

  export type StoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Store to aggregate.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stores
    **/
    _count?: true | StoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoreMaxAggregateInputType
  }

  export type GetStoreAggregateType<T extends StoreAggregateArgs> = {
        [P in keyof T & keyof AggregateStore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStore[P]>
      : GetScalarType<T[P], AggregateStore[P]>
  }




  export type StoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreWhereInput
    orderBy?: StoreOrderByWithAggregationInput | StoreOrderByWithAggregationInput[]
    by: StoreScalarFieldEnum[] | StoreScalarFieldEnum
    having?: StoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoreCountAggregateInputType | true
    _min?: StoreMinAggregateInputType
    _max?: StoreMaxAggregateInputType
  }

  export type StoreGroupByOutputType = {
    storeId: string
    storeName: string
    vendorId: string
    cityId: string
    _count: StoreCountAggregateOutputType | null
    _min: StoreMinAggregateOutputType | null
    _max: StoreMaxAggregateOutputType | null
  }

  type GetStoreGroupByPayload<T extends StoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoreGroupByOutputType[P]>
            : GetScalarType<T[P], StoreGroupByOutputType[P]>
        }
      >
    >


  export type StoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    storeId?: boolean
    storeName?: boolean
    vendorId?: boolean
    cityId?: boolean
    vendor?: boolean | UserDefaultArgs<ExtArgs>
    city?: boolean | CityDefaultArgs<ExtArgs>
    storeProducts?: boolean | Store$storeProductsArgs<ExtArgs>
    _count?: boolean | StoreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["store"]>

  export type StoreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    storeId?: boolean
    storeName?: boolean
    vendorId?: boolean
    cityId?: boolean
    vendor?: boolean | UserDefaultArgs<ExtArgs>
    city?: boolean | CityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["store"]>

  export type StoreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    storeId?: boolean
    storeName?: boolean
    vendorId?: boolean
    cityId?: boolean
    vendor?: boolean | UserDefaultArgs<ExtArgs>
    city?: boolean | CityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["store"]>

  export type StoreSelectScalar = {
    storeId?: boolean
    storeName?: boolean
    vendorId?: boolean
    cityId?: boolean
  }

  export type StoreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"storeId" | "storeName" | "vendorId" | "cityId", ExtArgs["result"]["store"]>
  export type StoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | UserDefaultArgs<ExtArgs>
    city?: boolean | CityDefaultArgs<ExtArgs>
    storeProducts?: boolean | Store$storeProductsArgs<ExtArgs>
    _count?: boolean | StoreCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StoreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | UserDefaultArgs<ExtArgs>
    city?: boolean | CityDefaultArgs<ExtArgs>
  }
  export type StoreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | UserDefaultArgs<ExtArgs>
    city?: boolean | CityDefaultArgs<ExtArgs>
  }

  export type $StorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Store"
    objects: {
      vendor: Prisma.$UserPayload<ExtArgs>
      city: Prisma.$CityPayload<ExtArgs>
      storeProducts: Prisma.$StoreAndProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      storeId: string
      storeName: string
      vendorId: string
      cityId: string
    }, ExtArgs["result"]["store"]>
    composites: {}
  }

  type StoreGetPayload<S extends boolean | null | undefined | StoreDefaultArgs> = $Result.GetResult<Prisma.$StorePayload, S>

  type StoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StoreCountAggregateInputType | true
    }

  export interface StoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Store'], meta: { name: 'Store' } }
    /**
     * Find zero or one Store that matches the filter.
     * @param {StoreFindUniqueArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StoreFindUniqueArgs>(args: SelectSubset<T, StoreFindUniqueArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Store that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StoreFindUniqueOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StoreFindUniqueOrThrowArgs>(args: SelectSubset<T, StoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Store that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindFirstArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StoreFindFirstArgs>(args?: SelectSubset<T, StoreFindFirstArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Store that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindFirstOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StoreFindFirstOrThrowArgs>(args?: SelectSubset<T, StoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stores
     * const stores = await prisma.store.findMany()
     * 
     * // Get first 10 Stores
     * const stores = await prisma.store.findMany({ take: 10 })
     * 
     * // Only select the `storeId`
     * const storeWithStoreIdOnly = await prisma.store.findMany({ select: { storeId: true } })
     * 
     */
    findMany<T extends StoreFindManyArgs>(args?: SelectSubset<T, StoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Store.
     * @param {StoreCreateArgs} args - Arguments to create a Store.
     * @example
     * // Create one Store
     * const Store = await prisma.store.create({
     *   data: {
     *     // ... data to create a Store
     *   }
     * })
     * 
     */
    create<T extends StoreCreateArgs>(args: SelectSubset<T, StoreCreateArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stores.
     * @param {StoreCreateManyArgs} args - Arguments to create many Stores.
     * @example
     * // Create many Stores
     * const store = await prisma.store.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StoreCreateManyArgs>(args?: SelectSubset<T, StoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stores and returns the data saved in the database.
     * @param {StoreCreateManyAndReturnArgs} args - Arguments to create many Stores.
     * @example
     * // Create many Stores
     * const store = await prisma.store.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stores and only return the `storeId`
     * const storeWithStoreIdOnly = await prisma.store.createManyAndReturn({
     *   select: { storeId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StoreCreateManyAndReturnArgs>(args?: SelectSubset<T, StoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Store.
     * @param {StoreDeleteArgs} args - Arguments to delete one Store.
     * @example
     * // Delete one Store
     * const Store = await prisma.store.delete({
     *   where: {
     *     // ... filter to delete one Store
     *   }
     * })
     * 
     */
    delete<T extends StoreDeleteArgs>(args: SelectSubset<T, StoreDeleteArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Store.
     * @param {StoreUpdateArgs} args - Arguments to update one Store.
     * @example
     * // Update one Store
     * const store = await prisma.store.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StoreUpdateArgs>(args: SelectSubset<T, StoreUpdateArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stores.
     * @param {StoreDeleteManyArgs} args - Arguments to filter Stores to delete.
     * @example
     * // Delete a few Stores
     * const { count } = await prisma.store.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StoreDeleteManyArgs>(args?: SelectSubset<T, StoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stores
     * const store = await prisma.store.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StoreUpdateManyArgs>(args: SelectSubset<T, StoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stores and returns the data updated in the database.
     * @param {StoreUpdateManyAndReturnArgs} args - Arguments to update many Stores.
     * @example
     * // Update many Stores
     * const store = await prisma.store.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stores and only return the `storeId`
     * const storeWithStoreIdOnly = await prisma.store.updateManyAndReturn({
     *   select: { storeId: true },
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
    updateManyAndReturn<T extends StoreUpdateManyAndReturnArgs>(args: SelectSubset<T, StoreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Store.
     * @param {StoreUpsertArgs} args - Arguments to update or create a Store.
     * @example
     * // Update or create a Store
     * const store = await prisma.store.upsert({
     *   create: {
     *     // ... data to create a Store
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Store we want to update
     *   }
     * })
     */
    upsert<T extends StoreUpsertArgs>(args: SelectSubset<T, StoreUpsertArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreCountArgs} args - Arguments to filter Stores to count.
     * @example
     * // Count the number of Stores
     * const count = await prisma.store.count({
     *   where: {
     *     // ... the filter for the Stores we want to count
     *   }
     * })
    **/
    count<T extends StoreCountArgs>(
      args?: Subset<T, StoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StoreAggregateArgs>(args: Subset<T, StoreAggregateArgs>): Prisma.PrismaPromise<GetStoreAggregateType<T>>

    /**
     * Group by Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreGroupByArgs} args - Group by arguments.
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
      T extends StoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoreGroupByArgs['orderBy'] }
        : { orderBy?: StoreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Store model
   */
  readonly fields: StoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Store.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vendor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    city<T extends CityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CityDefaultArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    storeProducts<T extends Store$storeProductsArgs<ExtArgs> = {}>(args?: Subset<T, Store$storeProductsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoreAndProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Store model
   */
  interface StoreFieldRefs {
    readonly storeId: FieldRef<"Store", 'String'>
    readonly storeName: FieldRef<"Store", 'String'>
    readonly vendorId: FieldRef<"Store", 'String'>
    readonly cityId: FieldRef<"Store", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Store findUnique
   */
  export type StoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store findUniqueOrThrow
   */
  export type StoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store findFirst
   */
  export type StoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stores.
     */
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Store findFirstOrThrow
   */
  export type StoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stores.
     */
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Store findMany
   */
  export type StoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Stores to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Store create
   */
  export type StoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The data needed to create a Store.
     */
    data: XOR<StoreCreateInput, StoreUncheckedCreateInput>
  }

  /**
   * Store createMany
   */
  export type StoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stores.
     */
    data: StoreCreateManyInput | StoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Store createManyAndReturn
   */
  export type StoreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * The data used to create many Stores.
     */
    data: StoreCreateManyInput | StoreCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Store update
   */
  export type StoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The data needed to update a Store.
     */
    data: XOR<StoreUpdateInput, StoreUncheckedUpdateInput>
    /**
     * Choose, which Store to update.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store updateMany
   */
  export type StoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stores.
     */
    data: XOR<StoreUpdateManyMutationInput, StoreUncheckedUpdateManyInput>
    /**
     * Filter which Stores to update
     */
    where?: StoreWhereInput
    /**
     * Limit how many Stores to update.
     */
    limit?: number
  }

  /**
   * Store updateManyAndReturn
   */
  export type StoreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * The data used to update Stores.
     */
    data: XOR<StoreUpdateManyMutationInput, StoreUncheckedUpdateManyInput>
    /**
     * Filter which Stores to update
     */
    where?: StoreWhereInput
    /**
     * Limit how many Stores to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Store upsert
   */
  export type StoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The filter to search for the Store to update in case it exists.
     */
    where: StoreWhereUniqueInput
    /**
     * In case the Store found by the `where` argument doesn't exist, create a new Store with this data.
     */
    create: XOR<StoreCreateInput, StoreUncheckedCreateInput>
    /**
     * In case the Store was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoreUpdateInput, StoreUncheckedUpdateInput>
  }

  /**
   * Store delete
   */
  export type StoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter which Store to delete.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store deleteMany
   */
  export type StoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stores to delete
     */
    where?: StoreWhereInput
    /**
     * Limit how many Stores to delete.
     */
    limit?: number
  }

  /**
   * Store.storeProducts
   */
  export type Store$storeProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreAndProduct
     */
    select?: StoreAndProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreAndProduct
     */
    omit?: StoreAndProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreAndProductInclude<ExtArgs> | null
    where?: StoreAndProductWhereInput
    orderBy?: StoreAndProductOrderByWithRelationInput | StoreAndProductOrderByWithRelationInput[]
    cursor?: StoreAndProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StoreAndProductScalarFieldEnum | StoreAndProductScalarFieldEnum[]
  }

  /**
   * Store without action
   */
  export type StoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
  }


  /**
   * Model StoreAndProduct
   */

  export type AggregateStoreAndProduct = {
    _count: StoreAndProductCountAggregateOutputType | null
    _min: StoreAndProductMinAggregateOutputType | null
    _max: StoreAndProductMaxAggregateOutputType | null
  }

  export type StoreAndProductMinAggregateOutputType = {
    storeId: string | null
    productId: string | null
    productName: string | null
  }

  export type StoreAndProductMaxAggregateOutputType = {
    storeId: string | null
    productId: string | null
    productName: string | null
  }

  export type StoreAndProductCountAggregateOutputType = {
    storeId: number
    productId: number
    productName: number
    _all: number
  }


  export type StoreAndProductMinAggregateInputType = {
    storeId?: true
    productId?: true
    productName?: true
  }

  export type StoreAndProductMaxAggregateInputType = {
    storeId?: true
    productId?: true
    productName?: true
  }

  export type StoreAndProductCountAggregateInputType = {
    storeId?: true
    productId?: true
    productName?: true
    _all?: true
  }

  export type StoreAndProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StoreAndProduct to aggregate.
     */
    where?: StoreAndProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreAndProducts to fetch.
     */
    orderBy?: StoreAndProductOrderByWithRelationInput | StoreAndProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoreAndProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreAndProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreAndProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StoreAndProducts
    **/
    _count?: true | StoreAndProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoreAndProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoreAndProductMaxAggregateInputType
  }

  export type GetStoreAndProductAggregateType<T extends StoreAndProductAggregateArgs> = {
        [P in keyof T & keyof AggregateStoreAndProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStoreAndProduct[P]>
      : GetScalarType<T[P], AggregateStoreAndProduct[P]>
  }




  export type StoreAndProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreAndProductWhereInput
    orderBy?: StoreAndProductOrderByWithAggregationInput | StoreAndProductOrderByWithAggregationInput[]
    by: StoreAndProductScalarFieldEnum[] | StoreAndProductScalarFieldEnum
    having?: StoreAndProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoreAndProductCountAggregateInputType | true
    _min?: StoreAndProductMinAggregateInputType
    _max?: StoreAndProductMaxAggregateInputType
  }

  export type StoreAndProductGroupByOutputType = {
    storeId: string
    productId: string
    productName: string | null
    _count: StoreAndProductCountAggregateOutputType | null
    _min: StoreAndProductMinAggregateOutputType | null
    _max: StoreAndProductMaxAggregateOutputType | null
  }

  type GetStoreAndProductGroupByPayload<T extends StoreAndProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoreAndProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoreAndProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoreAndProductGroupByOutputType[P]>
            : GetScalarType<T[P], StoreAndProductGroupByOutputType[P]>
        }
      >
    >


  export type StoreAndProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    storeId?: boolean
    productId?: boolean
    productName?: boolean
    store?: boolean | StoreDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["storeAndProduct"]>

  export type StoreAndProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    storeId?: boolean
    productId?: boolean
    productName?: boolean
    store?: boolean | StoreDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["storeAndProduct"]>

  export type StoreAndProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    storeId?: boolean
    productId?: boolean
    productName?: boolean
    store?: boolean | StoreDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["storeAndProduct"]>

  export type StoreAndProductSelectScalar = {
    storeId?: boolean
    productId?: boolean
    productName?: boolean
  }

  export type StoreAndProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"storeId" | "productId" | "productName", ExtArgs["result"]["storeAndProduct"]>
  export type StoreAndProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoreDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type StoreAndProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoreDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type StoreAndProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoreDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $StoreAndProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StoreAndProduct"
    objects: {
      store: Prisma.$StorePayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      storeId: string
      productId: string
      productName: string | null
    }, ExtArgs["result"]["storeAndProduct"]>
    composites: {}
  }

  type StoreAndProductGetPayload<S extends boolean | null | undefined | StoreAndProductDefaultArgs> = $Result.GetResult<Prisma.$StoreAndProductPayload, S>

  type StoreAndProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StoreAndProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StoreAndProductCountAggregateInputType | true
    }

  export interface StoreAndProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StoreAndProduct'], meta: { name: 'StoreAndProduct' } }
    /**
     * Find zero or one StoreAndProduct that matches the filter.
     * @param {StoreAndProductFindUniqueArgs} args - Arguments to find a StoreAndProduct
     * @example
     * // Get one StoreAndProduct
     * const storeAndProduct = await prisma.storeAndProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StoreAndProductFindUniqueArgs>(args: SelectSubset<T, StoreAndProductFindUniqueArgs<ExtArgs>>): Prisma__StoreAndProductClient<$Result.GetResult<Prisma.$StoreAndProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StoreAndProduct that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StoreAndProductFindUniqueOrThrowArgs} args - Arguments to find a StoreAndProduct
     * @example
     * // Get one StoreAndProduct
     * const storeAndProduct = await prisma.storeAndProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StoreAndProductFindUniqueOrThrowArgs>(args: SelectSubset<T, StoreAndProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StoreAndProductClient<$Result.GetResult<Prisma.$StoreAndProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StoreAndProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreAndProductFindFirstArgs} args - Arguments to find a StoreAndProduct
     * @example
     * // Get one StoreAndProduct
     * const storeAndProduct = await prisma.storeAndProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StoreAndProductFindFirstArgs>(args?: SelectSubset<T, StoreAndProductFindFirstArgs<ExtArgs>>): Prisma__StoreAndProductClient<$Result.GetResult<Prisma.$StoreAndProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StoreAndProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreAndProductFindFirstOrThrowArgs} args - Arguments to find a StoreAndProduct
     * @example
     * // Get one StoreAndProduct
     * const storeAndProduct = await prisma.storeAndProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StoreAndProductFindFirstOrThrowArgs>(args?: SelectSubset<T, StoreAndProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__StoreAndProductClient<$Result.GetResult<Prisma.$StoreAndProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StoreAndProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreAndProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StoreAndProducts
     * const storeAndProducts = await prisma.storeAndProduct.findMany()
     * 
     * // Get first 10 StoreAndProducts
     * const storeAndProducts = await prisma.storeAndProduct.findMany({ take: 10 })
     * 
     * // Only select the `storeId`
     * const storeAndProductWithStoreIdOnly = await prisma.storeAndProduct.findMany({ select: { storeId: true } })
     * 
     */
    findMany<T extends StoreAndProductFindManyArgs>(args?: SelectSubset<T, StoreAndProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoreAndProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StoreAndProduct.
     * @param {StoreAndProductCreateArgs} args - Arguments to create a StoreAndProduct.
     * @example
     * // Create one StoreAndProduct
     * const StoreAndProduct = await prisma.storeAndProduct.create({
     *   data: {
     *     // ... data to create a StoreAndProduct
     *   }
     * })
     * 
     */
    create<T extends StoreAndProductCreateArgs>(args: SelectSubset<T, StoreAndProductCreateArgs<ExtArgs>>): Prisma__StoreAndProductClient<$Result.GetResult<Prisma.$StoreAndProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StoreAndProducts.
     * @param {StoreAndProductCreateManyArgs} args - Arguments to create many StoreAndProducts.
     * @example
     * // Create many StoreAndProducts
     * const storeAndProduct = await prisma.storeAndProduct.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StoreAndProductCreateManyArgs>(args?: SelectSubset<T, StoreAndProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StoreAndProducts and returns the data saved in the database.
     * @param {StoreAndProductCreateManyAndReturnArgs} args - Arguments to create many StoreAndProducts.
     * @example
     * // Create many StoreAndProducts
     * const storeAndProduct = await prisma.storeAndProduct.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StoreAndProducts and only return the `storeId`
     * const storeAndProductWithStoreIdOnly = await prisma.storeAndProduct.createManyAndReturn({
     *   select: { storeId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StoreAndProductCreateManyAndReturnArgs>(args?: SelectSubset<T, StoreAndProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoreAndProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StoreAndProduct.
     * @param {StoreAndProductDeleteArgs} args - Arguments to delete one StoreAndProduct.
     * @example
     * // Delete one StoreAndProduct
     * const StoreAndProduct = await prisma.storeAndProduct.delete({
     *   where: {
     *     // ... filter to delete one StoreAndProduct
     *   }
     * })
     * 
     */
    delete<T extends StoreAndProductDeleteArgs>(args: SelectSubset<T, StoreAndProductDeleteArgs<ExtArgs>>): Prisma__StoreAndProductClient<$Result.GetResult<Prisma.$StoreAndProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StoreAndProduct.
     * @param {StoreAndProductUpdateArgs} args - Arguments to update one StoreAndProduct.
     * @example
     * // Update one StoreAndProduct
     * const storeAndProduct = await prisma.storeAndProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StoreAndProductUpdateArgs>(args: SelectSubset<T, StoreAndProductUpdateArgs<ExtArgs>>): Prisma__StoreAndProductClient<$Result.GetResult<Prisma.$StoreAndProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StoreAndProducts.
     * @param {StoreAndProductDeleteManyArgs} args - Arguments to filter StoreAndProducts to delete.
     * @example
     * // Delete a few StoreAndProducts
     * const { count } = await prisma.storeAndProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StoreAndProductDeleteManyArgs>(args?: SelectSubset<T, StoreAndProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StoreAndProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreAndProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StoreAndProducts
     * const storeAndProduct = await prisma.storeAndProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StoreAndProductUpdateManyArgs>(args: SelectSubset<T, StoreAndProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StoreAndProducts and returns the data updated in the database.
     * @param {StoreAndProductUpdateManyAndReturnArgs} args - Arguments to update many StoreAndProducts.
     * @example
     * // Update many StoreAndProducts
     * const storeAndProduct = await prisma.storeAndProduct.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StoreAndProducts and only return the `storeId`
     * const storeAndProductWithStoreIdOnly = await prisma.storeAndProduct.updateManyAndReturn({
     *   select: { storeId: true },
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
    updateManyAndReturn<T extends StoreAndProductUpdateManyAndReturnArgs>(args: SelectSubset<T, StoreAndProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoreAndProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StoreAndProduct.
     * @param {StoreAndProductUpsertArgs} args - Arguments to update or create a StoreAndProduct.
     * @example
     * // Update or create a StoreAndProduct
     * const storeAndProduct = await prisma.storeAndProduct.upsert({
     *   create: {
     *     // ... data to create a StoreAndProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StoreAndProduct we want to update
     *   }
     * })
     */
    upsert<T extends StoreAndProductUpsertArgs>(args: SelectSubset<T, StoreAndProductUpsertArgs<ExtArgs>>): Prisma__StoreAndProductClient<$Result.GetResult<Prisma.$StoreAndProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StoreAndProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreAndProductCountArgs} args - Arguments to filter StoreAndProducts to count.
     * @example
     * // Count the number of StoreAndProducts
     * const count = await prisma.storeAndProduct.count({
     *   where: {
     *     // ... the filter for the StoreAndProducts we want to count
     *   }
     * })
    **/
    count<T extends StoreAndProductCountArgs>(
      args?: Subset<T, StoreAndProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoreAndProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StoreAndProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreAndProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StoreAndProductAggregateArgs>(args: Subset<T, StoreAndProductAggregateArgs>): Prisma.PrismaPromise<GetStoreAndProductAggregateType<T>>

    /**
     * Group by StoreAndProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreAndProductGroupByArgs} args - Group by arguments.
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
      T extends StoreAndProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoreAndProductGroupByArgs['orderBy'] }
        : { orderBy?: StoreAndProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StoreAndProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoreAndProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StoreAndProduct model
   */
  readonly fields: StoreAndProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StoreAndProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StoreAndProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    store<T extends StoreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StoreDefaultArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the StoreAndProduct model
   */
  interface StoreAndProductFieldRefs {
    readonly storeId: FieldRef<"StoreAndProduct", 'String'>
    readonly productId: FieldRef<"StoreAndProduct", 'String'>
    readonly productName: FieldRef<"StoreAndProduct", 'String'>
  }
    

  // Custom InputTypes
  /**
   * StoreAndProduct findUnique
   */
  export type StoreAndProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreAndProduct
     */
    select?: StoreAndProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreAndProduct
     */
    omit?: StoreAndProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreAndProductInclude<ExtArgs> | null
    /**
     * Filter, which StoreAndProduct to fetch.
     */
    where: StoreAndProductWhereUniqueInput
  }

  /**
   * StoreAndProduct findUniqueOrThrow
   */
  export type StoreAndProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreAndProduct
     */
    select?: StoreAndProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreAndProduct
     */
    omit?: StoreAndProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreAndProductInclude<ExtArgs> | null
    /**
     * Filter, which StoreAndProduct to fetch.
     */
    where: StoreAndProductWhereUniqueInput
  }

  /**
   * StoreAndProduct findFirst
   */
  export type StoreAndProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreAndProduct
     */
    select?: StoreAndProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreAndProduct
     */
    omit?: StoreAndProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreAndProductInclude<ExtArgs> | null
    /**
     * Filter, which StoreAndProduct to fetch.
     */
    where?: StoreAndProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreAndProducts to fetch.
     */
    orderBy?: StoreAndProductOrderByWithRelationInput | StoreAndProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StoreAndProducts.
     */
    cursor?: StoreAndProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreAndProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreAndProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StoreAndProducts.
     */
    distinct?: StoreAndProductScalarFieldEnum | StoreAndProductScalarFieldEnum[]
  }

  /**
   * StoreAndProduct findFirstOrThrow
   */
  export type StoreAndProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreAndProduct
     */
    select?: StoreAndProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreAndProduct
     */
    omit?: StoreAndProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreAndProductInclude<ExtArgs> | null
    /**
     * Filter, which StoreAndProduct to fetch.
     */
    where?: StoreAndProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreAndProducts to fetch.
     */
    orderBy?: StoreAndProductOrderByWithRelationInput | StoreAndProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StoreAndProducts.
     */
    cursor?: StoreAndProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreAndProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreAndProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StoreAndProducts.
     */
    distinct?: StoreAndProductScalarFieldEnum | StoreAndProductScalarFieldEnum[]
  }

  /**
   * StoreAndProduct findMany
   */
  export type StoreAndProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreAndProduct
     */
    select?: StoreAndProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreAndProduct
     */
    omit?: StoreAndProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreAndProductInclude<ExtArgs> | null
    /**
     * Filter, which StoreAndProducts to fetch.
     */
    where?: StoreAndProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreAndProducts to fetch.
     */
    orderBy?: StoreAndProductOrderByWithRelationInput | StoreAndProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StoreAndProducts.
     */
    cursor?: StoreAndProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreAndProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreAndProducts.
     */
    skip?: number
    distinct?: StoreAndProductScalarFieldEnum | StoreAndProductScalarFieldEnum[]
  }

  /**
   * StoreAndProduct create
   */
  export type StoreAndProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreAndProduct
     */
    select?: StoreAndProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreAndProduct
     */
    omit?: StoreAndProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreAndProductInclude<ExtArgs> | null
    /**
     * The data needed to create a StoreAndProduct.
     */
    data: XOR<StoreAndProductCreateInput, StoreAndProductUncheckedCreateInput>
  }

  /**
   * StoreAndProduct createMany
   */
  export type StoreAndProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StoreAndProducts.
     */
    data: StoreAndProductCreateManyInput | StoreAndProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StoreAndProduct createManyAndReturn
   */
  export type StoreAndProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreAndProduct
     */
    select?: StoreAndProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StoreAndProduct
     */
    omit?: StoreAndProductOmit<ExtArgs> | null
    /**
     * The data used to create many StoreAndProducts.
     */
    data: StoreAndProductCreateManyInput | StoreAndProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreAndProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StoreAndProduct update
   */
  export type StoreAndProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreAndProduct
     */
    select?: StoreAndProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreAndProduct
     */
    omit?: StoreAndProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreAndProductInclude<ExtArgs> | null
    /**
     * The data needed to update a StoreAndProduct.
     */
    data: XOR<StoreAndProductUpdateInput, StoreAndProductUncheckedUpdateInput>
    /**
     * Choose, which StoreAndProduct to update.
     */
    where: StoreAndProductWhereUniqueInput
  }

  /**
   * StoreAndProduct updateMany
   */
  export type StoreAndProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StoreAndProducts.
     */
    data: XOR<StoreAndProductUpdateManyMutationInput, StoreAndProductUncheckedUpdateManyInput>
    /**
     * Filter which StoreAndProducts to update
     */
    where?: StoreAndProductWhereInput
    /**
     * Limit how many StoreAndProducts to update.
     */
    limit?: number
  }

  /**
   * StoreAndProduct updateManyAndReturn
   */
  export type StoreAndProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreAndProduct
     */
    select?: StoreAndProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StoreAndProduct
     */
    omit?: StoreAndProductOmit<ExtArgs> | null
    /**
     * The data used to update StoreAndProducts.
     */
    data: XOR<StoreAndProductUpdateManyMutationInput, StoreAndProductUncheckedUpdateManyInput>
    /**
     * Filter which StoreAndProducts to update
     */
    where?: StoreAndProductWhereInput
    /**
     * Limit how many StoreAndProducts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreAndProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StoreAndProduct upsert
   */
  export type StoreAndProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreAndProduct
     */
    select?: StoreAndProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreAndProduct
     */
    omit?: StoreAndProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreAndProductInclude<ExtArgs> | null
    /**
     * The filter to search for the StoreAndProduct to update in case it exists.
     */
    where: StoreAndProductWhereUniqueInput
    /**
     * In case the StoreAndProduct found by the `where` argument doesn't exist, create a new StoreAndProduct with this data.
     */
    create: XOR<StoreAndProductCreateInput, StoreAndProductUncheckedCreateInput>
    /**
     * In case the StoreAndProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoreAndProductUpdateInput, StoreAndProductUncheckedUpdateInput>
  }

  /**
   * StoreAndProduct delete
   */
  export type StoreAndProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreAndProduct
     */
    select?: StoreAndProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreAndProduct
     */
    omit?: StoreAndProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreAndProductInclude<ExtArgs> | null
    /**
     * Filter which StoreAndProduct to delete.
     */
    where: StoreAndProductWhereUniqueInput
  }

  /**
   * StoreAndProduct deleteMany
   */
  export type StoreAndProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StoreAndProducts to delete
     */
    where?: StoreAndProductWhereInput
    /**
     * Limit how many StoreAndProducts to delete.
     */
    limit?: number
  }

  /**
   * StoreAndProduct without action
   */
  export type StoreAndProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreAndProduct
     */
    select?: StoreAndProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreAndProduct
     */
    omit?: StoreAndProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreAndProductInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    quantity: number | null
    totalPrice: number | null
  }

  export type OrderSumAggregateOutputType = {
    quantity: number | null
    totalPrice: number | null
  }

  export type OrderMinAggregateOutputType = {
    orderId: string | null
    quantity: number | null
    totalPrice: number | null
    orderDate: Date | null
    productId: string | null
    vendorId: string | null
  }

  export type OrderMaxAggregateOutputType = {
    orderId: string | null
    quantity: number | null
    totalPrice: number | null
    orderDate: Date | null
    productId: string | null
    vendorId: string | null
  }

  export type OrderCountAggregateOutputType = {
    orderId: number
    quantity: number
    totalPrice: number
    orderDate: number
    productId: number
    vendorId: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    quantity?: true
    totalPrice?: true
  }

  export type OrderSumAggregateInputType = {
    quantity?: true
    totalPrice?: true
  }

  export type OrderMinAggregateInputType = {
    orderId?: true
    quantity?: true
    totalPrice?: true
    orderDate?: true
    productId?: true
    vendorId?: true
  }

  export type OrderMaxAggregateInputType = {
    orderId?: true
    quantity?: true
    totalPrice?: true
    orderDate?: true
    productId?: true
    vendorId?: true
  }

  export type OrderCountAggregateInputType = {
    orderId?: true
    quantity?: true
    totalPrice?: true
    orderDate?: true
    productId?: true
    vendorId?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    orderId: string
    quantity: number
    totalPrice: number
    orderDate: Date
    productId: string
    vendorId: string
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    orderId?: boolean
    quantity?: boolean
    totalPrice?: boolean
    orderDate?: boolean
    productId?: boolean
    vendorId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    vendor?: boolean | UserDefaultArgs<ExtArgs>
    orderDetails?: boolean | Order$orderDetailsArgs<ExtArgs>
    complaints?: boolean | Order$complaintsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    orderId?: boolean
    quantity?: boolean
    totalPrice?: boolean
    orderDate?: boolean
    productId?: boolean
    vendorId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    vendor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    orderId?: boolean
    quantity?: boolean
    totalPrice?: boolean
    orderDate?: boolean
    productId?: boolean
    vendorId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    vendor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    orderId?: boolean
    quantity?: boolean
    totalPrice?: boolean
    orderDate?: boolean
    productId?: boolean
    vendorId?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"orderId" | "quantity" | "totalPrice" | "orderDate" | "productId" | "vendorId", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    vendor?: boolean | UserDefaultArgs<ExtArgs>
    orderDetails?: boolean | Order$orderDetailsArgs<ExtArgs>
    complaints?: boolean | Order$complaintsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    vendor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    vendor?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      vendor: Prisma.$UserPayload<ExtArgs>
      orderDetails: Prisma.$OrderDetailsPayload<ExtArgs>[]
      complaints: Prisma.$ComplaintPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      orderId: string
      quantity: number
      totalPrice: number
      orderDate: Date
      productId: string
      vendorId: string
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `orderId`
     * const orderWithOrderIdOnly = await prisma.order.findMany({ select: { orderId: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `orderId`
     * const orderWithOrderIdOnly = await prisma.order.createManyAndReturn({
     *   select: { orderId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `orderId`
     * const orderWithOrderIdOnly = await prisma.order.updateManyAndReturn({
     *   select: { orderId: true },
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
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
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
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vendor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    orderDetails<T extends Order$orderDetailsArgs<ExtArgs> = {}>(args?: Subset<T, Order$orderDetailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    complaints<T extends Order$complaintsArgs<ExtArgs> = {}>(args?: Subset<T, Order$complaintsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComplaintPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly orderId: FieldRef<"Order", 'String'>
    readonly quantity: FieldRef<"Order", 'Int'>
    readonly totalPrice: FieldRef<"Order", 'Float'>
    readonly orderDate: FieldRef<"Order", 'DateTime'>
    readonly productId: FieldRef<"Order", 'String'>
    readonly vendorId: FieldRef<"Order", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order.orderDetails
   */
  export type Order$orderDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    where?: OrderDetailsWhereInput
    orderBy?: OrderDetailsOrderByWithRelationInput | OrderDetailsOrderByWithRelationInput[]
    cursor?: OrderDetailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderDetailsScalarFieldEnum | OrderDetailsScalarFieldEnum[]
  }

  /**
   * Order.complaints
   */
  export type Order$complaintsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complaint
     */
    select?: ComplaintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complaint
     */
    omit?: ComplaintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplaintInclude<ExtArgs> | null
    where?: ComplaintWhereInput
    orderBy?: ComplaintOrderByWithRelationInput | ComplaintOrderByWithRelationInput[]
    cursor?: ComplaintWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComplaintScalarFieldEnum | ComplaintScalarFieldEnum[]
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model OrderDetails
   */

  export type AggregateOrderDetails = {
    _count: OrderDetailsCountAggregateOutputType | null
    _min: OrderDetailsMinAggregateOutputType | null
    _max: OrderDetailsMaxAggregateOutputType | null
  }

  export type OrderDetailsMinAggregateOutputType = {
    orderId: string | null
    userId: string | null
  }

  export type OrderDetailsMaxAggregateOutputType = {
    orderId: string | null
    userId: string | null
  }

  export type OrderDetailsCountAggregateOutputType = {
    orderId: number
    userId: number
    _all: number
  }


  export type OrderDetailsMinAggregateInputType = {
    orderId?: true
    userId?: true
  }

  export type OrderDetailsMaxAggregateInputType = {
    orderId?: true
    userId?: true
  }

  export type OrderDetailsCountAggregateInputType = {
    orderId?: true
    userId?: true
    _all?: true
  }

  export type OrderDetailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderDetails to aggregate.
     */
    where?: OrderDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderDetails to fetch.
     */
    orderBy?: OrderDetailsOrderByWithRelationInput | OrderDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderDetails
    **/
    _count?: true | OrderDetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderDetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderDetailsMaxAggregateInputType
  }

  export type GetOrderDetailsAggregateType<T extends OrderDetailsAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderDetails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderDetails[P]>
      : GetScalarType<T[P], AggregateOrderDetails[P]>
  }




  export type OrderDetailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderDetailsWhereInput
    orderBy?: OrderDetailsOrderByWithAggregationInput | OrderDetailsOrderByWithAggregationInput[]
    by: OrderDetailsScalarFieldEnum[] | OrderDetailsScalarFieldEnum
    having?: OrderDetailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderDetailsCountAggregateInputType | true
    _min?: OrderDetailsMinAggregateInputType
    _max?: OrderDetailsMaxAggregateInputType
  }

  export type OrderDetailsGroupByOutputType = {
    orderId: string
    userId: string
    _count: OrderDetailsCountAggregateOutputType | null
    _min: OrderDetailsMinAggregateOutputType | null
    _max: OrderDetailsMaxAggregateOutputType | null
  }

  type GetOrderDetailsGroupByPayload<T extends OrderDetailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderDetailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderDetailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderDetailsGroupByOutputType[P]>
            : GetScalarType<T[P], OrderDetailsGroupByOutputType[P]>
        }
      >
    >


  export type OrderDetailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    orderId?: boolean
    userId?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderDetails"]>

  export type OrderDetailsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    orderId?: boolean
    userId?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderDetails"]>

  export type OrderDetailsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    orderId?: boolean
    userId?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderDetails"]>

  export type OrderDetailsSelectScalar = {
    orderId?: boolean
    userId?: boolean
  }

  export type OrderDetailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"orderId" | "userId", ExtArgs["result"]["orderDetails"]>
  export type OrderDetailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OrderDetailsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OrderDetailsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OrderDetailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderDetails"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      orderId: string
      userId: string
    }, ExtArgs["result"]["orderDetails"]>
    composites: {}
  }

  type OrderDetailsGetPayload<S extends boolean | null | undefined | OrderDetailsDefaultArgs> = $Result.GetResult<Prisma.$OrderDetailsPayload, S>

  type OrderDetailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderDetailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderDetailsCountAggregateInputType | true
    }

  export interface OrderDetailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderDetails'], meta: { name: 'OrderDetails' } }
    /**
     * Find zero or one OrderDetails that matches the filter.
     * @param {OrderDetailsFindUniqueArgs} args - Arguments to find a OrderDetails
     * @example
     * // Get one OrderDetails
     * const orderDetails = await prisma.orderDetails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderDetailsFindUniqueArgs>(args: SelectSubset<T, OrderDetailsFindUniqueArgs<ExtArgs>>): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderDetails that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderDetailsFindUniqueOrThrowArgs} args - Arguments to find a OrderDetails
     * @example
     * // Get one OrderDetails
     * const orderDetails = await prisma.orderDetails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderDetailsFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderDetailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailsFindFirstArgs} args - Arguments to find a OrderDetails
     * @example
     * // Get one OrderDetails
     * const orderDetails = await prisma.orderDetails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderDetailsFindFirstArgs>(args?: SelectSubset<T, OrderDetailsFindFirstArgs<ExtArgs>>): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderDetails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailsFindFirstOrThrowArgs} args - Arguments to find a OrderDetails
     * @example
     * // Get one OrderDetails
     * const orderDetails = await prisma.orderDetails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderDetailsFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderDetailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderDetails
     * const orderDetails = await prisma.orderDetails.findMany()
     * 
     * // Get first 10 OrderDetails
     * const orderDetails = await prisma.orderDetails.findMany({ take: 10 })
     * 
     * // Only select the `orderId`
     * const orderDetailsWithOrderIdOnly = await prisma.orderDetails.findMany({ select: { orderId: true } })
     * 
     */
    findMany<T extends OrderDetailsFindManyArgs>(args?: SelectSubset<T, OrderDetailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderDetails.
     * @param {OrderDetailsCreateArgs} args - Arguments to create a OrderDetails.
     * @example
     * // Create one OrderDetails
     * const OrderDetails = await prisma.orderDetails.create({
     *   data: {
     *     // ... data to create a OrderDetails
     *   }
     * })
     * 
     */
    create<T extends OrderDetailsCreateArgs>(args: SelectSubset<T, OrderDetailsCreateArgs<ExtArgs>>): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderDetails.
     * @param {OrderDetailsCreateManyArgs} args - Arguments to create many OrderDetails.
     * @example
     * // Create many OrderDetails
     * const orderDetails = await prisma.orderDetails.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderDetailsCreateManyArgs>(args?: SelectSubset<T, OrderDetailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderDetails and returns the data saved in the database.
     * @param {OrderDetailsCreateManyAndReturnArgs} args - Arguments to create many OrderDetails.
     * @example
     * // Create many OrderDetails
     * const orderDetails = await prisma.orderDetails.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderDetails and only return the `orderId`
     * const orderDetailsWithOrderIdOnly = await prisma.orderDetails.createManyAndReturn({
     *   select: { orderId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderDetailsCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderDetailsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderDetails.
     * @param {OrderDetailsDeleteArgs} args - Arguments to delete one OrderDetails.
     * @example
     * // Delete one OrderDetails
     * const OrderDetails = await prisma.orderDetails.delete({
     *   where: {
     *     // ... filter to delete one OrderDetails
     *   }
     * })
     * 
     */
    delete<T extends OrderDetailsDeleteArgs>(args: SelectSubset<T, OrderDetailsDeleteArgs<ExtArgs>>): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderDetails.
     * @param {OrderDetailsUpdateArgs} args - Arguments to update one OrderDetails.
     * @example
     * // Update one OrderDetails
     * const orderDetails = await prisma.orderDetails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderDetailsUpdateArgs>(args: SelectSubset<T, OrderDetailsUpdateArgs<ExtArgs>>): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderDetails.
     * @param {OrderDetailsDeleteManyArgs} args - Arguments to filter OrderDetails to delete.
     * @example
     * // Delete a few OrderDetails
     * const { count } = await prisma.orderDetails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDetailsDeleteManyArgs>(args?: SelectSubset<T, OrderDetailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderDetails
     * const orderDetails = await prisma.orderDetails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderDetailsUpdateManyArgs>(args: SelectSubset<T, OrderDetailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderDetails and returns the data updated in the database.
     * @param {OrderDetailsUpdateManyAndReturnArgs} args - Arguments to update many OrderDetails.
     * @example
     * // Update many OrderDetails
     * const orderDetails = await prisma.orderDetails.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderDetails and only return the `orderId`
     * const orderDetailsWithOrderIdOnly = await prisma.orderDetails.updateManyAndReturn({
     *   select: { orderId: true },
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
    updateManyAndReturn<T extends OrderDetailsUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderDetailsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderDetails.
     * @param {OrderDetailsUpsertArgs} args - Arguments to update or create a OrderDetails.
     * @example
     * // Update or create a OrderDetails
     * const orderDetails = await prisma.orderDetails.upsert({
     *   create: {
     *     // ... data to create a OrderDetails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderDetails we want to update
     *   }
     * })
     */
    upsert<T extends OrderDetailsUpsertArgs>(args: SelectSubset<T, OrderDetailsUpsertArgs<ExtArgs>>): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailsCountArgs} args - Arguments to filter OrderDetails to count.
     * @example
     * // Count the number of OrderDetails
     * const count = await prisma.orderDetails.count({
     *   where: {
     *     // ... the filter for the OrderDetails we want to count
     *   }
     * })
    **/
    count<T extends OrderDetailsCountArgs>(
      args?: Subset<T, OrderDetailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderDetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderDetailsAggregateArgs>(args: Subset<T, OrderDetailsAggregateArgs>): Prisma.PrismaPromise<GetOrderDetailsAggregateType<T>>

    /**
     * Group by OrderDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailsGroupByArgs} args - Group by arguments.
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
      T extends OrderDetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderDetailsGroupByArgs['orderBy'] }
        : { orderBy?: OrderDetailsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderDetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderDetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderDetails model
   */
  readonly fields: OrderDetailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderDetails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderDetailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OrderDetails model
   */
  interface OrderDetailsFieldRefs {
    readonly orderId: FieldRef<"OrderDetails", 'String'>
    readonly userId: FieldRef<"OrderDetails", 'String'>
  }
    

  // Custom InputTypes
  /**
   * OrderDetails findUnique
   */
  export type OrderDetailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * Filter, which OrderDetails to fetch.
     */
    where: OrderDetailsWhereUniqueInput
  }

  /**
   * OrderDetails findUniqueOrThrow
   */
  export type OrderDetailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * Filter, which OrderDetails to fetch.
     */
    where: OrderDetailsWhereUniqueInput
  }

  /**
   * OrderDetails findFirst
   */
  export type OrderDetailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * Filter, which OrderDetails to fetch.
     */
    where?: OrderDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderDetails to fetch.
     */
    orderBy?: OrderDetailsOrderByWithRelationInput | OrderDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderDetails.
     */
    cursor?: OrderDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderDetails.
     */
    distinct?: OrderDetailsScalarFieldEnum | OrderDetailsScalarFieldEnum[]
  }

  /**
   * OrderDetails findFirstOrThrow
   */
  export type OrderDetailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * Filter, which OrderDetails to fetch.
     */
    where?: OrderDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderDetails to fetch.
     */
    orderBy?: OrderDetailsOrderByWithRelationInput | OrderDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderDetails.
     */
    cursor?: OrderDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderDetails.
     */
    distinct?: OrderDetailsScalarFieldEnum | OrderDetailsScalarFieldEnum[]
  }

  /**
   * OrderDetails findMany
   */
  export type OrderDetailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * Filter, which OrderDetails to fetch.
     */
    where?: OrderDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderDetails to fetch.
     */
    orderBy?: OrderDetailsOrderByWithRelationInput | OrderDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderDetails.
     */
    cursor?: OrderDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderDetails.
     */
    skip?: number
    distinct?: OrderDetailsScalarFieldEnum | OrderDetailsScalarFieldEnum[]
  }

  /**
   * OrderDetails create
   */
  export type OrderDetailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderDetails.
     */
    data: XOR<OrderDetailsCreateInput, OrderDetailsUncheckedCreateInput>
  }

  /**
   * OrderDetails createMany
   */
  export type OrderDetailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderDetails.
     */
    data: OrderDetailsCreateManyInput | OrderDetailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderDetails createManyAndReturn
   */
  export type OrderDetailsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * The data used to create many OrderDetails.
     */
    data: OrderDetailsCreateManyInput | OrderDetailsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderDetails update
   */
  export type OrderDetailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderDetails.
     */
    data: XOR<OrderDetailsUpdateInput, OrderDetailsUncheckedUpdateInput>
    /**
     * Choose, which OrderDetails to update.
     */
    where: OrderDetailsWhereUniqueInput
  }

  /**
   * OrderDetails updateMany
   */
  export type OrderDetailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderDetails.
     */
    data: XOR<OrderDetailsUpdateManyMutationInput, OrderDetailsUncheckedUpdateManyInput>
    /**
     * Filter which OrderDetails to update
     */
    where?: OrderDetailsWhereInput
    /**
     * Limit how many OrderDetails to update.
     */
    limit?: number
  }

  /**
   * OrderDetails updateManyAndReturn
   */
  export type OrderDetailsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * The data used to update OrderDetails.
     */
    data: XOR<OrderDetailsUpdateManyMutationInput, OrderDetailsUncheckedUpdateManyInput>
    /**
     * Filter which OrderDetails to update
     */
    where?: OrderDetailsWhereInput
    /**
     * Limit how many OrderDetails to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderDetails upsert
   */
  export type OrderDetailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderDetails to update in case it exists.
     */
    where: OrderDetailsWhereUniqueInput
    /**
     * In case the OrderDetails found by the `where` argument doesn't exist, create a new OrderDetails with this data.
     */
    create: XOR<OrderDetailsCreateInput, OrderDetailsUncheckedCreateInput>
    /**
     * In case the OrderDetails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderDetailsUpdateInput, OrderDetailsUncheckedUpdateInput>
  }

  /**
   * OrderDetails delete
   */
  export type OrderDetailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * Filter which OrderDetails to delete.
     */
    where: OrderDetailsWhereUniqueInput
  }

  /**
   * OrderDetails deleteMany
   */
  export type OrderDetailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderDetails to delete
     */
    where?: OrderDetailsWhereInput
    /**
     * Limit how many OrderDetails to delete.
     */
    limit?: number
  }

  /**
   * OrderDetails without action
   */
  export type OrderDetailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
  }


  /**
   * Model Complaint
   */

  export type AggregateComplaint = {
    _count: ComplaintCountAggregateOutputType | null
    _min: ComplaintMinAggregateOutputType | null
    _max: ComplaintMaxAggregateOutputType | null
  }

  export type ComplaintMinAggregateOutputType = {
    complaintId: string | null
    content: string | null
    createdAt: Date | null
    userId: string | null
    orderId: string | null
  }

  export type ComplaintMaxAggregateOutputType = {
    complaintId: string | null
    content: string | null
    createdAt: Date | null
    userId: string | null
    orderId: string | null
  }

  export type ComplaintCountAggregateOutputType = {
    complaintId: number
    content: number
    createdAt: number
    userId: number
    orderId: number
    _all: number
  }


  export type ComplaintMinAggregateInputType = {
    complaintId?: true
    content?: true
    createdAt?: true
    userId?: true
    orderId?: true
  }

  export type ComplaintMaxAggregateInputType = {
    complaintId?: true
    content?: true
    createdAt?: true
    userId?: true
    orderId?: true
  }

  export type ComplaintCountAggregateInputType = {
    complaintId?: true
    content?: true
    createdAt?: true
    userId?: true
    orderId?: true
    _all?: true
  }

  export type ComplaintAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Complaint to aggregate.
     */
    where?: ComplaintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Complaints to fetch.
     */
    orderBy?: ComplaintOrderByWithRelationInput | ComplaintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ComplaintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Complaints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Complaints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Complaints
    **/
    _count?: true | ComplaintCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComplaintMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComplaintMaxAggregateInputType
  }

  export type GetComplaintAggregateType<T extends ComplaintAggregateArgs> = {
        [P in keyof T & keyof AggregateComplaint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComplaint[P]>
      : GetScalarType<T[P], AggregateComplaint[P]>
  }




  export type ComplaintGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComplaintWhereInput
    orderBy?: ComplaintOrderByWithAggregationInput | ComplaintOrderByWithAggregationInput[]
    by: ComplaintScalarFieldEnum[] | ComplaintScalarFieldEnum
    having?: ComplaintScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComplaintCountAggregateInputType | true
    _min?: ComplaintMinAggregateInputType
    _max?: ComplaintMaxAggregateInputType
  }

  export type ComplaintGroupByOutputType = {
    complaintId: string
    content: string
    createdAt: Date
    userId: string
    orderId: string
    _count: ComplaintCountAggregateOutputType | null
    _min: ComplaintMinAggregateOutputType | null
    _max: ComplaintMaxAggregateOutputType | null
  }

  type GetComplaintGroupByPayload<T extends ComplaintGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComplaintGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComplaintGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComplaintGroupByOutputType[P]>
            : GetScalarType<T[P], ComplaintGroupByOutputType[P]>
        }
      >
    >


  export type ComplaintSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    complaintId?: boolean
    content?: boolean
    createdAt?: boolean
    userId?: boolean
    orderId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["complaint"]>

  export type ComplaintSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    complaintId?: boolean
    content?: boolean
    createdAt?: boolean
    userId?: boolean
    orderId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["complaint"]>

  export type ComplaintSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    complaintId?: boolean
    content?: boolean
    createdAt?: boolean
    userId?: boolean
    orderId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["complaint"]>

  export type ComplaintSelectScalar = {
    complaintId?: boolean
    content?: boolean
    createdAt?: boolean
    userId?: boolean
    orderId?: boolean
  }

  export type ComplaintOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"complaintId" | "content" | "createdAt" | "userId" | "orderId", ExtArgs["result"]["complaint"]>
  export type ComplaintInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type ComplaintIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type ComplaintIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }

  export type $ComplaintPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Complaint"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      order: Prisma.$OrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      complaintId: string
      content: string
      createdAt: Date
      userId: string
      orderId: string
    }, ExtArgs["result"]["complaint"]>
    composites: {}
  }

  type ComplaintGetPayload<S extends boolean | null | undefined | ComplaintDefaultArgs> = $Result.GetResult<Prisma.$ComplaintPayload, S>

  type ComplaintCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ComplaintFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ComplaintCountAggregateInputType | true
    }

  export interface ComplaintDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Complaint'], meta: { name: 'Complaint' } }
    /**
     * Find zero or one Complaint that matches the filter.
     * @param {ComplaintFindUniqueArgs} args - Arguments to find a Complaint
     * @example
     * // Get one Complaint
     * const complaint = await prisma.complaint.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ComplaintFindUniqueArgs>(args: SelectSubset<T, ComplaintFindUniqueArgs<ExtArgs>>): Prisma__ComplaintClient<$Result.GetResult<Prisma.$ComplaintPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Complaint that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ComplaintFindUniqueOrThrowArgs} args - Arguments to find a Complaint
     * @example
     * // Get one Complaint
     * const complaint = await prisma.complaint.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ComplaintFindUniqueOrThrowArgs>(args: SelectSubset<T, ComplaintFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ComplaintClient<$Result.GetResult<Prisma.$ComplaintPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Complaint that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplaintFindFirstArgs} args - Arguments to find a Complaint
     * @example
     * // Get one Complaint
     * const complaint = await prisma.complaint.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ComplaintFindFirstArgs>(args?: SelectSubset<T, ComplaintFindFirstArgs<ExtArgs>>): Prisma__ComplaintClient<$Result.GetResult<Prisma.$ComplaintPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Complaint that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplaintFindFirstOrThrowArgs} args - Arguments to find a Complaint
     * @example
     * // Get one Complaint
     * const complaint = await prisma.complaint.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ComplaintFindFirstOrThrowArgs>(args?: SelectSubset<T, ComplaintFindFirstOrThrowArgs<ExtArgs>>): Prisma__ComplaintClient<$Result.GetResult<Prisma.$ComplaintPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Complaints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplaintFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Complaints
     * const complaints = await prisma.complaint.findMany()
     * 
     * // Get first 10 Complaints
     * const complaints = await prisma.complaint.findMany({ take: 10 })
     * 
     * // Only select the `complaintId`
     * const complaintWithComplaintIdOnly = await prisma.complaint.findMany({ select: { complaintId: true } })
     * 
     */
    findMany<T extends ComplaintFindManyArgs>(args?: SelectSubset<T, ComplaintFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComplaintPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Complaint.
     * @param {ComplaintCreateArgs} args - Arguments to create a Complaint.
     * @example
     * // Create one Complaint
     * const Complaint = await prisma.complaint.create({
     *   data: {
     *     // ... data to create a Complaint
     *   }
     * })
     * 
     */
    create<T extends ComplaintCreateArgs>(args: SelectSubset<T, ComplaintCreateArgs<ExtArgs>>): Prisma__ComplaintClient<$Result.GetResult<Prisma.$ComplaintPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Complaints.
     * @param {ComplaintCreateManyArgs} args - Arguments to create many Complaints.
     * @example
     * // Create many Complaints
     * const complaint = await prisma.complaint.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ComplaintCreateManyArgs>(args?: SelectSubset<T, ComplaintCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Complaints and returns the data saved in the database.
     * @param {ComplaintCreateManyAndReturnArgs} args - Arguments to create many Complaints.
     * @example
     * // Create many Complaints
     * const complaint = await prisma.complaint.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Complaints and only return the `complaintId`
     * const complaintWithComplaintIdOnly = await prisma.complaint.createManyAndReturn({
     *   select: { complaintId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ComplaintCreateManyAndReturnArgs>(args?: SelectSubset<T, ComplaintCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComplaintPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Complaint.
     * @param {ComplaintDeleteArgs} args - Arguments to delete one Complaint.
     * @example
     * // Delete one Complaint
     * const Complaint = await prisma.complaint.delete({
     *   where: {
     *     // ... filter to delete one Complaint
     *   }
     * })
     * 
     */
    delete<T extends ComplaintDeleteArgs>(args: SelectSubset<T, ComplaintDeleteArgs<ExtArgs>>): Prisma__ComplaintClient<$Result.GetResult<Prisma.$ComplaintPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Complaint.
     * @param {ComplaintUpdateArgs} args - Arguments to update one Complaint.
     * @example
     * // Update one Complaint
     * const complaint = await prisma.complaint.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ComplaintUpdateArgs>(args: SelectSubset<T, ComplaintUpdateArgs<ExtArgs>>): Prisma__ComplaintClient<$Result.GetResult<Prisma.$ComplaintPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Complaints.
     * @param {ComplaintDeleteManyArgs} args - Arguments to filter Complaints to delete.
     * @example
     * // Delete a few Complaints
     * const { count } = await prisma.complaint.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ComplaintDeleteManyArgs>(args?: SelectSubset<T, ComplaintDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Complaints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplaintUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Complaints
     * const complaint = await prisma.complaint.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ComplaintUpdateManyArgs>(args: SelectSubset<T, ComplaintUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Complaints and returns the data updated in the database.
     * @param {ComplaintUpdateManyAndReturnArgs} args - Arguments to update many Complaints.
     * @example
     * // Update many Complaints
     * const complaint = await prisma.complaint.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Complaints and only return the `complaintId`
     * const complaintWithComplaintIdOnly = await prisma.complaint.updateManyAndReturn({
     *   select: { complaintId: true },
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
    updateManyAndReturn<T extends ComplaintUpdateManyAndReturnArgs>(args: SelectSubset<T, ComplaintUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComplaintPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Complaint.
     * @param {ComplaintUpsertArgs} args - Arguments to update or create a Complaint.
     * @example
     * // Update or create a Complaint
     * const complaint = await prisma.complaint.upsert({
     *   create: {
     *     // ... data to create a Complaint
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Complaint we want to update
     *   }
     * })
     */
    upsert<T extends ComplaintUpsertArgs>(args: SelectSubset<T, ComplaintUpsertArgs<ExtArgs>>): Prisma__ComplaintClient<$Result.GetResult<Prisma.$ComplaintPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Complaints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplaintCountArgs} args - Arguments to filter Complaints to count.
     * @example
     * // Count the number of Complaints
     * const count = await prisma.complaint.count({
     *   where: {
     *     // ... the filter for the Complaints we want to count
     *   }
     * })
    **/
    count<T extends ComplaintCountArgs>(
      args?: Subset<T, ComplaintCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComplaintCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Complaint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplaintAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ComplaintAggregateArgs>(args: Subset<T, ComplaintAggregateArgs>): Prisma.PrismaPromise<GetComplaintAggregateType<T>>

    /**
     * Group by Complaint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplaintGroupByArgs} args - Group by arguments.
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
      T extends ComplaintGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComplaintGroupByArgs['orderBy'] }
        : { orderBy?: ComplaintGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ComplaintGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComplaintGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Complaint model
   */
  readonly fields: ComplaintFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Complaint.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ComplaintClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Complaint model
   */
  interface ComplaintFieldRefs {
    readonly complaintId: FieldRef<"Complaint", 'String'>
    readonly content: FieldRef<"Complaint", 'String'>
    readonly createdAt: FieldRef<"Complaint", 'DateTime'>
    readonly userId: FieldRef<"Complaint", 'String'>
    readonly orderId: FieldRef<"Complaint", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Complaint findUnique
   */
  export type ComplaintFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complaint
     */
    select?: ComplaintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complaint
     */
    omit?: ComplaintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplaintInclude<ExtArgs> | null
    /**
     * Filter, which Complaint to fetch.
     */
    where: ComplaintWhereUniqueInput
  }

  /**
   * Complaint findUniqueOrThrow
   */
  export type ComplaintFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complaint
     */
    select?: ComplaintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complaint
     */
    omit?: ComplaintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplaintInclude<ExtArgs> | null
    /**
     * Filter, which Complaint to fetch.
     */
    where: ComplaintWhereUniqueInput
  }

  /**
   * Complaint findFirst
   */
  export type ComplaintFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complaint
     */
    select?: ComplaintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complaint
     */
    omit?: ComplaintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplaintInclude<ExtArgs> | null
    /**
     * Filter, which Complaint to fetch.
     */
    where?: ComplaintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Complaints to fetch.
     */
    orderBy?: ComplaintOrderByWithRelationInput | ComplaintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Complaints.
     */
    cursor?: ComplaintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Complaints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Complaints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Complaints.
     */
    distinct?: ComplaintScalarFieldEnum | ComplaintScalarFieldEnum[]
  }

  /**
   * Complaint findFirstOrThrow
   */
  export type ComplaintFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complaint
     */
    select?: ComplaintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complaint
     */
    omit?: ComplaintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplaintInclude<ExtArgs> | null
    /**
     * Filter, which Complaint to fetch.
     */
    where?: ComplaintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Complaints to fetch.
     */
    orderBy?: ComplaintOrderByWithRelationInput | ComplaintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Complaints.
     */
    cursor?: ComplaintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Complaints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Complaints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Complaints.
     */
    distinct?: ComplaintScalarFieldEnum | ComplaintScalarFieldEnum[]
  }

  /**
   * Complaint findMany
   */
  export type ComplaintFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complaint
     */
    select?: ComplaintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complaint
     */
    omit?: ComplaintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplaintInclude<ExtArgs> | null
    /**
     * Filter, which Complaints to fetch.
     */
    where?: ComplaintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Complaints to fetch.
     */
    orderBy?: ComplaintOrderByWithRelationInput | ComplaintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Complaints.
     */
    cursor?: ComplaintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Complaints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Complaints.
     */
    skip?: number
    distinct?: ComplaintScalarFieldEnum | ComplaintScalarFieldEnum[]
  }

  /**
   * Complaint create
   */
  export type ComplaintCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complaint
     */
    select?: ComplaintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complaint
     */
    omit?: ComplaintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplaintInclude<ExtArgs> | null
    /**
     * The data needed to create a Complaint.
     */
    data: XOR<ComplaintCreateInput, ComplaintUncheckedCreateInput>
  }

  /**
   * Complaint createMany
   */
  export type ComplaintCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Complaints.
     */
    data: ComplaintCreateManyInput | ComplaintCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Complaint createManyAndReturn
   */
  export type ComplaintCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complaint
     */
    select?: ComplaintSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Complaint
     */
    omit?: ComplaintOmit<ExtArgs> | null
    /**
     * The data used to create many Complaints.
     */
    data: ComplaintCreateManyInput | ComplaintCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplaintIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Complaint update
   */
  export type ComplaintUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complaint
     */
    select?: ComplaintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complaint
     */
    omit?: ComplaintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplaintInclude<ExtArgs> | null
    /**
     * The data needed to update a Complaint.
     */
    data: XOR<ComplaintUpdateInput, ComplaintUncheckedUpdateInput>
    /**
     * Choose, which Complaint to update.
     */
    where: ComplaintWhereUniqueInput
  }

  /**
   * Complaint updateMany
   */
  export type ComplaintUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Complaints.
     */
    data: XOR<ComplaintUpdateManyMutationInput, ComplaintUncheckedUpdateManyInput>
    /**
     * Filter which Complaints to update
     */
    where?: ComplaintWhereInput
    /**
     * Limit how many Complaints to update.
     */
    limit?: number
  }

  /**
   * Complaint updateManyAndReturn
   */
  export type ComplaintUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complaint
     */
    select?: ComplaintSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Complaint
     */
    omit?: ComplaintOmit<ExtArgs> | null
    /**
     * The data used to update Complaints.
     */
    data: XOR<ComplaintUpdateManyMutationInput, ComplaintUncheckedUpdateManyInput>
    /**
     * Filter which Complaints to update
     */
    where?: ComplaintWhereInput
    /**
     * Limit how many Complaints to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplaintIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Complaint upsert
   */
  export type ComplaintUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complaint
     */
    select?: ComplaintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complaint
     */
    omit?: ComplaintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplaintInclude<ExtArgs> | null
    /**
     * The filter to search for the Complaint to update in case it exists.
     */
    where: ComplaintWhereUniqueInput
    /**
     * In case the Complaint found by the `where` argument doesn't exist, create a new Complaint with this data.
     */
    create: XOR<ComplaintCreateInput, ComplaintUncheckedCreateInput>
    /**
     * In case the Complaint was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ComplaintUpdateInput, ComplaintUncheckedUpdateInput>
  }

  /**
   * Complaint delete
   */
  export type ComplaintDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complaint
     */
    select?: ComplaintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complaint
     */
    omit?: ComplaintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplaintInclude<ExtArgs> | null
    /**
     * Filter which Complaint to delete.
     */
    where: ComplaintWhereUniqueInput
  }

  /**
   * Complaint deleteMany
   */
  export type ComplaintDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Complaints to delete
     */
    where?: ComplaintWhereInput
    /**
     * Limit how many Complaints to delete.
     */
    limit?: number
  }

  /**
   * Complaint without action
   */
  export type ComplaintDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complaint
     */
    select?: ComplaintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complaint
     */
    omit?: ComplaintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplaintInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    userid: 'userid',
    email: 'email',
    name: 'name',
    role: 'role',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    productId: 'productId',
    productName: 'productName',
    productPrice: 'productPrice',
    warehouseId: 'warehouseId'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const CityScalarFieldEnum: {
    cityId: 'cityId',
    cityName: 'cityName',
    state: 'state'
  };

  export type CityScalarFieldEnum = (typeof CityScalarFieldEnum)[keyof typeof CityScalarFieldEnum]


  export const WareHouseScalarFieldEnum: {
    warehouseId: 'warehouseId',
    warehouseName: 'warehouseName',
    warehouseCapacity: 'warehouseCapacity',
    cityId: 'cityId'
  };

  export type WareHouseScalarFieldEnum = (typeof WareHouseScalarFieldEnum)[keyof typeof WareHouseScalarFieldEnum]


  export const WarehouseDetailsScalarFieldEnum: {
    warehouseId: 'warehouseId',
    cityId: 'cityId',
    userId: 'userId'
  };

  export type WarehouseDetailsScalarFieldEnum = (typeof WarehouseDetailsScalarFieldEnum)[keyof typeof WarehouseDetailsScalarFieldEnum]


  export const SalesScalarFieldEnum: {
    id: 'id',
    productName: 'productName',
    quantity: 'quantity',
    price: 'price',
    productId: 'productId'
  };

  export type SalesScalarFieldEnum = (typeof SalesScalarFieldEnum)[keyof typeof SalesScalarFieldEnum]


  export const StoreScalarFieldEnum: {
    storeId: 'storeId',
    storeName: 'storeName',
    vendorId: 'vendorId',
    cityId: 'cityId'
  };

  export type StoreScalarFieldEnum = (typeof StoreScalarFieldEnum)[keyof typeof StoreScalarFieldEnum]


  export const StoreAndProductScalarFieldEnum: {
    storeId: 'storeId',
    productId: 'productId',
    productName: 'productName'
  };

  export type StoreAndProductScalarFieldEnum = (typeof StoreAndProductScalarFieldEnum)[keyof typeof StoreAndProductScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    orderId: 'orderId',
    quantity: 'quantity',
    totalPrice: 'totalPrice',
    orderDate: 'orderDate',
    productId: 'productId',
    vendorId: 'vendorId'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const OrderDetailsScalarFieldEnum: {
    orderId: 'orderId',
    userId: 'userId'
  };

  export type OrderDetailsScalarFieldEnum = (typeof OrderDetailsScalarFieldEnum)[keyof typeof OrderDetailsScalarFieldEnum]


  export const ComplaintScalarFieldEnum: {
    complaintId: 'complaintId',
    content: 'content',
    createdAt: 'createdAt',
    userId: 'userId',
    orderId: 'orderId'
  };

  export type ComplaintScalarFieldEnum = (typeof ComplaintScalarFieldEnum)[keyof typeof ComplaintScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'UserType'
   */
  export type EnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType'>
    


  /**
   * Reference to a field of type 'UserType[]'
   */
  export type ListEnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    userid?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    role?: EnumUserTypeFilter<"User"> | $Enums.UserType
    password?: StringFilter<"User"> | string
    orderDetails?: OrderDetailsListRelationFilter
    stores?: StoreListRelationFilter
    Complaints?: ComplaintListRelationFilter
    WarehouseDetails?: WarehouseDetailsListRelationFilter
    orders?: OrderListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    userid?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    password?: SortOrder
    orderDetails?: OrderDetailsOrderByRelationAggregateInput
    stores?: StoreOrderByRelationAggregateInput
    Complaints?: ComplaintOrderByRelationAggregateInput
    WarehouseDetails?: WarehouseDetailsOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    userid?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    role?: EnumUserTypeFilter<"User"> | $Enums.UserType
    password?: StringFilter<"User"> | string
    orderDetails?: OrderDetailsListRelationFilter
    stores?: StoreListRelationFilter
    Complaints?: ComplaintListRelationFilter
    WarehouseDetails?: WarehouseDetailsListRelationFilter
    orders?: OrderListRelationFilter
  }, "userid" | "email">

  export type UserOrderByWithAggregationInput = {
    userid?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    userid?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserTypeWithAggregatesFilter<"User"> | $Enums.UserType
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    productId?: StringFilter<"Product"> | string
    productName?: StringFilter<"Product"> | string
    productPrice?: FloatFilter<"Product"> | number
    warehouseId?: StringFilter<"Product"> | string
    warehouse?: XOR<WareHouseScalarRelationFilter, WareHouseWhereInput>
    sales?: SalesListRelationFilter
    orders?: OrderListRelationFilter
    storeProducts?: StoreAndProductListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    productId?: SortOrder
    productName?: SortOrder
    productPrice?: SortOrder
    warehouseId?: SortOrder
    warehouse?: WareHouseOrderByWithRelationInput
    sales?: SalesOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
    storeProducts?: StoreAndProductOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    productId?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    productName?: StringFilter<"Product"> | string
    productPrice?: FloatFilter<"Product"> | number
    warehouseId?: StringFilter<"Product"> | string
    warehouse?: XOR<WareHouseScalarRelationFilter, WareHouseWhereInput>
    sales?: SalesListRelationFilter
    orders?: OrderListRelationFilter
    storeProducts?: StoreAndProductListRelationFilter
  }, "productId">

  export type ProductOrderByWithAggregationInput = {
    productId?: SortOrder
    productName?: SortOrder
    productPrice?: SortOrder
    warehouseId?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    productId?: StringWithAggregatesFilter<"Product"> | string
    productName?: StringWithAggregatesFilter<"Product"> | string
    productPrice?: FloatWithAggregatesFilter<"Product"> | number
    warehouseId?: StringWithAggregatesFilter<"Product"> | string
  }

  export type CityWhereInput = {
    AND?: CityWhereInput | CityWhereInput[]
    OR?: CityWhereInput[]
    NOT?: CityWhereInput | CityWhereInput[]
    cityId?: StringFilter<"City"> | string
    cityName?: StringFilter<"City"> | string
    state?: StringFilter<"City"> | string
    warehouses?: WareHouseListRelationFilter
    warehouseDetails?: WarehouseDetailsListRelationFilter
    Stores?: StoreListRelationFilter
  }

  export type CityOrderByWithRelationInput = {
    cityId?: SortOrder
    cityName?: SortOrder
    state?: SortOrder
    warehouses?: WareHouseOrderByRelationAggregateInput
    warehouseDetails?: WarehouseDetailsOrderByRelationAggregateInput
    Stores?: StoreOrderByRelationAggregateInput
  }

  export type CityWhereUniqueInput = Prisma.AtLeast<{
    cityId?: string
    cityName?: string
    AND?: CityWhereInput | CityWhereInput[]
    OR?: CityWhereInput[]
    NOT?: CityWhereInput | CityWhereInput[]
    state?: StringFilter<"City"> | string
    warehouses?: WareHouseListRelationFilter
    warehouseDetails?: WarehouseDetailsListRelationFilter
    Stores?: StoreListRelationFilter
  }, "cityId" | "cityName">

  export type CityOrderByWithAggregationInput = {
    cityId?: SortOrder
    cityName?: SortOrder
    state?: SortOrder
    _count?: CityCountOrderByAggregateInput
    _max?: CityMaxOrderByAggregateInput
    _min?: CityMinOrderByAggregateInput
  }

  export type CityScalarWhereWithAggregatesInput = {
    AND?: CityScalarWhereWithAggregatesInput | CityScalarWhereWithAggregatesInput[]
    OR?: CityScalarWhereWithAggregatesInput[]
    NOT?: CityScalarWhereWithAggregatesInput | CityScalarWhereWithAggregatesInput[]
    cityId?: StringWithAggregatesFilter<"City"> | string
    cityName?: StringWithAggregatesFilter<"City"> | string
    state?: StringWithAggregatesFilter<"City"> | string
  }

  export type WareHouseWhereInput = {
    AND?: WareHouseWhereInput | WareHouseWhereInput[]
    OR?: WareHouseWhereInput[]
    NOT?: WareHouseWhereInput | WareHouseWhereInput[]
    warehouseId?: StringFilter<"WareHouse"> | string
    warehouseName?: StringFilter<"WareHouse"> | string
    warehouseCapacity?: IntFilter<"WareHouse"> | number
    cityId?: StringFilter<"WareHouse"> | string
    city?: XOR<CityScalarRelationFilter, CityWhereInput>
    products?: ProductListRelationFilter
    warehouseDetails?: WarehouseDetailsListRelationFilter
  }

  export type WareHouseOrderByWithRelationInput = {
    warehouseId?: SortOrder
    warehouseName?: SortOrder
    warehouseCapacity?: SortOrder
    cityId?: SortOrder
    city?: CityOrderByWithRelationInput
    products?: ProductOrderByRelationAggregateInput
    warehouseDetails?: WarehouseDetailsOrderByRelationAggregateInput
  }

  export type WareHouseWhereUniqueInput = Prisma.AtLeast<{
    warehouseId?: string
    AND?: WareHouseWhereInput | WareHouseWhereInput[]
    OR?: WareHouseWhereInput[]
    NOT?: WareHouseWhereInput | WareHouseWhereInput[]
    warehouseName?: StringFilter<"WareHouse"> | string
    warehouseCapacity?: IntFilter<"WareHouse"> | number
    cityId?: StringFilter<"WareHouse"> | string
    city?: XOR<CityScalarRelationFilter, CityWhereInput>
    products?: ProductListRelationFilter
    warehouseDetails?: WarehouseDetailsListRelationFilter
  }, "warehouseId">

  export type WareHouseOrderByWithAggregationInput = {
    warehouseId?: SortOrder
    warehouseName?: SortOrder
    warehouseCapacity?: SortOrder
    cityId?: SortOrder
    _count?: WareHouseCountOrderByAggregateInput
    _avg?: WareHouseAvgOrderByAggregateInput
    _max?: WareHouseMaxOrderByAggregateInput
    _min?: WareHouseMinOrderByAggregateInput
    _sum?: WareHouseSumOrderByAggregateInput
  }

  export type WareHouseScalarWhereWithAggregatesInput = {
    AND?: WareHouseScalarWhereWithAggregatesInput | WareHouseScalarWhereWithAggregatesInput[]
    OR?: WareHouseScalarWhereWithAggregatesInput[]
    NOT?: WareHouseScalarWhereWithAggregatesInput | WareHouseScalarWhereWithAggregatesInput[]
    warehouseId?: StringWithAggregatesFilter<"WareHouse"> | string
    warehouseName?: StringWithAggregatesFilter<"WareHouse"> | string
    warehouseCapacity?: IntWithAggregatesFilter<"WareHouse"> | number
    cityId?: StringWithAggregatesFilter<"WareHouse"> | string
  }

  export type WarehouseDetailsWhereInput = {
    AND?: WarehouseDetailsWhereInput | WarehouseDetailsWhereInput[]
    OR?: WarehouseDetailsWhereInput[]
    NOT?: WarehouseDetailsWhereInput | WarehouseDetailsWhereInput[]
    warehouseId?: StringFilter<"WarehouseDetails"> | string
    cityId?: StringFilter<"WarehouseDetails"> | string
    userId?: StringFilter<"WarehouseDetails"> | string
    warehouse?: XOR<WareHouseScalarRelationFilter, WareHouseWhereInput>
    city?: XOR<CityScalarRelationFilter, CityWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type WarehouseDetailsOrderByWithRelationInput = {
    warehouseId?: SortOrder
    cityId?: SortOrder
    userId?: SortOrder
    warehouse?: WareHouseOrderByWithRelationInput
    city?: CityOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type WarehouseDetailsWhereUniqueInput = Prisma.AtLeast<{
    cityId_warehouseId?: WarehouseDetailsCityIdWarehouseIdCompoundUniqueInput
    AND?: WarehouseDetailsWhereInput | WarehouseDetailsWhereInput[]
    OR?: WarehouseDetailsWhereInput[]
    NOT?: WarehouseDetailsWhereInput | WarehouseDetailsWhereInput[]
    warehouseId?: StringFilter<"WarehouseDetails"> | string
    cityId?: StringFilter<"WarehouseDetails"> | string
    userId?: StringFilter<"WarehouseDetails"> | string
    warehouse?: XOR<WareHouseScalarRelationFilter, WareHouseWhereInput>
    city?: XOR<CityScalarRelationFilter, CityWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "cityId_warehouseId">

  export type WarehouseDetailsOrderByWithAggregationInput = {
    warehouseId?: SortOrder
    cityId?: SortOrder
    userId?: SortOrder
    _count?: WarehouseDetailsCountOrderByAggregateInput
    _max?: WarehouseDetailsMaxOrderByAggregateInput
    _min?: WarehouseDetailsMinOrderByAggregateInput
  }

  export type WarehouseDetailsScalarWhereWithAggregatesInput = {
    AND?: WarehouseDetailsScalarWhereWithAggregatesInput | WarehouseDetailsScalarWhereWithAggregatesInput[]
    OR?: WarehouseDetailsScalarWhereWithAggregatesInput[]
    NOT?: WarehouseDetailsScalarWhereWithAggregatesInput | WarehouseDetailsScalarWhereWithAggregatesInput[]
    warehouseId?: StringWithAggregatesFilter<"WarehouseDetails"> | string
    cityId?: StringWithAggregatesFilter<"WarehouseDetails"> | string
    userId?: StringWithAggregatesFilter<"WarehouseDetails"> | string
  }

  export type SalesWhereInput = {
    AND?: SalesWhereInput | SalesWhereInput[]
    OR?: SalesWhereInput[]
    NOT?: SalesWhereInput | SalesWhereInput[]
    id?: StringFilter<"Sales"> | string
    productName?: StringFilter<"Sales"> | string
    quantity?: IntFilter<"Sales"> | number
    price?: FloatFilter<"Sales"> | number
    productId?: StringFilter<"Sales"> | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type SalesOrderByWithRelationInput = {
    id?: SortOrder
    productName?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    productId?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type SalesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SalesWhereInput | SalesWhereInput[]
    OR?: SalesWhereInput[]
    NOT?: SalesWhereInput | SalesWhereInput[]
    productName?: StringFilter<"Sales"> | string
    quantity?: IntFilter<"Sales"> | number
    price?: FloatFilter<"Sales"> | number
    productId?: StringFilter<"Sales"> | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type SalesOrderByWithAggregationInput = {
    id?: SortOrder
    productName?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    productId?: SortOrder
    _count?: SalesCountOrderByAggregateInput
    _avg?: SalesAvgOrderByAggregateInput
    _max?: SalesMaxOrderByAggregateInput
    _min?: SalesMinOrderByAggregateInput
    _sum?: SalesSumOrderByAggregateInput
  }

  export type SalesScalarWhereWithAggregatesInput = {
    AND?: SalesScalarWhereWithAggregatesInput | SalesScalarWhereWithAggregatesInput[]
    OR?: SalesScalarWhereWithAggregatesInput[]
    NOT?: SalesScalarWhereWithAggregatesInput | SalesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Sales"> | string
    productName?: StringWithAggregatesFilter<"Sales"> | string
    quantity?: IntWithAggregatesFilter<"Sales"> | number
    price?: FloatWithAggregatesFilter<"Sales"> | number
    productId?: StringWithAggregatesFilter<"Sales"> | string
  }

  export type StoreWhereInput = {
    AND?: StoreWhereInput | StoreWhereInput[]
    OR?: StoreWhereInput[]
    NOT?: StoreWhereInput | StoreWhereInput[]
    storeId?: StringFilter<"Store"> | string
    storeName?: StringFilter<"Store"> | string
    vendorId?: StringFilter<"Store"> | string
    cityId?: StringFilter<"Store"> | string
    vendor?: XOR<UserScalarRelationFilter, UserWhereInput>
    city?: XOR<CityScalarRelationFilter, CityWhereInput>
    storeProducts?: StoreAndProductListRelationFilter
  }

  export type StoreOrderByWithRelationInput = {
    storeId?: SortOrder
    storeName?: SortOrder
    vendorId?: SortOrder
    cityId?: SortOrder
    vendor?: UserOrderByWithRelationInput
    city?: CityOrderByWithRelationInput
    storeProducts?: StoreAndProductOrderByRelationAggregateInput
  }

  export type StoreWhereUniqueInput = Prisma.AtLeast<{
    storeId?: string
    AND?: StoreWhereInput | StoreWhereInput[]
    OR?: StoreWhereInput[]
    NOT?: StoreWhereInput | StoreWhereInput[]
    storeName?: StringFilter<"Store"> | string
    vendorId?: StringFilter<"Store"> | string
    cityId?: StringFilter<"Store"> | string
    vendor?: XOR<UserScalarRelationFilter, UserWhereInput>
    city?: XOR<CityScalarRelationFilter, CityWhereInput>
    storeProducts?: StoreAndProductListRelationFilter
  }, "storeId">

  export type StoreOrderByWithAggregationInput = {
    storeId?: SortOrder
    storeName?: SortOrder
    vendorId?: SortOrder
    cityId?: SortOrder
    _count?: StoreCountOrderByAggregateInput
    _max?: StoreMaxOrderByAggregateInput
    _min?: StoreMinOrderByAggregateInput
  }

  export type StoreScalarWhereWithAggregatesInput = {
    AND?: StoreScalarWhereWithAggregatesInput | StoreScalarWhereWithAggregatesInput[]
    OR?: StoreScalarWhereWithAggregatesInput[]
    NOT?: StoreScalarWhereWithAggregatesInput | StoreScalarWhereWithAggregatesInput[]
    storeId?: StringWithAggregatesFilter<"Store"> | string
    storeName?: StringWithAggregatesFilter<"Store"> | string
    vendorId?: StringWithAggregatesFilter<"Store"> | string
    cityId?: StringWithAggregatesFilter<"Store"> | string
  }

  export type StoreAndProductWhereInput = {
    AND?: StoreAndProductWhereInput | StoreAndProductWhereInput[]
    OR?: StoreAndProductWhereInput[]
    NOT?: StoreAndProductWhereInput | StoreAndProductWhereInput[]
    storeId?: StringFilter<"StoreAndProduct"> | string
    productId?: StringFilter<"StoreAndProduct"> | string
    productName?: StringNullableFilter<"StoreAndProduct"> | string | null
    store?: XOR<StoreScalarRelationFilter, StoreWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type StoreAndProductOrderByWithRelationInput = {
    storeId?: SortOrder
    productId?: SortOrder
    productName?: SortOrderInput | SortOrder
    store?: StoreOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type StoreAndProductWhereUniqueInput = Prisma.AtLeast<{
    storeId_productId?: StoreAndProductStoreIdProductIdCompoundUniqueInput
    AND?: StoreAndProductWhereInput | StoreAndProductWhereInput[]
    OR?: StoreAndProductWhereInput[]
    NOT?: StoreAndProductWhereInput | StoreAndProductWhereInput[]
    storeId?: StringFilter<"StoreAndProduct"> | string
    productId?: StringFilter<"StoreAndProduct"> | string
    productName?: StringNullableFilter<"StoreAndProduct"> | string | null
    store?: XOR<StoreScalarRelationFilter, StoreWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "storeId_productId">

  export type StoreAndProductOrderByWithAggregationInput = {
    storeId?: SortOrder
    productId?: SortOrder
    productName?: SortOrderInput | SortOrder
    _count?: StoreAndProductCountOrderByAggregateInput
    _max?: StoreAndProductMaxOrderByAggregateInput
    _min?: StoreAndProductMinOrderByAggregateInput
  }

  export type StoreAndProductScalarWhereWithAggregatesInput = {
    AND?: StoreAndProductScalarWhereWithAggregatesInput | StoreAndProductScalarWhereWithAggregatesInput[]
    OR?: StoreAndProductScalarWhereWithAggregatesInput[]
    NOT?: StoreAndProductScalarWhereWithAggregatesInput | StoreAndProductScalarWhereWithAggregatesInput[]
    storeId?: StringWithAggregatesFilter<"StoreAndProduct"> | string
    productId?: StringWithAggregatesFilter<"StoreAndProduct"> | string
    productName?: StringNullableWithAggregatesFilter<"StoreAndProduct"> | string | null
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    orderId?: StringFilter<"Order"> | string
    quantity?: IntFilter<"Order"> | number
    totalPrice?: FloatFilter<"Order"> | number
    orderDate?: DateTimeFilter<"Order"> | Date | string
    productId?: StringFilter<"Order"> | string
    vendorId?: StringFilter<"Order"> | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    vendor?: XOR<UserScalarRelationFilter, UserWhereInput>
    orderDetails?: OrderDetailsListRelationFilter
    complaints?: ComplaintListRelationFilter
  }

  export type OrderOrderByWithRelationInput = {
    orderId?: SortOrder
    quantity?: SortOrder
    totalPrice?: SortOrder
    orderDate?: SortOrder
    productId?: SortOrder
    vendorId?: SortOrder
    product?: ProductOrderByWithRelationInput
    vendor?: UserOrderByWithRelationInput
    orderDetails?: OrderDetailsOrderByRelationAggregateInput
    complaints?: ComplaintOrderByRelationAggregateInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    orderId?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    quantity?: IntFilter<"Order"> | number
    totalPrice?: FloatFilter<"Order"> | number
    orderDate?: DateTimeFilter<"Order"> | Date | string
    productId?: StringFilter<"Order"> | string
    vendorId?: StringFilter<"Order"> | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    vendor?: XOR<UserScalarRelationFilter, UserWhereInput>
    orderDetails?: OrderDetailsListRelationFilter
    complaints?: ComplaintListRelationFilter
  }, "orderId">

  export type OrderOrderByWithAggregationInput = {
    orderId?: SortOrder
    quantity?: SortOrder
    totalPrice?: SortOrder
    orderDate?: SortOrder
    productId?: SortOrder
    vendorId?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    orderId?: StringWithAggregatesFilter<"Order"> | string
    quantity?: IntWithAggregatesFilter<"Order"> | number
    totalPrice?: FloatWithAggregatesFilter<"Order"> | number
    orderDate?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    productId?: StringWithAggregatesFilter<"Order"> | string
    vendorId?: StringWithAggregatesFilter<"Order"> | string
  }

  export type OrderDetailsWhereInput = {
    AND?: OrderDetailsWhereInput | OrderDetailsWhereInput[]
    OR?: OrderDetailsWhereInput[]
    NOT?: OrderDetailsWhereInput | OrderDetailsWhereInput[]
    orderId?: StringFilter<"OrderDetails"> | string
    userId?: StringFilter<"OrderDetails"> | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type OrderDetailsOrderByWithRelationInput = {
    orderId?: SortOrder
    userId?: SortOrder
    order?: OrderOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type OrderDetailsWhereUniqueInput = Prisma.AtLeast<{
    orderId_userId?: OrderDetailsOrderIdUserIdCompoundUniqueInput
    AND?: OrderDetailsWhereInput | OrderDetailsWhereInput[]
    OR?: OrderDetailsWhereInput[]
    NOT?: OrderDetailsWhereInput | OrderDetailsWhereInput[]
    orderId?: StringFilter<"OrderDetails"> | string
    userId?: StringFilter<"OrderDetails"> | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "orderId_userId">

  export type OrderDetailsOrderByWithAggregationInput = {
    orderId?: SortOrder
    userId?: SortOrder
    _count?: OrderDetailsCountOrderByAggregateInput
    _max?: OrderDetailsMaxOrderByAggregateInput
    _min?: OrderDetailsMinOrderByAggregateInput
  }

  export type OrderDetailsScalarWhereWithAggregatesInput = {
    AND?: OrderDetailsScalarWhereWithAggregatesInput | OrderDetailsScalarWhereWithAggregatesInput[]
    OR?: OrderDetailsScalarWhereWithAggregatesInput[]
    NOT?: OrderDetailsScalarWhereWithAggregatesInput | OrderDetailsScalarWhereWithAggregatesInput[]
    orderId?: StringWithAggregatesFilter<"OrderDetails"> | string
    userId?: StringWithAggregatesFilter<"OrderDetails"> | string
  }

  export type ComplaintWhereInput = {
    AND?: ComplaintWhereInput | ComplaintWhereInput[]
    OR?: ComplaintWhereInput[]
    NOT?: ComplaintWhereInput | ComplaintWhereInput[]
    complaintId?: StringFilter<"Complaint"> | string
    content?: StringFilter<"Complaint"> | string
    createdAt?: DateTimeFilter<"Complaint"> | Date | string
    userId?: StringFilter<"Complaint"> | string
    orderId?: StringFilter<"Complaint"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }

  export type ComplaintOrderByWithRelationInput = {
    complaintId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    orderId?: SortOrder
    user?: UserOrderByWithRelationInput
    order?: OrderOrderByWithRelationInput
  }

  export type ComplaintWhereUniqueInput = Prisma.AtLeast<{
    complaintId?: string
    AND?: ComplaintWhereInput | ComplaintWhereInput[]
    OR?: ComplaintWhereInput[]
    NOT?: ComplaintWhereInput | ComplaintWhereInput[]
    content?: StringFilter<"Complaint"> | string
    createdAt?: DateTimeFilter<"Complaint"> | Date | string
    userId?: StringFilter<"Complaint"> | string
    orderId?: StringFilter<"Complaint"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }, "complaintId">

  export type ComplaintOrderByWithAggregationInput = {
    complaintId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    orderId?: SortOrder
    _count?: ComplaintCountOrderByAggregateInput
    _max?: ComplaintMaxOrderByAggregateInput
    _min?: ComplaintMinOrderByAggregateInput
  }

  export type ComplaintScalarWhereWithAggregatesInput = {
    AND?: ComplaintScalarWhereWithAggregatesInput | ComplaintScalarWhereWithAggregatesInput[]
    OR?: ComplaintScalarWhereWithAggregatesInput[]
    NOT?: ComplaintScalarWhereWithAggregatesInput | ComplaintScalarWhereWithAggregatesInput[]
    complaintId?: StringWithAggregatesFilter<"Complaint"> | string
    content?: StringWithAggregatesFilter<"Complaint"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Complaint"> | Date | string
    userId?: StringWithAggregatesFilter<"Complaint"> | string
    orderId?: StringWithAggregatesFilter<"Complaint"> | string
  }

  export type UserCreateInput = {
    userid?: string
    email: string
    name?: string | null
    role: $Enums.UserType
    password: string
    orderDetails?: OrderDetailsCreateNestedManyWithoutUserInput
    stores?: StoreCreateNestedManyWithoutVendorInput
    Complaints?: ComplaintCreateNestedManyWithoutUserInput
    WarehouseDetails?: WarehouseDetailsCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutVendorInput
  }

  export type UserUncheckedCreateInput = {
    userid?: string
    email: string
    name?: string | null
    role: $Enums.UserType
    password: string
    orderDetails?: OrderDetailsUncheckedCreateNestedManyWithoutUserInput
    stores?: StoreUncheckedCreateNestedManyWithoutVendorInput
    Complaints?: ComplaintUncheckedCreateNestedManyWithoutUserInput
    WarehouseDetails?: WarehouseDetailsUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutVendorInput
  }

  export type UserUpdateInput = {
    userid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    password?: StringFieldUpdateOperationsInput | string
    orderDetails?: OrderDetailsUpdateManyWithoutUserNestedInput
    stores?: StoreUpdateManyWithoutVendorNestedInput
    Complaints?: ComplaintUpdateManyWithoutUserNestedInput
    WarehouseDetails?: WarehouseDetailsUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutVendorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    userid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    password?: StringFieldUpdateOperationsInput | string
    orderDetails?: OrderDetailsUncheckedUpdateManyWithoutUserNestedInput
    stores?: StoreUncheckedUpdateManyWithoutVendorNestedInput
    Complaints?: ComplaintUncheckedUpdateManyWithoutUserNestedInput
    WarehouseDetails?: WarehouseDetailsUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type UserCreateManyInput = {
    userid?: string
    email: string
    name?: string | null
    role: $Enums.UserType
    password: string
  }

  export type UserUpdateManyMutationInput = {
    userid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    userid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    password?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateInput = {
    productId?: string
    productName: string
    productPrice: number
    warehouse: WareHouseCreateNestedOneWithoutProductsInput
    sales?: SalesCreateNestedManyWithoutProductInput
    orders?: OrderCreateNestedManyWithoutProductInput
    storeProducts?: StoreAndProductCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    productId?: string
    productName: string
    productPrice: number
    warehouseId: string
    sales?: SalesUncheckedCreateNestedManyWithoutProductInput
    orders?: OrderUncheckedCreateNestedManyWithoutProductInput
    storeProducts?: StoreAndProductUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productPrice?: FloatFieldUpdateOperationsInput | number
    warehouse?: WareHouseUpdateOneRequiredWithoutProductsNestedInput
    sales?: SalesUpdateManyWithoutProductNestedInput
    orders?: OrderUpdateManyWithoutProductNestedInput
    storeProducts?: StoreAndProductUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productPrice?: FloatFieldUpdateOperationsInput | number
    warehouseId?: StringFieldUpdateOperationsInput | string
    sales?: SalesUncheckedUpdateManyWithoutProductNestedInput
    orders?: OrderUncheckedUpdateManyWithoutProductNestedInput
    storeProducts?: StoreAndProductUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    productId?: string
    productName: string
    productPrice: number
    warehouseId: string
  }

  export type ProductUpdateManyMutationInput = {
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productPrice?: FloatFieldUpdateOperationsInput | number
  }

  export type ProductUncheckedUpdateManyInput = {
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productPrice?: FloatFieldUpdateOperationsInput | number
    warehouseId?: StringFieldUpdateOperationsInput | string
  }

  export type CityCreateInput = {
    cityId?: string
    cityName: string
    state: string
    warehouses?: WareHouseCreateNestedManyWithoutCityInput
    warehouseDetails?: WarehouseDetailsCreateNestedManyWithoutCityInput
    Stores?: StoreCreateNestedManyWithoutCityInput
  }

  export type CityUncheckedCreateInput = {
    cityId?: string
    cityName: string
    state: string
    warehouses?: WareHouseUncheckedCreateNestedManyWithoutCityInput
    warehouseDetails?: WarehouseDetailsUncheckedCreateNestedManyWithoutCityInput
    Stores?: StoreUncheckedCreateNestedManyWithoutCityInput
  }

  export type CityUpdateInput = {
    cityId?: StringFieldUpdateOperationsInput | string
    cityName?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    warehouses?: WareHouseUpdateManyWithoutCityNestedInput
    warehouseDetails?: WarehouseDetailsUpdateManyWithoutCityNestedInput
    Stores?: StoreUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateInput = {
    cityId?: StringFieldUpdateOperationsInput | string
    cityName?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    warehouses?: WareHouseUncheckedUpdateManyWithoutCityNestedInput
    warehouseDetails?: WarehouseDetailsUncheckedUpdateManyWithoutCityNestedInput
    Stores?: StoreUncheckedUpdateManyWithoutCityNestedInput
  }

  export type CityCreateManyInput = {
    cityId?: string
    cityName: string
    state: string
  }

  export type CityUpdateManyMutationInput = {
    cityId?: StringFieldUpdateOperationsInput | string
    cityName?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
  }

  export type CityUncheckedUpdateManyInput = {
    cityId?: StringFieldUpdateOperationsInput | string
    cityName?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
  }

  export type WareHouseCreateInput = {
    warehouseId?: string
    warehouseName: string
    warehouseCapacity: number
    city: CityCreateNestedOneWithoutWarehousesInput
    products?: ProductCreateNestedManyWithoutWarehouseInput
    warehouseDetails?: WarehouseDetailsCreateNestedManyWithoutWarehouseInput
  }

  export type WareHouseUncheckedCreateInput = {
    warehouseId?: string
    warehouseName: string
    warehouseCapacity: number
    cityId: string
    products?: ProductUncheckedCreateNestedManyWithoutWarehouseInput
    warehouseDetails?: WarehouseDetailsUncheckedCreateNestedManyWithoutWarehouseInput
  }

  export type WareHouseUpdateInput = {
    warehouseId?: StringFieldUpdateOperationsInput | string
    warehouseName?: StringFieldUpdateOperationsInput | string
    warehouseCapacity?: IntFieldUpdateOperationsInput | number
    city?: CityUpdateOneRequiredWithoutWarehousesNestedInput
    products?: ProductUpdateManyWithoutWarehouseNestedInput
    warehouseDetails?: WarehouseDetailsUpdateManyWithoutWarehouseNestedInput
  }

  export type WareHouseUncheckedUpdateInput = {
    warehouseId?: StringFieldUpdateOperationsInput | string
    warehouseName?: StringFieldUpdateOperationsInput | string
    warehouseCapacity?: IntFieldUpdateOperationsInput | number
    cityId?: StringFieldUpdateOperationsInput | string
    products?: ProductUncheckedUpdateManyWithoutWarehouseNestedInput
    warehouseDetails?: WarehouseDetailsUncheckedUpdateManyWithoutWarehouseNestedInput
  }

  export type WareHouseCreateManyInput = {
    warehouseId?: string
    warehouseName: string
    warehouseCapacity: number
    cityId: string
  }

  export type WareHouseUpdateManyMutationInput = {
    warehouseId?: StringFieldUpdateOperationsInput | string
    warehouseName?: StringFieldUpdateOperationsInput | string
    warehouseCapacity?: IntFieldUpdateOperationsInput | number
  }

  export type WareHouseUncheckedUpdateManyInput = {
    warehouseId?: StringFieldUpdateOperationsInput | string
    warehouseName?: StringFieldUpdateOperationsInput | string
    warehouseCapacity?: IntFieldUpdateOperationsInput | number
    cityId?: StringFieldUpdateOperationsInput | string
  }

  export type WarehouseDetailsCreateInput = {
    warehouse: WareHouseCreateNestedOneWithoutWarehouseDetailsInput
    city: CityCreateNestedOneWithoutWarehouseDetailsInput
    user: UserCreateNestedOneWithoutWarehouseDetailsInput
  }

  export type WarehouseDetailsUncheckedCreateInput = {
    warehouseId: string
    cityId: string
    userId: string
  }

  export type WarehouseDetailsUpdateInput = {
    warehouse?: WareHouseUpdateOneRequiredWithoutWarehouseDetailsNestedInput
    city?: CityUpdateOneRequiredWithoutWarehouseDetailsNestedInput
    user?: UserUpdateOneRequiredWithoutWarehouseDetailsNestedInput
  }

  export type WarehouseDetailsUncheckedUpdateInput = {
    warehouseId?: StringFieldUpdateOperationsInput | string
    cityId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type WarehouseDetailsCreateManyInput = {
    warehouseId: string
    cityId: string
    userId: string
  }

  export type WarehouseDetailsUpdateManyMutationInput = {

  }

  export type WarehouseDetailsUncheckedUpdateManyInput = {
    warehouseId?: StringFieldUpdateOperationsInput | string
    cityId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SalesCreateInput = {
    id?: string
    productName: string
    quantity: number
    price: number
    product: ProductCreateNestedOneWithoutSalesInput
  }

  export type SalesUncheckedCreateInput = {
    id?: string
    productName: string
    quantity: number
    price: number
    productId: string
  }

  export type SalesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutSalesNestedInput
  }

  export type SalesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type SalesCreateManyInput = {
    id?: string
    productName: string
    quantity: number
    price: number
    productId: string
  }

  export type SalesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type SalesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type StoreCreateInput = {
    storeId?: string
    storeName: string
    vendor: UserCreateNestedOneWithoutStoresInput
    city: CityCreateNestedOneWithoutStoresInput
    storeProducts?: StoreAndProductCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateInput = {
    storeId?: string
    storeName: string
    vendorId: string
    cityId: string
    storeProducts?: StoreAndProductUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreUpdateInput = {
    storeId?: StringFieldUpdateOperationsInput | string
    storeName?: StringFieldUpdateOperationsInput | string
    vendor?: UserUpdateOneRequiredWithoutStoresNestedInput
    city?: CityUpdateOneRequiredWithoutStoresNestedInput
    storeProducts?: StoreAndProductUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateInput = {
    storeId?: StringFieldUpdateOperationsInput | string
    storeName?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    cityId?: StringFieldUpdateOperationsInput | string
    storeProducts?: StoreAndProductUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type StoreCreateManyInput = {
    storeId?: string
    storeName: string
    vendorId: string
    cityId: string
  }

  export type StoreUpdateManyMutationInput = {
    storeId?: StringFieldUpdateOperationsInput | string
    storeName?: StringFieldUpdateOperationsInput | string
  }

  export type StoreUncheckedUpdateManyInput = {
    storeId?: StringFieldUpdateOperationsInput | string
    storeName?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    cityId?: StringFieldUpdateOperationsInput | string
  }

  export type StoreAndProductCreateInput = {
    productName?: string | null
    store: StoreCreateNestedOneWithoutStoreProductsInput
    product: ProductCreateNestedOneWithoutStoreProductsInput
  }

  export type StoreAndProductUncheckedCreateInput = {
    storeId: string
    productId: string
    productName?: string | null
  }

  export type StoreAndProductUpdateInput = {
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    store?: StoreUpdateOneRequiredWithoutStoreProductsNestedInput
    product?: ProductUpdateOneRequiredWithoutStoreProductsNestedInput
  }

  export type StoreAndProductUncheckedUpdateInput = {
    storeId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    productName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StoreAndProductCreateManyInput = {
    storeId: string
    productId: string
    productName?: string | null
  }

  export type StoreAndProductUpdateManyMutationInput = {
    productName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StoreAndProductUncheckedUpdateManyInput = {
    storeId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    productName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderCreateInput = {
    orderId?: string
    quantity: number
    totalPrice: number
    orderDate?: Date | string
    product: ProductCreateNestedOneWithoutOrdersInput
    vendor: UserCreateNestedOneWithoutOrdersInput
    orderDetails?: OrderDetailsCreateNestedManyWithoutOrderInput
    complaints?: ComplaintCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    orderId?: string
    quantity: number
    totalPrice: number
    orderDate?: Date | string
    productId: string
    vendorId: string
    orderDetails?: OrderDetailsUncheckedCreateNestedManyWithoutOrderInput
    complaints?: ComplaintUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutOrdersNestedInput
    vendor?: UserUpdateOneRequiredWithoutOrdersNestedInput
    orderDetails?: OrderDetailsUpdateManyWithoutOrderNestedInput
    complaints?: ComplaintUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    orderDetails?: OrderDetailsUncheckedUpdateManyWithoutOrderNestedInput
    complaints?: ComplaintUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    orderId?: string
    quantity: number
    totalPrice: number
    orderDate?: Date | string
    productId: string
    vendorId: string
  }

  export type OrderUpdateManyMutationInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
  }

  export type OrderDetailsCreateInput = {
    order: OrderCreateNestedOneWithoutOrderDetailsInput
    user: UserCreateNestedOneWithoutOrderDetailsInput
  }

  export type OrderDetailsUncheckedCreateInput = {
    orderId: string
    userId: string
  }

  export type OrderDetailsUpdateInput = {
    order?: OrderUpdateOneRequiredWithoutOrderDetailsNestedInput
    user?: UserUpdateOneRequiredWithoutOrderDetailsNestedInput
  }

  export type OrderDetailsUncheckedUpdateInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type OrderDetailsCreateManyInput = {
    orderId: string
    userId: string
  }

  export type OrderDetailsUpdateManyMutationInput = {

  }

  export type OrderDetailsUncheckedUpdateManyInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ComplaintCreateInput = {
    complaintId?: string
    content: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutComplaintsInput
    order: OrderCreateNestedOneWithoutComplaintsInput
  }

  export type ComplaintUncheckedCreateInput = {
    complaintId?: string
    content: string
    createdAt?: Date | string
    userId: string
    orderId: string
  }

  export type ComplaintUpdateInput = {
    complaintId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutComplaintsNestedInput
    order?: OrderUpdateOneRequiredWithoutComplaintsNestedInput
  }

  export type ComplaintUncheckedUpdateInput = {
    complaintId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
  }

  export type ComplaintCreateManyInput = {
    complaintId?: string
    content: string
    createdAt?: Date | string
    userId: string
    orderId: string
  }

  export type ComplaintUpdateManyMutationInput = {
    complaintId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComplaintUncheckedUpdateManyInput = {
    complaintId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
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

  export type EnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
  }

  export type OrderDetailsListRelationFilter = {
    every?: OrderDetailsWhereInput
    some?: OrderDetailsWhereInput
    none?: OrderDetailsWhereInput
  }

  export type StoreListRelationFilter = {
    every?: StoreWhereInput
    some?: StoreWhereInput
    none?: StoreWhereInput
  }

  export type ComplaintListRelationFilter = {
    every?: ComplaintWhereInput
    some?: ComplaintWhereInput
    none?: ComplaintWhereInput
  }

  export type WarehouseDetailsListRelationFilter = {
    every?: WarehouseDetailsWhereInput
    some?: WarehouseDetailsWhereInput
    none?: WarehouseDetailsWhereInput
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OrderDetailsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StoreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ComplaintOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WarehouseDetailsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    userid?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    password?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    userid?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    userid?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    password?: SortOrder
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

  export type EnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type WareHouseScalarRelationFilter = {
    is?: WareHouseWhereInput
    isNot?: WareHouseWhereInput
  }

  export type SalesListRelationFilter = {
    every?: SalesWhereInput
    some?: SalesWhereInput
    none?: SalesWhereInput
  }

  export type StoreAndProductListRelationFilter = {
    every?: StoreAndProductWhereInput
    some?: StoreAndProductWhereInput
    none?: StoreAndProductWhereInput
  }

  export type SalesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StoreAndProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    productId?: SortOrder
    productName?: SortOrder
    productPrice?: SortOrder
    warehouseId?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    productPrice?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    productId?: SortOrder
    productName?: SortOrder
    productPrice?: SortOrder
    warehouseId?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    productId?: SortOrder
    productName?: SortOrder
    productPrice?: SortOrder
    warehouseId?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    productPrice?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type WareHouseListRelationFilter = {
    every?: WareHouseWhereInput
    some?: WareHouseWhereInput
    none?: WareHouseWhereInput
  }

  export type WareHouseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CityCountOrderByAggregateInput = {
    cityId?: SortOrder
    cityName?: SortOrder
    state?: SortOrder
  }

  export type CityMaxOrderByAggregateInput = {
    cityId?: SortOrder
    cityName?: SortOrder
    state?: SortOrder
  }

  export type CityMinOrderByAggregateInput = {
    cityId?: SortOrder
    cityName?: SortOrder
    state?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type CityScalarRelationFilter = {
    is?: CityWhereInput
    isNot?: CityWhereInput
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WareHouseCountOrderByAggregateInput = {
    warehouseId?: SortOrder
    warehouseName?: SortOrder
    warehouseCapacity?: SortOrder
    cityId?: SortOrder
  }

  export type WareHouseAvgOrderByAggregateInput = {
    warehouseCapacity?: SortOrder
  }

  export type WareHouseMaxOrderByAggregateInput = {
    warehouseId?: SortOrder
    warehouseName?: SortOrder
    warehouseCapacity?: SortOrder
    cityId?: SortOrder
  }

  export type WareHouseMinOrderByAggregateInput = {
    warehouseId?: SortOrder
    warehouseName?: SortOrder
    warehouseCapacity?: SortOrder
    cityId?: SortOrder
  }

  export type WareHouseSumOrderByAggregateInput = {
    warehouseCapacity?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type WarehouseDetailsCityIdWarehouseIdCompoundUniqueInput = {
    cityId: string
    warehouseId: string
  }

  export type WarehouseDetailsCountOrderByAggregateInput = {
    warehouseId?: SortOrder
    cityId?: SortOrder
    userId?: SortOrder
  }

  export type WarehouseDetailsMaxOrderByAggregateInput = {
    warehouseId?: SortOrder
    cityId?: SortOrder
    userId?: SortOrder
  }

  export type WarehouseDetailsMinOrderByAggregateInput = {
    warehouseId?: SortOrder
    cityId?: SortOrder
    userId?: SortOrder
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type SalesCountOrderByAggregateInput = {
    id?: SortOrder
    productName?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    productId?: SortOrder
  }

  export type SalesAvgOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
  }

  export type SalesMaxOrderByAggregateInput = {
    id?: SortOrder
    productName?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    productId?: SortOrder
  }

  export type SalesMinOrderByAggregateInput = {
    id?: SortOrder
    productName?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    productId?: SortOrder
  }

  export type SalesSumOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
  }

  export type StoreCountOrderByAggregateInput = {
    storeId?: SortOrder
    storeName?: SortOrder
    vendorId?: SortOrder
    cityId?: SortOrder
  }

  export type StoreMaxOrderByAggregateInput = {
    storeId?: SortOrder
    storeName?: SortOrder
    vendorId?: SortOrder
    cityId?: SortOrder
  }

  export type StoreMinOrderByAggregateInput = {
    storeId?: SortOrder
    storeName?: SortOrder
    vendorId?: SortOrder
    cityId?: SortOrder
  }

  export type StoreScalarRelationFilter = {
    is?: StoreWhereInput
    isNot?: StoreWhereInput
  }

  export type StoreAndProductStoreIdProductIdCompoundUniqueInput = {
    storeId: string
    productId: string
  }

  export type StoreAndProductCountOrderByAggregateInput = {
    storeId?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
  }

  export type StoreAndProductMaxOrderByAggregateInput = {
    storeId?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
  }

  export type StoreAndProductMinOrderByAggregateInput = {
    storeId?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
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

  export type OrderCountOrderByAggregateInput = {
    orderId?: SortOrder
    quantity?: SortOrder
    totalPrice?: SortOrder
    orderDate?: SortOrder
    productId?: SortOrder
    vendorId?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    quantity?: SortOrder
    totalPrice?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    orderId?: SortOrder
    quantity?: SortOrder
    totalPrice?: SortOrder
    orderDate?: SortOrder
    productId?: SortOrder
    vendorId?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    orderId?: SortOrder
    quantity?: SortOrder
    totalPrice?: SortOrder
    orderDate?: SortOrder
    productId?: SortOrder
    vendorId?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    quantity?: SortOrder
    totalPrice?: SortOrder
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

  export type OrderScalarRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type OrderDetailsOrderIdUserIdCompoundUniqueInput = {
    orderId: string
    userId: string
  }

  export type OrderDetailsCountOrderByAggregateInput = {
    orderId?: SortOrder
    userId?: SortOrder
  }

  export type OrderDetailsMaxOrderByAggregateInput = {
    orderId?: SortOrder
    userId?: SortOrder
  }

  export type OrderDetailsMinOrderByAggregateInput = {
    orderId?: SortOrder
    userId?: SortOrder
  }

  export type ComplaintCountOrderByAggregateInput = {
    complaintId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    orderId?: SortOrder
  }

  export type ComplaintMaxOrderByAggregateInput = {
    complaintId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    orderId?: SortOrder
  }

  export type ComplaintMinOrderByAggregateInput = {
    complaintId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    orderId?: SortOrder
  }

  export type OrderDetailsCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderDetailsCreateWithoutUserInput, OrderDetailsUncheckedCreateWithoutUserInput> | OrderDetailsCreateWithoutUserInput[] | OrderDetailsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderDetailsCreateOrConnectWithoutUserInput | OrderDetailsCreateOrConnectWithoutUserInput[]
    createMany?: OrderDetailsCreateManyUserInputEnvelope
    connect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
  }

  export type StoreCreateNestedManyWithoutVendorInput = {
    create?: XOR<StoreCreateWithoutVendorInput, StoreUncheckedCreateWithoutVendorInput> | StoreCreateWithoutVendorInput[] | StoreUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: StoreCreateOrConnectWithoutVendorInput | StoreCreateOrConnectWithoutVendorInput[]
    createMany?: StoreCreateManyVendorInputEnvelope
    connect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
  }

  export type ComplaintCreateNestedManyWithoutUserInput = {
    create?: XOR<ComplaintCreateWithoutUserInput, ComplaintUncheckedCreateWithoutUserInput> | ComplaintCreateWithoutUserInput[] | ComplaintUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ComplaintCreateOrConnectWithoutUserInput | ComplaintCreateOrConnectWithoutUserInput[]
    createMany?: ComplaintCreateManyUserInputEnvelope
    connect?: ComplaintWhereUniqueInput | ComplaintWhereUniqueInput[]
  }

  export type WarehouseDetailsCreateNestedManyWithoutUserInput = {
    create?: XOR<WarehouseDetailsCreateWithoutUserInput, WarehouseDetailsUncheckedCreateWithoutUserInput> | WarehouseDetailsCreateWithoutUserInput[] | WarehouseDetailsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WarehouseDetailsCreateOrConnectWithoutUserInput | WarehouseDetailsCreateOrConnectWithoutUserInput[]
    createMany?: WarehouseDetailsCreateManyUserInputEnvelope
    connect?: WarehouseDetailsWhereUniqueInput | WarehouseDetailsWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutVendorInput = {
    create?: XOR<OrderCreateWithoutVendorInput, OrderUncheckedCreateWithoutVendorInput> | OrderCreateWithoutVendorInput[] | OrderUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutVendorInput | OrderCreateOrConnectWithoutVendorInput[]
    createMany?: OrderCreateManyVendorInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderDetailsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderDetailsCreateWithoutUserInput, OrderDetailsUncheckedCreateWithoutUserInput> | OrderDetailsCreateWithoutUserInput[] | OrderDetailsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderDetailsCreateOrConnectWithoutUserInput | OrderDetailsCreateOrConnectWithoutUserInput[]
    createMany?: OrderDetailsCreateManyUserInputEnvelope
    connect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
  }

  export type StoreUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<StoreCreateWithoutVendorInput, StoreUncheckedCreateWithoutVendorInput> | StoreCreateWithoutVendorInput[] | StoreUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: StoreCreateOrConnectWithoutVendorInput | StoreCreateOrConnectWithoutVendorInput[]
    createMany?: StoreCreateManyVendorInputEnvelope
    connect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
  }

  export type ComplaintUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ComplaintCreateWithoutUserInput, ComplaintUncheckedCreateWithoutUserInput> | ComplaintCreateWithoutUserInput[] | ComplaintUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ComplaintCreateOrConnectWithoutUserInput | ComplaintCreateOrConnectWithoutUserInput[]
    createMany?: ComplaintCreateManyUserInputEnvelope
    connect?: ComplaintWhereUniqueInput | ComplaintWhereUniqueInput[]
  }

  export type WarehouseDetailsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WarehouseDetailsCreateWithoutUserInput, WarehouseDetailsUncheckedCreateWithoutUserInput> | WarehouseDetailsCreateWithoutUserInput[] | WarehouseDetailsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WarehouseDetailsCreateOrConnectWithoutUserInput | WarehouseDetailsCreateOrConnectWithoutUserInput[]
    createMany?: WarehouseDetailsCreateManyUserInputEnvelope
    connect?: WarehouseDetailsWhereUniqueInput | WarehouseDetailsWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<OrderCreateWithoutVendorInput, OrderUncheckedCreateWithoutVendorInput> | OrderCreateWithoutVendorInput[] | OrderUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutVendorInput | OrderCreateOrConnectWithoutVendorInput[]
    createMany?: OrderCreateManyVendorInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserTypeFieldUpdateOperationsInput = {
    set?: $Enums.UserType
  }

  export type OrderDetailsUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderDetailsCreateWithoutUserInput, OrderDetailsUncheckedCreateWithoutUserInput> | OrderDetailsCreateWithoutUserInput[] | OrderDetailsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderDetailsCreateOrConnectWithoutUserInput | OrderDetailsCreateOrConnectWithoutUserInput[]
    upsert?: OrderDetailsUpsertWithWhereUniqueWithoutUserInput | OrderDetailsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderDetailsCreateManyUserInputEnvelope
    set?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    disconnect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    delete?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    connect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    update?: OrderDetailsUpdateWithWhereUniqueWithoutUserInput | OrderDetailsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderDetailsUpdateManyWithWhereWithoutUserInput | OrderDetailsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderDetailsScalarWhereInput | OrderDetailsScalarWhereInput[]
  }

  export type StoreUpdateManyWithoutVendorNestedInput = {
    create?: XOR<StoreCreateWithoutVendorInput, StoreUncheckedCreateWithoutVendorInput> | StoreCreateWithoutVendorInput[] | StoreUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: StoreCreateOrConnectWithoutVendorInput | StoreCreateOrConnectWithoutVendorInput[]
    upsert?: StoreUpsertWithWhereUniqueWithoutVendorInput | StoreUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: StoreCreateManyVendorInputEnvelope
    set?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    disconnect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    delete?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    connect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    update?: StoreUpdateWithWhereUniqueWithoutVendorInput | StoreUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: StoreUpdateManyWithWhereWithoutVendorInput | StoreUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: StoreScalarWhereInput | StoreScalarWhereInput[]
  }

  export type ComplaintUpdateManyWithoutUserNestedInput = {
    create?: XOR<ComplaintCreateWithoutUserInput, ComplaintUncheckedCreateWithoutUserInput> | ComplaintCreateWithoutUserInput[] | ComplaintUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ComplaintCreateOrConnectWithoutUserInput | ComplaintCreateOrConnectWithoutUserInput[]
    upsert?: ComplaintUpsertWithWhereUniqueWithoutUserInput | ComplaintUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ComplaintCreateManyUserInputEnvelope
    set?: ComplaintWhereUniqueInput | ComplaintWhereUniqueInput[]
    disconnect?: ComplaintWhereUniqueInput | ComplaintWhereUniqueInput[]
    delete?: ComplaintWhereUniqueInput | ComplaintWhereUniqueInput[]
    connect?: ComplaintWhereUniqueInput | ComplaintWhereUniqueInput[]
    update?: ComplaintUpdateWithWhereUniqueWithoutUserInput | ComplaintUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ComplaintUpdateManyWithWhereWithoutUserInput | ComplaintUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ComplaintScalarWhereInput | ComplaintScalarWhereInput[]
  }

  export type WarehouseDetailsUpdateManyWithoutUserNestedInput = {
    create?: XOR<WarehouseDetailsCreateWithoutUserInput, WarehouseDetailsUncheckedCreateWithoutUserInput> | WarehouseDetailsCreateWithoutUserInput[] | WarehouseDetailsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WarehouseDetailsCreateOrConnectWithoutUserInput | WarehouseDetailsCreateOrConnectWithoutUserInput[]
    upsert?: WarehouseDetailsUpsertWithWhereUniqueWithoutUserInput | WarehouseDetailsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WarehouseDetailsCreateManyUserInputEnvelope
    set?: WarehouseDetailsWhereUniqueInput | WarehouseDetailsWhereUniqueInput[]
    disconnect?: WarehouseDetailsWhereUniqueInput | WarehouseDetailsWhereUniqueInput[]
    delete?: WarehouseDetailsWhereUniqueInput | WarehouseDetailsWhereUniqueInput[]
    connect?: WarehouseDetailsWhereUniqueInput | WarehouseDetailsWhereUniqueInput[]
    update?: WarehouseDetailsUpdateWithWhereUniqueWithoutUserInput | WarehouseDetailsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WarehouseDetailsUpdateManyWithWhereWithoutUserInput | WarehouseDetailsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WarehouseDetailsScalarWhereInput | WarehouseDetailsScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutVendorNestedInput = {
    create?: XOR<OrderCreateWithoutVendorInput, OrderUncheckedCreateWithoutVendorInput> | OrderCreateWithoutVendorInput[] | OrderUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutVendorInput | OrderCreateOrConnectWithoutVendorInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutVendorInput | OrderUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: OrderCreateManyVendorInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutVendorInput | OrderUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutVendorInput | OrderUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderDetailsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderDetailsCreateWithoutUserInput, OrderDetailsUncheckedCreateWithoutUserInput> | OrderDetailsCreateWithoutUserInput[] | OrderDetailsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderDetailsCreateOrConnectWithoutUserInput | OrderDetailsCreateOrConnectWithoutUserInput[]
    upsert?: OrderDetailsUpsertWithWhereUniqueWithoutUserInput | OrderDetailsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderDetailsCreateManyUserInputEnvelope
    set?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    disconnect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    delete?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    connect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    update?: OrderDetailsUpdateWithWhereUniqueWithoutUserInput | OrderDetailsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderDetailsUpdateManyWithWhereWithoutUserInput | OrderDetailsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderDetailsScalarWhereInput | OrderDetailsScalarWhereInput[]
  }

  export type StoreUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: XOR<StoreCreateWithoutVendorInput, StoreUncheckedCreateWithoutVendorInput> | StoreCreateWithoutVendorInput[] | StoreUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: StoreCreateOrConnectWithoutVendorInput | StoreCreateOrConnectWithoutVendorInput[]
    upsert?: StoreUpsertWithWhereUniqueWithoutVendorInput | StoreUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: StoreCreateManyVendorInputEnvelope
    set?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    disconnect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    delete?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    connect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    update?: StoreUpdateWithWhereUniqueWithoutVendorInput | StoreUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: StoreUpdateManyWithWhereWithoutVendorInput | StoreUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: StoreScalarWhereInput | StoreScalarWhereInput[]
  }

  export type ComplaintUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ComplaintCreateWithoutUserInput, ComplaintUncheckedCreateWithoutUserInput> | ComplaintCreateWithoutUserInput[] | ComplaintUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ComplaintCreateOrConnectWithoutUserInput | ComplaintCreateOrConnectWithoutUserInput[]
    upsert?: ComplaintUpsertWithWhereUniqueWithoutUserInput | ComplaintUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ComplaintCreateManyUserInputEnvelope
    set?: ComplaintWhereUniqueInput | ComplaintWhereUniqueInput[]
    disconnect?: ComplaintWhereUniqueInput | ComplaintWhereUniqueInput[]
    delete?: ComplaintWhereUniqueInput | ComplaintWhereUniqueInput[]
    connect?: ComplaintWhereUniqueInput | ComplaintWhereUniqueInput[]
    update?: ComplaintUpdateWithWhereUniqueWithoutUserInput | ComplaintUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ComplaintUpdateManyWithWhereWithoutUserInput | ComplaintUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ComplaintScalarWhereInput | ComplaintScalarWhereInput[]
  }

  export type WarehouseDetailsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WarehouseDetailsCreateWithoutUserInput, WarehouseDetailsUncheckedCreateWithoutUserInput> | WarehouseDetailsCreateWithoutUserInput[] | WarehouseDetailsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WarehouseDetailsCreateOrConnectWithoutUserInput | WarehouseDetailsCreateOrConnectWithoutUserInput[]
    upsert?: WarehouseDetailsUpsertWithWhereUniqueWithoutUserInput | WarehouseDetailsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WarehouseDetailsCreateManyUserInputEnvelope
    set?: WarehouseDetailsWhereUniqueInput | WarehouseDetailsWhereUniqueInput[]
    disconnect?: WarehouseDetailsWhereUniqueInput | WarehouseDetailsWhereUniqueInput[]
    delete?: WarehouseDetailsWhereUniqueInput | WarehouseDetailsWhereUniqueInput[]
    connect?: WarehouseDetailsWhereUniqueInput | WarehouseDetailsWhereUniqueInput[]
    update?: WarehouseDetailsUpdateWithWhereUniqueWithoutUserInput | WarehouseDetailsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WarehouseDetailsUpdateManyWithWhereWithoutUserInput | WarehouseDetailsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WarehouseDetailsScalarWhereInput | WarehouseDetailsScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: XOR<OrderCreateWithoutVendorInput, OrderUncheckedCreateWithoutVendorInput> | OrderCreateWithoutVendorInput[] | OrderUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutVendorInput | OrderCreateOrConnectWithoutVendorInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutVendorInput | OrderUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: OrderCreateManyVendorInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutVendorInput | OrderUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutVendorInput | OrderUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type WareHouseCreateNestedOneWithoutProductsInput = {
    create?: XOR<WareHouseCreateWithoutProductsInput, WareHouseUncheckedCreateWithoutProductsInput>
    connectOrCreate?: WareHouseCreateOrConnectWithoutProductsInput
    connect?: WareHouseWhereUniqueInput
  }

  export type SalesCreateNestedManyWithoutProductInput = {
    create?: XOR<SalesCreateWithoutProductInput, SalesUncheckedCreateWithoutProductInput> | SalesCreateWithoutProductInput[] | SalesUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SalesCreateOrConnectWithoutProductInput | SalesCreateOrConnectWithoutProductInput[]
    createMany?: SalesCreateManyProductInputEnvelope
    connect?: SalesWhereUniqueInput | SalesWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutProductInput = {
    create?: XOR<OrderCreateWithoutProductInput, OrderUncheckedCreateWithoutProductInput> | OrderCreateWithoutProductInput[] | OrderUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutProductInput | OrderCreateOrConnectWithoutProductInput[]
    createMany?: OrderCreateManyProductInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type StoreAndProductCreateNestedManyWithoutProductInput = {
    create?: XOR<StoreAndProductCreateWithoutProductInput, StoreAndProductUncheckedCreateWithoutProductInput> | StoreAndProductCreateWithoutProductInput[] | StoreAndProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StoreAndProductCreateOrConnectWithoutProductInput | StoreAndProductCreateOrConnectWithoutProductInput[]
    createMany?: StoreAndProductCreateManyProductInputEnvelope
    connect?: StoreAndProductWhereUniqueInput | StoreAndProductWhereUniqueInput[]
  }

  export type SalesUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<SalesCreateWithoutProductInput, SalesUncheckedCreateWithoutProductInput> | SalesCreateWithoutProductInput[] | SalesUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SalesCreateOrConnectWithoutProductInput | SalesCreateOrConnectWithoutProductInput[]
    createMany?: SalesCreateManyProductInputEnvelope
    connect?: SalesWhereUniqueInput | SalesWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<OrderCreateWithoutProductInput, OrderUncheckedCreateWithoutProductInput> | OrderCreateWithoutProductInput[] | OrderUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutProductInput | OrderCreateOrConnectWithoutProductInput[]
    createMany?: OrderCreateManyProductInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type StoreAndProductUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<StoreAndProductCreateWithoutProductInput, StoreAndProductUncheckedCreateWithoutProductInput> | StoreAndProductCreateWithoutProductInput[] | StoreAndProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StoreAndProductCreateOrConnectWithoutProductInput | StoreAndProductCreateOrConnectWithoutProductInput[]
    createMany?: StoreAndProductCreateManyProductInputEnvelope
    connect?: StoreAndProductWhereUniqueInput | StoreAndProductWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type WareHouseUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<WareHouseCreateWithoutProductsInput, WareHouseUncheckedCreateWithoutProductsInput>
    connectOrCreate?: WareHouseCreateOrConnectWithoutProductsInput
    upsert?: WareHouseUpsertWithoutProductsInput
    connect?: WareHouseWhereUniqueInput
    update?: XOR<XOR<WareHouseUpdateToOneWithWhereWithoutProductsInput, WareHouseUpdateWithoutProductsInput>, WareHouseUncheckedUpdateWithoutProductsInput>
  }

  export type SalesUpdateManyWithoutProductNestedInput = {
    create?: XOR<SalesCreateWithoutProductInput, SalesUncheckedCreateWithoutProductInput> | SalesCreateWithoutProductInput[] | SalesUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SalesCreateOrConnectWithoutProductInput | SalesCreateOrConnectWithoutProductInput[]
    upsert?: SalesUpsertWithWhereUniqueWithoutProductInput | SalesUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: SalesCreateManyProductInputEnvelope
    set?: SalesWhereUniqueInput | SalesWhereUniqueInput[]
    disconnect?: SalesWhereUniqueInput | SalesWhereUniqueInput[]
    delete?: SalesWhereUniqueInput | SalesWhereUniqueInput[]
    connect?: SalesWhereUniqueInput | SalesWhereUniqueInput[]
    update?: SalesUpdateWithWhereUniqueWithoutProductInput | SalesUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: SalesUpdateManyWithWhereWithoutProductInput | SalesUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: SalesScalarWhereInput | SalesScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrderCreateWithoutProductInput, OrderUncheckedCreateWithoutProductInput> | OrderCreateWithoutProductInput[] | OrderUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutProductInput | OrderCreateOrConnectWithoutProductInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutProductInput | OrderUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OrderCreateManyProductInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutProductInput | OrderUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutProductInput | OrderUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type StoreAndProductUpdateManyWithoutProductNestedInput = {
    create?: XOR<StoreAndProductCreateWithoutProductInput, StoreAndProductUncheckedCreateWithoutProductInput> | StoreAndProductCreateWithoutProductInput[] | StoreAndProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StoreAndProductCreateOrConnectWithoutProductInput | StoreAndProductCreateOrConnectWithoutProductInput[]
    upsert?: StoreAndProductUpsertWithWhereUniqueWithoutProductInput | StoreAndProductUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: StoreAndProductCreateManyProductInputEnvelope
    set?: StoreAndProductWhereUniqueInput | StoreAndProductWhereUniqueInput[]
    disconnect?: StoreAndProductWhereUniqueInput | StoreAndProductWhereUniqueInput[]
    delete?: StoreAndProductWhereUniqueInput | StoreAndProductWhereUniqueInput[]
    connect?: StoreAndProductWhereUniqueInput | StoreAndProductWhereUniqueInput[]
    update?: StoreAndProductUpdateWithWhereUniqueWithoutProductInput | StoreAndProductUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: StoreAndProductUpdateManyWithWhereWithoutProductInput | StoreAndProductUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: StoreAndProductScalarWhereInput | StoreAndProductScalarWhereInput[]
  }

  export type SalesUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<SalesCreateWithoutProductInput, SalesUncheckedCreateWithoutProductInput> | SalesCreateWithoutProductInput[] | SalesUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SalesCreateOrConnectWithoutProductInput | SalesCreateOrConnectWithoutProductInput[]
    upsert?: SalesUpsertWithWhereUniqueWithoutProductInput | SalesUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: SalesCreateManyProductInputEnvelope
    set?: SalesWhereUniqueInput | SalesWhereUniqueInput[]
    disconnect?: SalesWhereUniqueInput | SalesWhereUniqueInput[]
    delete?: SalesWhereUniqueInput | SalesWhereUniqueInput[]
    connect?: SalesWhereUniqueInput | SalesWhereUniqueInput[]
    update?: SalesUpdateWithWhereUniqueWithoutProductInput | SalesUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: SalesUpdateManyWithWhereWithoutProductInput | SalesUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: SalesScalarWhereInput | SalesScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrderCreateWithoutProductInput, OrderUncheckedCreateWithoutProductInput> | OrderCreateWithoutProductInput[] | OrderUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutProductInput | OrderCreateOrConnectWithoutProductInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutProductInput | OrderUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OrderCreateManyProductInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutProductInput | OrderUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutProductInput | OrderUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type StoreAndProductUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<StoreAndProductCreateWithoutProductInput, StoreAndProductUncheckedCreateWithoutProductInput> | StoreAndProductCreateWithoutProductInput[] | StoreAndProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StoreAndProductCreateOrConnectWithoutProductInput | StoreAndProductCreateOrConnectWithoutProductInput[]
    upsert?: StoreAndProductUpsertWithWhereUniqueWithoutProductInput | StoreAndProductUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: StoreAndProductCreateManyProductInputEnvelope
    set?: StoreAndProductWhereUniqueInput | StoreAndProductWhereUniqueInput[]
    disconnect?: StoreAndProductWhereUniqueInput | StoreAndProductWhereUniqueInput[]
    delete?: StoreAndProductWhereUniqueInput | StoreAndProductWhereUniqueInput[]
    connect?: StoreAndProductWhereUniqueInput | StoreAndProductWhereUniqueInput[]
    update?: StoreAndProductUpdateWithWhereUniqueWithoutProductInput | StoreAndProductUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: StoreAndProductUpdateManyWithWhereWithoutProductInput | StoreAndProductUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: StoreAndProductScalarWhereInput | StoreAndProductScalarWhereInput[]
  }

  export type WareHouseCreateNestedManyWithoutCityInput = {
    create?: XOR<WareHouseCreateWithoutCityInput, WareHouseUncheckedCreateWithoutCityInput> | WareHouseCreateWithoutCityInput[] | WareHouseUncheckedCreateWithoutCityInput[]
    connectOrCreate?: WareHouseCreateOrConnectWithoutCityInput | WareHouseCreateOrConnectWithoutCityInput[]
    createMany?: WareHouseCreateManyCityInputEnvelope
    connect?: WareHouseWhereUniqueInput | WareHouseWhereUniqueInput[]
  }

  export type WarehouseDetailsCreateNestedManyWithoutCityInput = {
    create?: XOR<WarehouseDetailsCreateWithoutCityInput, WarehouseDetailsUncheckedCreateWithoutCityInput> | WarehouseDetailsCreateWithoutCityInput[] | WarehouseDetailsUncheckedCreateWithoutCityInput[]
    connectOrCreate?: WarehouseDetailsCreateOrConnectWithoutCityInput | WarehouseDetailsCreateOrConnectWithoutCityInput[]
    createMany?: WarehouseDetailsCreateManyCityInputEnvelope
    connect?: WarehouseDetailsWhereUniqueInput | WarehouseDetailsWhereUniqueInput[]
  }

  export type StoreCreateNestedManyWithoutCityInput = {
    create?: XOR<StoreCreateWithoutCityInput, StoreUncheckedCreateWithoutCityInput> | StoreCreateWithoutCityInput[] | StoreUncheckedCreateWithoutCityInput[]
    connectOrCreate?: StoreCreateOrConnectWithoutCityInput | StoreCreateOrConnectWithoutCityInput[]
    createMany?: StoreCreateManyCityInputEnvelope
    connect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
  }

  export type WareHouseUncheckedCreateNestedManyWithoutCityInput = {
    create?: XOR<WareHouseCreateWithoutCityInput, WareHouseUncheckedCreateWithoutCityInput> | WareHouseCreateWithoutCityInput[] | WareHouseUncheckedCreateWithoutCityInput[]
    connectOrCreate?: WareHouseCreateOrConnectWithoutCityInput | WareHouseCreateOrConnectWithoutCityInput[]
    createMany?: WareHouseCreateManyCityInputEnvelope
    connect?: WareHouseWhereUniqueInput | WareHouseWhereUniqueInput[]
  }

  export type WarehouseDetailsUncheckedCreateNestedManyWithoutCityInput = {
    create?: XOR<WarehouseDetailsCreateWithoutCityInput, WarehouseDetailsUncheckedCreateWithoutCityInput> | WarehouseDetailsCreateWithoutCityInput[] | WarehouseDetailsUncheckedCreateWithoutCityInput[]
    connectOrCreate?: WarehouseDetailsCreateOrConnectWithoutCityInput | WarehouseDetailsCreateOrConnectWithoutCityInput[]
    createMany?: WarehouseDetailsCreateManyCityInputEnvelope
    connect?: WarehouseDetailsWhereUniqueInput | WarehouseDetailsWhereUniqueInput[]
  }

  export type StoreUncheckedCreateNestedManyWithoutCityInput = {
    create?: XOR<StoreCreateWithoutCityInput, StoreUncheckedCreateWithoutCityInput> | StoreCreateWithoutCityInput[] | StoreUncheckedCreateWithoutCityInput[]
    connectOrCreate?: StoreCreateOrConnectWithoutCityInput | StoreCreateOrConnectWithoutCityInput[]
    createMany?: StoreCreateManyCityInputEnvelope
    connect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
  }

  export type WareHouseUpdateManyWithoutCityNestedInput = {
    create?: XOR<WareHouseCreateWithoutCityInput, WareHouseUncheckedCreateWithoutCityInput> | WareHouseCreateWithoutCityInput[] | WareHouseUncheckedCreateWithoutCityInput[]
    connectOrCreate?: WareHouseCreateOrConnectWithoutCityInput | WareHouseCreateOrConnectWithoutCityInput[]
    upsert?: WareHouseUpsertWithWhereUniqueWithoutCityInput | WareHouseUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: WareHouseCreateManyCityInputEnvelope
    set?: WareHouseWhereUniqueInput | WareHouseWhereUniqueInput[]
    disconnect?: WareHouseWhereUniqueInput | WareHouseWhereUniqueInput[]
    delete?: WareHouseWhereUniqueInput | WareHouseWhereUniqueInput[]
    connect?: WareHouseWhereUniqueInput | WareHouseWhereUniqueInput[]
    update?: WareHouseUpdateWithWhereUniqueWithoutCityInput | WareHouseUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: WareHouseUpdateManyWithWhereWithoutCityInput | WareHouseUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: WareHouseScalarWhereInput | WareHouseScalarWhereInput[]
  }

  export type WarehouseDetailsUpdateManyWithoutCityNestedInput = {
    create?: XOR<WarehouseDetailsCreateWithoutCityInput, WarehouseDetailsUncheckedCreateWithoutCityInput> | WarehouseDetailsCreateWithoutCityInput[] | WarehouseDetailsUncheckedCreateWithoutCityInput[]
    connectOrCreate?: WarehouseDetailsCreateOrConnectWithoutCityInput | WarehouseDetailsCreateOrConnectWithoutCityInput[]
    upsert?: WarehouseDetailsUpsertWithWhereUniqueWithoutCityInput | WarehouseDetailsUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: WarehouseDetailsCreateManyCityInputEnvelope
    set?: WarehouseDetailsWhereUniqueInput | WarehouseDetailsWhereUniqueInput[]
    disconnect?: WarehouseDetailsWhereUniqueInput | WarehouseDetailsWhereUniqueInput[]
    delete?: WarehouseDetailsWhereUniqueInput | WarehouseDetailsWhereUniqueInput[]
    connect?: WarehouseDetailsWhereUniqueInput | WarehouseDetailsWhereUniqueInput[]
    update?: WarehouseDetailsUpdateWithWhereUniqueWithoutCityInput | WarehouseDetailsUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: WarehouseDetailsUpdateManyWithWhereWithoutCityInput | WarehouseDetailsUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: WarehouseDetailsScalarWhereInput | WarehouseDetailsScalarWhereInput[]
  }

  export type StoreUpdateManyWithoutCityNestedInput = {
    create?: XOR<StoreCreateWithoutCityInput, StoreUncheckedCreateWithoutCityInput> | StoreCreateWithoutCityInput[] | StoreUncheckedCreateWithoutCityInput[]
    connectOrCreate?: StoreCreateOrConnectWithoutCityInput | StoreCreateOrConnectWithoutCityInput[]
    upsert?: StoreUpsertWithWhereUniqueWithoutCityInput | StoreUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: StoreCreateManyCityInputEnvelope
    set?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    disconnect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    delete?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    connect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    update?: StoreUpdateWithWhereUniqueWithoutCityInput | StoreUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: StoreUpdateManyWithWhereWithoutCityInput | StoreUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: StoreScalarWhereInput | StoreScalarWhereInput[]
  }

  export type WareHouseUncheckedUpdateManyWithoutCityNestedInput = {
    create?: XOR<WareHouseCreateWithoutCityInput, WareHouseUncheckedCreateWithoutCityInput> | WareHouseCreateWithoutCityInput[] | WareHouseUncheckedCreateWithoutCityInput[]
    connectOrCreate?: WareHouseCreateOrConnectWithoutCityInput | WareHouseCreateOrConnectWithoutCityInput[]
    upsert?: WareHouseUpsertWithWhereUniqueWithoutCityInput | WareHouseUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: WareHouseCreateManyCityInputEnvelope
    set?: WareHouseWhereUniqueInput | WareHouseWhereUniqueInput[]
    disconnect?: WareHouseWhereUniqueInput | WareHouseWhereUniqueInput[]
    delete?: WareHouseWhereUniqueInput | WareHouseWhereUniqueInput[]
    connect?: WareHouseWhereUniqueInput | WareHouseWhereUniqueInput[]
    update?: WareHouseUpdateWithWhereUniqueWithoutCityInput | WareHouseUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: WareHouseUpdateManyWithWhereWithoutCityInput | WareHouseUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: WareHouseScalarWhereInput | WareHouseScalarWhereInput[]
  }

  export type WarehouseDetailsUncheckedUpdateManyWithoutCityNestedInput = {
    create?: XOR<WarehouseDetailsCreateWithoutCityInput, WarehouseDetailsUncheckedCreateWithoutCityInput> | WarehouseDetailsCreateWithoutCityInput[] | WarehouseDetailsUncheckedCreateWithoutCityInput[]
    connectOrCreate?: WarehouseDetailsCreateOrConnectWithoutCityInput | WarehouseDetailsCreateOrConnectWithoutCityInput[]
    upsert?: WarehouseDetailsUpsertWithWhereUniqueWithoutCityInput | WarehouseDetailsUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: WarehouseDetailsCreateManyCityInputEnvelope
    set?: WarehouseDetailsWhereUniqueInput | WarehouseDetailsWhereUniqueInput[]
    disconnect?: WarehouseDetailsWhereUniqueInput | WarehouseDetailsWhereUniqueInput[]
    delete?: WarehouseDetailsWhereUniqueInput | WarehouseDetailsWhereUniqueInput[]
    connect?: WarehouseDetailsWhereUniqueInput | WarehouseDetailsWhereUniqueInput[]
    update?: WarehouseDetailsUpdateWithWhereUniqueWithoutCityInput | WarehouseDetailsUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: WarehouseDetailsUpdateManyWithWhereWithoutCityInput | WarehouseDetailsUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: WarehouseDetailsScalarWhereInput | WarehouseDetailsScalarWhereInput[]
  }

  export type StoreUncheckedUpdateManyWithoutCityNestedInput = {
    create?: XOR<StoreCreateWithoutCityInput, StoreUncheckedCreateWithoutCityInput> | StoreCreateWithoutCityInput[] | StoreUncheckedCreateWithoutCityInput[]
    connectOrCreate?: StoreCreateOrConnectWithoutCityInput | StoreCreateOrConnectWithoutCityInput[]
    upsert?: StoreUpsertWithWhereUniqueWithoutCityInput | StoreUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: StoreCreateManyCityInputEnvelope
    set?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    disconnect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    delete?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    connect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    update?: StoreUpdateWithWhereUniqueWithoutCityInput | StoreUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: StoreUpdateManyWithWhereWithoutCityInput | StoreUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: StoreScalarWhereInput | StoreScalarWhereInput[]
  }

  export type CityCreateNestedOneWithoutWarehousesInput = {
    create?: XOR<CityCreateWithoutWarehousesInput, CityUncheckedCreateWithoutWarehousesInput>
    connectOrCreate?: CityCreateOrConnectWithoutWarehousesInput
    connect?: CityWhereUniqueInput
  }

  export type ProductCreateNestedManyWithoutWarehouseInput = {
    create?: XOR<ProductCreateWithoutWarehouseInput, ProductUncheckedCreateWithoutWarehouseInput> | ProductCreateWithoutWarehouseInput[] | ProductUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutWarehouseInput | ProductCreateOrConnectWithoutWarehouseInput[]
    createMany?: ProductCreateManyWarehouseInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type WarehouseDetailsCreateNestedManyWithoutWarehouseInput = {
    create?: XOR<WarehouseDetailsCreateWithoutWarehouseInput, WarehouseDetailsUncheckedCreateWithoutWarehouseInput> | WarehouseDetailsCreateWithoutWarehouseInput[] | WarehouseDetailsUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: WarehouseDetailsCreateOrConnectWithoutWarehouseInput | WarehouseDetailsCreateOrConnectWithoutWarehouseInput[]
    createMany?: WarehouseDetailsCreateManyWarehouseInputEnvelope
    connect?: WarehouseDetailsWhereUniqueInput | WarehouseDetailsWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutWarehouseInput = {
    create?: XOR<ProductCreateWithoutWarehouseInput, ProductUncheckedCreateWithoutWarehouseInput> | ProductCreateWithoutWarehouseInput[] | ProductUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutWarehouseInput | ProductCreateOrConnectWithoutWarehouseInput[]
    createMany?: ProductCreateManyWarehouseInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type WarehouseDetailsUncheckedCreateNestedManyWithoutWarehouseInput = {
    create?: XOR<WarehouseDetailsCreateWithoutWarehouseInput, WarehouseDetailsUncheckedCreateWithoutWarehouseInput> | WarehouseDetailsCreateWithoutWarehouseInput[] | WarehouseDetailsUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: WarehouseDetailsCreateOrConnectWithoutWarehouseInput | WarehouseDetailsCreateOrConnectWithoutWarehouseInput[]
    createMany?: WarehouseDetailsCreateManyWarehouseInputEnvelope
    connect?: WarehouseDetailsWhereUniqueInput | WarehouseDetailsWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CityUpdateOneRequiredWithoutWarehousesNestedInput = {
    create?: XOR<CityCreateWithoutWarehousesInput, CityUncheckedCreateWithoutWarehousesInput>
    connectOrCreate?: CityCreateOrConnectWithoutWarehousesInput
    upsert?: CityUpsertWithoutWarehousesInput
    connect?: CityWhereUniqueInput
    update?: XOR<XOR<CityUpdateToOneWithWhereWithoutWarehousesInput, CityUpdateWithoutWarehousesInput>, CityUncheckedUpdateWithoutWarehousesInput>
  }

  export type ProductUpdateManyWithoutWarehouseNestedInput = {
    create?: XOR<ProductCreateWithoutWarehouseInput, ProductUncheckedCreateWithoutWarehouseInput> | ProductCreateWithoutWarehouseInput[] | ProductUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutWarehouseInput | ProductCreateOrConnectWithoutWarehouseInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutWarehouseInput | ProductUpsertWithWhereUniqueWithoutWarehouseInput[]
    createMany?: ProductCreateManyWarehouseInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutWarehouseInput | ProductUpdateWithWhereUniqueWithoutWarehouseInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutWarehouseInput | ProductUpdateManyWithWhereWithoutWarehouseInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type WarehouseDetailsUpdateManyWithoutWarehouseNestedInput = {
    create?: XOR<WarehouseDetailsCreateWithoutWarehouseInput, WarehouseDetailsUncheckedCreateWithoutWarehouseInput> | WarehouseDetailsCreateWithoutWarehouseInput[] | WarehouseDetailsUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: WarehouseDetailsCreateOrConnectWithoutWarehouseInput | WarehouseDetailsCreateOrConnectWithoutWarehouseInput[]
    upsert?: WarehouseDetailsUpsertWithWhereUniqueWithoutWarehouseInput | WarehouseDetailsUpsertWithWhereUniqueWithoutWarehouseInput[]
    createMany?: WarehouseDetailsCreateManyWarehouseInputEnvelope
    set?: WarehouseDetailsWhereUniqueInput | WarehouseDetailsWhereUniqueInput[]
    disconnect?: WarehouseDetailsWhereUniqueInput | WarehouseDetailsWhereUniqueInput[]
    delete?: WarehouseDetailsWhereUniqueInput | WarehouseDetailsWhereUniqueInput[]
    connect?: WarehouseDetailsWhereUniqueInput | WarehouseDetailsWhereUniqueInput[]
    update?: WarehouseDetailsUpdateWithWhereUniqueWithoutWarehouseInput | WarehouseDetailsUpdateWithWhereUniqueWithoutWarehouseInput[]
    updateMany?: WarehouseDetailsUpdateManyWithWhereWithoutWarehouseInput | WarehouseDetailsUpdateManyWithWhereWithoutWarehouseInput[]
    deleteMany?: WarehouseDetailsScalarWhereInput | WarehouseDetailsScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutWarehouseNestedInput = {
    create?: XOR<ProductCreateWithoutWarehouseInput, ProductUncheckedCreateWithoutWarehouseInput> | ProductCreateWithoutWarehouseInput[] | ProductUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutWarehouseInput | ProductCreateOrConnectWithoutWarehouseInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutWarehouseInput | ProductUpsertWithWhereUniqueWithoutWarehouseInput[]
    createMany?: ProductCreateManyWarehouseInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutWarehouseInput | ProductUpdateWithWhereUniqueWithoutWarehouseInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutWarehouseInput | ProductUpdateManyWithWhereWithoutWarehouseInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type WarehouseDetailsUncheckedUpdateManyWithoutWarehouseNestedInput = {
    create?: XOR<WarehouseDetailsCreateWithoutWarehouseInput, WarehouseDetailsUncheckedCreateWithoutWarehouseInput> | WarehouseDetailsCreateWithoutWarehouseInput[] | WarehouseDetailsUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: WarehouseDetailsCreateOrConnectWithoutWarehouseInput | WarehouseDetailsCreateOrConnectWithoutWarehouseInput[]
    upsert?: WarehouseDetailsUpsertWithWhereUniqueWithoutWarehouseInput | WarehouseDetailsUpsertWithWhereUniqueWithoutWarehouseInput[]
    createMany?: WarehouseDetailsCreateManyWarehouseInputEnvelope
    set?: WarehouseDetailsWhereUniqueInput | WarehouseDetailsWhereUniqueInput[]
    disconnect?: WarehouseDetailsWhereUniqueInput | WarehouseDetailsWhereUniqueInput[]
    delete?: WarehouseDetailsWhereUniqueInput | WarehouseDetailsWhereUniqueInput[]
    connect?: WarehouseDetailsWhereUniqueInput | WarehouseDetailsWhereUniqueInput[]
    update?: WarehouseDetailsUpdateWithWhereUniqueWithoutWarehouseInput | WarehouseDetailsUpdateWithWhereUniqueWithoutWarehouseInput[]
    updateMany?: WarehouseDetailsUpdateManyWithWhereWithoutWarehouseInput | WarehouseDetailsUpdateManyWithWhereWithoutWarehouseInput[]
    deleteMany?: WarehouseDetailsScalarWhereInput | WarehouseDetailsScalarWhereInput[]
  }

  export type WareHouseCreateNestedOneWithoutWarehouseDetailsInput = {
    create?: XOR<WareHouseCreateWithoutWarehouseDetailsInput, WareHouseUncheckedCreateWithoutWarehouseDetailsInput>
    connectOrCreate?: WareHouseCreateOrConnectWithoutWarehouseDetailsInput
    connect?: WareHouseWhereUniqueInput
  }

  export type CityCreateNestedOneWithoutWarehouseDetailsInput = {
    create?: XOR<CityCreateWithoutWarehouseDetailsInput, CityUncheckedCreateWithoutWarehouseDetailsInput>
    connectOrCreate?: CityCreateOrConnectWithoutWarehouseDetailsInput
    connect?: CityWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutWarehouseDetailsInput = {
    create?: XOR<UserCreateWithoutWarehouseDetailsInput, UserUncheckedCreateWithoutWarehouseDetailsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWarehouseDetailsInput
    connect?: UserWhereUniqueInput
  }

  export type WareHouseUpdateOneRequiredWithoutWarehouseDetailsNestedInput = {
    create?: XOR<WareHouseCreateWithoutWarehouseDetailsInput, WareHouseUncheckedCreateWithoutWarehouseDetailsInput>
    connectOrCreate?: WareHouseCreateOrConnectWithoutWarehouseDetailsInput
    upsert?: WareHouseUpsertWithoutWarehouseDetailsInput
    connect?: WareHouseWhereUniqueInput
    update?: XOR<XOR<WareHouseUpdateToOneWithWhereWithoutWarehouseDetailsInput, WareHouseUpdateWithoutWarehouseDetailsInput>, WareHouseUncheckedUpdateWithoutWarehouseDetailsInput>
  }

  export type CityUpdateOneRequiredWithoutWarehouseDetailsNestedInput = {
    create?: XOR<CityCreateWithoutWarehouseDetailsInput, CityUncheckedCreateWithoutWarehouseDetailsInput>
    connectOrCreate?: CityCreateOrConnectWithoutWarehouseDetailsInput
    upsert?: CityUpsertWithoutWarehouseDetailsInput
    connect?: CityWhereUniqueInput
    update?: XOR<XOR<CityUpdateToOneWithWhereWithoutWarehouseDetailsInput, CityUpdateWithoutWarehouseDetailsInput>, CityUncheckedUpdateWithoutWarehouseDetailsInput>
  }

  export type UserUpdateOneRequiredWithoutWarehouseDetailsNestedInput = {
    create?: XOR<UserCreateWithoutWarehouseDetailsInput, UserUncheckedCreateWithoutWarehouseDetailsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWarehouseDetailsInput
    upsert?: UserUpsertWithoutWarehouseDetailsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWarehouseDetailsInput, UserUpdateWithoutWarehouseDetailsInput>, UserUncheckedUpdateWithoutWarehouseDetailsInput>
  }

  export type ProductCreateNestedOneWithoutSalesInput = {
    create?: XOR<ProductCreateWithoutSalesInput, ProductUncheckedCreateWithoutSalesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutSalesInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutSalesNestedInput = {
    create?: XOR<ProductCreateWithoutSalesInput, ProductUncheckedCreateWithoutSalesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutSalesInput
    upsert?: ProductUpsertWithoutSalesInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutSalesInput, ProductUpdateWithoutSalesInput>, ProductUncheckedUpdateWithoutSalesInput>
  }

  export type UserCreateNestedOneWithoutStoresInput = {
    create?: XOR<UserCreateWithoutStoresInput, UserUncheckedCreateWithoutStoresInput>
    connectOrCreate?: UserCreateOrConnectWithoutStoresInput
    connect?: UserWhereUniqueInput
  }

  export type CityCreateNestedOneWithoutStoresInput = {
    create?: XOR<CityCreateWithoutStoresInput, CityUncheckedCreateWithoutStoresInput>
    connectOrCreate?: CityCreateOrConnectWithoutStoresInput
    connect?: CityWhereUniqueInput
  }

  export type StoreAndProductCreateNestedManyWithoutStoreInput = {
    create?: XOR<StoreAndProductCreateWithoutStoreInput, StoreAndProductUncheckedCreateWithoutStoreInput> | StoreAndProductCreateWithoutStoreInput[] | StoreAndProductUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: StoreAndProductCreateOrConnectWithoutStoreInput | StoreAndProductCreateOrConnectWithoutStoreInput[]
    createMany?: StoreAndProductCreateManyStoreInputEnvelope
    connect?: StoreAndProductWhereUniqueInput | StoreAndProductWhereUniqueInput[]
  }

  export type StoreAndProductUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<StoreAndProductCreateWithoutStoreInput, StoreAndProductUncheckedCreateWithoutStoreInput> | StoreAndProductCreateWithoutStoreInput[] | StoreAndProductUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: StoreAndProductCreateOrConnectWithoutStoreInput | StoreAndProductCreateOrConnectWithoutStoreInput[]
    createMany?: StoreAndProductCreateManyStoreInputEnvelope
    connect?: StoreAndProductWhereUniqueInput | StoreAndProductWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutStoresNestedInput = {
    create?: XOR<UserCreateWithoutStoresInput, UserUncheckedCreateWithoutStoresInput>
    connectOrCreate?: UserCreateOrConnectWithoutStoresInput
    upsert?: UserUpsertWithoutStoresInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStoresInput, UserUpdateWithoutStoresInput>, UserUncheckedUpdateWithoutStoresInput>
  }

  export type CityUpdateOneRequiredWithoutStoresNestedInput = {
    create?: XOR<CityCreateWithoutStoresInput, CityUncheckedCreateWithoutStoresInput>
    connectOrCreate?: CityCreateOrConnectWithoutStoresInput
    upsert?: CityUpsertWithoutStoresInput
    connect?: CityWhereUniqueInput
    update?: XOR<XOR<CityUpdateToOneWithWhereWithoutStoresInput, CityUpdateWithoutStoresInput>, CityUncheckedUpdateWithoutStoresInput>
  }

  export type StoreAndProductUpdateManyWithoutStoreNestedInput = {
    create?: XOR<StoreAndProductCreateWithoutStoreInput, StoreAndProductUncheckedCreateWithoutStoreInput> | StoreAndProductCreateWithoutStoreInput[] | StoreAndProductUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: StoreAndProductCreateOrConnectWithoutStoreInput | StoreAndProductCreateOrConnectWithoutStoreInput[]
    upsert?: StoreAndProductUpsertWithWhereUniqueWithoutStoreInput | StoreAndProductUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: StoreAndProductCreateManyStoreInputEnvelope
    set?: StoreAndProductWhereUniqueInput | StoreAndProductWhereUniqueInput[]
    disconnect?: StoreAndProductWhereUniqueInput | StoreAndProductWhereUniqueInput[]
    delete?: StoreAndProductWhereUniqueInput | StoreAndProductWhereUniqueInput[]
    connect?: StoreAndProductWhereUniqueInput | StoreAndProductWhereUniqueInput[]
    update?: StoreAndProductUpdateWithWhereUniqueWithoutStoreInput | StoreAndProductUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: StoreAndProductUpdateManyWithWhereWithoutStoreInput | StoreAndProductUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: StoreAndProductScalarWhereInput | StoreAndProductScalarWhereInput[]
  }

  export type StoreAndProductUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<StoreAndProductCreateWithoutStoreInput, StoreAndProductUncheckedCreateWithoutStoreInput> | StoreAndProductCreateWithoutStoreInput[] | StoreAndProductUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: StoreAndProductCreateOrConnectWithoutStoreInput | StoreAndProductCreateOrConnectWithoutStoreInput[]
    upsert?: StoreAndProductUpsertWithWhereUniqueWithoutStoreInput | StoreAndProductUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: StoreAndProductCreateManyStoreInputEnvelope
    set?: StoreAndProductWhereUniqueInput | StoreAndProductWhereUniqueInput[]
    disconnect?: StoreAndProductWhereUniqueInput | StoreAndProductWhereUniqueInput[]
    delete?: StoreAndProductWhereUniqueInput | StoreAndProductWhereUniqueInput[]
    connect?: StoreAndProductWhereUniqueInput | StoreAndProductWhereUniqueInput[]
    update?: StoreAndProductUpdateWithWhereUniqueWithoutStoreInput | StoreAndProductUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: StoreAndProductUpdateManyWithWhereWithoutStoreInput | StoreAndProductUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: StoreAndProductScalarWhereInput | StoreAndProductScalarWhereInput[]
  }

  export type StoreCreateNestedOneWithoutStoreProductsInput = {
    create?: XOR<StoreCreateWithoutStoreProductsInput, StoreUncheckedCreateWithoutStoreProductsInput>
    connectOrCreate?: StoreCreateOrConnectWithoutStoreProductsInput
    connect?: StoreWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutStoreProductsInput = {
    create?: XOR<ProductCreateWithoutStoreProductsInput, ProductUncheckedCreateWithoutStoreProductsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutStoreProductsInput
    connect?: ProductWhereUniqueInput
  }

  export type StoreUpdateOneRequiredWithoutStoreProductsNestedInput = {
    create?: XOR<StoreCreateWithoutStoreProductsInput, StoreUncheckedCreateWithoutStoreProductsInput>
    connectOrCreate?: StoreCreateOrConnectWithoutStoreProductsInput
    upsert?: StoreUpsertWithoutStoreProductsInput
    connect?: StoreWhereUniqueInput
    update?: XOR<XOR<StoreUpdateToOneWithWhereWithoutStoreProductsInput, StoreUpdateWithoutStoreProductsInput>, StoreUncheckedUpdateWithoutStoreProductsInput>
  }

  export type ProductUpdateOneRequiredWithoutStoreProductsNestedInput = {
    create?: XOR<ProductCreateWithoutStoreProductsInput, ProductUncheckedCreateWithoutStoreProductsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutStoreProductsInput
    upsert?: ProductUpsertWithoutStoreProductsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutStoreProductsInput, ProductUpdateWithoutStoreProductsInput>, ProductUncheckedUpdateWithoutStoreProductsInput>
  }

  export type ProductCreateNestedOneWithoutOrdersInput = {
    create?: XOR<ProductCreateWithoutOrdersInput, ProductUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrdersInput
    connect?: ProductWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type OrderDetailsCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderDetailsCreateWithoutOrderInput, OrderDetailsUncheckedCreateWithoutOrderInput> | OrderDetailsCreateWithoutOrderInput[] | OrderDetailsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderDetailsCreateOrConnectWithoutOrderInput | OrderDetailsCreateOrConnectWithoutOrderInput[]
    createMany?: OrderDetailsCreateManyOrderInputEnvelope
    connect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
  }

  export type ComplaintCreateNestedManyWithoutOrderInput = {
    create?: XOR<ComplaintCreateWithoutOrderInput, ComplaintUncheckedCreateWithoutOrderInput> | ComplaintCreateWithoutOrderInput[] | ComplaintUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: ComplaintCreateOrConnectWithoutOrderInput | ComplaintCreateOrConnectWithoutOrderInput[]
    createMany?: ComplaintCreateManyOrderInputEnvelope
    connect?: ComplaintWhereUniqueInput | ComplaintWhereUniqueInput[]
  }

  export type OrderDetailsUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderDetailsCreateWithoutOrderInput, OrderDetailsUncheckedCreateWithoutOrderInput> | OrderDetailsCreateWithoutOrderInput[] | OrderDetailsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderDetailsCreateOrConnectWithoutOrderInput | OrderDetailsCreateOrConnectWithoutOrderInput[]
    createMany?: OrderDetailsCreateManyOrderInputEnvelope
    connect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
  }

  export type ComplaintUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<ComplaintCreateWithoutOrderInput, ComplaintUncheckedCreateWithoutOrderInput> | ComplaintCreateWithoutOrderInput[] | ComplaintUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: ComplaintCreateOrConnectWithoutOrderInput | ComplaintCreateOrConnectWithoutOrderInput[]
    createMany?: ComplaintCreateManyOrderInputEnvelope
    connect?: ComplaintWhereUniqueInput | ComplaintWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProductUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<ProductCreateWithoutOrdersInput, ProductUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrdersInput
    upsert?: ProductUpsertWithoutOrdersInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutOrdersInput, ProductUpdateWithoutOrdersInput>, ProductUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    upsert?: UserUpsertWithoutOrdersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrdersInput, UserUpdateWithoutOrdersInput>, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type OrderDetailsUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderDetailsCreateWithoutOrderInput, OrderDetailsUncheckedCreateWithoutOrderInput> | OrderDetailsCreateWithoutOrderInput[] | OrderDetailsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderDetailsCreateOrConnectWithoutOrderInput | OrderDetailsCreateOrConnectWithoutOrderInput[]
    upsert?: OrderDetailsUpsertWithWhereUniqueWithoutOrderInput | OrderDetailsUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderDetailsCreateManyOrderInputEnvelope
    set?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    disconnect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    delete?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    connect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    update?: OrderDetailsUpdateWithWhereUniqueWithoutOrderInput | OrderDetailsUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderDetailsUpdateManyWithWhereWithoutOrderInput | OrderDetailsUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderDetailsScalarWhereInput | OrderDetailsScalarWhereInput[]
  }

  export type ComplaintUpdateManyWithoutOrderNestedInput = {
    create?: XOR<ComplaintCreateWithoutOrderInput, ComplaintUncheckedCreateWithoutOrderInput> | ComplaintCreateWithoutOrderInput[] | ComplaintUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: ComplaintCreateOrConnectWithoutOrderInput | ComplaintCreateOrConnectWithoutOrderInput[]
    upsert?: ComplaintUpsertWithWhereUniqueWithoutOrderInput | ComplaintUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: ComplaintCreateManyOrderInputEnvelope
    set?: ComplaintWhereUniqueInput | ComplaintWhereUniqueInput[]
    disconnect?: ComplaintWhereUniqueInput | ComplaintWhereUniqueInput[]
    delete?: ComplaintWhereUniqueInput | ComplaintWhereUniqueInput[]
    connect?: ComplaintWhereUniqueInput | ComplaintWhereUniqueInput[]
    update?: ComplaintUpdateWithWhereUniqueWithoutOrderInput | ComplaintUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: ComplaintUpdateManyWithWhereWithoutOrderInput | ComplaintUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: ComplaintScalarWhereInput | ComplaintScalarWhereInput[]
  }

  export type OrderDetailsUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderDetailsCreateWithoutOrderInput, OrderDetailsUncheckedCreateWithoutOrderInput> | OrderDetailsCreateWithoutOrderInput[] | OrderDetailsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderDetailsCreateOrConnectWithoutOrderInput | OrderDetailsCreateOrConnectWithoutOrderInput[]
    upsert?: OrderDetailsUpsertWithWhereUniqueWithoutOrderInput | OrderDetailsUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderDetailsCreateManyOrderInputEnvelope
    set?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    disconnect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    delete?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    connect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    update?: OrderDetailsUpdateWithWhereUniqueWithoutOrderInput | OrderDetailsUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderDetailsUpdateManyWithWhereWithoutOrderInput | OrderDetailsUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderDetailsScalarWhereInput | OrderDetailsScalarWhereInput[]
  }

  export type ComplaintUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<ComplaintCreateWithoutOrderInput, ComplaintUncheckedCreateWithoutOrderInput> | ComplaintCreateWithoutOrderInput[] | ComplaintUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: ComplaintCreateOrConnectWithoutOrderInput | ComplaintCreateOrConnectWithoutOrderInput[]
    upsert?: ComplaintUpsertWithWhereUniqueWithoutOrderInput | ComplaintUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: ComplaintCreateManyOrderInputEnvelope
    set?: ComplaintWhereUniqueInput | ComplaintWhereUniqueInput[]
    disconnect?: ComplaintWhereUniqueInput | ComplaintWhereUniqueInput[]
    delete?: ComplaintWhereUniqueInput | ComplaintWhereUniqueInput[]
    connect?: ComplaintWhereUniqueInput | ComplaintWhereUniqueInput[]
    update?: ComplaintUpdateWithWhereUniqueWithoutOrderInput | ComplaintUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: ComplaintUpdateManyWithWhereWithoutOrderInput | ComplaintUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: ComplaintScalarWhereInput | ComplaintScalarWhereInput[]
  }

  export type OrderCreateNestedOneWithoutOrderDetailsInput = {
    create?: XOR<OrderCreateWithoutOrderDetailsInput, OrderUncheckedCreateWithoutOrderDetailsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderDetailsInput
    connect?: OrderWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutOrderDetailsInput = {
    create?: XOR<UserCreateWithoutOrderDetailsInput, UserUncheckedCreateWithoutOrderDetailsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrderDetailsInput
    connect?: UserWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutOrderDetailsNestedInput = {
    create?: XOR<OrderCreateWithoutOrderDetailsInput, OrderUncheckedCreateWithoutOrderDetailsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderDetailsInput
    upsert?: OrderUpsertWithoutOrderDetailsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutOrderDetailsInput, OrderUpdateWithoutOrderDetailsInput>, OrderUncheckedUpdateWithoutOrderDetailsInput>
  }

  export type UserUpdateOneRequiredWithoutOrderDetailsNestedInput = {
    create?: XOR<UserCreateWithoutOrderDetailsInput, UserUncheckedCreateWithoutOrderDetailsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrderDetailsInput
    upsert?: UserUpsertWithoutOrderDetailsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrderDetailsInput, UserUpdateWithoutOrderDetailsInput>, UserUncheckedUpdateWithoutOrderDetailsInput>
  }

  export type UserCreateNestedOneWithoutComplaintsInput = {
    create?: XOR<UserCreateWithoutComplaintsInput, UserUncheckedCreateWithoutComplaintsInput>
    connectOrCreate?: UserCreateOrConnectWithoutComplaintsInput
    connect?: UserWhereUniqueInput
  }

  export type OrderCreateNestedOneWithoutComplaintsInput = {
    create?: XOR<OrderCreateWithoutComplaintsInput, OrderUncheckedCreateWithoutComplaintsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutComplaintsInput
    connect?: OrderWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutComplaintsNestedInput = {
    create?: XOR<UserCreateWithoutComplaintsInput, UserUncheckedCreateWithoutComplaintsInput>
    connectOrCreate?: UserCreateOrConnectWithoutComplaintsInput
    upsert?: UserUpsertWithoutComplaintsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutComplaintsInput, UserUpdateWithoutComplaintsInput>, UserUncheckedUpdateWithoutComplaintsInput>
  }

  export type OrderUpdateOneRequiredWithoutComplaintsNestedInput = {
    create?: XOR<OrderCreateWithoutComplaintsInput, OrderUncheckedCreateWithoutComplaintsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutComplaintsInput
    upsert?: OrderUpsertWithoutComplaintsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutComplaintsInput, OrderUpdateWithoutComplaintsInput>, OrderUncheckedUpdateWithoutComplaintsInput>
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

  export type NestedEnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
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

  export type NestedEnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type OrderDetailsCreateWithoutUserInput = {
    order: OrderCreateNestedOneWithoutOrderDetailsInput
  }

  export type OrderDetailsUncheckedCreateWithoutUserInput = {
    orderId: string
  }

  export type OrderDetailsCreateOrConnectWithoutUserInput = {
    where: OrderDetailsWhereUniqueInput
    create: XOR<OrderDetailsCreateWithoutUserInput, OrderDetailsUncheckedCreateWithoutUserInput>
  }

  export type OrderDetailsCreateManyUserInputEnvelope = {
    data: OrderDetailsCreateManyUserInput | OrderDetailsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StoreCreateWithoutVendorInput = {
    storeId?: string
    storeName: string
    city: CityCreateNestedOneWithoutStoresInput
    storeProducts?: StoreAndProductCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutVendorInput = {
    storeId?: string
    storeName: string
    cityId: string
    storeProducts?: StoreAndProductUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutVendorInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutVendorInput, StoreUncheckedCreateWithoutVendorInput>
  }

  export type StoreCreateManyVendorInputEnvelope = {
    data: StoreCreateManyVendorInput | StoreCreateManyVendorInput[]
    skipDuplicates?: boolean
  }

  export type ComplaintCreateWithoutUserInput = {
    complaintId?: string
    content: string
    createdAt?: Date | string
    order: OrderCreateNestedOneWithoutComplaintsInput
  }

  export type ComplaintUncheckedCreateWithoutUserInput = {
    complaintId?: string
    content: string
    createdAt?: Date | string
    orderId: string
  }

  export type ComplaintCreateOrConnectWithoutUserInput = {
    where: ComplaintWhereUniqueInput
    create: XOR<ComplaintCreateWithoutUserInput, ComplaintUncheckedCreateWithoutUserInput>
  }

  export type ComplaintCreateManyUserInputEnvelope = {
    data: ComplaintCreateManyUserInput | ComplaintCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WarehouseDetailsCreateWithoutUserInput = {
    warehouse: WareHouseCreateNestedOneWithoutWarehouseDetailsInput
    city: CityCreateNestedOneWithoutWarehouseDetailsInput
  }

  export type WarehouseDetailsUncheckedCreateWithoutUserInput = {
    warehouseId: string
    cityId: string
  }

  export type WarehouseDetailsCreateOrConnectWithoutUserInput = {
    where: WarehouseDetailsWhereUniqueInput
    create: XOR<WarehouseDetailsCreateWithoutUserInput, WarehouseDetailsUncheckedCreateWithoutUserInput>
  }

  export type WarehouseDetailsCreateManyUserInputEnvelope = {
    data: WarehouseDetailsCreateManyUserInput | WarehouseDetailsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutVendorInput = {
    orderId?: string
    quantity: number
    totalPrice: number
    orderDate?: Date | string
    product: ProductCreateNestedOneWithoutOrdersInput
    orderDetails?: OrderDetailsCreateNestedManyWithoutOrderInput
    complaints?: ComplaintCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutVendorInput = {
    orderId?: string
    quantity: number
    totalPrice: number
    orderDate?: Date | string
    productId: string
    orderDetails?: OrderDetailsUncheckedCreateNestedManyWithoutOrderInput
    complaints?: ComplaintUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutVendorInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutVendorInput, OrderUncheckedCreateWithoutVendorInput>
  }

  export type OrderCreateManyVendorInputEnvelope = {
    data: OrderCreateManyVendorInput | OrderCreateManyVendorInput[]
    skipDuplicates?: boolean
  }

  export type OrderDetailsUpsertWithWhereUniqueWithoutUserInput = {
    where: OrderDetailsWhereUniqueInput
    update: XOR<OrderDetailsUpdateWithoutUserInput, OrderDetailsUncheckedUpdateWithoutUserInput>
    create: XOR<OrderDetailsCreateWithoutUserInput, OrderDetailsUncheckedCreateWithoutUserInput>
  }

  export type OrderDetailsUpdateWithWhereUniqueWithoutUserInput = {
    where: OrderDetailsWhereUniqueInput
    data: XOR<OrderDetailsUpdateWithoutUserInput, OrderDetailsUncheckedUpdateWithoutUserInput>
  }

  export type OrderDetailsUpdateManyWithWhereWithoutUserInput = {
    where: OrderDetailsScalarWhereInput
    data: XOR<OrderDetailsUpdateManyMutationInput, OrderDetailsUncheckedUpdateManyWithoutUserInput>
  }

  export type OrderDetailsScalarWhereInput = {
    AND?: OrderDetailsScalarWhereInput | OrderDetailsScalarWhereInput[]
    OR?: OrderDetailsScalarWhereInput[]
    NOT?: OrderDetailsScalarWhereInput | OrderDetailsScalarWhereInput[]
    orderId?: StringFilter<"OrderDetails"> | string
    userId?: StringFilter<"OrderDetails"> | string
  }

  export type StoreUpsertWithWhereUniqueWithoutVendorInput = {
    where: StoreWhereUniqueInput
    update: XOR<StoreUpdateWithoutVendorInput, StoreUncheckedUpdateWithoutVendorInput>
    create: XOR<StoreCreateWithoutVendorInput, StoreUncheckedCreateWithoutVendorInput>
  }

  export type StoreUpdateWithWhereUniqueWithoutVendorInput = {
    where: StoreWhereUniqueInput
    data: XOR<StoreUpdateWithoutVendorInput, StoreUncheckedUpdateWithoutVendorInput>
  }

  export type StoreUpdateManyWithWhereWithoutVendorInput = {
    where: StoreScalarWhereInput
    data: XOR<StoreUpdateManyMutationInput, StoreUncheckedUpdateManyWithoutVendorInput>
  }

  export type StoreScalarWhereInput = {
    AND?: StoreScalarWhereInput | StoreScalarWhereInput[]
    OR?: StoreScalarWhereInput[]
    NOT?: StoreScalarWhereInput | StoreScalarWhereInput[]
    storeId?: StringFilter<"Store"> | string
    storeName?: StringFilter<"Store"> | string
    vendorId?: StringFilter<"Store"> | string
    cityId?: StringFilter<"Store"> | string
  }

  export type ComplaintUpsertWithWhereUniqueWithoutUserInput = {
    where: ComplaintWhereUniqueInput
    update: XOR<ComplaintUpdateWithoutUserInput, ComplaintUncheckedUpdateWithoutUserInput>
    create: XOR<ComplaintCreateWithoutUserInput, ComplaintUncheckedCreateWithoutUserInput>
  }

  export type ComplaintUpdateWithWhereUniqueWithoutUserInput = {
    where: ComplaintWhereUniqueInput
    data: XOR<ComplaintUpdateWithoutUserInput, ComplaintUncheckedUpdateWithoutUserInput>
  }

  export type ComplaintUpdateManyWithWhereWithoutUserInput = {
    where: ComplaintScalarWhereInput
    data: XOR<ComplaintUpdateManyMutationInput, ComplaintUncheckedUpdateManyWithoutUserInput>
  }

  export type ComplaintScalarWhereInput = {
    AND?: ComplaintScalarWhereInput | ComplaintScalarWhereInput[]
    OR?: ComplaintScalarWhereInput[]
    NOT?: ComplaintScalarWhereInput | ComplaintScalarWhereInput[]
    complaintId?: StringFilter<"Complaint"> | string
    content?: StringFilter<"Complaint"> | string
    createdAt?: DateTimeFilter<"Complaint"> | Date | string
    userId?: StringFilter<"Complaint"> | string
    orderId?: StringFilter<"Complaint"> | string
  }

  export type WarehouseDetailsUpsertWithWhereUniqueWithoutUserInput = {
    where: WarehouseDetailsWhereUniqueInput
    update: XOR<WarehouseDetailsUpdateWithoutUserInput, WarehouseDetailsUncheckedUpdateWithoutUserInput>
    create: XOR<WarehouseDetailsCreateWithoutUserInput, WarehouseDetailsUncheckedCreateWithoutUserInput>
  }

  export type WarehouseDetailsUpdateWithWhereUniqueWithoutUserInput = {
    where: WarehouseDetailsWhereUniqueInput
    data: XOR<WarehouseDetailsUpdateWithoutUserInput, WarehouseDetailsUncheckedUpdateWithoutUserInput>
  }

  export type WarehouseDetailsUpdateManyWithWhereWithoutUserInput = {
    where: WarehouseDetailsScalarWhereInput
    data: XOR<WarehouseDetailsUpdateManyMutationInput, WarehouseDetailsUncheckedUpdateManyWithoutUserInput>
  }

  export type WarehouseDetailsScalarWhereInput = {
    AND?: WarehouseDetailsScalarWhereInput | WarehouseDetailsScalarWhereInput[]
    OR?: WarehouseDetailsScalarWhereInput[]
    NOT?: WarehouseDetailsScalarWhereInput | WarehouseDetailsScalarWhereInput[]
    warehouseId?: StringFilter<"WarehouseDetails"> | string
    cityId?: StringFilter<"WarehouseDetails"> | string
    userId?: StringFilter<"WarehouseDetails"> | string
  }

  export type OrderUpsertWithWhereUniqueWithoutVendorInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutVendorInput, OrderUncheckedUpdateWithoutVendorInput>
    create: XOR<OrderCreateWithoutVendorInput, OrderUncheckedCreateWithoutVendorInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutVendorInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutVendorInput, OrderUncheckedUpdateWithoutVendorInput>
  }

  export type OrderUpdateManyWithWhereWithoutVendorInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutVendorInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    orderId?: StringFilter<"Order"> | string
    quantity?: IntFilter<"Order"> | number
    totalPrice?: FloatFilter<"Order"> | number
    orderDate?: DateTimeFilter<"Order"> | Date | string
    productId?: StringFilter<"Order"> | string
    vendorId?: StringFilter<"Order"> | string
  }

  export type WareHouseCreateWithoutProductsInput = {
    warehouseId?: string
    warehouseName: string
    warehouseCapacity: number
    city: CityCreateNestedOneWithoutWarehousesInput
    warehouseDetails?: WarehouseDetailsCreateNestedManyWithoutWarehouseInput
  }

  export type WareHouseUncheckedCreateWithoutProductsInput = {
    warehouseId?: string
    warehouseName: string
    warehouseCapacity: number
    cityId: string
    warehouseDetails?: WarehouseDetailsUncheckedCreateNestedManyWithoutWarehouseInput
  }

  export type WareHouseCreateOrConnectWithoutProductsInput = {
    where: WareHouseWhereUniqueInput
    create: XOR<WareHouseCreateWithoutProductsInput, WareHouseUncheckedCreateWithoutProductsInput>
  }

  export type SalesCreateWithoutProductInput = {
    id?: string
    productName: string
    quantity: number
    price: number
  }

  export type SalesUncheckedCreateWithoutProductInput = {
    id?: string
    productName: string
    quantity: number
    price: number
  }

  export type SalesCreateOrConnectWithoutProductInput = {
    where: SalesWhereUniqueInput
    create: XOR<SalesCreateWithoutProductInput, SalesUncheckedCreateWithoutProductInput>
  }

  export type SalesCreateManyProductInputEnvelope = {
    data: SalesCreateManyProductInput | SalesCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutProductInput = {
    orderId?: string
    quantity: number
    totalPrice: number
    orderDate?: Date | string
    vendor: UserCreateNestedOneWithoutOrdersInput
    orderDetails?: OrderDetailsCreateNestedManyWithoutOrderInput
    complaints?: ComplaintCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutProductInput = {
    orderId?: string
    quantity: number
    totalPrice: number
    orderDate?: Date | string
    vendorId: string
    orderDetails?: OrderDetailsUncheckedCreateNestedManyWithoutOrderInput
    complaints?: ComplaintUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutProductInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutProductInput, OrderUncheckedCreateWithoutProductInput>
  }

  export type OrderCreateManyProductInputEnvelope = {
    data: OrderCreateManyProductInput | OrderCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type StoreAndProductCreateWithoutProductInput = {
    productName?: string | null
    store: StoreCreateNestedOneWithoutStoreProductsInput
  }

  export type StoreAndProductUncheckedCreateWithoutProductInput = {
    storeId: string
    productName?: string | null
  }

  export type StoreAndProductCreateOrConnectWithoutProductInput = {
    where: StoreAndProductWhereUniqueInput
    create: XOR<StoreAndProductCreateWithoutProductInput, StoreAndProductUncheckedCreateWithoutProductInput>
  }

  export type StoreAndProductCreateManyProductInputEnvelope = {
    data: StoreAndProductCreateManyProductInput | StoreAndProductCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type WareHouseUpsertWithoutProductsInput = {
    update: XOR<WareHouseUpdateWithoutProductsInput, WareHouseUncheckedUpdateWithoutProductsInput>
    create: XOR<WareHouseCreateWithoutProductsInput, WareHouseUncheckedCreateWithoutProductsInput>
    where?: WareHouseWhereInput
  }

  export type WareHouseUpdateToOneWithWhereWithoutProductsInput = {
    where?: WareHouseWhereInput
    data: XOR<WareHouseUpdateWithoutProductsInput, WareHouseUncheckedUpdateWithoutProductsInput>
  }

  export type WareHouseUpdateWithoutProductsInput = {
    warehouseId?: StringFieldUpdateOperationsInput | string
    warehouseName?: StringFieldUpdateOperationsInput | string
    warehouseCapacity?: IntFieldUpdateOperationsInput | number
    city?: CityUpdateOneRequiredWithoutWarehousesNestedInput
    warehouseDetails?: WarehouseDetailsUpdateManyWithoutWarehouseNestedInput
  }

  export type WareHouseUncheckedUpdateWithoutProductsInput = {
    warehouseId?: StringFieldUpdateOperationsInput | string
    warehouseName?: StringFieldUpdateOperationsInput | string
    warehouseCapacity?: IntFieldUpdateOperationsInput | number
    cityId?: StringFieldUpdateOperationsInput | string
    warehouseDetails?: WarehouseDetailsUncheckedUpdateManyWithoutWarehouseNestedInput
  }

  export type SalesUpsertWithWhereUniqueWithoutProductInput = {
    where: SalesWhereUniqueInput
    update: XOR<SalesUpdateWithoutProductInput, SalesUncheckedUpdateWithoutProductInput>
    create: XOR<SalesCreateWithoutProductInput, SalesUncheckedCreateWithoutProductInput>
  }

  export type SalesUpdateWithWhereUniqueWithoutProductInput = {
    where: SalesWhereUniqueInput
    data: XOR<SalesUpdateWithoutProductInput, SalesUncheckedUpdateWithoutProductInput>
  }

  export type SalesUpdateManyWithWhereWithoutProductInput = {
    where: SalesScalarWhereInput
    data: XOR<SalesUpdateManyMutationInput, SalesUncheckedUpdateManyWithoutProductInput>
  }

  export type SalesScalarWhereInput = {
    AND?: SalesScalarWhereInput | SalesScalarWhereInput[]
    OR?: SalesScalarWhereInput[]
    NOT?: SalesScalarWhereInput | SalesScalarWhereInput[]
    id?: StringFilter<"Sales"> | string
    productName?: StringFilter<"Sales"> | string
    quantity?: IntFilter<"Sales"> | number
    price?: FloatFilter<"Sales"> | number
    productId?: StringFilter<"Sales"> | string
  }

  export type OrderUpsertWithWhereUniqueWithoutProductInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutProductInput, OrderUncheckedUpdateWithoutProductInput>
    create: XOR<OrderCreateWithoutProductInput, OrderUncheckedCreateWithoutProductInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutProductInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutProductInput, OrderUncheckedUpdateWithoutProductInput>
  }

  export type OrderUpdateManyWithWhereWithoutProductInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutProductInput>
  }

  export type StoreAndProductUpsertWithWhereUniqueWithoutProductInput = {
    where: StoreAndProductWhereUniqueInput
    update: XOR<StoreAndProductUpdateWithoutProductInput, StoreAndProductUncheckedUpdateWithoutProductInput>
    create: XOR<StoreAndProductCreateWithoutProductInput, StoreAndProductUncheckedCreateWithoutProductInput>
  }

  export type StoreAndProductUpdateWithWhereUniqueWithoutProductInput = {
    where: StoreAndProductWhereUniqueInput
    data: XOR<StoreAndProductUpdateWithoutProductInput, StoreAndProductUncheckedUpdateWithoutProductInput>
  }

  export type StoreAndProductUpdateManyWithWhereWithoutProductInput = {
    where: StoreAndProductScalarWhereInput
    data: XOR<StoreAndProductUpdateManyMutationInput, StoreAndProductUncheckedUpdateManyWithoutProductInput>
  }

  export type StoreAndProductScalarWhereInput = {
    AND?: StoreAndProductScalarWhereInput | StoreAndProductScalarWhereInput[]
    OR?: StoreAndProductScalarWhereInput[]
    NOT?: StoreAndProductScalarWhereInput | StoreAndProductScalarWhereInput[]
    storeId?: StringFilter<"StoreAndProduct"> | string
    productId?: StringFilter<"StoreAndProduct"> | string
    productName?: StringNullableFilter<"StoreAndProduct"> | string | null
  }

  export type WareHouseCreateWithoutCityInput = {
    warehouseId?: string
    warehouseName: string
    warehouseCapacity: number
    products?: ProductCreateNestedManyWithoutWarehouseInput
    warehouseDetails?: WarehouseDetailsCreateNestedManyWithoutWarehouseInput
  }

  export type WareHouseUncheckedCreateWithoutCityInput = {
    warehouseId?: string
    warehouseName: string
    warehouseCapacity: number
    products?: ProductUncheckedCreateNestedManyWithoutWarehouseInput
    warehouseDetails?: WarehouseDetailsUncheckedCreateNestedManyWithoutWarehouseInput
  }

  export type WareHouseCreateOrConnectWithoutCityInput = {
    where: WareHouseWhereUniqueInput
    create: XOR<WareHouseCreateWithoutCityInput, WareHouseUncheckedCreateWithoutCityInput>
  }

  export type WareHouseCreateManyCityInputEnvelope = {
    data: WareHouseCreateManyCityInput | WareHouseCreateManyCityInput[]
    skipDuplicates?: boolean
  }

  export type WarehouseDetailsCreateWithoutCityInput = {
    warehouse: WareHouseCreateNestedOneWithoutWarehouseDetailsInput
    user: UserCreateNestedOneWithoutWarehouseDetailsInput
  }

  export type WarehouseDetailsUncheckedCreateWithoutCityInput = {
    warehouseId: string
    userId: string
  }

  export type WarehouseDetailsCreateOrConnectWithoutCityInput = {
    where: WarehouseDetailsWhereUniqueInput
    create: XOR<WarehouseDetailsCreateWithoutCityInput, WarehouseDetailsUncheckedCreateWithoutCityInput>
  }

  export type WarehouseDetailsCreateManyCityInputEnvelope = {
    data: WarehouseDetailsCreateManyCityInput | WarehouseDetailsCreateManyCityInput[]
    skipDuplicates?: boolean
  }

  export type StoreCreateWithoutCityInput = {
    storeId?: string
    storeName: string
    vendor: UserCreateNestedOneWithoutStoresInput
    storeProducts?: StoreAndProductCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutCityInput = {
    storeId?: string
    storeName: string
    vendorId: string
    storeProducts?: StoreAndProductUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutCityInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutCityInput, StoreUncheckedCreateWithoutCityInput>
  }

  export type StoreCreateManyCityInputEnvelope = {
    data: StoreCreateManyCityInput | StoreCreateManyCityInput[]
    skipDuplicates?: boolean
  }

  export type WareHouseUpsertWithWhereUniqueWithoutCityInput = {
    where: WareHouseWhereUniqueInput
    update: XOR<WareHouseUpdateWithoutCityInput, WareHouseUncheckedUpdateWithoutCityInput>
    create: XOR<WareHouseCreateWithoutCityInput, WareHouseUncheckedCreateWithoutCityInput>
  }

  export type WareHouseUpdateWithWhereUniqueWithoutCityInput = {
    where: WareHouseWhereUniqueInput
    data: XOR<WareHouseUpdateWithoutCityInput, WareHouseUncheckedUpdateWithoutCityInput>
  }

  export type WareHouseUpdateManyWithWhereWithoutCityInput = {
    where: WareHouseScalarWhereInput
    data: XOR<WareHouseUpdateManyMutationInput, WareHouseUncheckedUpdateManyWithoutCityInput>
  }

  export type WareHouseScalarWhereInput = {
    AND?: WareHouseScalarWhereInput | WareHouseScalarWhereInput[]
    OR?: WareHouseScalarWhereInput[]
    NOT?: WareHouseScalarWhereInput | WareHouseScalarWhereInput[]
    warehouseId?: StringFilter<"WareHouse"> | string
    warehouseName?: StringFilter<"WareHouse"> | string
    warehouseCapacity?: IntFilter<"WareHouse"> | number
    cityId?: StringFilter<"WareHouse"> | string
  }

  export type WarehouseDetailsUpsertWithWhereUniqueWithoutCityInput = {
    where: WarehouseDetailsWhereUniqueInput
    update: XOR<WarehouseDetailsUpdateWithoutCityInput, WarehouseDetailsUncheckedUpdateWithoutCityInput>
    create: XOR<WarehouseDetailsCreateWithoutCityInput, WarehouseDetailsUncheckedCreateWithoutCityInput>
  }

  export type WarehouseDetailsUpdateWithWhereUniqueWithoutCityInput = {
    where: WarehouseDetailsWhereUniqueInput
    data: XOR<WarehouseDetailsUpdateWithoutCityInput, WarehouseDetailsUncheckedUpdateWithoutCityInput>
  }

  export type WarehouseDetailsUpdateManyWithWhereWithoutCityInput = {
    where: WarehouseDetailsScalarWhereInput
    data: XOR<WarehouseDetailsUpdateManyMutationInput, WarehouseDetailsUncheckedUpdateManyWithoutCityInput>
  }

  export type StoreUpsertWithWhereUniqueWithoutCityInput = {
    where: StoreWhereUniqueInput
    update: XOR<StoreUpdateWithoutCityInput, StoreUncheckedUpdateWithoutCityInput>
    create: XOR<StoreCreateWithoutCityInput, StoreUncheckedCreateWithoutCityInput>
  }

  export type StoreUpdateWithWhereUniqueWithoutCityInput = {
    where: StoreWhereUniqueInput
    data: XOR<StoreUpdateWithoutCityInput, StoreUncheckedUpdateWithoutCityInput>
  }

  export type StoreUpdateManyWithWhereWithoutCityInput = {
    where: StoreScalarWhereInput
    data: XOR<StoreUpdateManyMutationInput, StoreUncheckedUpdateManyWithoutCityInput>
  }

  export type CityCreateWithoutWarehousesInput = {
    cityId?: string
    cityName: string
    state: string
    warehouseDetails?: WarehouseDetailsCreateNestedManyWithoutCityInput
    Stores?: StoreCreateNestedManyWithoutCityInput
  }

  export type CityUncheckedCreateWithoutWarehousesInput = {
    cityId?: string
    cityName: string
    state: string
    warehouseDetails?: WarehouseDetailsUncheckedCreateNestedManyWithoutCityInput
    Stores?: StoreUncheckedCreateNestedManyWithoutCityInput
  }

  export type CityCreateOrConnectWithoutWarehousesInput = {
    where: CityWhereUniqueInput
    create: XOR<CityCreateWithoutWarehousesInput, CityUncheckedCreateWithoutWarehousesInput>
  }

  export type ProductCreateWithoutWarehouseInput = {
    productId?: string
    productName: string
    productPrice: number
    sales?: SalesCreateNestedManyWithoutProductInput
    orders?: OrderCreateNestedManyWithoutProductInput
    storeProducts?: StoreAndProductCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutWarehouseInput = {
    productId?: string
    productName: string
    productPrice: number
    sales?: SalesUncheckedCreateNestedManyWithoutProductInput
    orders?: OrderUncheckedCreateNestedManyWithoutProductInput
    storeProducts?: StoreAndProductUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutWarehouseInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutWarehouseInput, ProductUncheckedCreateWithoutWarehouseInput>
  }

  export type ProductCreateManyWarehouseInputEnvelope = {
    data: ProductCreateManyWarehouseInput | ProductCreateManyWarehouseInput[]
    skipDuplicates?: boolean
  }

  export type WarehouseDetailsCreateWithoutWarehouseInput = {
    city: CityCreateNestedOneWithoutWarehouseDetailsInput
    user: UserCreateNestedOneWithoutWarehouseDetailsInput
  }

  export type WarehouseDetailsUncheckedCreateWithoutWarehouseInput = {
    cityId: string
    userId: string
  }

  export type WarehouseDetailsCreateOrConnectWithoutWarehouseInput = {
    where: WarehouseDetailsWhereUniqueInput
    create: XOR<WarehouseDetailsCreateWithoutWarehouseInput, WarehouseDetailsUncheckedCreateWithoutWarehouseInput>
  }

  export type WarehouseDetailsCreateManyWarehouseInputEnvelope = {
    data: WarehouseDetailsCreateManyWarehouseInput | WarehouseDetailsCreateManyWarehouseInput[]
    skipDuplicates?: boolean
  }

  export type CityUpsertWithoutWarehousesInput = {
    update: XOR<CityUpdateWithoutWarehousesInput, CityUncheckedUpdateWithoutWarehousesInput>
    create: XOR<CityCreateWithoutWarehousesInput, CityUncheckedCreateWithoutWarehousesInput>
    where?: CityWhereInput
  }

  export type CityUpdateToOneWithWhereWithoutWarehousesInput = {
    where?: CityWhereInput
    data: XOR<CityUpdateWithoutWarehousesInput, CityUncheckedUpdateWithoutWarehousesInput>
  }

  export type CityUpdateWithoutWarehousesInput = {
    cityId?: StringFieldUpdateOperationsInput | string
    cityName?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    warehouseDetails?: WarehouseDetailsUpdateManyWithoutCityNestedInput
    Stores?: StoreUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateWithoutWarehousesInput = {
    cityId?: StringFieldUpdateOperationsInput | string
    cityName?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    warehouseDetails?: WarehouseDetailsUncheckedUpdateManyWithoutCityNestedInput
    Stores?: StoreUncheckedUpdateManyWithoutCityNestedInput
  }

  export type ProductUpsertWithWhereUniqueWithoutWarehouseInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutWarehouseInput, ProductUncheckedUpdateWithoutWarehouseInput>
    create: XOR<ProductCreateWithoutWarehouseInput, ProductUncheckedCreateWithoutWarehouseInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutWarehouseInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutWarehouseInput, ProductUncheckedUpdateWithoutWarehouseInput>
  }

  export type ProductUpdateManyWithWhereWithoutWarehouseInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutWarehouseInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    productId?: StringFilter<"Product"> | string
    productName?: StringFilter<"Product"> | string
    productPrice?: FloatFilter<"Product"> | number
    warehouseId?: StringFilter<"Product"> | string
  }

  export type WarehouseDetailsUpsertWithWhereUniqueWithoutWarehouseInput = {
    where: WarehouseDetailsWhereUniqueInput
    update: XOR<WarehouseDetailsUpdateWithoutWarehouseInput, WarehouseDetailsUncheckedUpdateWithoutWarehouseInput>
    create: XOR<WarehouseDetailsCreateWithoutWarehouseInput, WarehouseDetailsUncheckedCreateWithoutWarehouseInput>
  }

  export type WarehouseDetailsUpdateWithWhereUniqueWithoutWarehouseInput = {
    where: WarehouseDetailsWhereUniqueInput
    data: XOR<WarehouseDetailsUpdateWithoutWarehouseInput, WarehouseDetailsUncheckedUpdateWithoutWarehouseInput>
  }

  export type WarehouseDetailsUpdateManyWithWhereWithoutWarehouseInput = {
    where: WarehouseDetailsScalarWhereInput
    data: XOR<WarehouseDetailsUpdateManyMutationInput, WarehouseDetailsUncheckedUpdateManyWithoutWarehouseInput>
  }

  export type WareHouseCreateWithoutWarehouseDetailsInput = {
    warehouseId?: string
    warehouseName: string
    warehouseCapacity: number
    city: CityCreateNestedOneWithoutWarehousesInput
    products?: ProductCreateNestedManyWithoutWarehouseInput
  }

  export type WareHouseUncheckedCreateWithoutWarehouseDetailsInput = {
    warehouseId?: string
    warehouseName: string
    warehouseCapacity: number
    cityId: string
    products?: ProductUncheckedCreateNestedManyWithoutWarehouseInput
  }

  export type WareHouseCreateOrConnectWithoutWarehouseDetailsInput = {
    where: WareHouseWhereUniqueInput
    create: XOR<WareHouseCreateWithoutWarehouseDetailsInput, WareHouseUncheckedCreateWithoutWarehouseDetailsInput>
  }

  export type CityCreateWithoutWarehouseDetailsInput = {
    cityId?: string
    cityName: string
    state: string
    warehouses?: WareHouseCreateNestedManyWithoutCityInput
    Stores?: StoreCreateNestedManyWithoutCityInput
  }

  export type CityUncheckedCreateWithoutWarehouseDetailsInput = {
    cityId?: string
    cityName: string
    state: string
    warehouses?: WareHouseUncheckedCreateNestedManyWithoutCityInput
    Stores?: StoreUncheckedCreateNestedManyWithoutCityInput
  }

  export type CityCreateOrConnectWithoutWarehouseDetailsInput = {
    where: CityWhereUniqueInput
    create: XOR<CityCreateWithoutWarehouseDetailsInput, CityUncheckedCreateWithoutWarehouseDetailsInput>
  }

  export type UserCreateWithoutWarehouseDetailsInput = {
    userid?: string
    email: string
    name?: string | null
    role: $Enums.UserType
    password: string
    orderDetails?: OrderDetailsCreateNestedManyWithoutUserInput
    stores?: StoreCreateNestedManyWithoutVendorInput
    Complaints?: ComplaintCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutVendorInput
  }

  export type UserUncheckedCreateWithoutWarehouseDetailsInput = {
    userid?: string
    email: string
    name?: string | null
    role: $Enums.UserType
    password: string
    orderDetails?: OrderDetailsUncheckedCreateNestedManyWithoutUserInput
    stores?: StoreUncheckedCreateNestedManyWithoutVendorInput
    Complaints?: ComplaintUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutVendorInput
  }

  export type UserCreateOrConnectWithoutWarehouseDetailsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWarehouseDetailsInput, UserUncheckedCreateWithoutWarehouseDetailsInput>
  }

  export type WareHouseUpsertWithoutWarehouseDetailsInput = {
    update: XOR<WareHouseUpdateWithoutWarehouseDetailsInput, WareHouseUncheckedUpdateWithoutWarehouseDetailsInput>
    create: XOR<WareHouseCreateWithoutWarehouseDetailsInput, WareHouseUncheckedCreateWithoutWarehouseDetailsInput>
    where?: WareHouseWhereInput
  }

  export type WareHouseUpdateToOneWithWhereWithoutWarehouseDetailsInput = {
    where?: WareHouseWhereInput
    data: XOR<WareHouseUpdateWithoutWarehouseDetailsInput, WareHouseUncheckedUpdateWithoutWarehouseDetailsInput>
  }

  export type WareHouseUpdateWithoutWarehouseDetailsInput = {
    warehouseId?: StringFieldUpdateOperationsInput | string
    warehouseName?: StringFieldUpdateOperationsInput | string
    warehouseCapacity?: IntFieldUpdateOperationsInput | number
    city?: CityUpdateOneRequiredWithoutWarehousesNestedInput
    products?: ProductUpdateManyWithoutWarehouseNestedInput
  }

  export type WareHouseUncheckedUpdateWithoutWarehouseDetailsInput = {
    warehouseId?: StringFieldUpdateOperationsInput | string
    warehouseName?: StringFieldUpdateOperationsInput | string
    warehouseCapacity?: IntFieldUpdateOperationsInput | number
    cityId?: StringFieldUpdateOperationsInput | string
    products?: ProductUncheckedUpdateManyWithoutWarehouseNestedInput
  }

  export type CityUpsertWithoutWarehouseDetailsInput = {
    update: XOR<CityUpdateWithoutWarehouseDetailsInput, CityUncheckedUpdateWithoutWarehouseDetailsInput>
    create: XOR<CityCreateWithoutWarehouseDetailsInput, CityUncheckedCreateWithoutWarehouseDetailsInput>
    where?: CityWhereInput
  }

  export type CityUpdateToOneWithWhereWithoutWarehouseDetailsInput = {
    where?: CityWhereInput
    data: XOR<CityUpdateWithoutWarehouseDetailsInput, CityUncheckedUpdateWithoutWarehouseDetailsInput>
  }

  export type CityUpdateWithoutWarehouseDetailsInput = {
    cityId?: StringFieldUpdateOperationsInput | string
    cityName?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    warehouses?: WareHouseUpdateManyWithoutCityNestedInput
    Stores?: StoreUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateWithoutWarehouseDetailsInput = {
    cityId?: StringFieldUpdateOperationsInput | string
    cityName?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    warehouses?: WareHouseUncheckedUpdateManyWithoutCityNestedInput
    Stores?: StoreUncheckedUpdateManyWithoutCityNestedInput
  }

  export type UserUpsertWithoutWarehouseDetailsInput = {
    update: XOR<UserUpdateWithoutWarehouseDetailsInput, UserUncheckedUpdateWithoutWarehouseDetailsInput>
    create: XOR<UserCreateWithoutWarehouseDetailsInput, UserUncheckedCreateWithoutWarehouseDetailsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWarehouseDetailsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWarehouseDetailsInput, UserUncheckedUpdateWithoutWarehouseDetailsInput>
  }

  export type UserUpdateWithoutWarehouseDetailsInput = {
    userid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    password?: StringFieldUpdateOperationsInput | string
    orderDetails?: OrderDetailsUpdateManyWithoutUserNestedInput
    stores?: StoreUpdateManyWithoutVendorNestedInput
    Complaints?: ComplaintUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutVendorNestedInput
  }

  export type UserUncheckedUpdateWithoutWarehouseDetailsInput = {
    userid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    password?: StringFieldUpdateOperationsInput | string
    orderDetails?: OrderDetailsUncheckedUpdateManyWithoutUserNestedInput
    stores?: StoreUncheckedUpdateManyWithoutVendorNestedInput
    Complaints?: ComplaintUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type ProductCreateWithoutSalesInput = {
    productId?: string
    productName: string
    productPrice: number
    warehouse: WareHouseCreateNestedOneWithoutProductsInput
    orders?: OrderCreateNestedManyWithoutProductInput
    storeProducts?: StoreAndProductCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutSalesInput = {
    productId?: string
    productName: string
    productPrice: number
    warehouseId: string
    orders?: OrderUncheckedCreateNestedManyWithoutProductInput
    storeProducts?: StoreAndProductUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutSalesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutSalesInput, ProductUncheckedCreateWithoutSalesInput>
  }

  export type ProductUpsertWithoutSalesInput = {
    update: XOR<ProductUpdateWithoutSalesInput, ProductUncheckedUpdateWithoutSalesInput>
    create: XOR<ProductCreateWithoutSalesInput, ProductUncheckedCreateWithoutSalesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutSalesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutSalesInput, ProductUncheckedUpdateWithoutSalesInput>
  }

  export type ProductUpdateWithoutSalesInput = {
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productPrice?: FloatFieldUpdateOperationsInput | number
    warehouse?: WareHouseUpdateOneRequiredWithoutProductsNestedInput
    orders?: OrderUpdateManyWithoutProductNestedInput
    storeProducts?: StoreAndProductUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutSalesInput = {
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productPrice?: FloatFieldUpdateOperationsInput | number
    warehouseId?: StringFieldUpdateOperationsInput | string
    orders?: OrderUncheckedUpdateManyWithoutProductNestedInput
    storeProducts?: StoreAndProductUncheckedUpdateManyWithoutProductNestedInput
  }

  export type UserCreateWithoutStoresInput = {
    userid?: string
    email: string
    name?: string | null
    role: $Enums.UserType
    password: string
    orderDetails?: OrderDetailsCreateNestedManyWithoutUserInput
    Complaints?: ComplaintCreateNestedManyWithoutUserInput
    WarehouseDetails?: WarehouseDetailsCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutVendorInput
  }

  export type UserUncheckedCreateWithoutStoresInput = {
    userid?: string
    email: string
    name?: string | null
    role: $Enums.UserType
    password: string
    orderDetails?: OrderDetailsUncheckedCreateNestedManyWithoutUserInput
    Complaints?: ComplaintUncheckedCreateNestedManyWithoutUserInput
    WarehouseDetails?: WarehouseDetailsUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutVendorInput
  }

  export type UserCreateOrConnectWithoutStoresInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStoresInput, UserUncheckedCreateWithoutStoresInput>
  }

  export type CityCreateWithoutStoresInput = {
    cityId?: string
    cityName: string
    state: string
    warehouses?: WareHouseCreateNestedManyWithoutCityInput
    warehouseDetails?: WarehouseDetailsCreateNestedManyWithoutCityInput
  }

  export type CityUncheckedCreateWithoutStoresInput = {
    cityId?: string
    cityName: string
    state: string
    warehouses?: WareHouseUncheckedCreateNestedManyWithoutCityInput
    warehouseDetails?: WarehouseDetailsUncheckedCreateNestedManyWithoutCityInput
  }

  export type CityCreateOrConnectWithoutStoresInput = {
    where: CityWhereUniqueInput
    create: XOR<CityCreateWithoutStoresInput, CityUncheckedCreateWithoutStoresInput>
  }

  export type StoreAndProductCreateWithoutStoreInput = {
    productName?: string | null
    product: ProductCreateNestedOneWithoutStoreProductsInput
  }

  export type StoreAndProductUncheckedCreateWithoutStoreInput = {
    productId: string
    productName?: string | null
  }

  export type StoreAndProductCreateOrConnectWithoutStoreInput = {
    where: StoreAndProductWhereUniqueInput
    create: XOR<StoreAndProductCreateWithoutStoreInput, StoreAndProductUncheckedCreateWithoutStoreInput>
  }

  export type StoreAndProductCreateManyStoreInputEnvelope = {
    data: StoreAndProductCreateManyStoreInput | StoreAndProductCreateManyStoreInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutStoresInput = {
    update: XOR<UserUpdateWithoutStoresInput, UserUncheckedUpdateWithoutStoresInput>
    create: XOR<UserCreateWithoutStoresInput, UserUncheckedCreateWithoutStoresInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStoresInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStoresInput, UserUncheckedUpdateWithoutStoresInput>
  }

  export type UserUpdateWithoutStoresInput = {
    userid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    password?: StringFieldUpdateOperationsInput | string
    orderDetails?: OrderDetailsUpdateManyWithoutUserNestedInput
    Complaints?: ComplaintUpdateManyWithoutUserNestedInput
    WarehouseDetails?: WarehouseDetailsUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutVendorNestedInput
  }

  export type UserUncheckedUpdateWithoutStoresInput = {
    userid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    password?: StringFieldUpdateOperationsInput | string
    orderDetails?: OrderDetailsUncheckedUpdateManyWithoutUserNestedInput
    Complaints?: ComplaintUncheckedUpdateManyWithoutUserNestedInput
    WarehouseDetails?: WarehouseDetailsUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type CityUpsertWithoutStoresInput = {
    update: XOR<CityUpdateWithoutStoresInput, CityUncheckedUpdateWithoutStoresInput>
    create: XOR<CityCreateWithoutStoresInput, CityUncheckedCreateWithoutStoresInput>
    where?: CityWhereInput
  }

  export type CityUpdateToOneWithWhereWithoutStoresInput = {
    where?: CityWhereInput
    data: XOR<CityUpdateWithoutStoresInput, CityUncheckedUpdateWithoutStoresInput>
  }

  export type CityUpdateWithoutStoresInput = {
    cityId?: StringFieldUpdateOperationsInput | string
    cityName?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    warehouses?: WareHouseUpdateManyWithoutCityNestedInput
    warehouseDetails?: WarehouseDetailsUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateWithoutStoresInput = {
    cityId?: StringFieldUpdateOperationsInput | string
    cityName?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    warehouses?: WareHouseUncheckedUpdateManyWithoutCityNestedInput
    warehouseDetails?: WarehouseDetailsUncheckedUpdateManyWithoutCityNestedInput
  }

  export type StoreAndProductUpsertWithWhereUniqueWithoutStoreInput = {
    where: StoreAndProductWhereUniqueInput
    update: XOR<StoreAndProductUpdateWithoutStoreInput, StoreAndProductUncheckedUpdateWithoutStoreInput>
    create: XOR<StoreAndProductCreateWithoutStoreInput, StoreAndProductUncheckedCreateWithoutStoreInput>
  }

  export type StoreAndProductUpdateWithWhereUniqueWithoutStoreInput = {
    where: StoreAndProductWhereUniqueInput
    data: XOR<StoreAndProductUpdateWithoutStoreInput, StoreAndProductUncheckedUpdateWithoutStoreInput>
  }

  export type StoreAndProductUpdateManyWithWhereWithoutStoreInput = {
    where: StoreAndProductScalarWhereInput
    data: XOR<StoreAndProductUpdateManyMutationInput, StoreAndProductUncheckedUpdateManyWithoutStoreInput>
  }

  export type StoreCreateWithoutStoreProductsInput = {
    storeId?: string
    storeName: string
    vendor: UserCreateNestedOneWithoutStoresInput
    city: CityCreateNestedOneWithoutStoresInput
  }

  export type StoreUncheckedCreateWithoutStoreProductsInput = {
    storeId?: string
    storeName: string
    vendorId: string
    cityId: string
  }

  export type StoreCreateOrConnectWithoutStoreProductsInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutStoreProductsInput, StoreUncheckedCreateWithoutStoreProductsInput>
  }

  export type ProductCreateWithoutStoreProductsInput = {
    productId?: string
    productName: string
    productPrice: number
    warehouse: WareHouseCreateNestedOneWithoutProductsInput
    sales?: SalesCreateNestedManyWithoutProductInput
    orders?: OrderCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutStoreProductsInput = {
    productId?: string
    productName: string
    productPrice: number
    warehouseId: string
    sales?: SalesUncheckedCreateNestedManyWithoutProductInput
    orders?: OrderUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutStoreProductsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutStoreProductsInput, ProductUncheckedCreateWithoutStoreProductsInput>
  }

  export type StoreUpsertWithoutStoreProductsInput = {
    update: XOR<StoreUpdateWithoutStoreProductsInput, StoreUncheckedUpdateWithoutStoreProductsInput>
    create: XOR<StoreCreateWithoutStoreProductsInput, StoreUncheckedCreateWithoutStoreProductsInput>
    where?: StoreWhereInput
  }

  export type StoreUpdateToOneWithWhereWithoutStoreProductsInput = {
    where?: StoreWhereInput
    data: XOR<StoreUpdateWithoutStoreProductsInput, StoreUncheckedUpdateWithoutStoreProductsInput>
  }

  export type StoreUpdateWithoutStoreProductsInput = {
    storeId?: StringFieldUpdateOperationsInput | string
    storeName?: StringFieldUpdateOperationsInput | string
    vendor?: UserUpdateOneRequiredWithoutStoresNestedInput
    city?: CityUpdateOneRequiredWithoutStoresNestedInput
  }

  export type StoreUncheckedUpdateWithoutStoreProductsInput = {
    storeId?: StringFieldUpdateOperationsInput | string
    storeName?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    cityId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductUpsertWithoutStoreProductsInput = {
    update: XOR<ProductUpdateWithoutStoreProductsInput, ProductUncheckedUpdateWithoutStoreProductsInput>
    create: XOR<ProductCreateWithoutStoreProductsInput, ProductUncheckedCreateWithoutStoreProductsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutStoreProductsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutStoreProductsInput, ProductUncheckedUpdateWithoutStoreProductsInput>
  }

  export type ProductUpdateWithoutStoreProductsInput = {
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productPrice?: FloatFieldUpdateOperationsInput | number
    warehouse?: WareHouseUpdateOneRequiredWithoutProductsNestedInput
    sales?: SalesUpdateManyWithoutProductNestedInput
    orders?: OrderUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutStoreProductsInput = {
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productPrice?: FloatFieldUpdateOperationsInput | number
    warehouseId?: StringFieldUpdateOperationsInput | string
    sales?: SalesUncheckedUpdateManyWithoutProductNestedInput
    orders?: OrderUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateWithoutOrdersInput = {
    productId?: string
    productName: string
    productPrice: number
    warehouse: WareHouseCreateNestedOneWithoutProductsInput
    sales?: SalesCreateNestedManyWithoutProductInput
    storeProducts?: StoreAndProductCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutOrdersInput = {
    productId?: string
    productName: string
    productPrice: number
    warehouseId: string
    sales?: SalesUncheckedCreateNestedManyWithoutProductInput
    storeProducts?: StoreAndProductUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutOrdersInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutOrdersInput, ProductUncheckedCreateWithoutOrdersInput>
  }

  export type UserCreateWithoutOrdersInput = {
    userid?: string
    email: string
    name?: string | null
    role: $Enums.UserType
    password: string
    orderDetails?: OrderDetailsCreateNestedManyWithoutUserInput
    stores?: StoreCreateNestedManyWithoutVendorInput
    Complaints?: ComplaintCreateNestedManyWithoutUserInput
    WarehouseDetails?: WarehouseDetailsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrdersInput = {
    userid?: string
    email: string
    name?: string | null
    role: $Enums.UserType
    password: string
    orderDetails?: OrderDetailsUncheckedCreateNestedManyWithoutUserInput
    stores?: StoreUncheckedCreateNestedManyWithoutVendorInput
    Complaints?: ComplaintUncheckedCreateNestedManyWithoutUserInput
    WarehouseDetails?: WarehouseDetailsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
  }

  export type OrderDetailsCreateWithoutOrderInput = {
    user: UserCreateNestedOneWithoutOrderDetailsInput
  }

  export type OrderDetailsUncheckedCreateWithoutOrderInput = {
    userId: string
  }

  export type OrderDetailsCreateOrConnectWithoutOrderInput = {
    where: OrderDetailsWhereUniqueInput
    create: XOR<OrderDetailsCreateWithoutOrderInput, OrderDetailsUncheckedCreateWithoutOrderInput>
  }

  export type OrderDetailsCreateManyOrderInputEnvelope = {
    data: OrderDetailsCreateManyOrderInput | OrderDetailsCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type ComplaintCreateWithoutOrderInput = {
    complaintId?: string
    content: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutComplaintsInput
  }

  export type ComplaintUncheckedCreateWithoutOrderInput = {
    complaintId?: string
    content: string
    createdAt?: Date | string
    userId: string
  }

  export type ComplaintCreateOrConnectWithoutOrderInput = {
    where: ComplaintWhereUniqueInput
    create: XOR<ComplaintCreateWithoutOrderInput, ComplaintUncheckedCreateWithoutOrderInput>
  }

  export type ComplaintCreateManyOrderInputEnvelope = {
    data: ComplaintCreateManyOrderInput | ComplaintCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithoutOrdersInput = {
    update: XOR<ProductUpdateWithoutOrdersInput, ProductUncheckedUpdateWithoutOrdersInput>
    create: XOR<ProductCreateWithoutOrdersInput, ProductUncheckedCreateWithoutOrdersInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutOrdersInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutOrdersInput, ProductUncheckedUpdateWithoutOrdersInput>
  }

  export type ProductUpdateWithoutOrdersInput = {
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productPrice?: FloatFieldUpdateOperationsInput | number
    warehouse?: WareHouseUpdateOneRequiredWithoutProductsNestedInput
    sales?: SalesUpdateManyWithoutProductNestedInput
    storeProducts?: StoreAndProductUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutOrdersInput = {
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productPrice?: FloatFieldUpdateOperationsInput | number
    warehouseId?: StringFieldUpdateOperationsInput | string
    sales?: SalesUncheckedUpdateManyWithoutProductNestedInput
    storeProducts?: StoreAndProductUncheckedUpdateManyWithoutProductNestedInput
  }

  export type UserUpsertWithoutOrdersInput = {
    update: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateWithoutOrdersInput = {
    userid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    password?: StringFieldUpdateOperationsInput | string
    orderDetails?: OrderDetailsUpdateManyWithoutUserNestedInput
    stores?: StoreUpdateManyWithoutVendorNestedInput
    Complaints?: ComplaintUpdateManyWithoutUserNestedInput
    WarehouseDetails?: WarehouseDetailsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrdersInput = {
    userid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    password?: StringFieldUpdateOperationsInput | string
    orderDetails?: OrderDetailsUncheckedUpdateManyWithoutUserNestedInput
    stores?: StoreUncheckedUpdateManyWithoutVendorNestedInput
    Complaints?: ComplaintUncheckedUpdateManyWithoutUserNestedInput
    WarehouseDetails?: WarehouseDetailsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OrderDetailsUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderDetailsWhereUniqueInput
    update: XOR<OrderDetailsUpdateWithoutOrderInput, OrderDetailsUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderDetailsCreateWithoutOrderInput, OrderDetailsUncheckedCreateWithoutOrderInput>
  }

  export type OrderDetailsUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderDetailsWhereUniqueInput
    data: XOR<OrderDetailsUpdateWithoutOrderInput, OrderDetailsUncheckedUpdateWithoutOrderInput>
  }

  export type OrderDetailsUpdateManyWithWhereWithoutOrderInput = {
    where: OrderDetailsScalarWhereInput
    data: XOR<OrderDetailsUpdateManyMutationInput, OrderDetailsUncheckedUpdateManyWithoutOrderInput>
  }

  export type ComplaintUpsertWithWhereUniqueWithoutOrderInput = {
    where: ComplaintWhereUniqueInput
    update: XOR<ComplaintUpdateWithoutOrderInput, ComplaintUncheckedUpdateWithoutOrderInput>
    create: XOR<ComplaintCreateWithoutOrderInput, ComplaintUncheckedCreateWithoutOrderInput>
  }

  export type ComplaintUpdateWithWhereUniqueWithoutOrderInput = {
    where: ComplaintWhereUniqueInput
    data: XOR<ComplaintUpdateWithoutOrderInput, ComplaintUncheckedUpdateWithoutOrderInput>
  }

  export type ComplaintUpdateManyWithWhereWithoutOrderInput = {
    where: ComplaintScalarWhereInput
    data: XOR<ComplaintUpdateManyMutationInput, ComplaintUncheckedUpdateManyWithoutOrderInput>
  }

  export type OrderCreateWithoutOrderDetailsInput = {
    orderId?: string
    quantity: number
    totalPrice: number
    orderDate?: Date | string
    product: ProductCreateNestedOneWithoutOrdersInput
    vendor: UserCreateNestedOneWithoutOrdersInput
    complaints?: ComplaintCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutOrderDetailsInput = {
    orderId?: string
    quantity: number
    totalPrice: number
    orderDate?: Date | string
    productId: string
    vendorId: string
    complaints?: ComplaintUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutOrderDetailsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutOrderDetailsInput, OrderUncheckedCreateWithoutOrderDetailsInput>
  }

  export type UserCreateWithoutOrderDetailsInput = {
    userid?: string
    email: string
    name?: string | null
    role: $Enums.UserType
    password: string
    stores?: StoreCreateNestedManyWithoutVendorInput
    Complaints?: ComplaintCreateNestedManyWithoutUserInput
    WarehouseDetails?: WarehouseDetailsCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutVendorInput
  }

  export type UserUncheckedCreateWithoutOrderDetailsInput = {
    userid?: string
    email: string
    name?: string | null
    role: $Enums.UserType
    password: string
    stores?: StoreUncheckedCreateNestedManyWithoutVendorInput
    Complaints?: ComplaintUncheckedCreateNestedManyWithoutUserInput
    WarehouseDetails?: WarehouseDetailsUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutVendorInput
  }

  export type UserCreateOrConnectWithoutOrderDetailsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrderDetailsInput, UserUncheckedCreateWithoutOrderDetailsInput>
  }

  export type OrderUpsertWithoutOrderDetailsInput = {
    update: XOR<OrderUpdateWithoutOrderDetailsInput, OrderUncheckedUpdateWithoutOrderDetailsInput>
    create: XOR<OrderCreateWithoutOrderDetailsInput, OrderUncheckedCreateWithoutOrderDetailsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutOrderDetailsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutOrderDetailsInput, OrderUncheckedUpdateWithoutOrderDetailsInput>
  }

  export type OrderUpdateWithoutOrderDetailsInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutOrdersNestedInput
    vendor?: UserUpdateOneRequiredWithoutOrdersNestedInput
    complaints?: ComplaintUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutOrderDetailsInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    complaints?: ComplaintUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type UserUpsertWithoutOrderDetailsInput = {
    update: XOR<UserUpdateWithoutOrderDetailsInput, UserUncheckedUpdateWithoutOrderDetailsInput>
    create: XOR<UserCreateWithoutOrderDetailsInput, UserUncheckedCreateWithoutOrderDetailsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrderDetailsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrderDetailsInput, UserUncheckedUpdateWithoutOrderDetailsInput>
  }

  export type UserUpdateWithoutOrderDetailsInput = {
    userid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    password?: StringFieldUpdateOperationsInput | string
    stores?: StoreUpdateManyWithoutVendorNestedInput
    Complaints?: ComplaintUpdateManyWithoutUserNestedInput
    WarehouseDetails?: WarehouseDetailsUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutVendorNestedInput
  }

  export type UserUncheckedUpdateWithoutOrderDetailsInput = {
    userid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    password?: StringFieldUpdateOperationsInput | string
    stores?: StoreUncheckedUpdateManyWithoutVendorNestedInput
    Complaints?: ComplaintUncheckedUpdateManyWithoutUserNestedInput
    WarehouseDetails?: WarehouseDetailsUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type UserCreateWithoutComplaintsInput = {
    userid?: string
    email: string
    name?: string | null
    role: $Enums.UserType
    password: string
    orderDetails?: OrderDetailsCreateNestedManyWithoutUserInput
    stores?: StoreCreateNestedManyWithoutVendorInput
    WarehouseDetails?: WarehouseDetailsCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutVendorInput
  }

  export type UserUncheckedCreateWithoutComplaintsInput = {
    userid?: string
    email: string
    name?: string | null
    role: $Enums.UserType
    password: string
    orderDetails?: OrderDetailsUncheckedCreateNestedManyWithoutUserInput
    stores?: StoreUncheckedCreateNestedManyWithoutVendorInput
    WarehouseDetails?: WarehouseDetailsUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutVendorInput
  }

  export type UserCreateOrConnectWithoutComplaintsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutComplaintsInput, UserUncheckedCreateWithoutComplaintsInput>
  }

  export type OrderCreateWithoutComplaintsInput = {
    orderId?: string
    quantity: number
    totalPrice: number
    orderDate?: Date | string
    product: ProductCreateNestedOneWithoutOrdersInput
    vendor: UserCreateNestedOneWithoutOrdersInput
    orderDetails?: OrderDetailsCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutComplaintsInput = {
    orderId?: string
    quantity: number
    totalPrice: number
    orderDate?: Date | string
    productId: string
    vendorId: string
    orderDetails?: OrderDetailsUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutComplaintsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutComplaintsInput, OrderUncheckedCreateWithoutComplaintsInput>
  }

  export type UserUpsertWithoutComplaintsInput = {
    update: XOR<UserUpdateWithoutComplaintsInput, UserUncheckedUpdateWithoutComplaintsInput>
    create: XOR<UserCreateWithoutComplaintsInput, UserUncheckedCreateWithoutComplaintsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutComplaintsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutComplaintsInput, UserUncheckedUpdateWithoutComplaintsInput>
  }

  export type UserUpdateWithoutComplaintsInput = {
    userid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    password?: StringFieldUpdateOperationsInput | string
    orderDetails?: OrderDetailsUpdateManyWithoutUserNestedInput
    stores?: StoreUpdateManyWithoutVendorNestedInput
    WarehouseDetails?: WarehouseDetailsUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutVendorNestedInput
  }

  export type UserUncheckedUpdateWithoutComplaintsInput = {
    userid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    password?: StringFieldUpdateOperationsInput | string
    orderDetails?: OrderDetailsUncheckedUpdateManyWithoutUserNestedInput
    stores?: StoreUncheckedUpdateManyWithoutVendorNestedInput
    WarehouseDetails?: WarehouseDetailsUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type OrderUpsertWithoutComplaintsInput = {
    update: XOR<OrderUpdateWithoutComplaintsInput, OrderUncheckedUpdateWithoutComplaintsInput>
    create: XOR<OrderCreateWithoutComplaintsInput, OrderUncheckedCreateWithoutComplaintsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutComplaintsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutComplaintsInput, OrderUncheckedUpdateWithoutComplaintsInput>
  }

  export type OrderUpdateWithoutComplaintsInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutOrdersNestedInput
    vendor?: UserUpdateOneRequiredWithoutOrdersNestedInput
    orderDetails?: OrderDetailsUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutComplaintsInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    orderDetails?: OrderDetailsUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderDetailsCreateManyUserInput = {
    orderId: string
  }

  export type StoreCreateManyVendorInput = {
    storeId?: string
    storeName: string
    cityId: string
  }

  export type ComplaintCreateManyUserInput = {
    complaintId?: string
    content: string
    createdAt?: Date | string
    orderId: string
  }

  export type WarehouseDetailsCreateManyUserInput = {
    warehouseId: string
    cityId: string
  }

  export type OrderCreateManyVendorInput = {
    orderId?: string
    quantity: number
    totalPrice: number
    orderDate?: Date | string
    productId: string
  }

  export type OrderDetailsUpdateWithoutUserInput = {
    order?: OrderUpdateOneRequiredWithoutOrderDetailsNestedInput
  }

  export type OrderDetailsUncheckedUpdateWithoutUserInput = {
    orderId?: StringFieldUpdateOperationsInput | string
  }

  export type OrderDetailsUncheckedUpdateManyWithoutUserInput = {
    orderId?: StringFieldUpdateOperationsInput | string
  }

  export type StoreUpdateWithoutVendorInput = {
    storeId?: StringFieldUpdateOperationsInput | string
    storeName?: StringFieldUpdateOperationsInput | string
    city?: CityUpdateOneRequiredWithoutStoresNestedInput
    storeProducts?: StoreAndProductUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutVendorInput = {
    storeId?: StringFieldUpdateOperationsInput | string
    storeName?: StringFieldUpdateOperationsInput | string
    cityId?: StringFieldUpdateOperationsInput | string
    storeProducts?: StoreAndProductUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateManyWithoutVendorInput = {
    storeId?: StringFieldUpdateOperationsInput | string
    storeName?: StringFieldUpdateOperationsInput | string
    cityId?: StringFieldUpdateOperationsInput | string
  }

  export type ComplaintUpdateWithoutUserInput = {
    complaintId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutComplaintsNestedInput
  }

  export type ComplaintUncheckedUpdateWithoutUserInput = {
    complaintId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderId?: StringFieldUpdateOperationsInput | string
  }

  export type ComplaintUncheckedUpdateManyWithoutUserInput = {
    complaintId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderId?: StringFieldUpdateOperationsInput | string
  }

  export type WarehouseDetailsUpdateWithoutUserInput = {
    warehouse?: WareHouseUpdateOneRequiredWithoutWarehouseDetailsNestedInput
    city?: CityUpdateOneRequiredWithoutWarehouseDetailsNestedInput
  }

  export type WarehouseDetailsUncheckedUpdateWithoutUserInput = {
    warehouseId?: StringFieldUpdateOperationsInput | string
    cityId?: StringFieldUpdateOperationsInput | string
  }

  export type WarehouseDetailsUncheckedUpdateManyWithoutUserInput = {
    warehouseId?: StringFieldUpdateOperationsInput | string
    cityId?: StringFieldUpdateOperationsInput | string
  }

  export type OrderUpdateWithoutVendorInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutOrdersNestedInput
    orderDetails?: OrderDetailsUpdateManyWithoutOrderNestedInput
    complaints?: ComplaintUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutVendorInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: StringFieldUpdateOperationsInput | string
    orderDetails?: OrderDetailsUncheckedUpdateManyWithoutOrderNestedInput
    complaints?: ComplaintUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutVendorInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type SalesCreateManyProductInput = {
    id?: string
    productName: string
    quantity: number
    price: number
  }

  export type OrderCreateManyProductInput = {
    orderId?: string
    quantity: number
    totalPrice: number
    orderDate?: Date | string
    vendorId: string
  }

  export type StoreAndProductCreateManyProductInput = {
    storeId: string
    productName?: string | null
  }

  export type SalesUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type SalesUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type SalesUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type OrderUpdateWithoutProductInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: UserUpdateOneRequiredWithoutOrdersNestedInput
    orderDetails?: OrderDetailsUpdateManyWithoutOrderNestedInput
    complaints?: ComplaintUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutProductInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    vendorId?: StringFieldUpdateOperationsInput | string
    orderDetails?: OrderDetailsUncheckedUpdateManyWithoutOrderNestedInput
    complaints?: ComplaintUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutProductInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    vendorId?: StringFieldUpdateOperationsInput | string
  }

  export type StoreAndProductUpdateWithoutProductInput = {
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    store?: StoreUpdateOneRequiredWithoutStoreProductsNestedInput
  }

  export type StoreAndProductUncheckedUpdateWithoutProductInput = {
    storeId?: StringFieldUpdateOperationsInput | string
    productName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StoreAndProductUncheckedUpdateManyWithoutProductInput = {
    storeId?: StringFieldUpdateOperationsInput | string
    productName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WareHouseCreateManyCityInput = {
    warehouseId?: string
    warehouseName: string
    warehouseCapacity: number
  }

  export type WarehouseDetailsCreateManyCityInput = {
    warehouseId: string
    userId: string
  }

  export type StoreCreateManyCityInput = {
    storeId?: string
    storeName: string
    vendorId: string
  }

  export type WareHouseUpdateWithoutCityInput = {
    warehouseId?: StringFieldUpdateOperationsInput | string
    warehouseName?: StringFieldUpdateOperationsInput | string
    warehouseCapacity?: IntFieldUpdateOperationsInput | number
    products?: ProductUpdateManyWithoutWarehouseNestedInput
    warehouseDetails?: WarehouseDetailsUpdateManyWithoutWarehouseNestedInput
  }

  export type WareHouseUncheckedUpdateWithoutCityInput = {
    warehouseId?: StringFieldUpdateOperationsInput | string
    warehouseName?: StringFieldUpdateOperationsInput | string
    warehouseCapacity?: IntFieldUpdateOperationsInput | number
    products?: ProductUncheckedUpdateManyWithoutWarehouseNestedInput
    warehouseDetails?: WarehouseDetailsUncheckedUpdateManyWithoutWarehouseNestedInput
  }

  export type WareHouseUncheckedUpdateManyWithoutCityInput = {
    warehouseId?: StringFieldUpdateOperationsInput | string
    warehouseName?: StringFieldUpdateOperationsInput | string
    warehouseCapacity?: IntFieldUpdateOperationsInput | number
  }

  export type WarehouseDetailsUpdateWithoutCityInput = {
    warehouse?: WareHouseUpdateOneRequiredWithoutWarehouseDetailsNestedInput
    user?: UserUpdateOneRequiredWithoutWarehouseDetailsNestedInput
  }

  export type WarehouseDetailsUncheckedUpdateWithoutCityInput = {
    warehouseId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type WarehouseDetailsUncheckedUpdateManyWithoutCityInput = {
    warehouseId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type StoreUpdateWithoutCityInput = {
    storeId?: StringFieldUpdateOperationsInput | string
    storeName?: StringFieldUpdateOperationsInput | string
    vendor?: UserUpdateOneRequiredWithoutStoresNestedInput
    storeProducts?: StoreAndProductUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutCityInput = {
    storeId?: StringFieldUpdateOperationsInput | string
    storeName?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    storeProducts?: StoreAndProductUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateManyWithoutCityInput = {
    storeId?: StringFieldUpdateOperationsInput | string
    storeName?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateManyWarehouseInput = {
    productId?: string
    productName: string
    productPrice: number
  }

  export type WarehouseDetailsCreateManyWarehouseInput = {
    cityId: string
    userId: string
  }

  export type ProductUpdateWithoutWarehouseInput = {
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productPrice?: FloatFieldUpdateOperationsInput | number
    sales?: SalesUpdateManyWithoutProductNestedInput
    orders?: OrderUpdateManyWithoutProductNestedInput
    storeProducts?: StoreAndProductUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutWarehouseInput = {
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productPrice?: FloatFieldUpdateOperationsInput | number
    sales?: SalesUncheckedUpdateManyWithoutProductNestedInput
    orders?: OrderUncheckedUpdateManyWithoutProductNestedInput
    storeProducts?: StoreAndProductUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutWarehouseInput = {
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productPrice?: FloatFieldUpdateOperationsInput | number
  }

  export type WarehouseDetailsUpdateWithoutWarehouseInput = {
    city?: CityUpdateOneRequiredWithoutWarehouseDetailsNestedInput
    user?: UserUpdateOneRequiredWithoutWarehouseDetailsNestedInput
  }

  export type WarehouseDetailsUncheckedUpdateWithoutWarehouseInput = {
    cityId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type WarehouseDetailsUncheckedUpdateManyWithoutWarehouseInput = {
    cityId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type StoreAndProductCreateManyStoreInput = {
    productId: string
    productName?: string | null
  }

  export type StoreAndProductUpdateWithoutStoreInput = {
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    product?: ProductUpdateOneRequiredWithoutStoreProductsNestedInput
  }

  export type StoreAndProductUncheckedUpdateWithoutStoreInput = {
    productId?: StringFieldUpdateOperationsInput | string
    productName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StoreAndProductUncheckedUpdateManyWithoutStoreInput = {
    productId?: StringFieldUpdateOperationsInput | string
    productName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderDetailsCreateManyOrderInput = {
    userId: string
  }

  export type ComplaintCreateManyOrderInput = {
    complaintId?: string
    content: string
    createdAt?: Date | string
    userId: string
  }

  export type OrderDetailsUpdateWithoutOrderInput = {
    user?: UserUpdateOneRequiredWithoutOrderDetailsNestedInput
  }

  export type OrderDetailsUncheckedUpdateWithoutOrderInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type OrderDetailsUncheckedUpdateManyWithoutOrderInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ComplaintUpdateWithoutOrderInput = {
    complaintId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutComplaintsNestedInput
  }

  export type ComplaintUncheckedUpdateWithoutOrderInput = {
    complaintId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ComplaintUncheckedUpdateManyWithoutOrderInput = {
    complaintId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
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