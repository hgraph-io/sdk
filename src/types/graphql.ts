export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  _entity_id: { input: any; output: any; }
  _int8: { input: any; output: any; }
  airdrop_state: { input: any; output: any; }
  bigint: { input: any; output: any; }
  bytea: { input: any; output: any; }
  entity_scalar: { input: any; output: any; }
  entity_type: { input: any; output: any; }
  errata_type: { input: any; output: any; }
  int8range: { input: any; output: any; }
  jsonb: { input: any; output: any; }
  order_by_consensus_timestamp: { input: any; output: any; }
  smallint: { input: any; output: any; }
  timestamp: { input: any; output: any; }
  token_pause_status: { input: any; output: any; }
  token_supply_type: { input: any; output: any; }
  token_type: { input: any; output: any; }
  transaction_scalar: { input: any; output: any; }
  transfer_type: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "_transfer" */
export type _Transfer = {
  __typename?: '_transfer';
  amount?: Maybe<Scalars['bigint']['output']>;
  consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "transfer_consensus_timestamp_iso8601" */
  consensus_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  errata?: Maybe<Scalars['errata_type']['output']>;
  is_approval?: Maybe<Scalars['Boolean']['output']>;
  /** An object relationship */
  nft?: Maybe<Nft>;
  receiver_account_id?: Maybe<Scalars['bigint']['output']>;
  sender_account_id?: Maybe<Scalars['bigint']['output']>;
  serial_number?: Maybe<Scalars['bigint']['output']>;
  /** An object relationship */
  token?: Maybe<Token>;
  token_id?: Maybe<Scalars['bigint']['output']>;
  /** An object relationship */
  transaction?: Maybe<Transaction>;
  type?: Maybe<Scalars['transfer_type']['output']>;
};

/** aggregated selection of "_transfer" */
export type _Transfer_Aggregate = {
  __typename?: '_transfer_aggregate';
  aggregate?: Maybe<_Transfer_Aggregate_Fields>;
  nodes: Array<_Transfer>;
};

/** aggregate fields of "_transfer" */
export type _Transfer_Aggregate_Fields = {
  __typename?: '_transfer_aggregate_fields';
  avg?: Maybe<_Transfer_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<_Transfer_Max_Fields>;
  min?: Maybe<_Transfer_Min_Fields>;
  stddev?: Maybe<_Transfer_Stddev_Fields>;
  stddev_pop?: Maybe<_Transfer_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<_Transfer_Stddev_Samp_Fields>;
  sum?: Maybe<_Transfer_Sum_Fields>;
  var_pop?: Maybe<_Transfer_Var_Pop_Fields>;
  var_samp?: Maybe<_Transfer_Var_Samp_Fields>;
  variance?: Maybe<_Transfer_Variance_Fields>;
};


/** aggregate fields of "_transfer" */
export type _Transfer_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<_Transfer_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "_transfer" */
export type _Transfer_Aggregate_Order_By = {
  avg?: InputMaybe<_Transfer_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<_Transfer_Max_Order_By>;
  min?: InputMaybe<_Transfer_Min_Order_By>;
  stddev?: InputMaybe<_Transfer_Stddev_Order_By>;
  stddev_pop?: InputMaybe<_Transfer_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<_Transfer_Stddev_Samp_Order_By>;
  sum?: InputMaybe<_Transfer_Sum_Order_By>;
  var_pop?: InputMaybe<_Transfer_Var_Pop_Order_By>;
  var_samp?: InputMaybe<_Transfer_Var_Samp_Order_By>;
  variance?: InputMaybe<_Transfer_Variance_Order_By>;
};

/** aggregate avg on columns */
export type _Transfer_Avg_Fields = {
  __typename?: '_transfer_avg_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  receiver_account_id?: Maybe<Scalars['Float']['output']>;
  sender_account_id?: Maybe<Scalars['Float']['output']>;
  serial_number?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "_transfer" */
export type _Transfer_Avg_Order_By = {
  amount?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  receiver_account_id?: InputMaybe<Order_By>;
  sender_account_id?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "_transfer". All fields are combined with a logical 'AND'. */
export type _Transfer_Bool_Exp = {
  _and?: InputMaybe<Array<_Transfer_Bool_Exp>>;
  _not?: InputMaybe<_Transfer_Bool_Exp>;
  _or?: InputMaybe<Array<_Transfer_Bool_Exp>>;
  amount?: InputMaybe<Bigint_Comparison_Exp>;
  consensus_timestamp?: InputMaybe<Bigint_Comparison_Exp>;
  consensus_timestamp_iso8601?: InputMaybe<String_Comparison_Exp>;
  errata?: InputMaybe<Errata_Type_Comparison_Exp>;
  is_approval?: InputMaybe<Boolean_Comparison_Exp>;
  nft?: InputMaybe<Nft_Bool_Exp>;
  receiver_account_id?: InputMaybe<Bigint_Comparison_Exp>;
  sender_account_id?: InputMaybe<Bigint_Comparison_Exp>;
  serial_number?: InputMaybe<Bigint_Comparison_Exp>;
  token?: InputMaybe<Token_Bool_Exp>;
  token_id?: InputMaybe<Bigint_Comparison_Exp>;
  transaction?: InputMaybe<Transaction_Bool_Exp>;
  type?: InputMaybe<Transfer_Type_Comparison_Exp>;
};

/** aggregate max on columns */
export type _Transfer_Max_Fields = {
  __typename?: '_transfer_max_fields';
  amount?: Maybe<Scalars['bigint']['output']>;
  consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "transfer_consensus_timestamp_iso8601" */
  consensus_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  errata?: Maybe<Scalars['errata_type']['output']>;
  receiver_account_id?: Maybe<Scalars['bigint']['output']>;
  sender_account_id?: Maybe<Scalars['bigint']['output']>;
  serial_number?: Maybe<Scalars['bigint']['output']>;
  token_id?: Maybe<Scalars['bigint']['output']>;
  type?: Maybe<Scalars['transfer_type']['output']>;
};

/** order by max() on columns of table "_transfer" */
export type _Transfer_Max_Order_By = {
  amount?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  errata?: InputMaybe<Order_By>;
  receiver_account_id?: InputMaybe<Order_By>;
  sender_account_id?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type _Transfer_Min_Fields = {
  __typename?: '_transfer_min_fields';
  amount?: Maybe<Scalars['bigint']['output']>;
  consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "transfer_consensus_timestamp_iso8601" */
  consensus_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  errata?: Maybe<Scalars['errata_type']['output']>;
  receiver_account_id?: Maybe<Scalars['bigint']['output']>;
  sender_account_id?: Maybe<Scalars['bigint']['output']>;
  serial_number?: Maybe<Scalars['bigint']['output']>;
  token_id?: Maybe<Scalars['bigint']['output']>;
  type?: Maybe<Scalars['transfer_type']['output']>;
};

/** order by min() on columns of table "_transfer" */
export type _Transfer_Min_Order_By = {
  amount?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  errata?: InputMaybe<Order_By>;
  receiver_account_id?: InputMaybe<Order_By>;
  sender_account_id?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "_transfer". */
export type _Transfer_Order_By = {
  amount?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  consensus_timestamp_iso8601?: InputMaybe<Order_By>;
  errata?: InputMaybe<Order_By>;
  is_approval?: InputMaybe<Order_By>;
  nft?: InputMaybe<Nft_Order_By>;
  receiver_account_id?: InputMaybe<Order_By>;
  sender_account_id?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  token?: InputMaybe<Token_Order_By>;
  token_id?: InputMaybe<Order_By>;
  transaction?: InputMaybe<Transaction_Order_By>;
  type?: InputMaybe<Order_By>;
};

/** select columns of table "_transfer" */
export enum _Transfer_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  ConsensusTimestamp = 'consensus_timestamp',
  /** column name */
  Errata = 'errata',
  /** column name */
  IsApproval = 'is_approval',
  /** column name */
  ReceiverAccountId = 'receiver_account_id',
  /** column name */
  SenderAccountId = 'sender_account_id',
  /** column name */
  SerialNumber = 'serial_number',
  /** column name */
  TokenId = 'token_id',
  /** column name */
  Type = 'type'
}

/** aggregate stddev on columns */
export type _Transfer_Stddev_Fields = {
  __typename?: '_transfer_stddev_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  receiver_account_id?: Maybe<Scalars['Float']['output']>;
  sender_account_id?: Maybe<Scalars['Float']['output']>;
  serial_number?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "_transfer" */
export type _Transfer_Stddev_Order_By = {
  amount?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  receiver_account_id?: InputMaybe<Order_By>;
  sender_account_id?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type _Transfer_Stddev_Pop_Fields = {
  __typename?: '_transfer_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  receiver_account_id?: Maybe<Scalars['Float']['output']>;
  sender_account_id?: Maybe<Scalars['Float']['output']>;
  serial_number?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "_transfer" */
export type _Transfer_Stddev_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  receiver_account_id?: InputMaybe<Order_By>;
  sender_account_id?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type _Transfer_Stddev_Samp_Fields = {
  __typename?: '_transfer_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  receiver_account_id?: Maybe<Scalars['Float']['output']>;
  sender_account_id?: Maybe<Scalars['Float']['output']>;
  serial_number?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "_transfer" */
export type _Transfer_Stddev_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  receiver_account_id?: InputMaybe<Order_By>;
  sender_account_id?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "_transfer" */
export type _Transfer_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: _Transfer_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type _Transfer_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars['bigint']['input']>;
  consensus_timestamp?: InputMaybe<Scalars['bigint']['input']>;
  errata?: InputMaybe<Scalars['errata_type']['input']>;
  is_approval?: InputMaybe<Scalars['Boolean']['input']>;
  receiver_account_id?: InputMaybe<Scalars['bigint']['input']>;
  sender_account_id?: InputMaybe<Scalars['bigint']['input']>;
  serial_number?: InputMaybe<Scalars['bigint']['input']>;
  token_id?: InputMaybe<Scalars['bigint']['input']>;
  type?: InputMaybe<Scalars['transfer_type']['input']>;
};

/** aggregate sum on columns */
export type _Transfer_Sum_Fields = {
  __typename?: '_transfer_sum_fields';
  amount?: Maybe<Scalars['bigint']['output']>;
  consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  receiver_account_id?: Maybe<Scalars['bigint']['output']>;
  sender_account_id?: Maybe<Scalars['bigint']['output']>;
  serial_number?: Maybe<Scalars['bigint']['output']>;
  token_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "_transfer" */
export type _Transfer_Sum_Order_By = {
  amount?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  receiver_account_id?: InputMaybe<Order_By>;
  sender_account_id?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type _Transfer_Var_Pop_Fields = {
  __typename?: '_transfer_var_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  receiver_account_id?: Maybe<Scalars['Float']['output']>;
  sender_account_id?: Maybe<Scalars['Float']['output']>;
  serial_number?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "_transfer" */
export type _Transfer_Var_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  receiver_account_id?: InputMaybe<Order_By>;
  sender_account_id?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type _Transfer_Var_Samp_Fields = {
  __typename?: '_transfer_var_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  receiver_account_id?: Maybe<Scalars['Float']['output']>;
  sender_account_id?: Maybe<Scalars['Float']['output']>;
  serial_number?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "_transfer" */
export type _Transfer_Var_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  receiver_account_id?: InputMaybe<Order_By>;
  sender_account_id?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type _Transfer_Variance_Fields = {
  __typename?: '_transfer_variance_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  receiver_account_id?: Maybe<Scalars['Float']['output']>;
  sender_account_id?: Maybe<Scalars['Float']['output']>;
  serial_number?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "_transfer" */
export type _Transfer_Variance_Order_By = {
  amount?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  receiver_account_id?: InputMaybe<Order_By>;
  sender_account_id?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

export type Account_Transfer_Args = {
  entity_row?: InputMaybe<Scalars['entity_scalar']['input']>;
};

/** columns and relationships of "address_book" */
export type Address_Book = {
  __typename?: 'address_book';
  /** An array relationship */
  address_book_entry: Array<Address_Book_Entry>;
  /** An aggregate relationship */
  address_book_entry_aggregate: Address_Book_Entry_Aggregate;
  end_consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "address_book_end_consensus_timestamp_iso8601" */
  end_consensus_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  file_data: Scalars['bytea']['output'];
  file_id: Scalars['bigint']['output'];
  node_count?: Maybe<Scalars['Int']['output']>;
  start_consensus_timestamp: Scalars['bigint']['output'];
  /** A computed field, executes function "address_book_start_consensus_timestamp_iso8601" */
  start_consensus_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "address_book" */
export type Address_BookAddress_Book_EntryArgs = {
  distinct_on?: InputMaybe<Array<Address_Book_Entry_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Address_Book_Entry_Order_By>>;
  where?: InputMaybe<Address_Book_Entry_Bool_Exp>;
};


/** columns and relationships of "address_book" */
export type Address_BookAddress_Book_Entry_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Address_Book_Entry_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Address_Book_Entry_Order_By>>;
  where?: InputMaybe<Address_Book_Entry_Bool_Exp>;
};

/** aggregated selection of "address_book" */
export type Address_Book_Aggregate = {
  __typename?: 'address_book_aggregate';
  aggregate?: Maybe<Address_Book_Aggregate_Fields>;
  nodes: Array<Address_Book>;
};

/** aggregate fields of "address_book" */
export type Address_Book_Aggregate_Fields = {
  __typename?: 'address_book_aggregate_fields';
  avg?: Maybe<Address_Book_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Address_Book_Max_Fields>;
  min?: Maybe<Address_Book_Min_Fields>;
  stddev?: Maybe<Address_Book_Stddev_Fields>;
  stddev_pop?: Maybe<Address_Book_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Address_Book_Stddev_Samp_Fields>;
  sum?: Maybe<Address_Book_Sum_Fields>;
  var_pop?: Maybe<Address_Book_Var_Pop_Fields>;
  var_samp?: Maybe<Address_Book_Var_Samp_Fields>;
  variance?: Maybe<Address_Book_Variance_Fields>;
};


/** aggregate fields of "address_book" */
export type Address_Book_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Address_Book_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Address_Book_Avg_Fields = {
  __typename?: 'address_book_avg_fields';
  end_consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  file_id?: Maybe<Scalars['Float']['output']>;
  node_count?: Maybe<Scalars['Float']['output']>;
  start_consensus_timestamp?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "address_book". All fields are combined with a logical 'AND'. */
export type Address_Book_Bool_Exp = {
  _and?: InputMaybe<Array<Address_Book_Bool_Exp>>;
  _not?: InputMaybe<Address_Book_Bool_Exp>;
  _or?: InputMaybe<Array<Address_Book_Bool_Exp>>;
  address_book_entry?: InputMaybe<Address_Book_Entry_Bool_Exp>;
  address_book_entry_aggregate?: InputMaybe<Address_Book_Entry_Aggregate_Bool_Exp>;
  end_consensus_timestamp?: InputMaybe<Bigint_Comparison_Exp>;
  end_consensus_timestamp_iso8601?: InputMaybe<String_Comparison_Exp>;
  file_data?: InputMaybe<Bytea_Comparison_Exp>;
  file_id?: InputMaybe<Bigint_Comparison_Exp>;
  node_count?: InputMaybe<Int_Comparison_Exp>;
  start_consensus_timestamp?: InputMaybe<Bigint_Comparison_Exp>;
  start_consensus_timestamp_iso8601?: InputMaybe<String_Comparison_Exp>;
};

/** columns and relationships of "address_book_entry" */
export type Address_Book_Entry = {
  __typename?: 'address_book_entry';
  /** An object relationship */
  address_book?: Maybe<Address_Book>;
  consensus_timestamp: Scalars['bigint']['output'];
  /** A computed field, executes function "address_book_entry_consensus_timestamp_iso8601" */
  consensus_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  memo?: Maybe<Scalars['String']['output']>;
  node_account_id: Scalars['bigint']['output'];
  node_cert_hash?: Maybe<Scalars['bytea']['output']>;
  node_id: Scalars['bigint']['output'];
  public_key?: Maybe<Scalars['String']['output']>;
  stake?: Maybe<Scalars['bigint']['output']>;
};

/** aggregated selection of "address_book_entry" */
export type Address_Book_Entry_Aggregate = {
  __typename?: 'address_book_entry_aggregate';
  aggregate?: Maybe<Address_Book_Entry_Aggregate_Fields>;
  nodes: Array<Address_Book_Entry>;
};

export type Address_Book_Entry_Aggregate_Bool_Exp = {
  count?: InputMaybe<Address_Book_Entry_Aggregate_Bool_Exp_Count>;
};

export type Address_Book_Entry_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Address_Book_Entry_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Address_Book_Entry_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "address_book_entry" */
export type Address_Book_Entry_Aggregate_Fields = {
  __typename?: 'address_book_entry_aggregate_fields';
  avg?: Maybe<Address_Book_Entry_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Address_Book_Entry_Max_Fields>;
  min?: Maybe<Address_Book_Entry_Min_Fields>;
  stddev?: Maybe<Address_Book_Entry_Stddev_Fields>;
  stddev_pop?: Maybe<Address_Book_Entry_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Address_Book_Entry_Stddev_Samp_Fields>;
  sum?: Maybe<Address_Book_Entry_Sum_Fields>;
  var_pop?: Maybe<Address_Book_Entry_Var_Pop_Fields>;
  var_samp?: Maybe<Address_Book_Entry_Var_Samp_Fields>;
  variance?: Maybe<Address_Book_Entry_Variance_Fields>;
};


/** aggregate fields of "address_book_entry" */
export type Address_Book_Entry_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Address_Book_Entry_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "address_book_entry" */
export type Address_Book_Entry_Aggregate_Order_By = {
  avg?: InputMaybe<Address_Book_Entry_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Address_Book_Entry_Max_Order_By>;
  min?: InputMaybe<Address_Book_Entry_Min_Order_By>;
  stddev?: InputMaybe<Address_Book_Entry_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Address_Book_Entry_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Address_Book_Entry_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Address_Book_Entry_Sum_Order_By>;
  var_pop?: InputMaybe<Address_Book_Entry_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Address_Book_Entry_Var_Samp_Order_By>;
  variance?: InputMaybe<Address_Book_Entry_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Address_Book_Entry_Avg_Fields = {
  __typename?: 'address_book_entry_avg_fields';
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  node_account_id?: Maybe<Scalars['Float']['output']>;
  node_id?: Maybe<Scalars['Float']['output']>;
  stake?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "address_book_entry" */
export type Address_Book_Entry_Avg_Order_By = {
  consensus_timestamp?: InputMaybe<Order_By>;
  node_account_id?: InputMaybe<Order_By>;
  node_id?: InputMaybe<Order_By>;
  stake?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "address_book_entry". All fields are combined with a logical 'AND'. */
export type Address_Book_Entry_Bool_Exp = {
  _and?: InputMaybe<Array<Address_Book_Entry_Bool_Exp>>;
  _not?: InputMaybe<Address_Book_Entry_Bool_Exp>;
  _or?: InputMaybe<Array<Address_Book_Entry_Bool_Exp>>;
  address_book?: InputMaybe<Address_Book_Bool_Exp>;
  consensus_timestamp?: InputMaybe<Bigint_Comparison_Exp>;
  consensus_timestamp_iso8601?: InputMaybe<String_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  memo?: InputMaybe<String_Comparison_Exp>;
  node_account_id?: InputMaybe<Bigint_Comparison_Exp>;
  node_cert_hash?: InputMaybe<Bytea_Comparison_Exp>;
  node_id?: InputMaybe<Bigint_Comparison_Exp>;
  public_key?: InputMaybe<String_Comparison_Exp>;
  stake?: InputMaybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Address_Book_Entry_Max_Fields = {
  __typename?: 'address_book_entry_max_fields';
  consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "address_book_entry_consensus_timestamp_iso8601" */
  consensus_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  memo?: Maybe<Scalars['String']['output']>;
  node_account_id?: Maybe<Scalars['bigint']['output']>;
  node_id?: Maybe<Scalars['bigint']['output']>;
  public_key?: Maybe<Scalars['String']['output']>;
  stake?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "address_book_entry" */
export type Address_Book_Entry_Max_Order_By = {
  consensus_timestamp?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  memo?: InputMaybe<Order_By>;
  node_account_id?: InputMaybe<Order_By>;
  node_id?: InputMaybe<Order_By>;
  public_key?: InputMaybe<Order_By>;
  stake?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Address_Book_Entry_Min_Fields = {
  __typename?: 'address_book_entry_min_fields';
  consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "address_book_entry_consensus_timestamp_iso8601" */
  consensus_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  memo?: Maybe<Scalars['String']['output']>;
  node_account_id?: Maybe<Scalars['bigint']['output']>;
  node_id?: Maybe<Scalars['bigint']['output']>;
  public_key?: Maybe<Scalars['String']['output']>;
  stake?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "address_book_entry" */
export type Address_Book_Entry_Min_Order_By = {
  consensus_timestamp?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  memo?: InputMaybe<Order_By>;
  node_account_id?: InputMaybe<Order_By>;
  node_id?: InputMaybe<Order_By>;
  public_key?: InputMaybe<Order_By>;
  stake?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "address_book_entry". */
export type Address_Book_Entry_Order_By = {
  address_book?: InputMaybe<Address_Book_Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  consensus_timestamp_iso8601?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  memo?: InputMaybe<Order_By>;
  node_account_id?: InputMaybe<Order_By>;
  node_cert_hash?: InputMaybe<Order_By>;
  node_id?: InputMaybe<Order_By>;
  public_key?: InputMaybe<Order_By>;
  stake?: InputMaybe<Order_By>;
};

/** select columns of table "address_book_entry" */
export enum Address_Book_Entry_Select_Column {
  /** column name */
  ConsensusTimestamp = 'consensus_timestamp',
  /** column name */
  Description = 'description',
  /** column name */
  Memo = 'memo',
  /** column name */
  NodeAccountId = 'node_account_id',
  /** column name */
  NodeCertHash = 'node_cert_hash',
  /** column name */
  NodeId = 'node_id',
  /** column name */
  PublicKey = 'public_key',
  /** column name */
  Stake = 'stake'
}

/** aggregate stddev on columns */
export type Address_Book_Entry_Stddev_Fields = {
  __typename?: 'address_book_entry_stddev_fields';
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  node_account_id?: Maybe<Scalars['Float']['output']>;
  node_id?: Maybe<Scalars['Float']['output']>;
  stake?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "address_book_entry" */
export type Address_Book_Entry_Stddev_Order_By = {
  consensus_timestamp?: InputMaybe<Order_By>;
  node_account_id?: InputMaybe<Order_By>;
  node_id?: InputMaybe<Order_By>;
  stake?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Address_Book_Entry_Stddev_Pop_Fields = {
  __typename?: 'address_book_entry_stddev_pop_fields';
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  node_account_id?: Maybe<Scalars['Float']['output']>;
  node_id?: Maybe<Scalars['Float']['output']>;
  stake?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "address_book_entry" */
export type Address_Book_Entry_Stddev_Pop_Order_By = {
  consensus_timestamp?: InputMaybe<Order_By>;
  node_account_id?: InputMaybe<Order_By>;
  node_id?: InputMaybe<Order_By>;
  stake?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Address_Book_Entry_Stddev_Samp_Fields = {
  __typename?: 'address_book_entry_stddev_samp_fields';
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  node_account_id?: Maybe<Scalars['Float']['output']>;
  node_id?: Maybe<Scalars['Float']['output']>;
  stake?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "address_book_entry" */
export type Address_Book_Entry_Stddev_Samp_Order_By = {
  consensus_timestamp?: InputMaybe<Order_By>;
  node_account_id?: InputMaybe<Order_By>;
  node_id?: InputMaybe<Order_By>;
  stake?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "address_book_entry" */
export type Address_Book_Entry_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Address_Book_Entry_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Address_Book_Entry_Stream_Cursor_Value_Input = {
  consensus_timestamp?: InputMaybe<Scalars['bigint']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  node_account_id?: InputMaybe<Scalars['bigint']['input']>;
  node_cert_hash?: InputMaybe<Scalars['bytea']['input']>;
  node_id?: InputMaybe<Scalars['bigint']['input']>;
  public_key?: InputMaybe<Scalars['String']['input']>;
  stake?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Address_Book_Entry_Sum_Fields = {
  __typename?: 'address_book_entry_sum_fields';
  consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  node_account_id?: Maybe<Scalars['bigint']['output']>;
  node_id?: Maybe<Scalars['bigint']['output']>;
  stake?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "address_book_entry" */
export type Address_Book_Entry_Sum_Order_By = {
  consensus_timestamp?: InputMaybe<Order_By>;
  node_account_id?: InputMaybe<Order_By>;
  node_id?: InputMaybe<Order_By>;
  stake?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Address_Book_Entry_Var_Pop_Fields = {
  __typename?: 'address_book_entry_var_pop_fields';
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  node_account_id?: Maybe<Scalars['Float']['output']>;
  node_id?: Maybe<Scalars['Float']['output']>;
  stake?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "address_book_entry" */
export type Address_Book_Entry_Var_Pop_Order_By = {
  consensus_timestamp?: InputMaybe<Order_By>;
  node_account_id?: InputMaybe<Order_By>;
  node_id?: InputMaybe<Order_By>;
  stake?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Address_Book_Entry_Var_Samp_Fields = {
  __typename?: 'address_book_entry_var_samp_fields';
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  node_account_id?: Maybe<Scalars['Float']['output']>;
  node_id?: Maybe<Scalars['Float']['output']>;
  stake?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "address_book_entry" */
export type Address_Book_Entry_Var_Samp_Order_By = {
  consensus_timestamp?: InputMaybe<Order_By>;
  node_account_id?: InputMaybe<Order_By>;
  node_id?: InputMaybe<Order_By>;
  stake?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Address_Book_Entry_Variance_Fields = {
  __typename?: 'address_book_entry_variance_fields';
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  node_account_id?: Maybe<Scalars['Float']['output']>;
  node_id?: Maybe<Scalars['Float']['output']>;
  stake?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "address_book_entry" */
export type Address_Book_Entry_Variance_Order_By = {
  consensus_timestamp?: InputMaybe<Order_By>;
  node_account_id?: InputMaybe<Order_By>;
  node_id?: InputMaybe<Order_By>;
  stake?: InputMaybe<Order_By>;
};

/** aggregate max on columns */
export type Address_Book_Max_Fields = {
  __typename?: 'address_book_max_fields';
  end_consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "address_book_end_consensus_timestamp_iso8601" */
  end_consensus_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  file_id?: Maybe<Scalars['bigint']['output']>;
  node_count?: Maybe<Scalars['Int']['output']>;
  start_consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "address_book_start_consensus_timestamp_iso8601" */
  start_consensus_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Address_Book_Min_Fields = {
  __typename?: 'address_book_min_fields';
  end_consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "address_book_end_consensus_timestamp_iso8601" */
  end_consensus_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  file_id?: Maybe<Scalars['bigint']['output']>;
  node_count?: Maybe<Scalars['Int']['output']>;
  start_consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "address_book_start_consensus_timestamp_iso8601" */
  start_consensus_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
};

/** Ordering options when selecting data from "address_book". */
export type Address_Book_Order_By = {
  address_book_entry_aggregate?: InputMaybe<Address_Book_Entry_Aggregate_Order_By>;
  end_consensus_timestamp?: InputMaybe<Order_By>;
  end_consensus_timestamp_iso8601?: InputMaybe<Order_By>;
  file_data?: InputMaybe<Order_By>;
  file_id?: InputMaybe<Order_By>;
  node_count?: InputMaybe<Order_By>;
  start_consensus_timestamp?: InputMaybe<Order_By>;
  start_consensus_timestamp_iso8601?: InputMaybe<Order_By>;
};

/** select columns of table "address_book" */
export enum Address_Book_Select_Column {
  /** column name */
  EndConsensusTimestamp = 'end_consensus_timestamp',
  /** column name */
  FileData = 'file_data',
  /** column name */
  FileId = 'file_id',
  /** column name */
  NodeCount = 'node_count',
  /** column name */
  StartConsensusTimestamp = 'start_consensus_timestamp'
}

/** Network address book node service endpoints */
export type Address_Book_Service_Endpoint = {
  __typename?: 'address_book_service_endpoint';
  consensus_timestamp: Scalars['bigint']['output'];
  /** A computed field, executes function "address_book_service_endpoint_consensus_timestamp_iso8601" */
  consensus_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  domain_name: Scalars['String']['output'];
  ip_address_v4: Scalars['String']['output'];
  node_id: Scalars['bigint']['output'];
  port: Scalars['Int']['output'];
};

/** aggregated selection of "address_book_service_endpoint" */
export type Address_Book_Service_Endpoint_Aggregate = {
  __typename?: 'address_book_service_endpoint_aggregate';
  aggregate?: Maybe<Address_Book_Service_Endpoint_Aggregate_Fields>;
  nodes: Array<Address_Book_Service_Endpoint>;
};

/** aggregate fields of "address_book_service_endpoint" */
export type Address_Book_Service_Endpoint_Aggregate_Fields = {
  __typename?: 'address_book_service_endpoint_aggregate_fields';
  avg?: Maybe<Address_Book_Service_Endpoint_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Address_Book_Service_Endpoint_Max_Fields>;
  min?: Maybe<Address_Book_Service_Endpoint_Min_Fields>;
  stddev?: Maybe<Address_Book_Service_Endpoint_Stddev_Fields>;
  stddev_pop?: Maybe<Address_Book_Service_Endpoint_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Address_Book_Service_Endpoint_Stddev_Samp_Fields>;
  sum?: Maybe<Address_Book_Service_Endpoint_Sum_Fields>;
  var_pop?: Maybe<Address_Book_Service_Endpoint_Var_Pop_Fields>;
  var_samp?: Maybe<Address_Book_Service_Endpoint_Var_Samp_Fields>;
  variance?: Maybe<Address_Book_Service_Endpoint_Variance_Fields>;
};


/** aggregate fields of "address_book_service_endpoint" */
export type Address_Book_Service_Endpoint_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Address_Book_Service_Endpoint_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Address_Book_Service_Endpoint_Avg_Fields = {
  __typename?: 'address_book_service_endpoint_avg_fields';
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  node_id?: Maybe<Scalars['Float']['output']>;
  port?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "address_book_service_endpoint". All fields are combined with a logical 'AND'. */
export type Address_Book_Service_Endpoint_Bool_Exp = {
  _and?: InputMaybe<Array<Address_Book_Service_Endpoint_Bool_Exp>>;
  _not?: InputMaybe<Address_Book_Service_Endpoint_Bool_Exp>;
  _or?: InputMaybe<Array<Address_Book_Service_Endpoint_Bool_Exp>>;
  consensus_timestamp?: InputMaybe<Bigint_Comparison_Exp>;
  consensus_timestamp_iso8601?: InputMaybe<String_Comparison_Exp>;
  domain_name?: InputMaybe<String_Comparison_Exp>;
  ip_address_v4?: InputMaybe<String_Comparison_Exp>;
  node_id?: InputMaybe<Bigint_Comparison_Exp>;
  port?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Address_Book_Service_Endpoint_Max_Fields = {
  __typename?: 'address_book_service_endpoint_max_fields';
  consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "address_book_service_endpoint_consensus_timestamp_iso8601" */
  consensus_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  domain_name?: Maybe<Scalars['String']['output']>;
  ip_address_v4?: Maybe<Scalars['String']['output']>;
  node_id?: Maybe<Scalars['bigint']['output']>;
  port?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Address_Book_Service_Endpoint_Min_Fields = {
  __typename?: 'address_book_service_endpoint_min_fields';
  consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "address_book_service_endpoint_consensus_timestamp_iso8601" */
  consensus_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  domain_name?: Maybe<Scalars['String']['output']>;
  ip_address_v4?: Maybe<Scalars['String']['output']>;
  node_id?: Maybe<Scalars['bigint']['output']>;
  port?: Maybe<Scalars['Int']['output']>;
};

/** Ordering options when selecting data from "address_book_service_endpoint". */
export type Address_Book_Service_Endpoint_Order_By = {
  consensus_timestamp?: InputMaybe<Order_By>;
  consensus_timestamp_iso8601?: InputMaybe<Order_By>;
  domain_name?: InputMaybe<Order_By>;
  ip_address_v4?: InputMaybe<Order_By>;
  node_id?: InputMaybe<Order_By>;
  port?: InputMaybe<Order_By>;
};

/** select columns of table "address_book_service_endpoint" */
export enum Address_Book_Service_Endpoint_Select_Column {
  /** column name */
  ConsensusTimestamp = 'consensus_timestamp',
  /** column name */
  DomainName = 'domain_name',
  /** column name */
  IpAddressV4 = 'ip_address_v4',
  /** column name */
  NodeId = 'node_id',
  /** column name */
  Port = 'port'
}

/** aggregate stddev on columns */
export type Address_Book_Service_Endpoint_Stddev_Fields = {
  __typename?: 'address_book_service_endpoint_stddev_fields';
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  node_id?: Maybe<Scalars['Float']['output']>;
  port?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Address_Book_Service_Endpoint_Stddev_Pop_Fields = {
  __typename?: 'address_book_service_endpoint_stddev_pop_fields';
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  node_id?: Maybe<Scalars['Float']['output']>;
  port?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Address_Book_Service_Endpoint_Stddev_Samp_Fields = {
  __typename?: 'address_book_service_endpoint_stddev_samp_fields';
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  node_id?: Maybe<Scalars['Float']['output']>;
  port?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "address_book_service_endpoint" */
export type Address_Book_Service_Endpoint_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Address_Book_Service_Endpoint_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Address_Book_Service_Endpoint_Stream_Cursor_Value_Input = {
  consensus_timestamp?: InputMaybe<Scalars['bigint']['input']>;
  domain_name?: InputMaybe<Scalars['String']['input']>;
  ip_address_v4?: InputMaybe<Scalars['String']['input']>;
  node_id?: InputMaybe<Scalars['bigint']['input']>;
  port?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Address_Book_Service_Endpoint_Sum_Fields = {
  __typename?: 'address_book_service_endpoint_sum_fields';
  consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  node_id?: Maybe<Scalars['bigint']['output']>;
  port?: Maybe<Scalars['Int']['output']>;
};

/** aggregate var_pop on columns */
export type Address_Book_Service_Endpoint_Var_Pop_Fields = {
  __typename?: 'address_book_service_endpoint_var_pop_fields';
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  node_id?: Maybe<Scalars['Float']['output']>;
  port?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Address_Book_Service_Endpoint_Var_Samp_Fields = {
  __typename?: 'address_book_service_endpoint_var_samp_fields';
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  node_id?: Maybe<Scalars['Float']['output']>;
  port?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Address_Book_Service_Endpoint_Variance_Fields = {
  __typename?: 'address_book_service_endpoint_variance_fields';
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  node_id?: Maybe<Scalars['Float']['output']>;
  port?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev on columns */
export type Address_Book_Stddev_Fields = {
  __typename?: 'address_book_stddev_fields';
  end_consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  file_id?: Maybe<Scalars['Float']['output']>;
  node_count?: Maybe<Scalars['Float']['output']>;
  start_consensus_timestamp?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Address_Book_Stddev_Pop_Fields = {
  __typename?: 'address_book_stddev_pop_fields';
  end_consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  file_id?: Maybe<Scalars['Float']['output']>;
  node_count?: Maybe<Scalars['Float']['output']>;
  start_consensus_timestamp?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Address_Book_Stddev_Samp_Fields = {
  __typename?: 'address_book_stddev_samp_fields';
  end_consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  file_id?: Maybe<Scalars['Float']['output']>;
  node_count?: Maybe<Scalars['Float']['output']>;
  start_consensus_timestamp?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "address_book" */
export type Address_Book_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Address_Book_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Address_Book_Stream_Cursor_Value_Input = {
  end_consensus_timestamp?: InputMaybe<Scalars['bigint']['input']>;
  file_data?: InputMaybe<Scalars['bytea']['input']>;
  file_id?: InputMaybe<Scalars['bigint']['input']>;
  node_count?: InputMaybe<Scalars['Int']['input']>;
  start_consensus_timestamp?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Address_Book_Sum_Fields = {
  __typename?: 'address_book_sum_fields';
  end_consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  file_id?: Maybe<Scalars['bigint']['output']>;
  node_count?: Maybe<Scalars['Int']['output']>;
  start_consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type Address_Book_Var_Pop_Fields = {
  __typename?: 'address_book_var_pop_fields';
  end_consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  file_id?: Maybe<Scalars['Float']['output']>;
  node_count?: Maybe<Scalars['Float']['output']>;
  start_consensus_timestamp?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Address_Book_Var_Samp_Fields = {
  __typename?: 'address_book_var_samp_fields';
  end_consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  file_id?: Maybe<Scalars['Float']['output']>;
  node_count?: Maybe<Scalars['Float']['output']>;
  start_consensus_timestamp?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Address_Book_Variance_Fields = {
  __typename?: 'address_book_variance_fields';
  end_consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  file_id?: Maybe<Scalars['Float']['output']>;
  node_count?: Maybe<Scalars['Float']['output']>;
  start_consensus_timestamp?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "airdrop_state". All fields are combined with logical 'AND'. */
export type Airdrop_State_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['airdrop_state']['input']>;
  _gt?: InputMaybe<Scalars['airdrop_state']['input']>;
  _gte?: InputMaybe<Scalars['airdrop_state']['input']>;
  _in?: InputMaybe<Array<Scalars['airdrop_state']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['airdrop_state']['input']>;
  _lte?: InputMaybe<Scalars['airdrop_state']['input']>;
  _neq?: InputMaybe<Scalars['airdrop_state']['input']>;
  _nin?: InputMaybe<Array<Scalars['airdrop_state']['input']>>;
};

/** Assessed custom fees for HTS transactions */
export type Assessed_Custom_Fee = {
  __typename?: 'assessed_custom_fee';
  amount: Scalars['bigint']['output'];
  collector_account_id: Scalars['bigint']['output'];
  consensus_timestamp: Scalars['bigint']['output'];
  /** A computed field, executes function "assessed_custom_fee_consensus_timestamp_iso8601" */
  consensus_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  effective_payer_account_ids: Array<Scalars['bigint']['output']>;
  payer_account_id: Scalars['bigint']['output'];
  token_id?: Maybe<Scalars['bigint']['output']>;
};

/** aggregated selection of "assessed_custom_fee" */
export type Assessed_Custom_Fee_Aggregate = {
  __typename?: 'assessed_custom_fee_aggregate';
  aggregate?: Maybe<Assessed_Custom_Fee_Aggregate_Fields>;
  nodes: Array<Assessed_Custom_Fee>;
};

export type Assessed_Custom_Fee_Aggregate_Bool_Exp = {
  count?: InputMaybe<Assessed_Custom_Fee_Aggregate_Bool_Exp_Count>;
};

export type Assessed_Custom_Fee_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Assessed_Custom_Fee_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Assessed_Custom_Fee_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "assessed_custom_fee" */
export type Assessed_Custom_Fee_Aggregate_Fields = {
  __typename?: 'assessed_custom_fee_aggregate_fields';
  avg?: Maybe<Assessed_Custom_Fee_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Assessed_Custom_Fee_Max_Fields>;
  min?: Maybe<Assessed_Custom_Fee_Min_Fields>;
  stddev?: Maybe<Assessed_Custom_Fee_Stddev_Fields>;
  stddev_pop?: Maybe<Assessed_Custom_Fee_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Assessed_Custom_Fee_Stddev_Samp_Fields>;
  sum?: Maybe<Assessed_Custom_Fee_Sum_Fields>;
  var_pop?: Maybe<Assessed_Custom_Fee_Var_Pop_Fields>;
  var_samp?: Maybe<Assessed_Custom_Fee_Var_Samp_Fields>;
  variance?: Maybe<Assessed_Custom_Fee_Variance_Fields>;
};


/** aggregate fields of "assessed_custom_fee" */
export type Assessed_Custom_Fee_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Assessed_Custom_Fee_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "assessed_custom_fee" */
export type Assessed_Custom_Fee_Aggregate_Order_By = {
  avg?: InputMaybe<Assessed_Custom_Fee_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Assessed_Custom_Fee_Max_Order_By>;
  min?: InputMaybe<Assessed_Custom_Fee_Min_Order_By>;
  stddev?: InputMaybe<Assessed_Custom_Fee_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Assessed_Custom_Fee_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Assessed_Custom_Fee_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Assessed_Custom_Fee_Sum_Order_By>;
  var_pop?: InputMaybe<Assessed_Custom_Fee_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Assessed_Custom_Fee_Var_Samp_Order_By>;
  variance?: InputMaybe<Assessed_Custom_Fee_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Assessed_Custom_Fee_Avg_Fields = {
  __typename?: 'assessed_custom_fee_avg_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  collector_account_id?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "assessed_custom_fee" */
export type Assessed_Custom_Fee_Avg_Order_By = {
  amount?: InputMaybe<Order_By>;
  collector_account_id?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "assessed_custom_fee". All fields are combined with a logical 'AND'. */
export type Assessed_Custom_Fee_Bool_Exp = {
  _and?: InputMaybe<Array<Assessed_Custom_Fee_Bool_Exp>>;
  _not?: InputMaybe<Assessed_Custom_Fee_Bool_Exp>;
  _or?: InputMaybe<Array<Assessed_Custom_Fee_Bool_Exp>>;
  amount?: InputMaybe<Bigint_Comparison_Exp>;
  collector_account_id?: InputMaybe<Bigint_Comparison_Exp>;
  consensus_timestamp?: InputMaybe<Bigint_Comparison_Exp>;
  consensus_timestamp_iso8601?: InputMaybe<String_Comparison_Exp>;
  effective_payer_account_ids?: InputMaybe<Bigint_Array_Comparison_Exp>;
  payer_account_id?: InputMaybe<Bigint_Comparison_Exp>;
  token_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Assessed_Custom_Fee_Max_Fields = {
  __typename?: 'assessed_custom_fee_max_fields';
  amount?: Maybe<Scalars['bigint']['output']>;
  collector_account_id?: Maybe<Scalars['bigint']['output']>;
  consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "assessed_custom_fee_consensus_timestamp_iso8601" */
  consensus_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  effective_payer_account_ids?: Maybe<Array<Scalars['bigint']['output']>>;
  payer_account_id?: Maybe<Scalars['bigint']['output']>;
  token_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "assessed_custom_fee" */
export type Assessed_Custom_Fee_Max_Order_By = {
  amount?: InputMaybe<Order_By>;
  collector_account_id?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  effective_payer_account_ids?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Assessed_Custom_Fee_Min_Fields = {
  __typename?: 'assessed_custom_fee_min_fields';
  amount?: Maybe<Scalars['bigint']['output']>;
  collector_account_id?: Maybe<Scalars['bigint']['output']>;
  consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "assessed_custom_fee_consensus_timestamp_iso8601" */
  consensus_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  effective_payer_account_ids?: Maybe<Array<Scalars['bigint']['output']>>;
  payer_account_id?: Maybe<Scalars['bigint']['output']>;
  token_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "assessed_custom_fee" */
export type Assessed_Custom_Fee_Min_Order_By = {
  amount?: InputMaybe<Order_By>;
  collector_account_id?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  effective_payer_account_ids?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "assessed_custom_fee". */
export type Assessed_Custom_Fee_Order_By = {
  amount?: InputMaybe<Order_By>;
  collector_account_id?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  consensus_timestamp_iso8601?: InputMaybe<Order_By>;
  effective_payer_account_ids?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** select columns of table "assessed_custom_fee" */
export enum Assessed_Custom_Fee_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CollectorAccountId = 'collector_account_id',
  /** column name */
  ConsensusTimestamp = 'consensus_timestamp',
  /** column name */
  EffectivePayerAccountIds = 'effective_payer_account_ids',
  /** column name */
  PayerAccountId = 'payer_account_id',
  /** column name */
  TokenId = 'token_id'
}

/** aggregate stddev on columns */
export type Assessed_Custom_Fee_Stddev_Fields = {
  __typename?: 'assessed_custom_fee_stddev_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  collector_account_id?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "assessed_custom_fee" */
export type Assessed_Custom_Fee_Stddev_Order_By = {
  amount?: InputMaybe<Order_By>;
  collector_account_id?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Assessed_Custom_Fee_Stddev_Pop_Fields = {
  __typename?: 'assessed_custom_fee_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  collector_account_id?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "assessed_custom_fee" */
export type Assessed_Custom_Fee_Stddev_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
  collector_account_id?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Assessed_Custom_Fee_Stddev_Samp_Fields = {
  __typename?: 'assessed_custom_fee_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  collector_account_id?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "assessed_custom_fee" */
export type Assessed_Custom_Fee_Stddev_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
  collector_account_id?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "assessed_custom_fee" */
export type Assessed_Custom_Fee_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Assessed_Custom_Fee_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Assessed_Custom_Fee_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars['bigint']['input']>;
  collector_account_id?: InputMaybe<Scalars['bigint']['input']>;
  consensus_timestamp?: InputMaybe<Scalars['bigint']['input']>;
  effective_payer_account_ids?: InputMaybe<Array<Scalars['bigint']['input']>>;
  payer_account_id?: InputMaybe<Scalars['bigint']['input']>;
  token_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Assessed_Custom_Fee_Sum_Fields = {
  __typename?: 'assessed_custom_fee_sum_fields';
  amount?: Maybe<Scalars['bigint']['output']>;
  collector_account_id?: Maybe<Scalars['bigint']['output']>;
  consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  payer_account_id?: Maybe<Scalars['bigint']['output']>;
  token_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "assessed_custom_fee" */
export type Assessed_Custom_Fee_Sum_Order_By = {
  amount?: InputMaybe<Order_By>;
  collector_account_id?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Assessed_Custom_Fee_Var_Pop_Fields = {
  __typename?: 'assessed_custom_fee_var_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  collector_account_id?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "assessed_custom_fee" */
export type Assessed_Custom_Fee_Var_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
  collector_account_id?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Assessed_Custom_Fee_Var_Samp_Fields = {
  __typename?: 'assessed_custom_fee_var_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  collector_account_id?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "assessed_custom_fee" */
export type Assessed_Custom_Fee_Var_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
  collector_account_id?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Assessed_Custom_Fee_Variance_Fields = {
  __typename?: 'assessed_custom_fee_variance_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  collector_account_id?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "assessed_custom_fee" */
export type Assessed_Custom_Fee_Variance_Order_By = {
  amount?: InputMaybe<Order_By>;
  collector_account_id?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Array_Comparison_Exp = {
  /** is the array contained in the given array value */
  _contained_in?: InputMaybe<Array<Scalars['bigint']['input']>>;
  /** does the array contain the given value */
  _contains?: InputMaybe<Array<Scalars['bigint']['input']>>;
  _eq?: InputMaybe<Array<Scalars['bigint']['input']>>;
  _gt?: InputMaybe<Array<Scalars['bigint']['input']>>;
  _gte?: InputMaybe<Array<Scalars['bigint']['input']>>;
  _in?: InputMaybe<Array<Array<Scalars['bigint']['input']>>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Array<Scalars['bigint']['input']>>;
  _lte?: InputMaybe<Array<Scalars['bigint']['input']>>;
  _neq?: InputMaybe<Array<Scalars['bigint']['input']>>;
  _nin?: InputMaybe<Array<Array<Scalars['bigint']['input']>>>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']['input']>;
  _gt?: InputMaybe<Scalars['bigint']['input']>;
  _gte?: InputMaybe<Scalars['bigint']['input']>;
  _in?: InputMaybe<Array<Scalars['bigint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bigint']['input']>;
  _lte?: InputMaybe<Scalars['bigint']['input']>;
  _neq?: InputMaybe<Scalars['bigint']['input']>;
  _nin?: InputMaybe<Array<Scalars['bigint']['input']>>;
};

/** Boolean expression to compare columns of type "bytea". All fields are combined with logical 'AND'. */
export type Bytea_Array_Comparison_Exp = {
  /** is the array contained in the given array value */
  _contained_in?: InputMaybe<Array<Scalars['bytea']['input']>>;
  /** does the array contain the given value */
  _contains?: InputMaybe<Array<Scalars['bytea']['input']>>;
  _eq?: InputMaybe<Array<Scalars['bytea']['input']>>;
  _gt?: InputMaybe<Array<Scalars['bytea']['input']>>;
  _gte?: InputMaybe<Array<Scalars['bytea']['input']>>;
  _in?: InputMaybe<Array<Array<Scalars['bytea']['input']>>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Array<Scalars['bytea']['input']>>;
  _lte?: InputMaybe<Array<Scalars['bytea']['input']>>;
  _neq?: InputMaybe<Array<Scalars['bytea']['input']>>;
  _nin?: InputMaybe<Array<Array<Scalars['bytea']['input']>>>;
};

/** Boolean expression to compare columns of type "bytea". All fields are combined with logical 'AND'. */
export type Bytea_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bytea']['input']>;
  _gt?: InputMaybe<Scalars['bytea']['input']>;
  _gte?: InputMaybe<Scalars['bytea']['input']>;
  _in?: InputMaybe<Array<Scalars['bytea']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bytea']['input']>;
  _lte?: InputMaybe<Scalars['bytea']['input']>;
  _neq?: InputMaybe<Scalars['bytea']['input']>;
  _nin?: InputMaybe<Array<Scalars['bytea']['input']>>;
};

export type Child_Transactions_Args = {
  transaction_row?: InputMaybe<Scalars['transaction_scalar']['input']>;
};

/** columns and relationships of "contract" */
export type Contract = {
  __typename?: 'contract';
  file_id?: Maybe<Scalars['bigint']['output']>;
  id: Scalars['bigint']['output'];
  initcode?: Maybe<Scalars['bytea']['output']>;
  runtime_bytecode?: Maybe<Scalars['bytea']['output']>;
};

/** columns and relationships of "contract_action" */
export type Contract_Action = {
  __typename?: 'contract_action';
  call_depth: Scalars['Int']['output'];
  call_operation_type?: Maybe<Scalars['Int']['output']>;
  call_type?: Maybe<Scalars['Int']['output']>;
  caller?: Maybe<Scalars['bigint']['output']>;
  caller_type?: Maybe<Scalars['entity_type']['output']>;
  consensus_timestamp: Scalars['bigint']['output'];
  /** A computed field, executes function "contract_action_consensus_timestamp_iso8601" */
  consensus_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  gas: Scalars['bigint']['output'];
  gas_used: Scalars['bigint']['output'];
  index: Scalars['Int']['output'];
  input?: Maybe<Scalars['bytea']['output']>;
  payer_account_id: Scalars['bigint']['output'];
  recipient_account?: Maybe<Scalars['bigint']['output']>;
  recipient_address?: Maybe<Scalars['bytea']['output']>;
  recipient_contract?: Maybe<Scalars['bigint']['output']>;
  result_data?: Maybe<Scalars['bytea']['output']>;
  result_data_type: Scalars['Int']['output'];
  value: Scalars['bigint']['output'];
};

/** aggregated selection of "contract_action" */
export type Contract_Action_Aggregate = {
  __typename?: 'contract_action_aggregate';
  aggregate?: Maybe<Contract_Action_Aggregate_Fields>;
  nodes: Array<Contract_Action>;
};

/** aggregate fields of "contract_action" */
export type Contract_Action_Aggregate_Fields = {
  __typename?: 'contract_action_aggregate_fields';
  avg?: Maybe<Contract_Action_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Contract_Action_Max_Fields>;
  min?: Maybe<Contract_Action_Min_Fields>;
  stddev?: Maybe<Contract_Action_Stddev_Fields>;
  stddev_pop?: Maybe<Contract_Action_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Contract_Action_Stddev_Samp_Fields>;
  sum?: Maybe<Contract_Action_Sum_Fields>;
  var_pop?: Maybe<Contract_Action_Var_Pop_Fields>;
  var_samp?: Maybe<Contract_Action_Var_Samp_Fields>;
  variance?: Maybe<Contract_Action_Variance_Fields>;
};


/** aggregate fields of "contract_action" */
export type Contract_Action_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Contract_Action_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Contract_Action_Avg_Fields = {
  __typename?: 'contract_action_avg_fields';
  call_depth?: Maybe<Scalars['Float']['output']>;
  call_operation_type?: Maybe<Scalars['Float']['output']>;
  call_type?: Maybe<Scalars['Float']['output']>;
  caller?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  gas?: Maybe<Scalars['Float']['output']>;
  gas_used?: Maybe<Scalars['Float']['output']>;
  index?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  recipient_account?: Maybe<Scalars['Float']['output']>;
  recipient_contract?: Maybe<Scalars['Float']['output']>;
  result_data_type?: Maybe<Scalars['Float']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "contract_action". All fields are combined with a logical 'AND'. */
export type Contract_Action_Bool_Exp = {
  _and?: InputMaybe<Array<Contract_Action_Bool_Exp>>;
  _not?: InputMaybe<Contract_Action_Bool_Exp>;
  _or?: InputMaybe<Array<Contract_Action_Bool_Exp>>;
  call_depth?: InputMaybe<Int_Comparison_Exp>;
  call_operation_type?: InputMaybe<Int_Comparison_Exp>;
  call_type?: InputMaybe<Int_Comparison_Exp>;
  caller?: InputMaybe<Bigint_Comparison_Exp>;
  caller_type?: InputMaybe<Entity_Type_Comparison_Exp>;
  consensus_timestamp?: InputMaybe<Bigint_Comparison_Exp>;
  consensus_timestamp_iso8601?: InputMaybe<String_Comparison_Exp>;
  gas?: InputMaybe<Bigint_Comparison_Exp>;
  gas_used?: InputMaybe<Bigint_Comparison_Exp>;
  index?: InputMaybe<Int_Comparison_Exp>;
  input?: InputMaybe<Bytea_Comparison_Exp>;
  payer_account_id?: InputMaybe<Bigint_Comparison_Exp>;
  recipient_account?: InputMaybe<Bigint_Comparison_Exp>;
  recipient_address?: InputMaybe<Bytea_Comparison_Exp>;
  recipient_contract?: InputMaybe<Bigint_Comparison_Exp>;
  result_data?: InputMaybe<Bytea_Comparison_Exp>;
  result_data_type?: InputMaybe<Int_Comparison_Exp>;
  value?: InputMaybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Contract_Action_Max_Fields = {
  __typename?: 'contract_action_max_fields';
  call_depth?: Maybe<Scalars['Int']['output']>;
  call_operation_type?: Maybe<Scalars['Int']['output']>;
  call_type?: Maybe<Scalars['Int']['output']>;
  caller?: Maybe<Scalars['bigint']['output']>;
  caller_type?: Maybe<Scalars['entity_type']['output']>;
  consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "contract_action_consensus_timestamp_iso8601" */
  consensus_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  gas?: Maybe<Scalars['bigint']['output']>;
  gas_used?: Maybe<Scalars['bigint']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  payer_account_id?: Maybe<Scalars['bigint']['output']>;
  recipient_account?: Maybe<Scalars['bigint']['output']>;
  recipient_contract?: Maybe<Scalars['bigint']['output']>;
  result_data_type?: Maybe<Scalars['Int']['output']>;
  value?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type Contract_Action_Min_Fields = {
  __typename?: 'contract_action_min_fields';
  call_depth?: Maybe<Scalars['Int']['output']>;
  call_operation_type?: Maybe<Scalars['Int']['output']>;
  call_type?: Maybe<Scalars['Int']['output']>;
  caller?: Maybe<Scalars['bigint']['output']>;
  caller_type?: Maybe<Scalars['entity_type']['output']>;
  consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "contract_action_consensus_timestamp_iso8601" */
  consensus_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  gas?: Maybe<Scalars['bigint']['output']>;
  gas_used?: Maybe<Scalars['bigint']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  payer_account_id?: Maybe<Scalars['bigint']['output']>;
  recipient_account?: Maybe<Scalars['bigint']['output']>;
  recipient_contract?: Maybe<Scalars['bigint']['output']>;
  result_data_type?: Maybe<Scalars['Int']['output']>;
  value?: Maybe<Scalars['bigint']['output']>;
};

/** Ordering options when selecting data from "contract_action". */
export type Contract_Action_Order_By = {
  call_depth?: InputMaybe<Order_By>;
  call_operation_type?: InputMaybe<Order_By>;
  call_type?: InputMaybe<Order_By>;
  caller?: InputMaybe<Order_By>;
  caller_type?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  consensus_timestamp_iso8601?: InputMaybe<Order_By>;
  gas?: InputMaybe<Order_By>;
  gas_used?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  input?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  recipient_account?: InputMaybe<Order_By>;
  recipient_address?: InputMaybe<Order_By>;
  recipient_contract?: InputMaybe<Order_By>;
  result_data?: InputMaybe<Order_By>;
  result_data_type?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** select columns of table "contract_action" */
export enum Contract_Action_Select_Column {
  /** column name */
  CallDepth = 'call_depth',
  /** column name */
  CallOperationType = 'call_operation_type',
  /** column name */
  CallType = 'call_type',
  /** column name */
  Caller = 'caller',
  /** column name */
  CallerType = 'caller_type',
  /** column name */
  ConsensusTimestamp = 'consensus_timestamp',
  /** column name */
  Gas = 'gas',
  /** column name */
  GasUsed = 'gas_used',
  /** column name */
  Index = 'index',
  /** column name */
  Input = 'input',
  /** column name */
  PayerAccountId = 'payer_account_id',
  /** column name */
  RecipientAccount = 'recipient_account',
  /** column name */
  RecipientAddress = 'recipient_address',
  /** column name */
  RecipientContract = 'recipient_contract',
  /** column name */
  ResultData = 'result_data',
  /** column name */
  ResultDataType = 'result_data_type',
  /** column name */
  Value = 'value'
}

/** aggregate stddev on columns */
export type Contract_Action_Stddev_Fields = {
  __typename?: 'contract_action_stddev_fields';
  call_depth?: Maybe<Scalars['Float']['output']>;
  call_operation_type?: Maybe<Scalars['Float']['output']>;
  call_type?: Maybe<Scalars['Float']['output']>;
  caller?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  gas?: Maybe<Scalars['Float']['output']>;
  gas_used?: Maybe<Scalars['Float']['output']>;
  index?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  recipient_account?: Maybe<Scalars['Float']['output']>;
  recipient_contract?: Maybe<Scalars['Float']['output']>;
  result_data_type?: Maybe<Scalars['Float']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Contract_Action_Stddev_Pop_Fields = {
  __typename?: 'contract_action_stddev_pop_fields';
  call_depth?: Maybe<Scalars['Float']['output']>;
  call_operation_type?: Maybe<Scalars['Float']['output']>;
  call_type?: Maybe<Scalars['Float']['output']>;
  caller?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  gas?: Maybe<Scalars['Float']['output']>;
  gas_used?: Maybe<Scalars['Float']['output']>;
  index?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  recipient_account?: Maybe<Scalars['Float']['output']>;
  recipient_contract?: Maybe<Scalars['Float']['output']>;
  result_data_type?: Maybe<Scalars['Float']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Contract_Action_Stddev_Samp_Fields = {
  __typename?: 'contract_action_stddev_samp_fields';
  call_depth?: Maybe<Scalars['Float']['output']>;
  call_operation_type?: Maybe<Scalars['Float']['output']>;
  call_type?: Maybe<Scalars['Float']['output']>;
  caller?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  gas?: Maybe<Scalars['Float']['output']>;
  gas_used?: Maybe<Scalars['Float']['output']>;
  index?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  recipient_account?: Maybe<Scalars['Float']['output']>;
  recipient_contract?: Maybe<Scalars['Float']['output']>;
  result_data_type?: Maybe<Scalars['Float']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "contract_action" */
export type Contract_Action_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Contract_Action_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Contract_Action_Stream_Cursor_Value_Input = {
  call_depth?: InputMaybe<Scalars['Int']['input']>;
  call_operation_type?: InputMaybe<Scalars['Int']['input']>;
  call_type?: InputMaybe<Scalars['Int']['input']>;
  caller?: InputMaybe<Scalars['bigint']['input']>;
  caller_type?: InputMaybe<Scalars['entity_type']['input']>;
  consensus_timestamp?: InputMaybe<Scalars['bigint']['input']>;
  gas?: InputMaybe<Scalars['bigint']['input']>;
  gas_used?: InputMaybe<Scalars['bigint']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
  input?: InputMaybe<Scalars['bytea']['input']>;
  payer_account_id?: InputMaybe<Scalars['bigint']['input']>;
  recipient_account?: InputMaybe<Scalars['bigint']['input']>;
  recipient_address?: InputMaybe<Scalars['bytea']['input']>;
  recipient_contract?: InputMaybe<Scalars['bigint']['input']>;
  result_data?: InputMaybe<Scalars['bytea']['input']>;
  result_data_type?: InputMaybe<Scalars['Int']['input']>;
  value?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Contract_Action_Sum_Fields = {
  __typename?: 'contract_action_sum_fields';
  call_depth?: Maybe<Scalars['Int']['output']>;
  call_operation_type?: Maybe<Scalars['Int']['output']>;
  call_type?: Maybe<Scalars['Int']['output']>;
  caller?: Maybe<Scalars['bigint']['output']>;
  consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  gas?: Maybe<Scalars['bigint']['output']>;
  gas_used?: Maybe<Scalars['bigint']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  payer_account_id?: Maybe<Scalars['bigint']['output']>;
  recipient_account?: Maybe<Scalars['bigint']['output']>;
  recipient_contract?: Maybe<Scalars['bigint']['output']>;
  result_data_type?: Maybe<Scalars['Int']['output']>;
  value?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type Contract_Action_Var_Pop_Fields = {
  __typename?: 'contract_action_var_pop_fields';
  call_depth?: Maybe<Scalars['Float']['output']>;
  call_operation_type?: Maybe<Scalars['Float']['output']>;
  call_type?: Maybe<Scalars['Float']['output']>;
  caller?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  gas?: Maybe<Scalars['Float']['output']>;
  gas_used?: Maybe<Scalars['Float']['output']>;
  index?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  recipient_account?: Maybe<Scalars['Float']['output']>;
  recipient_contract?: Maybe<Scalars['Float']['output']>;
  result_data_type?: Maybe<Scalars['Float']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Contract_Action_Var_Samp_Fields = {
  __typename?: 'contract_action_var_samp_fields';
  call_depth?: Maybe<Scalars['Float']['output']>;
  call_operation_type?: Maybe<Scalars['Float']['output']>;
  call_type?: Maybe<Scalars['Float']['output']>;
  caller?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  gas?: Maybe<Scalars['Float']['output']>;
  gas_used?: Maybe<Scalars['Float']['output']>;
  index?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  recipient_account?: Maybe<Scalars['Float']['output']>;
  recipient_contract?: Maybe<Scalars['Float']['output']>;
  result_data_type?: Maybe<Scalars['Float']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Contract_Action_Variance_Fields = {
  __typename?: 'contract_action_variance_fields';
  call_depth?: Maybe<Scalars['Float']['output']>;
  call_operation_type?: Maybe<Scalars['Float']['output']>;
  call_type?: Maybe<Scalars['Float']['output']>;
  caller?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  gas?: Maybe<Scalars['Float']['output']>;
  gas_used?: Maybe<Scalars['Float']['output']>;
  index?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  recipient_account?: Maybe<Scalars['Float']['output']>;
  recipient_contract?: Maybe<Scalars['Float']['output']>;
  result_data_type?: Maybe<Scalars['Float']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** aggregated selection of "contract" */
export type Contract_Aggregate = {
  __typename?: 'contract_aggregate';
  aggregate?: Maybe<Contract_Aggregate_Fields>;
  nodes: Array<Contract>;
};

/** aggregate fields of "contract" */
export type Contract_Aggregate_Fields = {
  __typename?: 'contract_aggregate_fields';
  avg?: Maybe<Contract_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Contract_Max_Fields>;
  min?: Maybe<Contract_Min_Fields>;
  stddev?: Maybe<Contract_Stddev_Fields>;
  stddev_pop?: Maybe<Contract_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Contract_Stddev_Samp_Fields>;
  sum?: Maybe<Contract_Sum_Fields>;
  var_pop?: Maybe<Contract_Var_Pop_Fields>;
  var_samp?: Maybe<Contract_Var_Samp_Fields>;
  variance?: Maybe<Contract_Variance_Fields>;
};


/** aggregate fields of "contract" */
export type Contract_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Contract_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Contract_Avg_Fields = {
  __typename?: 'contract_avg_fields';
  file_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "contract". All fields are combined with a logical 'AND'. */
export type Contract_Bool_Exp = {
  _and?: InputMaybe<Array<Contract_Bool_Exp>>;
  _not?: InputMaybe<Contract_Bool_Exp>;
  _or?: InputMaybe<Array<Contract_Bool_Exp>>;
  file_id?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  initcode?: InputMaybe<Bytea_Comparison_Exp>;
  runtime_bytecode?: InputMaybe<Bytea_Comparison_Exp>;
};

/** columns and relationships of "contract_log" */
export type Contract_Log = {
  __typename?: 'contract_log';
  bloom: Scalars['bytea']['output'];
  consensus_timestamp: Scalars['bigint']['output'];
  /** A computed field, executes function "contract_log_consensus_timestamp_iso8601" */
  consensus_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  contract_id: Scalars['bigint']['output'];
  data: Scalars['bytea']['output'];
  index: Scalars['Int']['output'];
  payer_account_id: Scalars['bigint']['output'];
  root_contract_id?: Maybe<Scalars['bigint']['output']>;
  topic0?: Maybe<Scalars['bytea']['output']>;
  topic1?: Maybe<Scalars['bytea']['output']>;
  topic2?: Maybe<Scalars['bytea']['output']>;
  topic3?: Maybe<Scalars['bytea']['output']>;
  transaction_hash?: Maybe<Scalars['bytea']['output']>;
  transaction_index?: Maybe<Scalars['Int']['output']>;
};

/** aggregated selection of "contract_log" */
export type Contract_Log_Aggregate = {
  __typename?: 'contract_log_aggregate';
  aggregate?: Maybe<Contract_Log_Aggregate_Fields>;
  nodes: Array<Contract_Log>;
};

/** aggregate fields of "contract_log" */
export type Contract_Log_Aggregate_Fields = {
  __typename?: 'contract_log_aggregate_fields';
  avg?: Maybe<Contract_Log_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Contract_Log_Max_Fields>;
  min?: Maybe<Contract_Log_Min_Fields>;
  stddev?: Maybe<Contract_Log_Stddev_Fields>;
  stddev_pop?: Maybe<Contract_Log_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Contract_Log_Stddev_Samp_Fields>;
  sum?: Maybe<Contract_Log_Sum_Fields>;
  var_pop?: Maybe<Contract_Log_Var_Pop_Fields>;
  var_samp?: Maybe<Contract_Log_Var_Samp_Fields>;
  variance?: Maybe<Contract_Log_Variance_Fields>;
};


/** aggregate fields of "contract_log" */
export type Contract_Log_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Contract_Log_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Contract_Log_Avg_Fields = {
  __typename?: 'contract_log_avg_fields';
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  contract_id?: Maybe<Scalars['Float']['output']>;
  index?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  root_contract_id?: Maybe<Scalars['Float']['output']>;
  transaction_index?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "contract_log". All fields are combined with a logical 'AND'. */
export type Contract_Log_Bool_Exp = {
  _and?: InputMaybe<Array<Contract_Log_Bool_Exp>>;
  _not?: InputMaybe<Contract_Log_Bool_Exp>;
  _or?: InputMaybe<Array<Contract_Log_Bool_Exp>>;
  bloom?: InputMaybe<Bytea_Comparison_Exp>;
  consensus_timestamp?: InputMaybe<Bigint_Comparison_Exp>;
  consensus_timestamp_iso8601?: InputMaybe<String_Comparison_Exp>;
  contract_id?: InputMaybe<Bigint_Comparison_Exp>;
  data?: InputMaybe<Bytea_Comparison_Exp>;
  index?: InputMaybe<Int_Comparison_Exp>;
  payer_account_id?: InputMaybe<Bigint_Comparison_Exp>;
  root_contract_id?: InputMaybe<Bigint_Comparison_Exp>;
  topic0?: InputMaybe<Bytea_Comparison_Exp>;
  topic1?: InputMaybe<Bytea_Comparison_Exp>;
  topic2?: InputMaybe<Bytea_Comparison_Exp>;
  topic3?: InputMaybe<Bytea_Comparison_Exp>;
  transaction_hash?: InputMaybe<Bytea_Comparison_Exp>;
  transaction_index?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Contract_Log_Max_Fields = {
  __typename?: 'contract_log_max_fields';
  consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "contract_log_consensus_timestamp_iso8601" */
  consensus_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  contract_id?: Maybe<Scalars['bigint']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  payer_account_id?: Maybe<Scalars['bigint']['output']>;
  root_contract_id?: Maybe<Scalars['bigint']['output']>;
  transaction_index?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Contract_Log_Min_Fields = {
  __typename?: 'contract_log_min_fields';
  consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "contract_log_consensus_timestamp_iso8601" */
  consensus_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  contract_id?: Maybe<Scalars['bigint']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  payer_account_id?: Maybe<Scalars['bigint']['output']>;
  root_contract_id?: Maybe<Scalars['bigint']['output']>;
  transaction_index?: Maybe<Scalars['Int']['output']>;
};

/** Ordering options when selecting data from "contract_log". */
export type Contract_Log_Order_By = {
  bloom?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  consensus_timestamp_iso8601?: InputMaybe<Order_By>;
  contract_id?: InputMaybe<Order_By>;
  data?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  root_contract_id?: InputMaybe<Order_By>;
  topic0?: InputMaybe<Order_By>;
  topic1?: InputMaybe<Order_By>;
  topic2?: InputMaybe<Order_By>;
  topic3?: InputMaybe<Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
  transaction_index?: InputMaybe<Order_By>;
};

/** select columns of table "contract_log" */
export enum Contract_Log_Select_Column {
  /** column name */
  Bloom = 'bloom',
  /** column name */
  ConsensusTimestamp = 'consensus_timestamp',
  /** column name */
  ContractId = 'contract_id',
  /** column name */
  Data = 'data',
  /** column name */
  Index = 'index',
  /** column name */
  PayerAccountId = 'payer_account_id',
  /** column name */
  RootContractId = 'root_contract_id',
  /** column name */
  Topic0 = 'topic0',
  /** column name */
  Topic1 = 'topic1',
  /** column name */
  Topic2 = 'topic2',
  /** column name */
  Topic3 = 'topic3',
  /** column name */
  TransactionHash = 'transaction_hash',
  /** column name */
  TransactionIndex = 'transaction_index'
}

/** aggregate stddev on columns */
export type Contract_Log_Stddev_Fields = {
  __typename?: 'contract_log_stddev_fields';
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  contract_id?: Maybe<Scalars['Float']['output']>;
  index?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  root_contract_id?: Maybe<Scalars['Float']['output']>;
  transaction_index?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Contract_Log_Stddev_Pop_Fields = {
  __typename?: 'contract_log_stddev_pop_fields';
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  contract_id?: Maybe<Scalars['Float']['output']>;
  index?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  root_contract_id?: Maybe<Scalars['Float']['output']>;
  transaction_index?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Contract_Log_Stddev_Samp_Fields = {
  __typename?: 'contract_log_stddev_samp_fields';
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  contract_id?: Maybe<Scalars['Float']['output']>;
  index?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  root_contract_id?: Maybe<Scalars['Float']['output']>;
  transaction_index?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "contract_log" */
export type Contract_Log_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Contract_Log_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Contract_Log_Stream_Cursor_Value_Input = {
  bloom?: InputMaybe<Scalars['bytea']['input']>;
  consensus_timestamp?: InputMaybe<Scalars['bigint']['input']>;
  contract_id?: InputMaybe<Scalars['bigint']['input']>;
  data?: InputMaybe<Scalars['bytea']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
  payer_account_id?: InputMaybe<Scalars['bigint']['input']>;
  root_contract_id?: InputMaybe<Scalars['bigint']['input']>;
  topic0?: InputMaybe<Scalars['bytea']['input']>;
  topic1?: InputMaybe<Scalars['bytea']['input']>;
  topic2?: InputMaybe<Scalars['bytea']['input']>;
  topic3?: InputMaybe<Scalars['bytea']['input']>;
  transaction_hash?: InputMaybe<Scalars['bytea']['input']>;
  transaction_index?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Contract_Log_Sum_Fields = {
  __typename?: 'contract_log_sum_fields';
  consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  contract_id?: Maybe<Scalars['bigint']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  payer_account_id?: Maybe<Scalars['bigint']['output']>;
  root_contract_id?: Maybe<Scalars['bigint']['output']>;
  transaction_index?: Maybe<Scalars['Int']['output']>;
};

/** aggregate var_pop on columns */
export type Contract_Log_Var_Pop_Fields = {
  __typename?: 'contract_log_var_pop_fields';
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  contract_id?: Maybe<Scalars['Float']['output']>;
  index?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  root_contract_id?: Maybe<Scalars['Float']['output']>;
  transaction_index?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Contract_Log_Var_Samp_Fields = {
  __typename?: 'contract_log_var_samp_fields';
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  contract_id?: Maybe<Scalars['Float']['output']>;
  index?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  root_contract_id?: Maybe<Scalars['Float']['output']>;
  transaction_index?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Contract_Log_Variance_Fields = {
  __typename?: 'contract_log_variance_fields';
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  contract_id?: Maybe<Scalars['Float']['output']>;
  index?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  root_contract_id?: Maybe<Scalars['Float']['output']>;
  transaction_index?: Maybe<Scalars['Float']['output']>;
};

/** aggregate max on columns */
export type Contract_Max_Fields = {
  __typename?: 'contract_max_fields';
  file_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type Contract_Min_Fields = {
  __typename?: 'contract_min_fields';
  file_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
};

/** Ordering options when selecting data from "contract". */
export type Contract_Order_By = {
  file_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  initcode?: InputMaybe<Order_By>;
  runtime_bytecode?: InputMaybe<Order_By>;
};

/** columns and relationships of "contract_result" */
export type Contract_Result = {
  __typename?: 'contract_result';
  amount?: Maybe<Scalars['bigint']['output']>;
  bloom?: Maybe<Scalars['bytea']['output']>;
  call_result?: Maybe<Scalars['bytea']['output']>;
  consensus_timestamp: Scalars['bigint']['output'];
  /** A computed field, executes function "contract_result_consensus_timestamp_iso8601" */
  consensus_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  contract_id: Scalars['bigint']['output'];
  created_contract_ids?: Maybe<Array<Scalars['bigint']['output']>>;
  error_message?: Maybe<Scalars['String']['output']>;
  failed_initcode?: Maybe<Scalars['bytea']['output']>;
  function_parameters: Scalars['bytea']['output'];
  function_result?: Maybe<Scalars['bytea']['output']>;
  gas_consumed?: Maybe<Scalars['bigint']['output']>;
  gas_limit: Scalars['bigint']['output'];
  gas_used?: Maybe<Scalars['bigint']['output']>;
  payer_account_id: Scalars['bigint']['output'];
  sender_id?: Maybe<Scalars['bigint']['output']>;
  transaction_hash?: Maybe<Scalars['bytea']['output']>;
  transaction_index?: Maybe<Scalars['Int']['output']>;
  transaction_nonce: Scalars['Int']['output'];
  transaction_result: Scalars['smallint']['output'];
};

/** aggregated selection of "contract_result" */
export type Contract_Result_Aggregate = {
  __typename?: 'contract_result_aggregate';
  aggregate?: Maybe<Contract_Result_Aggregate_Fields>;
  nodes: Array<Contract_Result>;
};

/** aggregate fields of "contract_result" */
export type Contract_Result_Aggregate_Fields = {
  __typename?: 'contract_result_aggregate_fields';
  avg?: Maybe<Contract_Result_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Contract_Result_Max_Fields>;
  min?: Maybe<Contract_Result_Min_Fields>;
  stddev?: Maybe<Contract_Result_Stddev_Fields>;
  stddev_pop?: Maybe<Contract_Result_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Contract_Result_Stddev_Samp_Fields>;
  sum?: Maybe<Contract_Result_Sum_Fields>;
  var_pop?: Maybe<Contract_Result_Var_Pop_Fields>;
  var_samp?: Maybe<Contract_Result_Var_Samp_Fields>;
  variance?: Maybe<Contract_Result_Variance_Fields>;
};


/** aggregate fields of "contract_result" */
export type Contract_Result_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Contract_Result_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Contract_Result_Avg_Fields = {
  __typename?: 'contract_result_avg_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  contract_id?: Maybe<Scalars['Float']['output']>;
  gas_consumed?: Maybe<Scalars['Float']['output']>;
  gas_limit?: Maybe<Scalars['Float']['output']>;
  gas_used?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  sender_id?: Maybe<Scalars['Float']['output']>;
  transaction_index?: Maybe<Scalars['Float']['output']>;
  transaction_nonce?: Maybe<Scalars['Float']['output']>;
  transaction_result?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "contract_result". All fields are combined with a logical 'AND'. */
export type Contract_Result_Bool_Exp = {
  _and?: InputMaybe<Array<Contract_Result_Bool_Exp>>;
  _not?: InputMaybe<Contract_Result_Bool_Exp>;
  _or?: InputMaybe<Array<Contract_Result_Bool_Exp>>;
  amount?: InputMaybe<Bigint_Comparison_Exp>;
  bloom?: InputMaybe<Bytea_Comparison_Exp>;
  call_result?: InputMaybe<Bytea_Comparison_Exp>;
  consensus_timestamp?: InputMaybe<Bigint_Comparison_Exp>;
  consensus_timestamp_iso8601?: InputMaybe<String_Comparison_Exp>;
  contract_id?: InputMaybe<Bigint_Comparison_Exp>;
  created_contract_ids?: InputMaybe<Bigint_Array_Comparison_Exp>;
  error_message?: InputMaybe<String_Comparison_Exp>;
  failed_initcode?: InputMaybe<Bytea_Comparison_Exp>;
  function_parameters?: InputMaybe<Bytea_Comparison_Exp>;
  function_result?: InputMaybe<Bytea_Comparison_Exp>;
  gas_consumed?: InputMaybe<Bigint_Comparison_Exp>;
  gas_limit?: InputMaybe<Bigint_Comparison_Exp>;
  gas_used?: InputMaybe<Bigint_Comparison_Exp>;
  payer_account_id?: InputMaybe<Bigint_Comparison_Exp>;
  sender_id?: InputMaybe<Bigint_Comparison_Exp>;
  transaction_hash?: InputMaybe<Bytea_Comparison_Exp>;
  transaction_index?: InputMaybe<Int_Comparison_Exp>;
  transaction_nonce?: InputMaybe<Int_Comparison_Exp>;
  transaction_result?: InputMaybe<Smallint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Contract_Result_Max_Fields = {
  __typename?: 'contract_result_max_fields';
  amount?: Maybe<Scalars['bigint']['output']>;
  consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "contract_result_consensus_timestamp_iso8601" */
  consensus_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  contract_id?: Maybe<Scalars['bigint']['output']>;
  created_contract_ids?: Maybe<Array<Scalars['bigint']['output']>>;
  error_message?: Maybe<Scalars['String']['output']>;
  gas_consumed?: Maybe<Scalars['bigint']['output']>;
  gas_limit?: Maybe<Scalars['bigint']['output']>;
  gas_used?: Maybe<Scalars['bigint']['output']>;
  payer_account_id?: Maybe<Scalars['bigint']['output']>;
  sender_id?: Maybe<Scalars['bigint']['output']>;
  transaction_index?: Maybe<Scalars['Int']['output']>;
  transaction_nonce?: Maybe<Scalars['Int']['output']>;
  transaction_result?: Maybe<Scalars['smallint']['output']>;
};

/** aggregate min on columns */
export type Contract_Result_Min_Fields = {
  __typename?: 'contract_result_min_fields';
  amount?: Maybe<Scalars['bigint']['output']>;
  consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "contract_result_consensus_timestamp_iso8601" */
  consensus_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  contract_id?: Maybe<Scalars['bigint']['output']>;
  created_contract_ids?: Maybe<Array<Scalars['bigint']['output']>>;
  error_message?: Maybe<Scalars['String']['output']>;
  gas_consumed?: Maybe<Scalars['bigint']['output']>;
  gas_limit?: Maybe<Scalars['bigint']['output']>;
  gas_used?: Maybe<Scalars['bigint']['output']>;
  payer_account_id?: Maybe<Scalars['bigint']['output']>;
  sender_id?: Maybe<Scalars['bigint']['output']>;
  transaction_index?: Maybe<Scalars['Int']['output']>;
  transaction_nonce?: Maybe<Scalars['Int']['output']>;
  transaction_result?: Maybe<Scalars['smallint']['output']>;
};

/** Ordering options when selecting data from "contract_result". */
export type Contract_Result_Order_By = {
  amount?: InputMaybe<Order_By>;
  bloom?: InputMaybe<Order_By>;
  call_result?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  consensus_timestamp_iso8601?: InputMaybe<Order_By>;
  contract_id?: InputMaybe<Order_By>;
  created_contract_ids?: InputMaybe<Order_By>;
  error_message?: InputMaybe<Order_By>;
  failed_initcode?: InputMaybe<Order_By>;
  function_parameters?: InputMaybe<Order_By>;
  function_result?: InputMaybe<Order_By>;
  gas_consumed?: InputMaybe<Order_By>;
  gas_limit?: InputMaybe<Order_By>;
  gas_used?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  sender_id?: InputMaybe<Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
  transaction_index?: InputMaybe<Order_By>;
  transaction_nonce?: InputMaybe<Order_By>;
  transaction_result?: InputMaybe<Order_By>;
};

/** select columns of table "contract_result" */
export enum Contract_Result_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Bloom = 'bloom',
  /** column name */
  CallResult = 'call_result',
  /** column name */
  ConsensusTimestamp = 'consensus_timestamp',
  /** column name */
  ContractId = 'contract_id',
  /** column name */
  CreatedContractIds = 'created_contract_ids',
  /** column name */
  ErrorMessage = 'error_message',
  /** column name */
  FailedInitcode = 'failed_initcode',
  /** column name */
  FunctionParameters = 'function_parameters',
  /** column name */
  FunctionResult = 'function_result',
  /** column name */
  GasConsumed = 'gas_consumed',
  /** column name */
  GasLimit = 'gas_limit',
  /** column name */
  GasUsed = 'gas_used',
  /** column name */
  PayerAccountId = 'payer_account_id',
  /** column name */
  SenderId = 'sender_id',
  /** column name */
  TransactionHash = 'transaction_hash',
  /** column name */
  TransactionIndex = 'transaction_index',
  /** column name */
  TransactionNonce = 'transaction_nonce',
  /** column name */
  TransactionResult = 'transaction_result'
}

/** aggregate stddev on columns */
export type Contract_Result_Stddev_Fields = {
  __typename?: 'contract_result_stddev_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  contract_id?: Maybe<Scalars['Float']['output']>;
  gas_consumed?: Maybe<Scalars['Float']['output']>;
  gas_limit?: Maybe<Scalars['Float']['output']>;
  gas_used?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  sender_id?: Maybe<Scalars['Float']['output']>;
  transaction_index?: Maybe<Scalars['Float']['output']>;
  transaction_nonce?: Maybe<Scalars['Float']['output']>;
  transaction_result?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Contract_Result_Stddev_Pop_Fields = {
  __typename?: 'contract_result_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  contract_id?: Maybe<Scalars['Float']['output']>;
  gas_consumed?: Maybe<Scalars['Float']['output']>;
  gas_limit?: Maybe<Scalars['Float']['output']>;
  gas_used?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  sender_id?: Maybe<Scalars['Float']['output']>;
  transaction_index?: Maybe<Scalars['Float']['output']>;
  transaction_nonce?: Maybe<Scalars['Float']['output']>;
  transaction_result?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Contract_Result_Stddev_Samp_Fields = {
  __typename?: 'contract_result_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  contract_id?: Maybe<Scalars['Float']['output']>;
  gas_consumed?: Maybe<Scalars['Float']['output']>;
  gas_limit?: Maybe<Scalars['Float']['output']>;
  gas_used?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  sender_id?: Maybe<Scalars['Float']['output']>;
  transaction_index?: Maybe<Scalars['Float']['output']>;
  transaction_nonce?: Maybe<Scalars['Float']['output']>;
  transaction_result?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "contract_result" */
export type Contract_Result_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Contract_Result_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Contract_Result_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars['bigint']['input']>;
  bloom?: InputMaybe<Scalars['bytea']['input']>;
  call_result?: InputMaybe<Scalars['bytea']['input']>;
  consensus_timestamp?: InputMaybe<Scalars['bigint']['input']>;
  contract_id?: InputMaybe<Scalars['bigint']['input']>;
  created_contract_ids?: InputMaybe<Array<Scalars['bigint']['input']>>;
  error_message?: InputMaybe<Scalars['String']['input']>;
  failed_initcode?: InputMaybe<Scalars['bytea']['input']>;
  function_parameters?: InputMaybe<Scalars['bytea']['input']>;
  function_result?: InputMaybe<Scalars['bytea']['input']>;
  gas_consumed?: InputMaybe<Scalars['bigint']['input']>;
  gas_limit?: InputMaybe<Scalars['bigint']['input']>;
  gas_used?: InputMaybe<Scalars['bigint']['input']>;
  payer_account_id?: InputMaybe<Scalars['bigint']['input']>;
  sender_id?: InputMaybe<Scalars['bigint']['input']>;
  transaction_hash?: InputMaybe<Scalars['bytea']['input']>;
  transaction_index?: InputMaybe<Scalars['Int']['input']>;
  transaction_nonce?: InputMaybe<Scalars['Int']['input']>;
  transaction_result?: InputMaybe<Scalars['smallint']['input']>;
};

/** aggregate sum on columns */
export type Contract_Result_Sum_Fields = {
  __typename?: 'contract_result_sum_fields';
  amount?: Maybe<Scalars['bigint']['output']>;
  consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  contract_id?: Maybe<Scalars['bigint']['output']>;
  gas_consumed?: Maybe<Scalars['bigint']['output']>;
  gas_limit?: Maybe<Scalars['bigint']['output']>;
  gas_used?: Maybe<Scalars['bigint']['output']>;
  payer_account_id?: Maybe<Scalars['bigint']['output']>;
  sender_id?: Maybe<Scalars['bigint']['output']>;
  transaction_index?: Maybe<Scalars['Int']['output']>;
  transaction_nonce?: Maybe<Scalars['Int']['output']>;
  transaction_result?: Maybe<Scalars['smallint']['output']>;
};

/** aggregate var_pop on columns */
export type Contract_Result_Var_Pop_Fields = {
  __typename?: 'contract_result_var_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  contract_id?: Maybe<Scalars['Float']['output']>;
  gas_consumed?: Maybe<Scalars['Float']['output']>;
  gas_limit?: Maybe<Scalars['Float']['output']>;
  gas_used?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  sender_id?: Maybe<Scalars['Float']['output']>;
  transaction_index?: Maybe<Scalars['Float']['output']>;
  transaction_nonce?: Maybe<Scalars['Float']['output']>;
  transaction_result?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Contract_Result_Var_Samp_Fields = {
  __typename?: 'contract_result_var_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  contract_id?: Maybe<Scalars['Float']['output']>;
  gas_consumed?: Maybe<Scalars['Float']['output']>;
  gas_limit?: Maybe<Scalars['Float']['output']>;
  gas_used?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  sender_id?: Maybe<Scalars['Float']['output']>;
  transaction_index?: Maybe<Scalars['Float']['output']>;
  transaction_nonce?: Maybe<Scalars['Float']['output']>;
  transaction_result?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Contract_Result_Variance_Fields = {
  __typename?: 'contract_result_variance_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  contract_id?: Maybe<Scalars['Float']['output']>;
  gas_consumed?: Maybe<Scalars['Float']['output']>;
  gas_limit?: Maybe<Scalars['Float']['output']>;
  gas_used?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  sender_id?: Maybe<Scalars['Float']['output']>;
  transaction_index?: Maybe<Scalars['Float']['output']>;
  transaction_nonce?: Maybe<Scalars['Float']['output']>;
  transaction_result?: Maybe<Scalars['Float']['output']>;
};

/** select columns of table "contract" */
export enum Contract_Select_Column {
  /** column name */
  FileId = 'file_id',
  /** column name */
  Id = 'id',
  /** column name */
  Initcode = 'initcode',
  /** column name */
  RuntimeBytecode = 'runtime_bytecode'
}

/** columns and relationships of "contract_state" */
export type Contract_State = {
  __typename?: 'contract_state';
  contract_id: Scalars['bigint']['output'];
  created_timestamp: Scalars['bigint']['output'];
  /** A computed field, executes function "contract_state_created_timestamp_iso8601" */
  created_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  modified_timestamp: Scalars['bigint']['output'];
  /** A computed field, executes function "contract_state_modified_timestamp_iso8601" */
  modified_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  slot: Scalars['bytea']['output'];
  value?: Maybe<Scalars['bytea']['output']>;
};

/** aggregated selection of "contract_state" */
export type Contract_State_Aggregate = {
  __typename?: 'contract_state_aggregate';
  aggregate?: Maybe<Contract_State_Aggregate_Fields>;
  nodes: Array<Contract_State>;
};

/** aggregate fields of "contract_state" */
export type Contract_State_Aggregate_Fields = {
  __typename?: 'contract_state_aggregate_fields';
  avg?: Maybe<Contract_State_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Contract_State_Max_Fields>;
  min?: Maybe<Contract_State_Min_Fields>;
  stddev?: Maybe<Contract_State_Stddev_Fields>;
  stddev_pop?: Maybe<Contract_State_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Contract_State_Stddev_Samp_Fields>;
  sum?: Maybe<Contract_State_Sum_Fields>;
  var_pop?: Maybe<Contract_State_Var_Pop_Fields>;
  var_samp?: Maybe<Contract_State_Var_Samp_Fields>;
  variance?: Maybe<Contract_State_Variance_Fields>;
};


/** aggregate fields of "contract_state" */
export type Contract_State_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Contract_State_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Contract_State_Avg_Fields = {
  __typename?: 'contract_state_avg_fields';
  contract_id?: Maybe<Scalars['Float']['output']>;
  created_timestamp?: Maybe<Scalars['Float']['output']>;
  modified_timestamp?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "contract_state". All fields are combined with a logical 'AND'. */
export type Contract_State_Bool_Exp = {
  _and?: InputMaybe<Array<Contract_State_Bool_Exp>>;
  _not?: InputMaybe<Contract_State_Bool_Exp>;
  _or?: InputMaybe<Array<Contract_State_Bool_Exp>>;
  contract_id?: InputMaybe<Bigint_Comparison_Exp>;
  created_timestamp?: InputMaybe<Bigint_Comparison_Exp>;
  created_timestamp_iso8601?: InputMaybe<String_Comparison_Exp>;
  modified_timestamp?: InputMaybe<Bigint_Comparison_Exp>;
  modified_timestamp_iso8601?: InputMaybe<String_Comparison_Exp>;
  slot?: InputMaybe<Bytea_Comparison_Exp>;
  value?: InputMaybe<Bytea_Comparison_Exp>;
};

/** columns and relationships of "contract_state_change" */
export type Contract_State_Change = {
  __typename?: 'contract_state_change';
  consensus_timestamp: Scalars['bigint']['output'];
  /** A computed field, executes function "contract_state_change_consensus_timestamp_iso8601" */
  consensus_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  contract_id: Scalars['bigint']['output'];
  migration: Scalars['Boolean']['output'];
  payer_account_id: Scalars['bigint']['output'];
  slot: Scalars['bytea']['output'];
  value_read: Scalars['bytea']['output'];
  value_written?: Maybe<Scalars['bytea']['output']>;
};

/** aggregated selection of "contract_state_change" */
export type Contract_State_Change_Aggregate = {
  __typename?: 'contract_state_change_aggregate';
  aggregate?: Maybe<Contract_State_Change_Aggregate_Fields>;
  nodes: Array<Contract_State_Change>;
};

/** aggregate fields of "contract_state_change" */
export type Contract_State_Change_Aggregate_Fields = {
  __typename?: 'contract_state_change_aggregate_fields';
  avg?: Maybe<Contract_State_Change_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Contract_State_Change_Max_Fields>;
  min?: Maybe<Contract_State_Change_Min_Fields>;
  stddev?: Maybe<Contract_State_Change_Stddev_Fields>;
  stddev_pop?: Maybe<Contract_State_Change_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Contract_State_Change_Stddev_Samp_Fields>;
  sum?: Maybe<Contract_State_Change_Sum_Fields>;
  var_pop?: Maybe<Contract_State_Change_Var_Pop_Fields>;
  var_samp?: Maybe<Contract_State_Change_Var_Samp_Fields>;
  variance?: Maybe<Contract_State_Change_Variance_Fields>;
};


/** aggregate fields of "contract_state_change" */
export type Contract_State_Change_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Contract_State_Change_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Contract_State_Change_Avg_Fields = {
  __typename?: 'contract_state_change_avg_fields';
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  contract_id?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "contract_state_change". All fields are combined with a logical 'AND'. */
export type Contract_State_Change_Bool_Exp = {
  _and?: InputMaybe<Array<Contract_State_Change_Bool_Exp>>;
  _not?: InputMaybe<Contract_State_Change_Bool_Exp>;
  _or?: InputMaybe<Array<Contract_State_Change_Bool_Exp>>;
  consensus_timestamp?: InputMaybe<Bigint_Comparison_Exp>;
  consensus_timestamp_iso8601?: InputMaybe<String_Comparison_Exp>;
  contract_id?: InputMaybe<Bigint_Comparison_Exp>;
  migration?: InputMaybe<Boolean_Comparison_Exp>;
  payer_account_id?: InputMaybe<Bigint_Comparison_Exp>;
  slot?: InputMaybe<Bytea_Comparison_Exp>;
  value_read?: InputMaybe<Bytea_Comparison_Exp>;
  value_written?: InputMaybe<Bytea_Comparison_Exp>;
};

/** aggregate max on columns */
export type Contract_State_Change_Max_Fields = {
  __typename?: 'contract_state_change_max_fields';
  consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "contract_state_change_consensus_timestamp_iso8601" */
  consensus_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  contract_id?: Maybe<Scalars['bigint']['output']>;
  payer_account_id?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type Contract_State_Change_Min_Fields = {
  __typename?: 'contract_state_change_min_fields';
  consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "contract_state_change_consensus_timestamp_iso8601" */
  consensus_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  contract_id?: Maybe<Scalars['bigint']['output']>;
  payer_account_id?: Maybe<Scalars['bigint']['output']>;
};

/** Ordering options when selecting data from "contract_state_change". */
export type Contract_State_Change_Order_By = {
  consensus_timestamp?: InputMaybe<Order_By>;
  consensus_timestamp_iso8601?: InputMaybe<Order_By>;
  contract_id?: InputMaybe<Order_By>;
  migration?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  slot?: InputMaybe<Order_By>;
  value_read?: InputMaybe<Order_By>;
  value_written?: InputMaybe<Order_By>;
};

/** select columns of table "contract_state_change" */
export enum Contract_State_Change_Select_Column {
  /** column name */
  ConsensusTimestamp = 'consensus_timestamp',
  /** column name */
  ContractId = 'contract_id',
  /** column name */
  Migration = 'migration',
  /** column name */
  PayerAccountId = 'payer_account_id',
  /** column name */
  Slot = 'slot',
  /** column name */
  ValueRead = 'value_read',
  /** column name */
  ValueWritten = 'value_written'
}

/** aggregate stddev on columns */
export type Contract_State_Change_Stddev_Fields = {
  __typename?: 'contract_state_change_stddev_fields';
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  contract_id?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Contract_State_Change_Stddev_Pop_Fields = {
  __typename?: 'contract_state_change_stddev_pop_fields';
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  contract_id?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Contract_State_Change_Stddev_Samp_Fields = {
  __typename?: 'contract_state_change_stddev_samp_fields';
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  contract_id?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "contract_state_change" */
export type Contract_State_Change_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Contract_State_Change_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Contract_State_Change_Stream_Cursor_Value_Input = {
  consensus_timestamp?: InputMaybe<Scalars['bigint']['input']>;
  contract_id?: InputMaybe<Scalars['bigint']['input']>;
  migration?: InputMaybe<Scalars['Boolean']['input']>;
  payer_account_id?: InputMaybe<Scalars['bigint']['input']>;
  slot?: InputMaybe<Scalars['bytea']['input']>;
  value_read?: InputMaybe<Scalars['bytea']['input']>;
  value_written?: InputMaybe<Scalars['bytea']['input']>;
};

/** aggregate sum on columns */
export type Contract_State_Change_Sum_Fields = {
  __typename?: 'contract_state_change_sum_fields';
  consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  contract_id?: Maybe<Scalars['bigint']['output']>;
  payer_account_id?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type Contract_State_Change_Var_Pop_Fields = {
  __typename?: 'contract_state_change_var_pop_fields';
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  contract_id?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Contract_State_Change_Var_Samp_Fields = {
  __typename?: 'contract_state_change_var_samp_fields';
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  contract_id?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Contract_State_Change_Variance_Fields = {
  __typename?: 'contract_state_change_variance_fields';
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  contract_id?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate max on columns */
export type Contract_State_Max_Fields = {
  __typename?: 'contract_state_max_fields';
  contract_id?: Maybe<Scalars['bigint']['output']>;
  created_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "contract_state_created_timestamp_iso8601" */
  created_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  modified_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "contract_state_modified_timestamp_iso8601" */
  modified_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Contract_State_Min_Fields = {
  __typename?: 'contract_state_min_fields';
  contract_id?: Maybe<Scalars['bigint']['output']>;
  created_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "contract_state_created_timestamp_iso8601" */
  created_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  modified_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "contract_state_modified_timestamp_iso8601" */
  modified_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
};

/** Ordering options when selecting data from "contract_state". */
export type Contract_State_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  created_timestamp?: InputMaybe<Order_By>;
  created_timestamp_iso8601?: InputMaybe<Order_By>;
  modified_timestamp?: InputMaybe<Order_By>;
  modified_timestamp_iso8601?: InputMaybe<Order_By>;
  slot?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** select columns of table "contract_state" */
export enum Contract_State_Select_Column {
  /** column name */
  ContractId = 'contract_id',
  /** column name */
  CreatedTimestamp = 'created_timestamp',
  /** column name */
  ModifiedTimestamp = 'modified_timestamp',
  /** column name */
  Slot = 'slot',
  /** column name */
  Value = 'value'
}

/** aggregate stddev on columns */
export type Contract_State_Stddev_Fields = {
  __typename?: 'contract_state_stddev_fields';
  contract_id?: Maybe<Scalars['Float']['output']>;
  created_timestamp?: Maybe<Scalars['Float']['output']>;
  modified_timestamp?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Contract_State_Stddev_Pop_Fields = {
  __typename?: 'contract_state_stddev_pop_fields';
  contract_id?: Maybe<Scalars['Float']['output']>;
  created_timestamp?: Maybe<Scalars['Float']['output']>;
  modified_timestamp?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Contract_State_Stddev_Samp_Fields = {
  __typename?: 'contract_state_stddev_samp_fields';
  contract_id?: Maybe<Scalars['Float']['output']>;
  created_timestamp?: Maybe<Scalars['Float']['output']>;
  modified_timestamp?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "contract_state" */
export type Contract_State_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Contract_State_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Contract_State_Stream_Cursor_Value_Input = {
  contract_id?: InputMaybe<Scalars['bigint']['input']>;
  created_timestamp?: InputMaybe<Scalars['bigint']['input']>;
  modified_timestamp?: InputMaybe<Scalars['bigint']['input']>;
  slot?: InputMaybe<Scalars['bytea']['input']>;
  value?: InputMaybe<Scalars['bytea']['input']>;
};

/** aggregate sum on columns */
export type Contract_State_Sum_Fields = {
  __typename?: 'contract_state_sum_fields';
  contract_id?: Maybe<Scalars['bigint']['output']>;
  created_timestamp?: Maybe<Scalars['bigint']['output']>;
  modified_timestamp?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type Contract_State_Var_Pop_Fields = {
  __typename?: 'contract_state_var_pop_fields';
  contract_id?: Maybe<Scalars['Float']['output']>;
  created_timestamp?: Maybe<Scalars['Float']['output']>;
  modified_timestamp?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Contract_State_Var_Samp_Fields = {
  __typename?: 'contract_state_var_samp_fields';
  contract_id?: Maybe<Scalars['Float']['output']>;
  created_timestamp?: Maybe<Scalars['Float']['output']>;
  modified_timestamp?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Contract_State_Variance_Fields = {
  __typename?: 'contract_state_variance_fields';
  contract_id?: Maybe<Scalars['Float']['output']>;
  created_timestamp?: Maybe<Scalars['Float']['output']>;
  modified_timestamp?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev on columns */
export type Contract_Stddev_Fields = {
  __typename?: 'contract_stddev_fields';
  file_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Contract_Stddev_Pop_Fields = {
  __typename?: 'contract_stddev_pop_fields';
  file_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Contract_Stddev_Samp_Fields = {
  __typename?: 'contract_stddev_samp_fields';
  file_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "contract" */
export type Contract_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Contract_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Contract_Stream_Cursor_Value_Input = {
  file_id?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  initcode?: InputMaybe<Scalars['bytea']['input']>;
  runtime_bytecode?: InputMaybe<Scalars['bytea']['input']>;
};

/** aggregate sum on columns */
export type Contract_Sum_Fields = {
  __typename?: 'contract_sum_fields';
  file_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
};

/** columns and relationships of "contract_transactions_last_24hrs" */
export type Contract_Transactions_Last_24hrs = {
  __typename?: 'contract_transactions_last_24hrs';
  count?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** aggregated selection of "contract_transactions_last_24hrs" */
export type Contract_Transactions_Last_24hrs_Aggregate = {
  __typename?: 'contract_transactions_last_24hrs_aggregate';
  aggregate?: Maybe<Contract_Transactions_Last_24hrs_Aggregate_Fields>;
  nodes: Array<Contract_Transactions_Last_24hrs>;
};

/** aggregate fields of "contract_transactions_last_24hrs" */
export type Contract_Transactions_Last_24hrs_Aggregate_Fields = {
  __typename?: 'contract_transactions_last_24hrs_aggregate_fields';
  avg?: Maybe<Contract_Transactions_Last_24hrs_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Contract_Transactions_Last_24hrs_Max_Fields>;
  min?: Maybe<Contract_Transactions_Last_24hrs_Min_Fields>;
  stddev?: Maybe<Contract_Transactions_Last_24hrs_Stddev_Fields>;
  stddev_pop?: Maybe<Contract_Transactions_Last_24hrs_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Contract_Transactions_Last_24hrs_Stddev_Samp_Fields>;
  sum?: Maybe<Contract_Transactions_Last_24hrs_Sum_Fields>;
  var_pop?: Maybe<Contract_Transactions_Last_24hrs_Var_Pop_Fields>;
  var_samp?: Maybe<Contract_Transactions_Last_24hrs_Var_Samp_Fields>;
  variance?: Maybe<Contract_Transactions_Last_24hrs_Variance_Fields>;
};


/** aggregate fields of "contract_transactions_last_24hrs" */
export type Contract_Transactions_Last_24hrs_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Contract_Transactions_Last_24hrs_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Contract_Transactions_Last_24hrs_Avg_Fields = {
  __typename?: 'contract_transactions_last_24hrs_avg_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "contract_transactions_last_24hrs". All fields are combined with a logical 'AND'. */
export type Contract_Transactions_Last_24hrs_Bool_Exp = {
  _and?: InputMaybe<Array<Contract_Transactions_Last_24hrs_Bool_Exp>>;
  _not?: InputMaybe<Contract_Transactions_Last_24hrs_Bool_Exp>;
  _or?: InputMaybe<Array<Contract_Transactions_Last_24hrs_Bool_Exp>>;
  count?: InputMaybe<Bigint_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** aggregate max on columns */
export type Contract_Transactions_Last_24hrs_Max_Fields = {
  __typename?: 'contract_transactions_last_24hrs_max_fields';
  count?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** aggregate min on columns */
export type Contract_Transactions_Last_24hrs_Min_Fields = {
  __typename?: 'contract_transactions_last_24hrs_min_fields';
  count?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** Ordering options when selecting data from "contract_transactions_last_24hrs". */
export type Contract_Transactions_Last_24hrs_Order_By = {
  count?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "contract_transactions_last_24hrs" */
export enum Contract_Transactions_Last_24hrs_Select_Column {
  /** column name */
  Count = 'count',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate stddev on columns */
export type Contract_Transactions_Last_24hrs_Stddev_Fields = {
  __typename?: 'contract_transactions_last_24hrs_stddev_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Contract_Transactions_Last_24hrs_Stddev_Pop_Fields = {
  __typename?: 'contract_transactions_last_24hrs_stddev_pop_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Contract_Transactions_Last_24hrs_Stddev_Samp_Fields = {
  __typename?: 'contract_transactions_last_24hrs_stddev_samp_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "contract_transactions_last_24hrs" */
export type Contract_Transactions_Last_24hrs_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Contract_Transactions_Last_24hrs_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Contract_Transactions_Last_24hrs_Stream_Cursor_Value_Input = {
  count?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate sum on columns */
export type Contract_Transactions_Last_24hrs_Sum_Fields = {
  __typename?: 'contract_transactions_last_24hrs_sum_fields';
  count?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type Contract_Transactions_Last_24hrs_Var_Pop_Fields = {
  __typename?: 'contract_transactions_last_24hrs_var_pop_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Contract_Transactions_Last_24hrs_Var_Samp_Fields = {
  __typename?: 'contract_transactions_last_24hrs_var_samp_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Contract_Transactions_Last_24hrs_Variance_Fields = {
  __typename?: 'contract_transactions_last_24hrs_variance_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_pop on columns */
export type Contract_Var_Pop_Fields = {
  __typename?: 'contract_var_pop_fields';
  file_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Contract_Var_Samp_Fields = {
  __typename?: 'contract_var_samp_fields';
  file_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Contract_Variance_Fields = {
  __typename?: 'contract_variance_fields';
  file_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** Hbar allowances delegated by payer to spender */
export type Crypto_Allowance = {
  __typename?: 'crypto_allowance';
  amount: Scalars['bigint']['output'];
  amount_granted: Scalars['bigint']['output'];
  /** A computed field, executes function "modified_timestamp_crypto_allowance" */
  modified_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "crypto_allowance_modified_timestamp_iso8601" */
  modified_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  owner: Scalars['bigint']['output'];
  payer_account_id: Scalars['bigint']['output'];
  spender: Scalars['bigint']['output'];
  timestamp_range: Scalars['int8range']['output'];
};

/** aggregated selection of "crypto_allowance" */
export type Crypto_Allowance_Aggregate = {
  __typename?: 'crypto_allowance_aggregate';
  aggregate?: Maybe<Crypto_Allowance_Aggregate_Fields>;
  nodes: Array<Crypto_Allowance>;
};

/** aggregate fields of "crypto_allowance" */
export type Crypto_Allowance_Aggregate_Fields = {
  __typename?: 'crypto_allowance_aggregate_fields';
  avg?: Maybe<Crypto_Allowance_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Crypto_Allowance_Max_Fields>;
  min?: Maybe<Crypto_Allowance_Min_Fields>;
  stddev?: Maybe<Crypto_Allowance_Stddev_Fields>;
  stddev_pop?: Maybe<Crypto_Allowance_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Crypto_Allowance_Stddev_Samp_Fields>;
  sum?: Maybe<Crypto_Allowance_Sum_Fields>;
  var_pop?: Maybe<Crypto_Allowance_Var_Pop_Fields>;
  var_samp?: Maybe<Crypto_Allowance_Var_Samp_Fields>;
  variance?: Maybe<Crypto_Allowance_Variance_Fields>;
};


/** aggregate fields of "crypto_allowance" */
export type Crypto_Allowance_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Crypto_Allowance_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Crypto_Allowance_Avg_Fields = {
  __typename?: 'crypto_allowance_avg_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  amount_granted?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "modified_timestamp_crypto_allowance" */
  modified_timestamp?: Maybe<Scalars['bigint']['output']>;
  owner?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  spender?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "crypto_allowance". All fields are combined with a logical 'AND'. */
export type Crypto_Allowance_Bool_Exp = {
  _and?: InputMaybe<Array<Crypto_Allowance_Bool_Exp>>;
  _not?: InputMaybe<Crypto_Allowance_Bool_Exp>;
  _or?: InputMaybe<Array<Crypto_Allowance_Bool_Exp>>;
  amount?: InputMaybe<Bigint_Comparison_Exp>;
  amount_granted?: InputMaybe<Bigint_Comparison_Exp>;
  modified_timestamp?: InputMaybe<Bigint_Comparison_Exp>;
  modified_timestamp_iso8601?: InputMaybe<String_Comparison_Exp>;
  owner?: InputMaybe<Bigint_Comparison_Exp>;
  payer_account_id?: InputMaybe<Bigint_Comparison_Exp>;
  spender?: InputMaybe<Bigint_Comparison_Exp>;
  timestamp_range?: InputMaybe<Int8range_Comparison_Exp>;
};

/** History of hbar allowances delegated by payer to spender */
export type Crypto_Allowance_History = {
  __typename?: 'crypto_allowance_history';
  amount: Scalars['bigint']['output'];
  amount_granted: Scalars['bigint']['output'];
  owner: Scalars['bigint']['output'];
  payer_account_id: Scalars['bigint']['output'];
  spender: Scalars['bigint']['output'];
  timestamp_range: Scalars['int8range']['output'];
};

/** aggregated selection of "crypto_allowance_history" */
export type Crypto_Allowance_History_Aggregate = {
  __typename?: 'crypto_allowance_history_aggregate';
  aggregate?: Maybe<Crypto_Allowance_History_Aggregate_Fields>;
  nodes: Array<Crypto_Allowance_History>;
};

/** aggregate fields of "crypto_allowance_history" */
export type Crypto_Allowance_History_Aggregate_Fields = {
  __typename?: 'crypto_allowance_history_aggregate_fields';
  avg?: Maybe<Crypto_Allowance_History_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Crypto_Allowance_History_Max_Fields>;
  min?: Maybe<Crypto_Allowance_History_Min_Fields>;
  stddev?: Maybe<Crypto_Allowance_History_Stddev_Fields>;
  stddev_pop?: Maybe<Crypto_Allowance_History_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Crypto_Allowance_History_Stddev_Samp_Fields>;
  sum?: Maybe<Crypto_Allowance_History_Sum_Fields>;
  var_pop?: Maybe<Crypto_Allowance_History_Var_Pop_Fields>;
  var_samp?: Maybe<Crypto_Allowance_History_Var_Samp_Fields>;
  variance?: Maybe<Crypto_Allowance_History_Variance_Fields>;
};


/** aggregate fields of "crypto_allowance_history" */
export type Crypto_Allowance_History_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Crypto_Allowance_History_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Crypto_Allowance_History_Avg_Fields = {
  __typename?: 'crypto_allowance_history_avg_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  amount_granted?: Maybe<Scalars['Float']['output']>;
  owner?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  spender?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "crypto_allowance_history". All fields are combined with a logical 'AND'. */
export type Crypto_Allowance_History_Bool_Exp = {
  _and?: InputMaybe<Array<Crypto_Allowance_History_Bool_Exp>>;
  _not?: InputMaybe<Crypto_Allowance_History_Bool_Exp>;
  _or?: InputMaybe<Array<Crypto_Allowance_History_Bool_Exp>>;
  amount?: InputMaybe<Bigint_Comparison_Exp>;
  amount_granted?: InputMaybe<Bigint_Comparison_Exp>;
  owner?: InputMaybe<Bigint_Comparison_Exp>;
  payer_account_id?: InputMaybe<Bigint_Comparison_Exp>;
  spender?: InputMaybe<Bigint_Comparison_Exp>;
  timestamp_range?: InputMaybe<Int8range_Comparison_Exp>;
};

/** aggregate max on columns */
export type Crypto_Allowance_History_Max_Fields = {
  __typename?: 'crypto_allowance_history_max_fields';
  amount?: Maybe<Scalars['bigint']['output']>;
  amount_granted?: Maybe<Scalars['bigint']['output']>;
  owner?: Maybe<Scalars['bigint']['output']>;
  payer_account_id?: Maybe<Scalars['bigint']['output']>;
  spender?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type Crypto_Allowance_History_Min_Fields = {
  __typename?: 'crypto_allowance_history_min_fields';
  amount?: Maybe<Scalars['bigint']['output']>;
  amount_granted?: Maybe<Scalars['bigint']['output']>;
  owner?: Maybe<Scalars['bigint']['output']>;
  payer_account_id?: Maybe<Scalars['bigint']['output']>;
  spender?: Maybe<Scalars['bigint']['output']>;
};

/** Ordering options when selecting data from "crypto_allowance_history". */
export type Crypto_Allowance_History_Order_By = {
  amount?: InputMaybe<Order_By>;
  amount_granted?: InputMaybe<Order_By>;
  owner?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  spender?: InputMaybe<Order_By>;
  timestamp_range?: InputMaybe<Order_By>;
};

/** select columns of table "crypto_allowance_history" */
export enum Crypto_Allowance_History_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  AmountGranted = 'amount_granted',
  /** column name */
  Owner = 'owner',
  /** column name */
  PayerAccountId = 'payer_account_id',
  /** column name */
  Spender = 'spender',
  /** column name */
  TimestampRange = 'timestamp_range'
}

/** aggregate stddev on columns */
export type Crypto_Allowance_History_Stddev_Fields = {
  __typename?: 'crypto_allowance_history_stddev_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  amount_granted?: Maybe<Scalars['Float']['output']>;
  owner?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  spender?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Crypto_Allowance_History_Stddev_Pop_Fields = {
  __typename?: 'crypto_allowance_history_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  amount_granted?: Maybe<Scalars['Float']['output']>;
  owner?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  spender?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Crypto_Allowance_History_Stddev_Samp_Fields = {
  __typename?: 'crypto_allowance_history_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  amount_granted?: Maybe<Scalars['Float']['output']>;
  owner?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  spender?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "crypto_allowance_history" */
export type Crypto_Allowance_History_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Crypto_Allowance_History_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Crypto_Allowance_History_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars['bigint']['input']>;
  amount_granted?: InputMaybe<Scalars['bigint']['input']>;
  owner?: InputMaybe<Scalars['bigint']['input']>;
  payer_account_id?: InputMaybe<Scalars['bigint']['input']>;
  spender?: InputMaybe<Scalars['bigint']['input']>;
  timestamp_range?: InputMaybe<Scalars['int8range']['input']>;
};

/** aggregate sum on columns */
export type Crypto_Allowance_History_Sum_Fields = {
  __typename?: 'crypto_allowance_history_sum_fields';
  amount?: Maybe<Scalars['bigint']['output']>;
  amount_granted?: Maybe<Scalars['bigint']['output']>;
  owner?: Maybe<Scalars['bigint']['output']>;
  payer_account_id?: Maybe<Scalars['bigint']['output']>;
  spender?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type Crypto_Allowance_History_Var_Pop_Fields = {
  __typename?: 'crypto_allowance_history_var_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  amount_granted?: Maybe<Scalars['Float']['output']>;
  owner?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  spender?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Crypto_Allowance_History_Var_Samp_Fields = {
  __typename?: 'crypto_allowance_history_var_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  amount_granted?: Maybe<Scalars['Float']['output']>;
  owner?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  spender?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Crypto_Allowance_History_Variance_Fields = {
  __typename?: 'crypto_allowance_history_variance_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  amount_granted?: Maybe<Scalars['Float']['output']>;
  owner?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  spender?: Maybe<Scalars['Float']['output']>;
};

/** aggregate max on columns */
export type Crypto_Allowance_Max_Fields = {
  __typename?: 'crypto_allowance_max_fields';
  amount?: Maybe<Scalars['bigint']['output']>;
  amount_granted?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "modified_timestamp_crypto_allowance" */
  modified_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "crypto_allowance_modified_timestamp_iso8601" */
  modified_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['bigint']['output']>;
  payer_account_id?: Maybe<Scalars['bigint']['output']>;
  spender?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type Crypto_Allowance_Min_Fields = {
  __typename?: 'crypto_allowance_min_fields';
  amount?: Maybe<Scalars['bigint']['output']>;
  amount_granted?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "modified_timestamp_crypto_allowance" */
  modified_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "crypto_allowance_modified_timestamp_iso8601" */
  modified_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['bigint']['output']>;
  payer_account_id?: Maybe<Scalars['bigint']['output']>;
  spender?: Maybe<Scalars['bigint']['output']>;
};

/** Ordering options when selecting data from "crypto_allowance". */
export type Crypto_Allowance_Order_By = {
  amount?: InputMaybe<Order_By>;
  amount_granted?: InputMaybe<Order_By>;
  modified_timestamp?: InputMaybe<Order_By>;
  modified_timestamp_iso8601?: InputMaybe<Order_By>;
  owner?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  spender?: InputMaybe<Order_By>;
  timestamp_range?: InputMaybe<Order_By>;
};

/** select columns of table "crypto_allowance" */
export enum Crypto_Allowance_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  AmountGranted = 'amount_granted',
  /** column name */
  Owner = 'owner',
  /** column name */
  PayerAccountId = 'payer_account_id',
  /** column name */
  Spender = 'spender',
  /** column name */
  TimestampRange = 'timestamp_range'
}

/** aggregate stddev on columns */
export type Crypto_Allowance_Stddev_Fields = {
  __typename?: 'crypto_allowance_stddev_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  amount_granted?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "modified_timestamp_crypto_allowance" */
  modified_timestamp?: Maybe<Scalars['bigint']['output']>;
  owner?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  spender?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Crypto_Allowance_Stddev_Pop_Fields = {
  __typename?: 'crypto_allowance_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  amount_granted?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "modified_timestamp_crypto_allowance" */
  modified_timestamp?: Maybe<Scalars['bigint']['output']>;
  owner?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  spender?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Crypto_Allowance_Stddev_Samp_Fields = {
  __typename?: 'crypto_allowance_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  amount_granted?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "modified_timestamp_crypto_allowance" */
  modified_timestamp?: Maybe<Scalars['bigint']['output']>;
  owner?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  spender?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "crypto_allowance" */
export type Crypto_Allowance_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Crypto_Allowance_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Crypto_Allowance_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars['bigint']['input']>;
  amount_granted?: InputMaybe<Scalars['bigint']['input']>;
  owner?: InputMaybe<Scalars['bigint']['input']>;
  payer_account_id?: InputMaybe<Scalars['bigint']['input']>;
  spender?: InputMaybe<Scalars['bigint']['input']>;
  timestamp_range?: InputMaybe<Scalars['int8range']['input']>;
};

/** aggregate sum on columns */
export type Crypto_Allowance_Sum_Fields = {
  __typename?: 'crypto_allowance_sum_fields';
  amount?: Maybe<Scalars['bigint']['output']>;
  amount_granted?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "modified_timestamp_crypto_allowance" */
  modified_timestamp?: Maybe<Scalars['bigint']['output']>;
  owner?: Maybe<Scalars['bigint']['output']>;
  payer_account_id?: Maybe<Scalars['bigint']['output']>;
  spender?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type Crypto_Allowance_Var_Pop_Fields = {
  __typename?: 'crypto_allowance_var_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  amount_granted?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "modified_timestamp_crypto_allowance" */
  modified_timestamp?: Maybe<Scalars['bigint']['output']>;
  owner?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  spender?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Crypto_Allowance_Var_Samp_Fields = {
  __typename?: 'crypto_allowance_var_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  amount_granted?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "modified_timestamp_crypto_allowance" */
  modified_timestamp?: Maybe<Scalars['bigint']['output']>;
  owner?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  spender?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Crypto_Allowance_Variance_Fields = {
  __typename?: 'crypto_allowance_variance_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  amount_granted?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "modified_timestamp_crypto_allowance" */
  modified_timestamp?: Maybe<Scalars['bigint']['output']>;
  owner?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  spender?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "crypto_transfer" */
export type Crypto_Transfer = {
  __typename?: 'crypto_transfer';
  amount: Scalars['bigint']['output'];
  consensus_timestamp: Scalars['bigint']['output'];
  /** A computed field, executes function "crypto_transfer_consensus_timestamp_iso8601" */
  consensus_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  entity_id: Scalars['bigint']['output'];
  errata?: Maybe<Scalars['errata_type']['output']>;
  is_approval?: Maybe<Scalars['Boolean']['output']>;
  /** An array relationship */
  nft_transfer: Array<Nft_Transfer>;
  /** An aggregate relationship */
  nft_transfer_aggregate: Nft_Transfer_Aggregate;
  payer_account_id: Scalars['bigint']['output'];
  /** An array relationship */
  token_transfer: Array<Token_Transfer>;
  /** An aggregate relationship */
  token_transfer_aggregate: Token_Transfer_Aggregate;
  /** An object relationship */
  transaction?: Maybe<Transaction>;
};


/** columns and relationships of "crypto_transfer" */
export type Crypto_TransferNft_TransferArgs = {
  distinct_on?: InputMaybe<Array<Nft_Transfer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Transfer_Order_By>>;
  where?: InputMaybe<Nft_Transfer_Bool_Exp>;
};


/** columns and relationships of "crypto_transfer" */
export type Crypto_TransferNft_Transfer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nft_Transfer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Transfer_Order_By>>;
  where?: InputMaybe<Nft_Transfer_Bool_Exp>;
};


/** columns and relationships of "crypto_transfer" */
export type Crypto_TransferToken_TransferArgs = {
  distinct_on?: InputMaybe<Array<Token_Transfer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Token_Transfer_Order_By>>;
  where?: InputMaybe<Token_Transfer_Bool_Exp>;
};


/** columns and relationships of "crypto_transfer" */
export type Crypto_TransferToken_Transfer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Transfer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Token_Transfer_Order_By>>;
  where?: InputMaybe<Token_Transfer_Bool_Exp>;
};

/** aggregated selection of "crypto_transfer" */
export type Crypto_Transfer_Aggregate = {
  __typename?: 'crypto_transfer_aggregate';
  aggregate?: Maybe<Crypto_Transfer_Aggregate_Fields>;
  nodes: Array<Crypto_Transfer>;
};

export type Crypto_Transfer_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Crypto_Transfer_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Crypto_Transfer_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Crypto_Transfer_Aggregate_Bool_Exp_Count>;
};

export type Crypto_Transfer_Aggregate_Bool_Exp_Bool_And = {
  arguments: Crypto_Transfer_Select_Column_Crypto_Transfer_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Crypto_Transfer_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Crypto_Transfer_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Crypto_Transfer_Select_Column_Crypto_Transfer_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Crypto_Transfer_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Crypto_Transfer_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Crypto_Transfer_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Crypto_Transfer_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "crypto_transfer" */
export type Crypto_Transfer_Aggregate_Fields = {
  __typename?: 'crypto_transfer_aggregate_fields';
  avg?: Maybe<Crypto_Transfer_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Crypto_Transfer_Max_Fields>;
  min?: Maybe<Crypto_Transfer_Min_Fields>;
  stddev?: Maybe<Crypto_Transfer_Stddev_Fields>;
  stddev_pop?: Maybe<Crypto_Transfer_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Crypto_Transfer_Stddev_Samp_Fields>;
  sum?: Maybe<Crypto_Transfer_Sum_Fields>;
  var_pop?: Maybe<Crypto_Transfer_Var_Pop_Fields>;
  var_samp?: Maybe<Crypto_Transfer_Var_Samp_Fields>;
  variance?: Maybe<Crypto_Transfer_Variance_Fields>;
};


/** aggregate fields of "crypto_transfer" */
export type Crypto_Transfer_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Crypto_Transfer_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "crypto_transfer" */
export type Crypto_Transfer_Aggregate_Order_By = {
  avg?: InputMaybe<Crypto_Transfer_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Crypto_Transfer_Max_Order_By>;
  min?: InputMaybe<Crypto_Transfer_Min_Order_By>;
  stddev?: InputMaybe<Crypto_Transfer_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Crypto_Transfer_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Crypto_Transfer_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Crypto_Transfer_Sum_Order_By>;
  var_pop?: InputMaybe<Crypto_Transfer_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Crypto_Transfer_Var_Samp_Order_By>;
  variance?: InputMaybe<Crypto_Transfer_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Crypto_Transfer_Avg_Fields = {
  __typename?: 'crypto_transfer_avg_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  entity_id?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "crypto_transfer" */
export type Crypto_Transfer_Avg_Order_By = {
  amount?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "crypto_transfer". All fields are combined with a logical 'AND'. */
export type Crypto_Transfer_Bool_Exp = {
  _and?: InputMaybe<Array<Crypto_Transfer_Bool_Exp>>;
  _not?: InputMaybe<Crypto_Transfer_Bool_Exp>;
  _or?: InputMaybe<Array<Crypto_Transfer_Bool_Exp>>;
  amount?: InputMaybe<Bigint_Comparison_Exp>;
  consensus_timestamp?: InputMaybe<Bigint_Comparison_Exp>;
  consensus_timestamp_iso8601?: InputMaybe<String_Comparison_Exp>;
  entity_id?: InputMaybe<Bigint_Comparison_Exp>;
  errata?: InputMaybe<Errata_Type_Comparison_Exp>;
  is_approval?: InputMaybe<Boolean_Comparison_Exp>;
  nft_transfer?: InputMaybe<Nft_Transfer_Bool_Exp>;
  nft_transfer_aggregate?: InputMaybe<Nft_Transfer_Aggregate_Bool_Exp>;
  payer_account_id?: InputMaybe<Bigint_Comparison_Exp>;
  token_transfer?: InputMaybe<Token_Transfer_Bool_Exp>;
  token_transfer_aggregate?: InputMaybe<Token_Transfer_Aggregate_Bool_Exp>;
  transaction?: InputMaybe<Transaction_Bool_Exp>;
};

/** aggregate max on columns */
export type Crypto_Transfer_Max_Fields = {
  __typename?: 'crypto_transfer_max_fields';
  amount?: Maybe<Scalars['bigint']['output']>;
  consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "crypto_transfer_consensus_timestamp_iso8601" */
  consensus_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  entity_id?: Maybe<Scalars['bigint']['output']>;
  errata?: Maybe<Scalars['errata_type']['output']>;
  payer_account_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "crypto_transfer" */
export type Crypto_Transfer_Max_Order_By = {
  amount?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  errata?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Crypto_Transfer_Min_Fields = {
  __typename?: 'crypto_transfer_min_fields';
  amount?: Maybe<Scalars['bigint']['output']>;
  consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "crypto_transfer_consensus_timestamp_iso8601" */
  consensus_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  entity_id?: Maybe<Scalars['bigint']['output']>;
  errata?: Maybe<Scalars['errata_type']['output']>;
  payer_account_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "crypto_transfer" */
export type Crypto_Transfer_Min_Order_By = {
  amount?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  errata?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "crypto_transfer". */
export type Crypto_Transfer_Order_By = {
  amount?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  consensus_timestamp_iso8601?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  errata?: InputMaybe<Order_By>;
  is_approval?: InputMaybe<Order_By>;
  nft_transfer_aggregate?: InputMaybe<Nft_Transfer_Aggregate_Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  token_transfer_aggregate?: InputMaybe<Token_Transfer_Aggregate_Order_By>;
  transaction?: InputMaybe<Transaction_Order_By>;
};

/** select columns of table "crypto_transfer" */
export enum Crypto_Transfer_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  ConsensusTimestamp = 'consensus_timestamp',
  /** column name */
  EntityId = 'entity_id',
  /** column name */
  Errata = 'errata',
  /** column name */
  IsApproval = 'is_approval',
  /** column name */
  PayerAccountId = 'payer_account_id'
}

/** select "crypto_transfer_aggregate_bool_exp_bool_and_arguments_columns" columns of table "crypto_transfer" */
export enum Crypto_Transfer_Select_Column_Crypto_Transfer_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsApproval = 'is_approval'
}

/** select "crypto_transfer_aggregate_bool_exp_bool_or_arguments_columns" columns of table "crypto_transfer" */
export enum Crypto_Transfer_Select_Column_Crypto_Transfer_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsApproval = 'is_approval'
}

/** aggregate stddev on columns */
export type Crypto_Transfer_Stddev_Fields = {
  __typename?: 'crypto_transfer_stddev_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  entity_id?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "crypto_transfer" */
export type Crypto_Transfer_Stddev_Order_By = {
  amount?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Crypto_Transfer_Stddev_Pop_Fields = {
  __typename?: 'crypto_transfer_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  entity_id?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "crypto_transfer" */
export type Crypto_Transfer_Stddev_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Crypto_Transfer_Stddev_Samp_Fields = {
  __typename?: 'crypto_transfer_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  entity_id?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "crypto_transfer" */
export type Crypto_Transfer_Stddev_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "crypto_transfer" */
export type Crypto_Transfer_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Crypto_Transfer_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Crypto_Transfer_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars['bigint']['input']>;
  consensus_timestamp?: InputMaybe<Scalars['bigint']['input']>;
  entity_id?: InputMaybe<Scalars['bigint']['input']>;
  errata?: InputMaybe<Scalars['errata_type']['input']>;
  is_approval?: InputMaybe<Scalars['Boolean']['input']>;
  payer_account_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Crypto_Transfer_Sum_Fields = {
  __typename?: 'crypto_transfer_sum_fields';
  amount?: Maybe<Scalars['bigint']['output']>;
  consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  entity_id?: Maybe<Scalars['bigint']['output']>;
  payer_account_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "crypto_transfer" */
export type Crypto_Transfer_Sum_Order_By = {
  amount?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Crypto_Transfer_Var_Pop_Fields = {
  __typename?: 'crypto_transfer_var_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  entity_id?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "crypto_transfer" */
export type Crypto_Transfer_Var_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Crypto_Transfer_Var_Samp_Fields = {
  __typename?: 'crypto_transfer_var_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  entity_id?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "crypto_transfer" */
export type Crypto_Transfer_Var_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Crypto_Transfer_Variance_Fields = {
  __typename?: 'crypto_transfer_variance_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  entity_id?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "crypto_transfer" */
export type Crypto_Transfer_Variance_Order_By = {
  amount?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "custom_fee" */
export type Custom_Fee = {
  __typename?: 'custom_fee';
  entity_id: Scalars['bigint']['output'];
  fixed_fees?: Maybe<Scalars['jsonb']['output']>;
  fractional_fees?: Maybe<Scalars['jsonb']['output']>;
  royalty_fees?: Maybe<Scalars['jsonb']['output']>;
  timestamp_range: Scalars['int8range']['output'];
};


/** columns and relationships of "custom_fee" */
export type Custom_FeeFixed_FeesArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "custom_fee" */
export type Custom_FeeFractional_FeesArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "custom_fee" */
export type Custom_FeeRoyalty_FeesArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "custom_fee" */
export type Custom_Fee_Aggregate = {
  __typename?: 'custom_fee_aggregate';
  aggregate?: Maybe<Custom_Fee_Aggregate_Fields>;
  nodes: Array<Custom_Fee>;
};

export type Custom_Fee_Aggregate_Bool_Exp = {
  count?: InputMaybe<Custom_Fee_Aggregate_Bool_Exp_Count>;
};

export type Custom_Fee_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Custom_Fee_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Custom_Fee_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "custom_fee" */
export type Custom_Fee_Aggregate_Fields = {
  __typename?: 'custom_fee_aggregate_fields';
  avg?: Maybe<Custom_Fee_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Custom_Fee_Max_Fields>;
  min?: Maybe<Custom_Fee_Min_Fields>;
  stddev?: Maybe<Custom_Fee_Stddev_Fields>;
  stddev_pop?: Maybe<Custom_Fee_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Custom_Fee_Stddev_Samp_Fields>;
  sum?: Maybe<Custom_Fee_Sum_Fields>;
  var_pop?: Maybe<Custom_Fee_Var_Pop_Fields>;
  var_samp?: Maybe<Custom_Fee_Var_Samp_Fields>;
  variance?: Maybe<Custom_Fee_Variance_Fields>;
};


/** aggregate fields of "custom_fee" */
export type Custom_Fee_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Custom_Fee_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "custom_fee" */
export type Custom_Fee_Aggregate_Order_By = {
  avg?: InputMaybe<Custom_Fee_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Custom_Fee_Max_Order_By>;
  min?: InputMaybe<Custom_Fee_Min_Order_By>;
  stddev?: InputMaybe<Custom_Fee_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Custom_Fee_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Custom_Fee_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Custom_Fee_Sum_Order_By>;
  var_pop?: InputMaybe<Custom_Fee_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Custom_Fee_Var_Samp_Order_By>;
  variance?: InputMaybe<Custom_Fee_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Custom_Fee_Avg_Fields = {
  __typename?: 'custom_fee_avg_fields';
  entity_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "custom_fee" */
export type Custom_Fee_Avg_Order_By = {
  entity_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "custom_fee". All fields are combined with a logical 'AND'. */
export type Custom_Fee_Bool_Exp = {
  _and?: InputMaybe<Array<Custom_Fee_Bool_Exp>>;
  _not?: InputMaybe<Custom_Fee_Bool_Exp>;
  _or?: InputMaybe<Array<Custom_Fee_Bool_Exp>>;
  entity_id?: InputMaybe<Bigint_Comparison_Exp>;
  fixed_fees?: InputMaybe<Jsonb_Comparison_Exp>;
  fractional_fees?: InputMaybe<Jsonb_Comparison_Exp>;
  royalty_fees?: InputMaybe<Jsonb_Comparison_Exp>;
  timestamp_range?: InputMaybe<Int8range_Comparison_Exp>;
};

/** aggregate max on columns */
export type Custom_Fee_Max_Fields = {
  __typename?: 'custom_fee_max_fields';
  entity_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "custom_fee" */
export type Custom_Fee_Max_Order_By = {
  entity_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Custom_Fee_Min_Fields = {
  __typename?: 'custom_fee_min_fields';
  entity_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "custom_fee" */
export type Custom_Fee_Min_Order_By = {
  entity_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "custom_fee". */
export type Custom_Fee_Order_By = {
  entity_id?: InputMaybe<Order_By>;
  fixed_fees?: InputMaybe<Order_By>;
  fractional_fees?: InputMaybe<Order_By>;
  royalty_fees?: InputMaybe<Order_By>;
  timestamp_range?: InputMaybe<Order_By>;
};

/** select columns of table "custom_fee" */
export enum Custom_Fee_Select_Column {
  /** column name */
  EntityId = 'entity_id',
  /** column name */
  FixedFees = 'fixed_fees',
  /** column name */
  FractionalFees = 'fractional_fees',
  /** column name */
  RoyaltyFees = 'royalty_fees',
  /** column name */
  TimestampRange = 'timestamp_range'
}

/** aggregate stddev on columns */
export type Custom_Fee_Stddev_Fields = {
  __typename?: 'custom_fee_stddev_fields';
  entity_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "custom_fee" */
export type Custom_Fee_Stddev_Order_By = {
  entity_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Custom_Fee_Stddev_Pop_Fields = {
  __typename?: 'custom_fee_stddev_pop_fields';
  entity_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "custom_fee" */
export type Custom_Fee_Stddev_Pop_Order_By = {
  entity_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Custom_Fee_Stddev_Samp_Fields = {
  __typename?: 'custom_fee_stddev_samp_fields';
  entity_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "custom_fee" */
export type Custom_Fee_Stddev_Samp_Order_By = {
  entity_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "custom_fee" */
export type Custom_Fee_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Custom_Fee_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Custom_Fee_Stream_Cursor_Value_Input = {
  entity_id?: InputMaybe<Scalars['bigint']['input']>;
  fixed_fees?: InputMaybe<Scalars['jsonb']['input']>;
  fractional_fees?: InputMaybe<Scalars['jsonb']['input']>;
  royalty_fees?: InputMaybe<Scalars['jsonb']['input']>;
  timestamp_range?: InputMaybe<Scalars['int8range']['input']>;
};

/** aggregate sum on columns */
export type Custom_Fee_Sum_Fields = {
  __typename?: 'custom_fee_sum_fields';
  entity_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "custom_fee" */
export type Custom_Fee_Sum_Order_By = {
  entity_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Custom_Fee_Var_Pop_Fields = {
  __typename?: 'custom_fee_var_pop_fields';
  entity_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "custom_fee" */
export type Custom_Fee_Var_Pop_Order_By = {
  entity_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Custom_Fee_Var_Samp_Fields = {
  __typename?: 'custom_fee_var_samp_fields';
  entity_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "custom_fee" */
export type Custom_Fee_Var_Samp_Order_By = {
  entity_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Custom_Fee_Variance_Fields = {
  __typename?: 'custom_fee_variance_fields';
  entity_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "custom_fee" */
export type Custom_Fee_Variance_Order_By = {
  entity_id?: InputMaybe<Order_By>;
};

export type Ecosystem_Active_Accounts_Per_Period_Args = {
  end_timestamp?: InputMaybe<Scalars['bigint']['input']>;
  entity_ids?: InputMaybe<Scalars['_entity_id']['input']>;
  period?: InputMaybe<Scalars['String']['input']>;
  start_timestamp?: InputMaybe<Scalars['bigint']['input']>;
};

/** columns and relationships of "ecosystem.active_nft_account_cohorts" */
export type Ecosystem_Active_Nft_Account_Cohorts = {
  __typename?: 'ecosystem_active_nft_account_cohorts';
  cohort?: Maybe<Scalars['timestamp']['output']>;
  period?: Maybe<Scalars['String']['output']>;
  timestamp_range?: Maybe<Scalars['int8range']['output']>;
  total?: Maybe<Scalars['bigint']['output']>;
};

/** aggregated selection of "ecosystem.active_nft_account_cohorts" */
export type Ecosystem_Active_Nft_Account_Cohorts_Aggregate = {
  __typename?: 'ecosystem_active_nft_account_cohorts_aggregate';
  aggregate?: Maybe<Ecosystem_Active_Nft_Account_Cohorts_Aggregate_Fields>;
  nodes: Array<Ecosystem_Active_Nft_Account_Cohorts>;
};

/** aggregate fields of "ecosystem.active_nft_account_cohorts" */
export type Ecosystem_Active_Nft_Account_Cohorts_Aggregate_Fields = {
  __typename?: 'ecosystem_active_nft_account_cohorts_aggregate_fields';
  avg?: Maybe<Ecosystem_Active_Nft_Account_Cohorts_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Ecosystem_Active_Nft_Account_Cohorts_Max_Fields>;
  min?: Maybe<Ecosystem_Active_Nft_Account_Cohorts_Min_Fields>;
  stddev?: Maybe<Ecosystem_Active_Nft_Account_Cohorts_Stddev_Fields>;
  stddev_pop?: Maybe<Ecosystem_Active_Nft_Account_Cohorts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Ecosystem_Active_Nft_Account_Cohorts_Stddev_Samp_Fields>;
  sum?: Maybe<Ecosystem_Active_Nft_Account_Cohorts_Sum_Fields>;
  var_pop?: Maybe<Ecosystem_Active_Nft_Account_Cohorts_Var_Pop_Fields>;
  var_samp?: Maybe<Ecosystem_Active_Nft_Account_Cohorts_Var_Samp_Fields>;
  variance?: Maybe<Ecosystem_Active_Nft_Account_Cohorts_Variance_Fields>;
};


/** aggregate fields of "ecosystem.active_nft_account_cohorts" */
export type Ecosystem_Active_Nft_Account_Cohorts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Ecosystem_Active_Nft_Account_Cohorts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Ecosystem_Active_Nft_Account_Cohorts_Avg_Fields = {
  __typename?: 'ecosystem_active_nft_account_cohorts_avg_fields';
  total?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "ecosystem.active_nft_account_cohorts". All fields are combined with a logical 'AND'. */
export type Ecosystem_Active_Nft_Account_Cohorts_Bool_Exp = {
  _and?: InputMaybe<Array<Ecosystem_Active_Nft_Account_Cohorts_Bool_Exp>>;
  _not?: InputMaybe<Ecosystem_Active_Nft_Account_Cohorts_Bool_Exp>;
  _or?: InputMaybe<Array<Ecosystem_Active_Nft_Account_Cohorts_Bool_Exp>>;
  cohort?: InputMaybe<Timestamp_Comparison_Exp>;
  period?: InputMaybe<String_Comparison_Exp>;
  timestamp_range?: InputMaybe<Int8range_Comparison_Exp>;
  total?: InputMaybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Ecosystem_Active_Nft_Account_Cohorts_Max_Fields = {
  __typename?: 'ecosystem_active_nft_account_cohorts_max_fields';
  cohort?: Maybe<Scalars['timestamp']['output']>;
  period?: Maybe<Scalars['String']['output']>;
  total?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type Ecosystem_Active_Nft_Account_Cohorts_Min_Fields = {
  __typename?: 'ecosystem_active_nft_account_cohorts_min_fields';
  cohort?: Maybe<Scalars['timestamp']['output']>;
  period?: Maybe<Scalars['String']['output']>;
  total?: Maybe<Scalars['bigint']['output']>;
};

/** Ordering options when selecting data from "ecosystem.active_nft_account_cohorts". */
export type Ecosystem_Active_Nft_Account_Cohorts_Order_By = {
  cohort?: InputMaybe<Order_By>;
  period?: InputMaybe<Order_By>;
  timestamp_range?: InputMaybe<Order_By>;
  total?: InputMaybe<Order_By>;
};

/** select columns of table "ecosystem.active_nft_account_cohorts" */
export enum Ecosystem_Active_Nft_Account_Cohorts_Select_Column {
  /** column name */
  Cohort = 'cohort',
  /** column name */
  Period = 'period',
  /** column name */
  TimestampRange = 'timestamp_range',
  /** column name */
  Total = 'total'
}

/** aggregate stddev on columns */
export type Ecosystem_Active_Nft_Account_Cohorts_Stddev_Fields = {
  __typename?: 'ecosystem_active_nft_account_cohorts_stddev_fields';
  total?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Ecosystem_Active_Nft_Account_Cohorts_Stddev_Pop_Fields = {
  __typename?: 'ecosystem_active_nft_account_cohorts_stddev_pop_fields';
  total?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Ecosystem_Active_Nft_Account_Cohorts_Stddev_Samp_Fields = {
  __typename?: 'ecosystem_active_nft_account_cohorts_stddev_samp_fields';
  total?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "ecosystem_active_nft_account_cohorts" */
export type Ecosystem_Active_Nft_Account_Cohorts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Ecosystem_Active_Nft_Account_Cohorts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Ecosystem_Active_Nft_Account_Cohorts_Stream_Cursor_Value_Input = {
  cohort?: InputMaybe<Scalars['timestamp']['input']>;
  period?: InputMaybe<Scalars['String']['input']>;
  timestamp_range?: InputMaybe<Scalars['int8range']['input']>;
  total?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Ecosystem_Active_Nft_Account_Cohorts_Sum_Fields = {
  __typename?: 'ecosystem_active_nft_account_cohorts_sum_fields';
  total?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type Ecosystem_Active_Nft_Account_Cohorts_Var_Pop_Fields = {
  __typename?: 'ecosystem_active_nft_account_cohorts_var_pop_fields';
  total?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Ecosystem_Active_Nft_Account_Cohorts_Var_Samp_Fields = {
  __typename?: 'ecosystem_active_nft_account_cohorts_var_samp_fields';
  total?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Ecosystem_Active_Nft_Account_Cohorts_Variance_Fields = {
  __typename?: 'ecosystem_active_nft_account_cohorts_variance_fields';
  total?: Maybe<Scalars['Float']['output']>;
};

export type Ecosystem_Associated_Revenue_Per_Period_Args = {
  end_timestamp?: InputMaybe<Scalars['bigint']['input']>;
  entity_ids?: InputMaybe<Scalars['_entity_id']['input']>;
  period?: InputMaybe<Scalars['String']['input']>;
  start_timestamp?: InputMaybe<Scalars['bigint']['input']>;
};

export type Ecosystem_Associated_Transaction_Fees_Per_Period_Args = {
  end_timestamp?: InputMaybe<Scalars['bigint']['input']>;
  entity_ids?: InputMaybe<Scalars['_entity_id']['input']>;
  period?: InputMaybe<Scalars['String']['input']>;
  start_timestamp?: InputMaybe<Scalars['bigint']['input']>;
};

export type Ecosystem_Associated_Transactions_Per_Period_Args = {
  end_timestamp?: InputMaybe<Scalars['bigint']['input']>;
  entity_ids?: InputMaybe<Scalars['_entity_id']['input']>;
  period?: InputMaybe<Scalars['String']['input']>;
  start_timestamp?: InputMaybe<Scalars['bigint']['input']>;
};

/** columns and relationships of "ecosystem.estimated_transaction_totals" */
export type Ecosystem_Estimated_Transaction_Totals = {
  __typename?: 'ecosystem_estimated_transaction_totals';
  atma_transactions?: Maybe<Scalars['bigint']['output']>;
  atma_transactions_q1_2023?: Maybe<Scalars['bigint']['output']>;
  atma_transactions_q1_2024?: Maybe<Scalars['bigint']['output']>;
  atma_transactions_q2_2023?: Maybe<Scalars['bigint']['output']>;
  atma_transactions_q3_2023?: Maybe<Scalars['bigint']['output']>;
  atma_transactions_q4_2023?: Maybe<Scalars['bigint']['output']>;
  other_transactions?: Maybe<Scalars['bigint']['output']>;
  other_transactions_q1_2023?: Maybe<Scalars['bigint']['output']>;
  other_transactions_q1_2024?: Maybe<Scalars['bigint']['output']>;
  other_transactions_q2_2023?: Maybe<Scalars['bigint']['output']>;
  other_transactions_q3_2023?: Maybe<Scalars['bigint']['output']>;
  other_transactions_q4_2023?: Maybe<Scalars['bigint']['output']>;
  total_transactions?: Maybe<Scalars['bigint']['output']>;
  total_transactions_q1_2023?: Maybe<Scalars['bigint']['output']>;
  total_transactions_q1_2024?: Maybe<Scalars['bigint']['output']>;
  total_transactions_q2_2023?: Maybe<Scalars['bigint']['output']>;
  total_transactions_q3_2023?: Maybe<Scalars['bigint']['output']>;
  total_transactions_q4_2023?: Maybe<Scalars['bigint']['output']>;
};

/** aggregated selection of "ecosystem.estimated_transaction_totals" */
export type Ecosystem_Estimated_Transaction_Totals_Aggregate = {
  __typename?: 'ecosystem_estimated_transaction_totals_aggregate';
  aggregate?: Maybe<Ecosystem_Estimated_Transaction_Totals_Aggregate_Fields>;
  nodes: Array<Ecosystem_Estimated_Transaction_Totals>;
};

/** aggregate fields of "ecosystem.estimated_transaction_totals" */
export type Ecosystem_Estimated_Transaction_Totals_Aggregate_Fields = {
  __typename?: 'ecosystem_estimated_transaction_totals_aggregate_fields';
  avg?: Maybe<Ecosystem_Estimated_Transaction_Totals_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Ecosystem_Estimated_Transaction_Totals_Max_Fields>;
  min?: Maybe<Ecosystem_Estimated_Transaction_Totals_Min_Fields>;
  stddev?: Maybe<Ecosystem_Estimated_Transaction_Totals_Stddev_Fields>;
  stddev_pop?: Maybe<Ecosystem_Estimated_Transaction_Totals_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Ecosystem_Estimated_Transaction_Totals_Stddev_Samp_Fields>;
  sum?: Maybe<Ecosystem_Estimated_Transaction_Totals_Sum_Fields>;
  var_pop?: Maybe<Ecosystem_Estimated_Transaction_Totals_Var_Pop_Fields>;
  var_samp?: Maybe<Ecosystem_Estimated_Transaction_Totals_Var_Samp_Fields>;
  variance?: Maybe<Ecosystem_Estimated_Transaction_Totals_Variance_Fields>;
};


/** aggregate fields of "ecosystem.estimated_transaction_totals" */
export type Ecosystem_Estimated_Transaction_Totals_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Ecosystem_Estimated_Transaction_Totals_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Ecosystem_Estimated_Transaction_Totals_Avg_Fields = {
  __typename?: 'ecosystem_estimated_transaction_totals_avg_fields';
  atma_transactions?: Maybe<Scalars['Float']['output']>;
  atma_transactions_q1_2023?: Maybe<Scalars['Float']['output']>;
  atma_transactions_q1_2024?: Maybe<Scalars['Float']['output']>;
  atma_transactions_q2_2023?: Maybe<Scalars['Float']['output']>;
  atma_transactions_q3_2023?: Maybe<Scalars['Float']['output']>;
  atma_transactions_q4_2023?: Maybe<Scalars['Float']['output']>;
  other_transactions?: Maybe<Scalars['Float']['output']>;
  other_transactions_q1_2023?: Maybe<Scalars['Float']['output']>;
  other_transactions_q1_2024?: Maybe<Scalars['Float']['output']>;
  other_transactions_q2_2023?: Maybe<Scalars['Float']['output']>;
  other_transactions_q3_2023?: Maybe<Scalars['Float']['output']>;
  other_transactions_q4_2023?: Maybe<Scalars['Float']['output']>;
  total_transactions?: Maybe<Scalars['Float']['output']>;
  total_transactions_q1_2023?: Maybe<Scalars['Float']['output']>;
  total_transactions_q1_2024?: Maybe<Scalars['Float']['output']>;
  total_transactions_q2_2023?: Maybe<Scalars['Float']['output']>;
  total_transactions_q3_2023?: Maybe<Scalars['Float']['output']>;
  total_transactions_q4_2023?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "ecosystem.estimated_transaction_totals". All fields are combined with a logical 'AND'. */
export type Ecosystem_Estimated_Transaction_Totals_Bool_Exp = {
  _and?: InputMaybe<Array<Ecosystem_Estimated_Transaction_Totals_Bool_Exp>>;
  _not?: InputMaybe<Ecosystem_Estimated_Transaction_Totals_Bool_Exp>;
  _or?: InputMaybe<Array<Ecosystem_Estimated_Transaction_Totals_Bool_Exp>>;
  atma_transactions?: InputMaybe<Bigint_Comparison_Exp>;
  atma_transactions_q1_2023?: InputMaybe<Bigint_Comparison_Exp>;
  atma_transactions_q1_2024?: InputMaybe<Bigint_Comparison_Exp>;
  atma_transactions_q2_2023?: InputMaybe<Bigint_Comparison_Exp>;
  atma_transactions_q3_2023?: InputMaybe<Bigint_Comparison_Exp>;
  atma_transactions_q4_2023?: InputMaybe<Bigint_Comparison_Exp>;
  other_transactions?: InputMaybe<Bigint_Comparison_Exp>;
  other_transactions_q1_2023?: InputMaybe<Bigint_Comparison_Exp>;
  other_transactions_q1_2024?: InputMaybe<Bigint_Comparison_Exp>;
  other_transactions_q2_2023?: InputMaybe<Bigint_Comparison_Exp>;
  other_transactions_q3_2023?: InputMaybe<Bigint_Comparison_Exp>;
  other_transactions_q4_2023?: InputMaybe<Bigint_Comparison_Exp>;
  total_transactions?: InputMaybe<Bigint_Comparison_Exp>;
  total_transactions_q1_2023?: InputMaybe<Bigint_Comparison_Exp>;
  total_transactions_q1_2024?: InputMaybe<Bigint_Comparison_Exp>;
  total_transactions_q2_2023?: InputMaybe<Bigint_Comparison_Exp>;
  total_transactions_q3_2023?: InputMaybe<Bigint_Comparison_Exp>;
  total_transactions_q4_2023?: InputMaybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Ecosystem_Estimated_Transaction_Totals_Max_Fields = {
  __typename?: 'ecosystem_estimated_transaction_totals_max_fields';
  atma_transactions?: Maybe<Scalars['bigint']['output']>;
  atma_transactions_q1_2023?: Maybe<Scalars['bigint']['output']>;
  atma_transactions_q1_2024?: Maybe<Scalars['bigint']['output']>;
  atma_transactions_q2_2023?: Maybe<Scalars['bigint']['output']>;
  atma_transactions_q3_2023?: Maybe<Scalars['bigint']['output']>;
  atma_transactions_q4_2023?: Maybe<Scalars['bigint']['output']>;
  other_transactions?: Maybe<Scalars['bigint']['output']>;
  other_transactions_q1_2023?: Maybe<Scalars['bigint']['output']>;
  other_transactions_q1_2024?: Maybe<Scalars['bigint']['output']>;
  other_transactions_q2_2023?: Maybe<Scalars['bigint']['output']>;
  other_transactions_q3_2023?: Maybe<Scalars['bigint']['output']>;
  other_transactions_q4_2023?: Maybe<Scalars['bigint']['output']>;
  total_transactions?: Maybe<Scalars['bigint']['output']>;
  total_transactions_q1_2023?: Maybe<Scalars['bigint']['output']>;
  total_transactions_q1_2024?: Maybe<Scalars['bigint']['output']>;
  total_transactions_q2_2023?: Maybe<Scalars['bigint']['output']>;
  total_transactions_q3_2023?: Maybe<Scalars['bigint']['output']>;
  total_transactions_q4_2023?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type Ecosystem_Estimated_Transaction_Totals_Min_Fields = {
  __typename?: 'ecosystem_estimated_transaction_totals_min_fields';
  atma_transactions?: Maybe<Scalars['bigint']['output']>;
  atma_transactions_q1_2023?: Maybe<Scalars['bigint']['output']>;
  atma_transactions_q1_2024?: Maybe<Scalars['bigint']['output']>;
  atma_transactions_q2_2023?: Maybe<Scalars['bigint']['output']>;
  atma_transactions_q3_2023?: Maybe<Scalars['bigint']['output']>;
  atma_transactions_q4_2023?: Maybe<Scalars['bigint']['output']>;
  other_transactions?: Maybe<Scalars['bigint']['output']>;
  other_transactions_q1_2023?: Maybe<Scalars['bigint']['output']>;
  other_transactions_q1_2024?: Maybe<Scalars['bigint']['output']>;
  other_transactions_q2_2023?: Maybe<Scalars['bigint']['output']>;
  other_transactions_q3_2023?: Maybe<Scalars['bigint']['output']>;
  other_transactions_q4_2023?: Maybe<Scalars['bigint']['output']>;
  total_transactions?: Maybe<Scalars['bigint']['output']>;
  total_transactions_q1_2023?: Maybe<Scalars['bigint']['output']>;
  total_transactions_q1_2024?: Maybe<Scalars['bigint']['output']>;
  total_transactions_q2_2023?: Maybe<Scalars['bigint']['output']>;
  total_transactions_q3_2023?: Maybe<Scalars['bigint']['output']>;
  total_transactions_q4_2023?: Maybe<Scalars['bigint']['output']>;
};

/** Ordering options when selecting data from "ecosystem.estimated_transaction_totals". */
export type Ecosystem_Estimated_Transaction_Totals_Order_By = {
  atma_transactions?: InputMaybe<Order_By>;
  atma_transactions_q1_2023?: InputMaybe<Order_By>;
  atma_transactions_q1_2024?: InputMaybe<Order_By>;
  atma_transactions_q2_2023?: InputMaybe<Order_By>;
  atma_transactions_q3_2023?: InputMaybe<Order_By>;
  atma_transactions_q4_2023?: InputMaybe<Order_By>;
  other_transactions?: InputMaybe<Order_By>;
  other_transactions_q1_2023?: InputMaybe<Order_By>;
  other_transactions_q1_2024?: InputMaybe<Order_By>;
  other_transactions_q2_2023?: InputMaybe<Order_By>;
  other_transactions_q3_2023?: InputMaybe<Order_By>;
  other_transactions_q4_2023?: InputMaybe<Order_By>;
  total_transactions?: InputMaybe<Order_By>;
  total_transactions_q1_2023?: InputMaybe<Order_By>;
  total_transactions_q1_2024?: InputMaybe<Order_By>;
  total_transactions_q2_2023?: InputMaybe<Order_By>;
  total_transactions_q3_2023?: InputMaybe<Order_By>;
  total_transactions_q4_2023?: InputMaybe<Order_By>;
};

/** select columns of table "ecosystem.estimated_transaction_totals" */
export enum Ecosystem_Estimated_Transaction_Totals_Select_Column {
  /** column name */
  AtmaTransactions = 'atma_transactions',
  /** column name */
  AtmaTransactionsQ1_2023 = 'atma_transactions_q1_2023',
  /** column name */
  AtmaTransactionsQ1_2024 = 'atma_transactions_q1_2024',
  /** column name */
  AtmaTransactionsQ2_2023 = 'atma_transactions_q2_2023',
  /** column name */
  AtmaTransactionsQ3_2023 = 'atma_transactions_q3_2023',
  /** column name */
  AtmaTransactionsQ4_2023 = 'atma_transactions_q4_2023',
  /** column name */
  OtherTransactions = 'other_transactions',
  /** column name */
  OtherTransactionsQ1_2023 = 'other_transactions_q1_2023',
  /** column name */
  OtherTransactionsQ1_2024 = 'other_transactions_q1_2024',
  /** column name */
  OtherTransactionsQ2_2023 = 'other_transactions_q2_2023',
  /** column name */
  OtherTransactionsQ3_2023 = 'other_transactions_q3_2023',
  /** column name */
  OtherTransactionsQ4_2023 = 'other_transactions_q4_2023',
  /** column name */
  TotalTransactions = 'total_transactions',
  /** column name */
  TotalTransactionsQ1_2023 = 'total_transactions_q1_2023',
  /** column name */
  TotalTransactionsQ1_2024 = 'total_transactions_q1_2024',
  /** column name */
  TotalTransactionsQ2_2023 = 'total_transactions_q2_2023',
  /** column name */
  TotalTransactionsQ3_2023 = 'total_transactions_q3_2023',
  /** column name */
  TotalTransactionsQ4_2023 = 'total_transactions_q4_2023'
}

/** aggregate stddev on columns */
export type Ecosystem_Estimated_Transaction_Totals_Stddev_Fields = {
  __typename?: 'ecosystem_estimated_transaction_totals_stddev_fields';
  atma_transactions?: Maybe<Scalars['Float']['output']>;
  atma_transactions_q1_2023?: Maybe<Scalars['Float']['output']>;
  atma_transactions_q1_2024?: Maybe<Scalars['Float']['output']>;
  atma_transactions_q2_2023?: Maybe<Scalars['Float']['output']>;
  atma_transactions_q3_2023?: Maybe<Scalars['Float']['output']>;
  atma_transactions_q4_2023?: Maybe<Scalars['Float']['output']>;
  other_transactions?: Maybe<Scalars['Float']['output']>;
  other_transactions_q1_2023?: Maybe<Scalars['Float']['output']>;
  other_transactions_q1_2024?: Maybe<Scalars['Float']['output']>;
  other_transactions_q2_2023?: Maybe<Scalars['Float']['output']>;
  other_transactions_q3_2023?: Maybe<Scalars['Float']['output']>;
  other_transactions_q4_2023?: Maybe<Scalars['Float']['output']>;
  total_transactions?: Maybe<Scalars['Float']['output']>;
  total_transactions_q1_2023?: Maybe<Scalars['Float']['output']>;
  total_transactions_q1_2024?: Maybe<Scalars['Float']['output']>;
  total_transactions_q2_2023?: Maybe<Scalars['Float']['output']>;
  total_transactions_q3_2023?: Maybe<Scalars['Float']['output']>;
  total_transactions_q4_2023?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Ecosystem_Estimated_Transaction_Totals_Stddev_Pop_Fields = {
  __typename?: 'ecosystem_estimated_transaction_totals_stddev_pop_fields';
  atma_transactions?: Maybe<Scalars['Float']['output']>;
  atma_transactions_q1_2023?: Maybe<Scalars['Float']['output']>;
  atma_transactions_q1_2024?: Maybe<Scalars['Float']['output']>;
  atma_transactions_q2_2023?: Maybe<Scalars['Float']['output']>;
  atma_transactions_q3_2023?: Maybe<Scalars['Float']['output']>;
  atma_transactions_q4_2023?: Maybe<Scalars['Float']['output']>;
  other_transactions?: Maybe<Scalars['Float']['output']>;
  other_transactions_q1_2023?: Maybe<Scalars['Float']['output']>;
  other_transactions_q1_2024?: Maybe<Scalars['Float']['output']>;
  other_transactions_q2_2023?: Maybe<Scalars['Float']['output']>;
  other_transactions_q3_2023?: Maybe<Scalars['Float']['output']>;
  other_transactions_q4_2023?: Maybe<Scalars['Float']['output']>;
  total_transactions?: Maybe<Scalars['Float']['output']>;
  total_transactions_q1_2023?: Maybe<Scalars['Float']['output']>;
  total_transactions_q1_2024?: Maybe<Scalars['Float']['output']>;
  total_transactions_q2_2023?: Maybe<Scalars['Float']['output']>;
  total_transactions_q3_2023?: Maybe<Scalars['Float']['output']>;
  total_transactions_q4_2023?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Ecosystem_Estimated_Transaction_Totals_Stddev_Samp_Fields = {
  __typename?: 'ecosystem_estimated_transaction_totals_stddev_samp_fields';
  atma_transactions?: Maybe<Scalars['Float']['output']>;
  atma_transactions_q1_2023?: Maybe<Scalars['Float']['output']>;
  atma_transactions_q1_2024?: Maybe<Scalars['Float']['output']>;
  atma_transactions_q2_2023?: Maybe<Scalars['Float']['output']>;
  atma_transactions_q3_2023?: Maybe<Scalars['Float']['output']>;
  atma_transactions_q4_2023?: Maybe<Scalars['Float']['output']>;
  other_transactions?: Maybe<Scalars['Float']['output']>;
  other_transactions_q1_2023?: Maybe<Scalars['Float']['output']>;
  other_transactions_q1_2024?: Maybe<Scalars['Float']['output']>;
  other_transactions_q2_2023?: Maybe<Scalars['Float']['output']>;
  other_transactions_q3_2023?: Maybe<Scalars['Float']['output']>;
  other_transactions_q4_2023?: Maybe<Scalars['Float']['output']>;
  total_transactions?: Maybe<Scalars['Float']['output']>;
  total_transactions_q1_2023?: Maybe<Scalars['Float']['output']>;
  total_transactions_q1_2024?: Maybe<Scalars['Float']['output']>;
  total_transactions_q2_2023?: Maybe<Scalars['Float']['output']>;
  total_transactions_q3_2023?: Maybe<Scalars['Float']['output']>;
  total_transactions_q4_2023?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "ecosystem_estimated_transaction_totals" */
export type Ecosystem_Estimated_Transaction_Totals_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Ecosystem_Estimated_Transaction_Totals_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Ecosystem_Estimated_Transaction_Totals_Stream_Cursor_Value_Input = {
  atma_transactions?: InputMaybe<Scalars['bigint']['input']>;
  atma_transactions_q1_2023?: InputMaybe<Scalars['bigint']['input']>;
  atma_transactions_q1_2024?: InputMaybe<Scalars['bigint']['input']>;
  atma_transactions_q2_2023?: InputMaybe<Scalars['bigint']['input']>;
  atma_transactions_q3_2023?: InputMaybe<Scalars['bigint']['input']>;
  atma_transactions_q4_2023?: InputMaybe<Scalars['bigint']['input']>;
  other_transactions?: InputMaybe<Scalars['bigint']['input']>;
  other_transactions_q1_2023?: InputMaybe<Scalars['bigint']['input']>;
  other_transactions_q1_2024?: InputMaybe<Scalars['bigint']['input']>;
  other_transactions_q2_2023?: InputMaybe<Scalars['bigint']['input']>;
  other_transactions_q3_2023?: InputMaybe<Scalars['bigint']['input']>;
  other_transactions_q4_2023?: InputMaybe<Scalars['bigint']['input']>;
  total_transactions?: InputMaybe<Scalars['bigint']['input']>;
  total_transactions_q1_2023?: InputMaybe<Scalars['bigint']['input']>;
  total_transactions_q1_2024?: InputMaybe<Scalars['bigint']['input']>;
  total_transactions_q2_2023?: InputMaybe<Scalars['bigint']['input']>;
  total_transactions_q3_2023?: InputMaybe<Scalars['bigint']['input']>;
  total_transactions_q4_2023?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Ecosystem_Estimated_Transaction_Totals_Sum_Fields = {
  __typename?: 'ecosystem_estimated_transaction_totals_sum_fields';
  atma_transactions?: Maybe<Scalars['bigint']['output']>;
  atma_transactions_q1_2023?: Maybe<Scalars['bigint']['output']>;
  atma_transactions_q1_2024?: Maybe<Scalars['bigint']['output']>;
  atma_transactions_q2_2023?: Maybe<Scalars['bigint']['output']>;
  atma_transactions_q3_2023?: Maybe<Scalars['bigint']['output']>;
  atma_transactions_q4_2023?: Maybe<Scalars['bigint']['output']>;
  other_transactions?: Maybe<Scalars['bigint']['output']>;
  other_transactions_q1_2023?: Maybe<Scalars['bigint']['output']>;
  other_transactions_q1_2024?: Maybe<Scalars['bigint']['output']>;
  other_transactions_q2_2023?: Maybe<Scalars['bigint']['output']>;
  other_transactions_q3_2023?: Maybe<Scalars['bigint']['output']>;
  other_transactions_q4_2023?: Maybe<Scalars['bigint']['output']>;
  total_transactions?: Maybe<Scalars['bigint']['output']>;
  total_transactions_q1_2023?: Maybe<Scalars['bigint']['output']>;
  total_transactions_q1_2024?: Maybe<Scalars['bigint']['output']>;
  total_transactions_q2_2023?: Maybe<Scalars['bigint']['output']>;
  total_transactions_q3_2023?: Maybe<Scalars['bigint']['output']>;
  total_transactions_q4_2023?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type Ecosystem_Estimated_Transaction_Totals_Var_Pop_Fields = {
  __typename?: 'ecosystem_estimated_transaction_totals_var_pop_fields';
  atma_transactions?: Maybe<Scalars['Float']['output']>;
  atma_transactions_q1_2023?: Maybe<Scalars['Float']['output']>;
  atma_transactions_q1_2024?: Maybe<Scalars['Float']['output']>;
  atma_transactions_q2_2023?: Maybe<Scalars['Float']['output']>;
  atma_transactions_q3_2023?: Maybe<Scalars['Float']['output']>;
  atma_transactions_q4_2023?: Maybe<Scalars['Float']['output']>;
  other_transactions?: Maybe<Scalars['Float']['output']>;
  other_transactions_q1_2023?: Maybe<Scalars['Float']['output']>;
  other_transactions_q1_2024?: Maybe<Scalars['Float']['output']>;
  other_transactions_q2_2023?: Maybe<Scalars['Float']['output']>;
  other_transactions_q3_2023?: Maybe<Scalars['Float']['output']>;
  other_transactions_q4_2023?: Maybe<Scalars['Float']['output']>;
  total_transactions?: Maybe<Scalars['Float']['output']>;
  total_transactions_q1_2023?: Maybe<Scalars['Float']['output']>;
  total_transactions_q1_2024?: Maybe<Scalars['Float']['output']>;
  total_transactions_q2_2023?: Maybe<Scalars['Float']['output']>;
  total_transactions_q3_2023?: Maybe<Scalars['Float']['output']>;
  total_transactions_q4_2023?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Ecosystem_Estimated_Transaction_Totals_Var_Samp_Fields = {
  __typename?: 'ecosystem_estimated_transaction_totals_var_samp_fields';
  atma_transactions?: Maybe<Scalars['Float']['output']>;
  atma_transactions_q1_2023?: Maybe<Scalars['Float']['output']>;
  atma_transactions_q1_2024?: Maybe<Scalars['Float']['output']>;
  atma_transactions_q2_2023?: Maybe<Scalars['Float']['output']>;
  atma_transactions_q3_2023?: Maybe<Scalars['Float']['output']>;
  atma_transactions_q4_2023?: Maybe<Scalars['Float']['output']>;
  other_transactions?: Maybe<Scalars['Float']['output']>;
  other_transactions_q1_2023?: Maybe<Scalars['Float']['output']>;
  other_transactions_q1_2024?: Maybe<Scalars['Float']['output']>;
  other_transactions_q2_2023?: Maybe<Scalars['Float']['output']>;
  other_transactions_q3_2023?: Maybe<Scalars['Float']['output']>;
  other_transactions_q4_2023?: Maybe<Scalars['Float']['output']>;
  total_transactions?: Maybe<Scalars['Float']['output']>;
  total_transactions_q1_2023?: Maybe<Scalars['Float']['output']>;
  total_transactions_q1_2024?: Maybe<Scalars['Float']['output']>;
  total_transactions_q2_2023?: Maybe<Scalars['Float']['output']>;
  total_transactions_q3_2023?: Maybe<Scalars['Float']['output']>;
  total_transactions_q4_2023?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Ecosystem_Estimated_Transaction_Totals_Variance_Fields = {
  __typename?: 'ecosystem_estimated_transaction_totals_variance_fields';
  atma_transactions?: Maybe<Scalars['Float']['output']>;
  atma_transactions_q1_2023?: Maybe<Scalars['Float']['output']>;
  atma_transactions_q1_2024?: Maybe<Scalars['Float']['output']>;
  atma_transactions_q2_2023?: Maybe<Scalars['Float']['output']>;
  atma_transactions_q3_2023?: Maybe<Scalars['Float']['output']>;
  atma_transactions_q4_2023?: Maybe<Scalars['Float']['output']>;
  other_transactions?: Maybe<Scalars['Float']['output']>;
  other_transactions_q1_2023?: Maybe<Scalars['Float']['output']>;
  other_transactions_q1_2024?: Maybe<Scalars['Float']['output']>;
  other_transactions_q2_2023?: Maybe<Scalars['Float']['output']>;
  other_transactions_q3_2023?: Maybe<Scalars['Float']['output']>;
  other_transactions_q4_2023?: Maybe<Scalars['Float']['output']>;
  total_transactions?: Maybe<Scalars['Float']['output']>;
  total_transactions_q1_2023?: Maybe<Scalars['Float']['output']>;
  total_transactions_q1_2024?: Maybe<Scalars['Float']['output']>;
  total_transactions_q2_2023?: Maybe<Scalars['Float']['output']>;
  total_transactions_q3_2023?: Maybe<Scalars['Float']['output']>;
  total_transactions_q4_2023?: Maybe<Scalars['Float']['output']>;
};

export type Ecosystem_Fees_Paid_Per_Period_Args = {
  end_timestamp?: InputMaybe<Scalars['bigint']['input']>;
  entity_ids?: InputMaybe<Scalars['_entity_id']['input']>;
  period?: InputMaybe<Scalars['String']['input']>;
  start_timestamp?: InputMaybe<Scalars['bigint']['input']>;
};

export type Ecosystem_Fungible_Token_Transfers_Per_Period_Args = {
  end_timestamp?: InputMaybe<Scalars['bigint']['input']>;
  period?: InputMaybe<Scalars['String']['input']>;
  start_timestamp?: InputMaybe<Scalars['bigint']['input']>;
  token_ids?: InputMaybe<Scalars['_entity_id']['input']>;
};

export type Ecosystem_Hcs_Messages_Per_Period_Args = {
  end_timestamp?: InputMaybe<Scalars['bigint']['input']>;
  entity_ids?: InputMaybe<Scalars['_entity_id']['input']>;
  period?: InputMaybe<Scalars['String']['input']>;
  start_timestamp?: InputMaybe<Scalars['bigint']['input']>;
};

/** columns and relationships of "ecosystem.metric" */
export type Ecosystem_Metric = {
  __typename?: 'ecosystem_metric';
  /** An object relationship */
  description?: Maybe<Ecosystem_Metric_Description>;
  /** A computed field, executes function "ecosystem.metric_end_date" */
  end_date?: Maybe<Scalars['timestamp']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  period?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "ecosystem.metric_start_date" */
  start_date?: Maybe<Scalars['timestamp']['output']>;
  timestamp_range?: Maybe<Scalars['int8range']['output']>;
  total?: Maybe<Scalars['bigint']['output']>;
};

export type Ecosystem_Metric_Aggregate = {
  __typename?: 'ecosystem_metric_aggregate';
  aggregate?: Maybe<Ecosystem_Metric_Aggregate_Fields>;
  nodes: Array<Ecosystem_Metric>;
};

/** aggregate fields of "ecosystem.metric" */
export type Ecosystem_Metric_Aggregate_Fields = {
  __typename?: 'ecosystem_metric_aggregate_fields';
  avg?: Maybe<Ecosystem_Metric_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Ecosystem_Metric_Max_Fields>;
  min?: Maybe<Ecosystem_Metric_Min_Fields>;
  stddev?: Maybe<Ecosystem_Metric_Stddev_Fields>;
  stddev_pop?: Maybe<Ecosystem_Metric_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Ecosystem_Metric_Stddev_Samp_Fields>;
  sum?: Maybe<Ecosystem_Metric_Sum_Fields>;
  var_pop?: Maybe<Ecosystem_Metric_Var_Pop_Fields>;
  var_samp?: Maybe<Ecosystem_Metric_Var_Samp_Fields>;
  variance?: Maybe<Ecosystem_Metric_Variance_Fields>;
};


/** aggregate fields of "ecosystem.metric" */
export type Ecosystem_Metric_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Ecosystem_Metric_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Ecosystem_Metric_Avg_Fields = {
  __typename?: 'ecosystem_metric_avg_fields';
  total?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "ecosystem.metric". All fields are combined with a logical 'AND'. */
export type Ecosystem_Metric_Bool_Exp = {
  _and?: InputMaybe<Array<Ecosystem_Metric_Bool_Exp>>;
  _not?: InputMaybe<Ecosystem_Metric_Bool_Exp>;
  _or?: InputMaybe<Array<Ecosystem_Metric_Bool_Exp>>;
  description?: InputMaybe<Ecosystem_Metric_Description_Bool_Exp>;
  end_date?: InputMaybe<Timestamp_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  period?: InputMaybe<String_Comparison_Exp>;
  start_date?: InputMaybe<Timestamp_Comparison_Exp>;
  timestamp_range?: InputMaybe<Int8range_Comparison_Exp>;
  total?: InputMaybe<Bigint_Comparison_Exp>;
};

/** columns and relationships of "ecosystem.metric_description" */
export type Ecosystem_Metric_Description = {
  __typename?: 'ecosystem_metric_description';
  description?: Maybe<Scalars['String']['output']>;
  methodology?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
};

/** aggregated selection of "ecosystem.metric_description" */
export type Ecosystem_Metric_Description_Aggregate = {
  __typename?: 'ecosystem_metric_description_aggregate';
  aggregate?: Maybe<Ecosystem_Metric_Description_Aggregate_Fields>;
  nodes: Array<Ecosystem_Metric_Description>;
};

/** aggregate fields of "ecosystem.metric_description" */
export type Ecosystem_Metric_Description_Aggregate_Fields = {
  __typename?: 'ecosystem_metric_description_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Ecosystem_Metric_Description_Max_Fields>;
  min?: Maybe<Ecosystem_Metric_Description_Min_Fields>;
};


/** aggregate fields of "ecosystem.metric_description" */
export type Ecosystem_Metric_Description_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Ecosystem_Metric_Description_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "ecosystem.metric_description". All fields are combined with a logical 'AND'. */
export type Ecosystem_Metric_Description_Bool_Exp = {
  _and?: InputMaybe<Array<Ecosystem_Metric_Description_Bool_Exp>>;
  _not?: InputMaybe<Ecosystem_Metric_Description_Bool_Exp>;
  _or?: InputMaybe<Array<Ecosystem_Metric_Description_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  methodology?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Ecosystem_Metric_Description_Max_Fields = {
  __typename?: 'ecosystem_metric_description_max_fields';
  description?: Maybe<Scalars['String']['output']>;
  methodology?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Ecosystem_Metric_Description_Min_Fields = {
  __typename?: 'ecosystem_metric_description_min_fields';
  description?: Maybe<Scalars['String']['output']>;
  methodology?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** Ordering options when selecting data from "ecosystem.metric_description". */
export type Ecosystem_Metric_Description_Order_By = {
  description?: InputMaybe<Order_By>;
  methodology?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** select columns of table "ecosystem.metric_description" */
export enum Ecosystem_Metric_Description_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Methodology = 'methodology',
  /** column name */
  Name = 'name'
}

/** Streaming cursor of the table "ecosystem_metric_description" */
export type Ecosystem_Metric_Description_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Ecosystem_Metric_Description_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Ecosystem_Metric_Description_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  methodology?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Ecosystem_Metric_Max_Fields = {
  __typename?: 'ecosystem_metric_max_fields';
  /** A computed field, executes function "ecosystem.metric_end_date" */
  end_date?: Maybe<Scalars['timestamp']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  period?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "ecosystem.metric_start_date" */
  start_date?: Maybe<Scalars['timestamp']['output']>;
  total?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type Ecosystem_Metric_Min_Fields = {
  __typename?: 'ecosystem_metric_min_fields';
  /** A computed field, executes function "ecosystem.metric_end_date" */
  end_date?: Maybe<Scalars['timestamp']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  period?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "ecosystem.metric_start_date" */
  start_date?: Maybe<Scalars['timestamp']['output']>;
  total?: Maybe<Scalars['bigint']['output']>;
};

/** Ordering options when selecting data from "ecosystem.metric". */
export type Ecosystem_Metric_Order_By = {
  description?: InputMaybe<Ecosystem_Metric_Description_Order_By>;
  end_date?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  period?: InputMaybe<Order_By>;
  start_date?: InputMaybe<Order_By>;
  timestamp_range?: InputMaybe<Order_By>;
  total?: InputMaybe<Order_By>;
};

/** select columns of table "ecosystem.metric" */
export enum Ecosystem_Metric_Select_Column {
  /** column name */
  Name = 'name',
  /** column name */
  Period = 'period',
  /** column name */
  TimestampRange = 'timestamp_range',
  /** column name */
  Total = 'total'
}

/** aggregate stddev on columns */
export type Ecosystem_Metric_Stddev_Fields = {
  __typename?: 'ecosystem_metric_stddev_fields';
  total?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Ecosystem_Metric_Stddev_Pop_Fields = {
  __typename?: 'ecosystem_metric_stddev_pop_fields';
  total?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Ecosystem_Metric_Stddev_Samp_Fields = {
  __typename?: 'ecosystem_metric_stddev_samp_fields';
  total?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "ecosystem_metric" */
export type Ecosystem_Metric_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Ecosystem_Metric_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Ecosystem_Metric_Stream_Cursor_Value_Input = {
  name?: InputMaybe<Scalars['String']['input']>;
  period?: InputMaybe<Scalars['String']['input']>;
  timestamp_range?: InputMaybe<Scalars['int8range']['input']>;
  total?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Ecosystem_Metric_Sum_Fields = {
  __typename?: 'ecosystem_metric_sum_fields';
  total?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type Ecosystem_Metric_Var_Pop_Fields = {
  __typename?: 'ecosystem_metric_var_pop_fields';
  total?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Ecosystem_Metric_Var_Samp_Fields = {
  __typename?: 'ecosystem_metric_var_samp_fields';
  total?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Ecosystem_Metric_Variance_Fields = {
  __typename?: 'ecosystem_metric_variance_fields';
  total?: Maybe<Scalars['Float']['output']>;
};

export type Ecosystem_Nft_Collection_Sales_Volume_Args = {
  end_timestamp?: InputMaybe<Scalars['bigint']['input']>;
  excluded_accounts?: InputMaybe<Scalars['_int8']['input']>;
  period?: InputMaybe<Scalars['String']['input']>;
  start_timestamp?: InputMaybe<Scalars['bigint']['input']>;
  token_id?: InputMaybe<Scalars['bigint']['input']>;
};

export type Ecosystem_Nft_Holders_Per_Period_Args = {
  end_timestamp?: InputMaybe<Scalars['bigint']['input']>;
  period?: InputMaybe<Scalars['String']['input']>;
  start_timestamp?: InputMaybe<Scalars['bigint']['input']>;
  token_id?: InputMaybe<Scalars['bigint']['input']>;
};

export type Ecosystem_Non_Fungible_Token_Transfers_Per_Period_Args = {
  end_timestamp?: InputMaybe<Scalars['bigint']['input']>;
  period?: InputMaybe<Scalars['String']['input']>;
  start_timestamp?: InputMaybe<Scalars['bigint']['input']>;
  token_ids?: InputMaybe<Scalars['_entity_id']['input']>;
};

export type Ecosystem_Revenue_Per_Period_Args = {
  end_timestamp?: InputMaybe<Scalars['bigint']['input']>;
  entity_ids?: InputMaybe<Scalars['_entity_id']['input']>;
  period?: InputMaybe<Scalars['String']['input']>;
  start_timestamp?: InputMaybe<Scalars['bigint']['input']>;
};

export type Ecosystem_Smart_Contract_Calls_Per_Period_Args = {
  contract_ids?: InputMaybe<Scalars['_int8']['input']>;
  end_timestamp?: InputMaybe<Scalars['bigint']['input']>;
  period?: InputMaybe<Scalars['String']['input']>;
  start_timestamp?: InputMaybe<Scalars['bigint']['input']>;
};

/** columns and relationships of "ecosystem.transaction_count_by_type" */
export type Ecosystem_Transaction_Count_By_Type = {
  __typename?: 'ecosystem_transaction_count_by_type';
  total?: Maybe<Scalars['bigint']['output']>;
  type?: Maybe<Scalars['smallint']['output']>;
};

/** aggregated selection of "ecosystem.transaction_count_by_type" */
export type Ecosystem_Transaction_Count_By_Type_Aggregate = {
  __typename?: 'ecosystem_transaction_count_by_type_aggregate';
  aggregate?: Maybe<Ecosystem_Transaction_Count_By_Type_Aggregate_Fields>;
  nodes: Array<Ecosystem_Transaction_Count_By_Type>;
};

/** aggregate fields of "ecosystem.transaction_count_by_type" */
export type Ecosystem_Transaction_Count_By_Type_Aggregate_Fields = {
  __typename?: 'ecosystem_transaction_count_by_type_aggregate_fields';
  avg?: Maybe<Ecosystem_Transaction_Count_By_Type_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Ecosystem_Transaction_Count_By_Type_Max_Fields>;
  min?: Maybe<Ecosystem_Transaction_Count_By_Type_Min_Fields>;
  stddev?: Maybe<Ecosystem_Transaction_Count_By_Type_Stddev_Fields>;
  stddev_pop?: Maybe<Ecosystem_Transaction_Count_By_Type_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Ecosystem_Transaction_Count_By_Type_Stddev_Samp_Fields>;
  sum?: Maybe<Ecosystem_Transaction_Count_By_Type_Sum_Fields>;
  var_pop?: Maybe<Ecosystem_Transaction_Count_By_Type_Var_Pop_Fields>;
  var_samp?: Maybe<Ecosystem_Transaction_Count_By_Type_Var_Samp_Fields>;
  variance?: Maybe<Ecosystem_Transaction_Count_By_Type_Variance_Fields>;
};


/** aggregate fields of "ecosystem.transaction_count_by_type" */
export type Ecosystem_Transaction_Count_By_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Ecosystem_Transaction_Count_By_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Ecosystem_Transaction_Count_By_Type_Avg_Fields = {
  __typename?: 'ecosystem_transaction_count_by_type_avg_fields';
  total?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "ecosystem.transaction_count_by_type". All fields are combined with a logical 'AND'. */
export type Ecosystem_Transaction_Count_By_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Ecosystem_Transaction_Count_By_Type_Bool_Exp>>;
  _not?: InputMaybe<Ecosystem_Transaction_Count_By_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Ecosystem_Transaction_Count_By_Type_Bool_Exp>>;
  total?: InputMaybe<Bigint_Comparison_Exp>;
  type?: InputMaybe<Smallint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Ecosystem_Transaction_Count_By_Type_Max_Fields = {
  __typename?: 'ecosystem_transaction_count_by_type_max_fields';
  total?: Maybe<Scalars['bigint']['output']>;
  type?: Maybe<Scalars['smallint']['output']>;
};

/** aggregate min on columns */
export type Ecosystem_Transaction_Count_By_Type_Min_Fields = {
  __typename?: 'ecosystem_transaction_count_by_type_min_fields';
  total?: Maybe<Scalars['bigint']['output']>;
  type?: Maybe<Scalars['smallint']['output']>;
};

/** Ordering options when selecting data from "ecosystem.transaction_count_by_type". */
export type Ecosystem_Transaction_Count_By_Type_Order_By = {
  total?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** select columns of table "ecosystem.transaction_count_by_type" */
export enum Ecosystem_Transaction_Count_By_Type_Select_Column {
  /** column name */
  Total = 'total',
  /** column name */
  Type = 'type'
}

/** aggregate stddev on columns */
export type Ecosystem_Transaction_Count_By_Type_Stddev_Fields = {
  __typename?: 'ecosystem_transaction_count_by_type_stddev_fields';
  total?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Ecosystem_Transaction_Count_By_Type_Stddev_Pop_Fields = {
  __typename?: 'ecosystem_transaction_count_by_type_stddev_pop_fields';
  total?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Ecosystem_Transaction_Count_By_Type_Stddev_Samp_Fields = {
  __typename?: 'ecosystem_transaction_count_by_type_stddev_samp_fields';
  total?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "ecosystem_transaction_count_by_type" */
export type Ecosystem_Transaction_Count_By_Type_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Ecosystem_Transaction_Count_By_Type_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Ecosystem_Transaction_Count_By_Type_Stream_Cursor_Value_Input = {
  total?: InputMaybe<Scalars['bigint']['input']>;
  type?: InputMaybe<Scalars['smallint']['input']>;
};

/** aggregate sum on columns */
export type Ecosystem_Transaction_Count_By_Type_Sum_Fields = {
  __typename?: 'ecosystem_transaction_count_by_type_sum_fields';
  total?: Maybe<Scalars['bigint']['output']>;
  type?: Maybe<Scalars['smallint']['output']>;
};

/** aggregate var_pop on columns */
export type Ecosystem_Transaction_Count_By_Type_Var_Pop_Fields = {
  __typename?: 'ecosystem_transaction_count_by_type_var_pop_fields';
  total?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Ecosystem_Transaction_Count_By_Type_Var_Samp_Fields = {
  __typename?: 'ecosystem_transaction_count_by_type_var_samp_fields';
  total?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Ecosystem_Transaction_Count_By_Type_Variance_Fields = {
  __typename?: 'ecosystem_transaction_count_by_type_variance_fields';
  total?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['Float']['output']>;
};

export type Ecosystem_Transaction_Fees_Per_Period_Args = {
  end_timestamp?: InputMaybe<Scalars['bigint']['input']>;
  entity_ids?: InputMaybe<Scalars['_entity_id']['input']>;
  period?: InputMaybe<Scalars['String']['input']>;
  start_timestamp?: InputMaybe<Scalars['bigint']['input']>;
};

export type Ecosystem_Transactions_By_Type_Args = {
  end_timestamp?: InputMaybe<Scalars['bigint']['input']>;
  entity_ids?: InputMaybe<Scalars['_entity_id']['input']>;
  start_timestamp?: InputMaybe<Scalars['bigint']['input']>;
};

export type Ecosystem_Transactions_Per_Period_Args = {
  end_timestamp?: InputMaybe<Scalars['bigint']['input']>;
  entity_ids?: InputMaybe<Scalars['_entity_id']['input']>;
  period?: InputMaybe<Scalars['String']['input']>;
  start_timestamp?: InputMaybe<Scalars['bigint']['input']>;
};

/** Network entity with state */
export type Entity = {
  __typename?: 'entity';
  alias?: Maybe<Scalars['bytea']['output']>;
  auto_renew_account_id?: Maybe<Scalars['bigint']['output']>;
  auto_renew_period?: Maybe<Scalars['bigint']['output']>;
  balance?: Maybe<Scalars['bigint']['output']>;
  balance_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "entity_balance_timestamp_iso8601" */
  balance_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  created_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "entity_created_timestamp_iso8601" */
  created_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  decline_reward: Scalars['Boolean']['output'];
  /** A computed field, executes function "entity_decoded_key" */
  decoded_key?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "entity_decoded_submit_key" */
  decoded_submit_key?: Maybe<Scalars['String']['output']>;
  deleted?: Maybe<Scalars['Boolean']['output']>;
  /** An object relationship */
  entity_history?: Maybe<Entity_History>;
  /** An object relationship */
  entity_stake?: Maybe<Entity_Stake>;
  ethereum_nonce?: Maybe<Scalars['bigint']['output']>;
  evm_address?: Maybe<Scalars['bytea']['output']>;
  expiration_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "entity_expiration_timestamp_iso8601" */
  expiration_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  id: Scalars['bigint']['output'];
  key?: Maybe<Scalars['bytea']['output']>;
  /** A computed field, executes function "entity_key_type" */
  key_type?: Maybe<Scalars['String']['output']>;
  max_automatic_token_associations?: Maybe<Scalars['Int']['output']>;
  memo: Scalars['String']['output'];
  num: Scalars['bigint']['output'];
  obtainer_id?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "entity_pending_reward" */
  pending_reward?: Maybe<Scalars['bigint']['output']>;
  permanent_removal?: Maybe<Scalars['Boolean']['output']>;
  proxy_account_id?: Maybe<Scalars['bigint']['output']>;
  public_key?: Maybe<Scalars['String']['output']>;
  realm: Scalars['bigint']['output'];
  receiver_sig_required?: Maybe<Scalars['Boolean']['output']>;
  shard: Scalars['bigint']['output'];
  stake_period_start?: Maybe<Scalars['bigint']['output']>;
  staked_account_id?: Maybe<Scalars['bigint']['output']>;
  /** An array relationship */
  staked_node_address_book_entry: Array<Address_Book_Entry>;
  /** An aggregate relationship */
  staked_node_address_book_entry_aggregate: Address_Book_Entry_Aggregate;
  staked_node_id?: Maybe<Scalars['bigint']['output']>;
  /** An array relationship */
  staking_reward_transfer: Array<Staking_Reward_Transfer>;
  /** An aggregate relationship */
  staking_reward_transfer_aggregate: Staking_Reward_Transfer_Aggregate;
  timestamp_range: Scalars['int8range']['output'];
  /** An array relationship */
  token_account: Array<Token_Account>;
  /** An aggregate relationship */
  token_account_aggregate: Token_Account_Aggregate;
  /** An array relationship */
  topic_messages: Array<Topic_Message>;
  /** An aggregate relationship */
  topic_messages_aggregate: Topic_Message_Aggregate;
  /** A computed field, executes function "entity_transaction" */
  transaction?: Maybe<Array<Transaction>>;
  /** A computed field, executes function "account_transfer" */
  transfer?: Maybe<Array<_Transfer>>;
  type: Scalars['entity_type']['output'];
};


/** Network entity with state */
export type EntityStaked_Node_Address_Book_EntryArgs = {
  distinct_on?: InputMaybe<Array<Address_Book_Entry_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Address_Book_Entry_Order_By>>;
  where?: InputMaybe<Address_Book_Entry_Bool_Exp>;
};


/** Network entity with state */
export type EntityStaked_Node_Address_Book_Entry_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Address_Book_Entry_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Address_Book_Entry_Order_By>>;
  where?: InputMaybe<Address_Book_Entry_Bool_Exp>;
};


/** Network entity with state */
export type EntityStaking_Reward_TransferArgs = {
  distinct_on?: InputMaybe<Array<Staking_Reward_Transfer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staking_Reward_Transfer_Order_By>>;
  where?: InputMaybe<Staking_Reward_Transfer_Bool_Exp>;
};


/** Network entity with state */
export type EntityStaking_Reward_Transfer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Staking_Reward_Transfer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staking_Reward_Transfer_Order_By>>;
  where?: InputMaybe<Staking_Reward_Transfer_Bool_Exp>;
};


/** Network entity with state */
export type EntityToken_AccountArgs = {
  distinct_on?: InputMaybe<Array<Token_Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Token_Account_Order_By>>;
  where?: InputMaybe<Token_Account_Bool_Exp>;
};


/** Network entity with state */
export type EntityToken_Account_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Token_Account_Order_By>>;
  where?: InputMaybe<Token_Account_Bool_Exp>;
};


/** Network entity with state */
export type EntityTopic_MessagesArgs = {
  distinct_on?: InputMaybe<Array<Topic_Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Topic_Message_Order_By>>;
  where?: InputMaybe<Topic_Message_Bool_Exp>;
};


/** Network entity with state */
export type EntityTopic_Messages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Topic_Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Topic_Message_Order_By>>;
  where?: InputMaybe<Topic_Message_Bool_Exp>;
};


/** Network entity with state */
export type EntityTransactionArgs = {
  args?: InputMaybe<Transaction_Entity_Args>;
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


/** Network entity with state */
export type EntityTransferArgs = {
  distinct_on?: InputMaybe<Array<_Transfer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<_Transfer_Order_By>>;
  where?: InputMaybe<_Transfer_Bool_Exp>;
};

/** aggregated selection of "entity" */
export type Entity_Aggregate = {
  __typename?: 'entity_aggregate';
  aggregate?: Maybe<Entity_Aggregate_Fields>;
  nodes: Array<Entity>;
};

/** aggregate fields of "entity" */
export type Entity_Aggregate_Fields = {
  __typename?: 'entity_aggregate_fields';
  avg?: Maybe<Entity_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Entity_Max_Fields>;
  min?: Maybe<Entity_Min_Fields>;
  stddev?: Maybe<Entity_Stddev_Fields>;
  stddev_pop?: Maybe<Entity_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Entity_Stddev_Samp_Fields>;
  sum?: Maybe<Entity_Sum_Fields>;
  var_pop?: Maybe<Entity_Var_Pop_Fields>;
  var_samp?: Maybe<Entity_Var_Samp_Fields>;
  variance?: Maybe<Entity_Variance_Fields>;
};


/** aggregate fields of "entity" */
export type Entity_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Entity_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Entity_Avg_Fields = {
  __typename?: 'entity_avg_fields';
  auto_renew_account_id?: Maybe<Scalars['Float']['output']>;
  auto_renew_period?: Maybe<Scalars['Float']['output']>;
  balance?: Maybe<Scalars['Float']['output']>;
  balance_timestamp?: Maybe<Scalars['Float']['output']>;
  created_timestamp?: Maybe<Scalars['Float']['output']>;
  ethereum_nonce?: Maybe<Scalars['Float']['output']>;
  expiration_timestamp?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  max_automatic_token_associations?: Maybe<Scalars['Float']['output']>;
  num?: Maybe<Scalars['Float']['output']>;
  obtainer_id?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "entity_pending_reward" */
  pending_reward?: Maybe<Scalars['bigint']['output']>;
  proxy_account_id?: Maybe<Scalars['Float']['output']>;
  realm?: Maybe<Scalars['Float']['output']>;
  shard?: Maybe<Scalars['Float']['output']>;
  stake_period_start?: Maybe<Scalars['Float']['output']>;
  staked_account_id?: Maybe<Scalars['Float']['output']>;
  staked_node_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "entity". All fields are combined with a logical 'AND'. */
export type Entity_Bool_Exp = {
  _and?: InputMaybe<Array<Entity_Bool_Exp>>;
  _not?: InputMaybe<Entity_Bool_Exp>;
  _or?: InputMaybe<Array<Entity_Bool_Exp>>;
  alias?: InputMaybe<Bytea_Comparison_Exp>;
  auto_renew_account_id?: InputMaybe<Bigint_Comparison_Exp>;
  auto_renew_period?: InputMaybe<Bigint_Comparison_Exp>;
  balance?: InputMaybe<Bigint_Comparison_Exp>;
  balance_timestamp?: InputMaybe<Bigint_Comparison_Exp>;
  balance_timestamp_iso8601?: InputMaybe<String_Comparison_Exp>;
  created_timestamp?: InputMaybe<Bigint_Comparison_Exp>;
  created_timestamp_iso8601?: InputMaybe<String_Comparison_Exp>;
  decline_reward?: InputMaybe<Boolean_Comparison_Exp>;
  decoded_key?: InputMaybe<String_Comparison_Exp>;
  decoded_submit_key?: InputMaybe<String_Comparison_Exp>;
  deleted?: InputMaybe<Boolean_Comparison_Exp>;
  entity_history?: InputMaybe<Entity_History_Bool_Exp>;
  entity_stake?: InputMaybe<Entity_Stake_Bool_Exp>;
  ethereum_nonce?: InputMaybe<Bigint_Comparison_Exp>;
  evm_address?: InputMaybe<Bytea_Comparison_Exp>;
  expiration_timestamp?: InputMaybe<Bigint_Comparison_Exp>;
  expiration_timestamp_iso8601?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  key?: InputMaybe<Bytea_Comparison_Exp>;
  key_type?: InputMaybe<String_Comparison_Exp>;
  max_automatic_token_associations?: InputMaybe<Int_Comparison_Exp>;
  memo?: InputMaybe<String_Comparison_Exp>;
  num?: InputMaybe<Bigint_Comparison_Exp>;
  obtainer_id?: InputMaybe<Bigint_Comparison_Exp>;
  pending_reward?: InputMaybe<Bigint_Comparison_Exp>;
  permanent_removal?: InputMaybe<Boolean_Comparison_Exp>;
  proxy_account_id?: InputMaybe<Bigint_Comparison_Exp>;
  public_key?: InputMaybe<String_Comparison_Exp>;
  realm?: InputMaybe<Bigint_Comparison_Exp>;
  receiver_sig_required?: InputMaybe<Boolean_Comparison_Exp>;
  shard?: InputMaybe<Bigint_Comparison_Exp>;
  stake_period_start?: InputMaybe<Bigint_Comparison_Exp>;
  staked_account_id?: InputMaybe<Bigint_Comparison_Exp>;
  staked_node_address_book_entry?: InputMaybe<Address_Book_Entry_Bool_Exp>;
  staked_node_address_book_entry_aggregate?: InputMaybe<Address_Book_Entry_Aggregate_Bool_Exp>;
  staked_node_id?: InputMaybe<Bigint_Comparison_Exp>;
  staking_reward_transfer?: InputMaybe<Staking_Reward_Transfer_Bool_Exp>;
  staking_reward_transfer_aggregate?: InputMaybe<Staking_Reward_Transfer_Aggregate_Bool_Exp>;
  timestamp_range?: InputMaybe<Int8range_Comparison_Exp>;
  token_account?: InputMaybe<Token_Account_Bool_Exp>;
  token_account_aggregate?: InputMaybe<Token_Account_Aggregate_Bool_Exp>;
  topic_messages?: InputMaybe<Topic_Message_Bool_Exp>;
  topic_messages_aggregate?: InputMaybe<Topic_Message_Aggregate_Bool_Exp>;
  transfer?: InputMaybe<_Transfer_Bool_Exp>;
  type?: InputMaybe<Entity_Type_Comparison_Exp>;
};

/** columns and relationships of "entity_history" */
export type Entity_History = {
  __typename?: 'entity_history';
  alias?: Maybe<Scalars['bytea']['output']>;
  auto_renew_account_id?: Maybe<Scalars['bigint']['output']>;
  auto_renew_period?: Maybe<Scalars['bigint']['output']>;
  balance?: Maybe<Scalars['bigint']['output']>;
  balance_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "entity_history_balance_timestamp_iso8601" */
  balance_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  created_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "entity_history_created_timestamp_iso8601" */
  created_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  decline_reward: Scalars['Boolean']['output'];
  /** A computed field, executes function "entity_history_decoded_key" */
  decoded_key?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "entity_history_decoded_submit_key" */
  decoded_submit_key?: Maybe<Scalars['String']['output']>;
  deleted?: Maybe<Scalars['Boolean']['output']>;
  ethereum_nonce?: Maybe<Scalars['bigint']['output']>;
  evm_address?: Maybe<Scalars['bytea']['output']>;
  expiration_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "entity_history_expiration_timestamp_iso8601" */
  expiration_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  id: Scalars['bigint']['output'];
  key?: Maybe<Scalars['bytea']['output']>;
  max_automatic_token_associations?: Maybe<Scalars['Int']['output']>;
  memo: Scalars['String']['output'];
  num: Scalars['bigint']['output'];
  obtainer_id?: Maybe<Scalars['bigint']['output']>;
  permanent_removal?: Maybe<Scalars['Boolean']['output']>;
  proxy_account_id?: Maybe<Scalars['bigint']['output']>;
  public_key?: Maybe<Scalars['String']['output']>;
  realm: Scalars['bigint']['output'];
  receiver_sig_required?: Maybe<Scalars['Boolean']['output']>;
  shard: Scalars['bigint']['output'];
  stake_period_start?: Maybe<Scalars['bigint']['output']>;
  staked_account_id?: Maybe<Scalars['bigint']['output']>;
  staked_node_id?: Maybe<Scalars['bigint']['output']>;
  timestamp_range: Scalars['int8range']['output'];
  type: Scalars['entity_type']['output'];
};

/** aggregated selection of "entity_history" */
export type Entity_History_Aggregate = {
  __typename?: 'entity_history_aggregate';
  aggregate?: Maybe<Entity_History_Aggregate_Fields>;
  nodes: Array<Entity_History>;
};

/** aggregate fields of "entity_history" */
export type Entity_History_Aggregate_Fields = {
  __typename?: 'entity_history_aggregate_fields';
  avg?: Maybe<Entity_History_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Entity_History_Max_Fields>;
  min?: Maybe<Entity_History_Min_Fields>;
  stddev?: Maybe<Entity_History_Stddev_Fields>;
  stddev_pop?: Maybe<Entity_History_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Entity_History_Stddev_Samp_Fields>;
  sum?: Maybe<Entity_History_Sum_Fields>;
  var_pop?: Maybe<Entity_History_Var_Pop_Fields>;
  var_samp?: Maybe<Entity_History_Var_Samp_Fields>;
  variance?: Maybe<Entity_History_Variance_Fields>;
};


/** aggregate fields of "entity_history" */
export type Entity_History_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Entity_History_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Entity_History_Avg_Fields = {
  __typename?: 'entity_history_avg_fields';
  auto_renew_account_id?: Maybe<Scalars['Float']['output']>;
  auto_renew_period?: Maybe<Scalars['Float']['output']>;
  balance?: Maybe<Scalars['Float']['output']>;
  balance_timestamp?: Maybe<Scalars['Float']['output']>;
  created_timestamp?: Maybe<Scalars['Float']['output']>;
  ethereum_nonce?: Maybe<Scalars['Float']['output']>;
  expiration_timestamp?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  max_automatic_token_associations?: Maybe<Scalars['Float']['output']>;
  num?: Maybe<Scalars['Float']['output']>;
  obtainer_id?: Maybe<Scalars['Float']['output']>;
  proxy_account_id?: Maybe<Scalars['Float']['output']>;
  realm?: Maybe<Scalars['Float']['output']>;
  shard?: Maybe<Scalars['Float']['output']>;
  stake_period_start?: Maybe<Scalars['Float']['output']>;
  staked_account_id?: Maybe<Scalars['Float']['output']>;
  staked_node_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "entity_history". All fields are combined with a logical 'AND'. */
export type Entity_History_Bool_Exp = {
  _and?: InputMaybe<Array<Entity_History_Bool_Exp>>;
  _not?: InputMaybe<Entity_History_Bool_Exp>;
  _or?: InputMaybe<Array<Entity_History_Bool_Exp>>;
  alias?: InputMaybe<Bytea_Comparison_Exp>;
  auto_renew_account_id?: InputMaybe<Bigint_Comparison_Exp>;
  auto_renew_period?: InputMaybe<Bigint_Comparison_Exp>;
  balance?: InputMaybe<Bigint_Comparison_Exp>;
  balance_timestamp?: InputMaybe<Bigint_Comparison_Exp>;
  balance_timestamp_iso8601?: InputMaybe<String_Comparison_Exp>;
  created_timestamp?: InputMaybe<Bigint_Comparison_Exp>;
  created_timestamp_iso8601?: InputMaybe<String_Comparison_Exp>;
  decline_reward?: InputMaybe<Boolean_Comparison_Exp>;
  decoded_key?: InputMaybe<String_Comparison_Exp>;
  decoded_submit_key?: InputMaybe<String_Comparison_Exp>;
  deleted?: InputMaybe<Boolean_Comparison_Exp>;
  ethereum_nonce?: InputMaybe<Bigint_Comparison_Exp>;
  evm_address?: InputMaybe<Bytea_Comparison_Exp>;
  expiration_timestamp?: InputMaybe<Bigint_Comparison_Exp>;
  expiration_timestamp_iso8601?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  key?: InputMaybe<Bytea_Comparison_Exp>;
  max_automatic_token_associations?: InputMaybe<Int_Comparison_Exp>;
  memo?: InputMaybe<String_Comparison_Exp>;
  num?: InputMaybe<Bigint_Comparison_Exp>;
  obtainer_id?: InputMaybe<Bigint_Comparison_Exp>;
  permanent_removal?: InputMaybe<Boolean_Comparison_Exp>;
  proxy_account_id?: InputMaybe<Bigint_Comparison_Exp>;
  public_key?: InputMaybe<String_Comparison_Exp>;
  realm?: InputMaybe<Bigint_Comparison_Exp>;
  receiver_sig_required?: InputMaybe<Boolean_Comparison_Exp>;
  shard?: InputMaybe<Bigint_Comparison_Exp>;
  stake_period_start?: InputMaybe<Bigint_Comparison_Exp>;
  staked_account_id?: InputMaybe<Bigint_Comparison_Exp>;
  staked_node_id?: InputMaybe<Bigint_Comparison_Exp>;
  timestamp_range?: InputMaybe<Int8range_Comparison_Exp>;
  type?: InputMaybe<Entity_Type_Comparison_Exp>;
};

/** aggregate max on columns */
export type Entity_History_Max_Fields = {
  __typename?: 'entity_history_max_fields';
  auto_renew_account_id?: Maybe<Scalars['bigint']['output']>;
  auto_renew_period?: Maybe<Scalars['bigint']['output']>;
  balance?: Maybe<Scalars['bigint']['output']>;
  balance_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "entity_history_balance_timestamp_iso8601" */
  balance_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  created_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "entity_history_created_timestamp_iso8601" */
  created_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "entity_history_decoded_key" */
  decoded_key?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "entity_history_decoded_submit_key" */
  decoded_submit_key?: Maybe<Scalars['String']['output']>;
  ethereum_nonce?: Maybe<Scalars['bigint']['output']>;
  expiration_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "entity_history_expiration_timestamp_iso8601" */
  expiration_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  max_automatic_token_associations?: Maybe<Scalars['Int']['output']>;
  memo?: Maybe<Scalars['String']['output']>;
  num?: Maybe<Scalars['bigint']['output']>;
  obtainer_id?: Maybe<Scalars['bigint']['output']>;
  proxy_account_id?: Maybe<Scalars['bigint']['output']>;
  public_key?: Maybe<Scalars['String']['output']>;
  realm?: Maybe<Scalars['bigint']['output']>;
  shard?: Maybe<Scalars['bigint']['output']>;
  stake_period_start?: Maybe<Scalars['bigint']['output']>;
  staked_account_id?: Maybe<Scalars['bigint']['output']>;
  staked_node_id?: Maybe<Scalars['bigint']['output']>;
  type?: Maybe<Scalars['entity_type']['output']>;
};

/** aggregate min on columns */
export type Entity_History_Min_Fields = {
  __typename?: 'entity_history_min_fields';
  auto_renew_account_id?: Maybe<Scalars['bigint']['output']>;
  auto_renew_period?: Maybe<Scalars['bigint']['output']>;
  balance?: Maybe<Scalars['bigint']['output']>;
  balance_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "entity_history_balance_timestamp_iso8601" */
  balance_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  created_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "entity_history_created_timestamp_iso8601" */
  created_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "entity_history_decoded_key" */
  decoded_key?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "entity_history_decoded_submit_key" */
  decoded_submit_key?: Maybe<Scalars['String']['output']>;
  ethereum_nonce?: Maybe<Scalars['bigint']['output']>;
  expiration_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "entity_history_expiration_timestamp_iso8601" */
  expiration_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  max_automatic_token_associations?: Maybe<Scalars['Int']['output']>;
  memo?: Maybe<Scalars['String']['output']>;
  num?: Maybe<Scalars['bigint']['output']>;
  obtainer_id?: Maybe<Scalars['bigint']['output']>;
  proxy_account_id?: Maybe<Scalars['bigint']['output']>;
  public_key?: Maybe<Scalars['String']['output']>;
  realm?: Maybe<Scalars['bigint']['output']>;
  shard?: Maybe<Scalars['bigint']['output']>;
  stake_period_start?: Maybe<Scalars['bigint']['output']>;
  staked_account_id?: Maybe<Scalars['bigint']['output']>;
  staked_node_id?: Maybe<Scalars['bigint']['output']>;
  type?: Maybe<Scalars['entity_type']['output']>;
};

/** Ordering options when selecting data from "entity_history". */
export type Entity_History_Order_By = {
  alias?: InputMaybe<Order_By>;
  auto_renew_account_id?: InputMaybe<Order_By>;
  auto_renew_period?: InputMaybe<Order_By>;
  balance?: InputMaybe<Order_By>;
  balance_timestamp?: InputMaybe<Order_By>;
  balance_timestamp_iso8601?: InputMaybe<Order_By>;
  created_timestamp?: InputMaybe<Order_By>;
  created_timestamp_iso8601?: InputMaybe<Order_By>;
  decline_reward?: InputMaybe<Order_By>;
  decoded_key?: InputMaybe<Order_By>;
  decoded_submit_key?: InputMaybe<Order_By>;
  deleted?: InputMaybe<Order_By>;
  ethereum_nonce?: InputMaybe<Order_By>;
  evm_address?: InputMaybe<Order_By>;
  expiration_timestamp?: InputMaybe<Order_By>;
  expiration_timestamp_iso8601?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  key?: InputMaybe<Order_By>;
  max_automatic_token_associations?: InputMaybe<Order_By>;
  memo?: InputMaybe<Order_By>;
  num?: InputMaybe<Order_By>;
  obtainer_id?: InputMaybe<Order_By>;
  permanent_removal?: InputMaybe<Order_By>;
  proxy_account_id?: InputMaybe<Order_By>;
  public_key?: InputMaybe<Order_By>;
  realm?: InputMaybe<Order_By>;
  receiver_sig_required?: InputMaybe<Order_By>;
  shard?: InputMaybe<Order_By>;
  stake_period_start?: InputMaybe<Order_By>;
  staked_account_id?: InputMaybe<Order_By>;
  staked_node_id?: InputMaybe<Order_By>;
  timestamp_range?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** select columns of table "entity_history" */
export enum Entity_History_Select_Column {
  /** column name */
  Alias = 'alias',
  /** column name */
  AutoRenewAccountId = 'auto_renew_account_id',
  /** column name */
  AutoRenewPeriod = 'auto_renew_period',
  /** column name */
  Balance = 'balance',
  /** column name */
  BalanceTimestamp = 'balance_timestamp',
  /** column name */
  CreatedTimestamp = 'created_timestamp',
  /** column name */
  DeclineReward = 'decline_reward',
  /** column name */
  Deleted = 'deleted',
  /** column name */
  EthereumNonce = 'ethereum_nonce',
  /** column name */
  EvmAddress = 'evm_address',
  /** column name */
  ExpirationTimestamp = 'expiration_timestamp',
  /** column name */
  Id = 'id',
  /** column name */
  Key = 'key',
  /** column name */
  MaxAutomaticTokenAssociations = 'max_automatic_token_associations',
  /** column name */
  Memo = 'memo',
  /** column name */
  Num = 'num',
  /** column name */
  ObtainerId = 'obtainer_id',
  /** column name */
  PermanentRemoval = 'permanent_removal',
  /** column name */
  ProxyAccountId = 'proxy_account_id',
  /** column name */
  PublicKey = 'public_key',
  /** column name */
  Realm = 'realm',
  /** column name */
  ReceiverSigRequired = 'receiver_sig_required',
  /** column name */
  Shard = 'shard',
  /** column name */
  StakePeriodStart = 'stake_period_start',
  /** column name */
  StakedAccountId = 'staked_account_id',
  /** column name */
  StakedNodeId = 'staked_node_id',
  /** column name */
  TimestampRange = 'timestamp_range',
  /** column name */
  Type = 'type'
}

/** aggregate stddev on columns */
export type Entity_History_Stddev_Fields = {
  __typename?: 'entity_history_stddev_fields';
  auto_renew_account_id?: Maybe<Scalars['Float']['output']>;
  auto_renew_period?: Maybe<Scalars['Float']['output']>;
  balance?: Maybe<Scalars['Float']['output']>;
  balance_timestamp?: Maybe<Scalars['Float']['output']>;
  created_timestamp?: Maybe<Scalars['Float']['output']>;
  ethereum_nonce?: Maybe<Scalars['Float']['output']>;
  expiration_timestamp?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  max_automatic_token_associations?: Maybe<Scalars['Float']['output']>;
  num?: Maybe<Scalars['Float']['output']>;
  obtainer_id?: Maybe<Scalars['Float']['output']>;
  proxy_account_id?: Maybe<Scalars['Float']['output']>;
  realm?: Maybe<Scalars['Float']['output']>;
  shard?: Maybe<Scalars['Float']['output']>;
  stake_period_start?: Maybe<Scalars['Float']['output']>;
  staked_account_id?: Maybe<Scalars['Float']['output']>;
  staked_node_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Entity_History_Stddev_Pop_Fields = {
  __typename?: 'entity_history_stddev_pop_fields';
  auto_renew_account_id?: Maybe<Scalars['Float']['output']>;
  auto_renew_period?: Maybe<Scalars['Float']['output']>;
  balance?: Maybe<Scalars['Float']['output']>;
  balance_timestamp?: Maybe<Scalars['Float']['output']>;
  created_timestamp?: Maybe<Scalars['Float']['output']>;
  ethereum_nonce?: Maybe<Scalars['Float']['output']>;
  expiration_timestamp?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  max_automatic_token_associations?: Maybe<Scalars['Float']['output']>;
  num?: Maybe<Scalars['Float']['output']>;
  obtainer_id?: Maybe<Scalars['Float']['output']>;
  proxy_account_id?: Maybe<Scalars['Float']['output']>;
  realm?: Maybe<Scalars['Float']['output']>;
  shard?: Maybe<Scalars['Float']['output']>;
  stake_period_start?: Maybe<Scalars['Float']['output']>;
  staked_account_id?: Maybe<Scalars['Float']['output']>;
  staked_node_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Entity_History_Stddev_Samp_Fields = {
  __typename?: 'entity_history_stddev_samp_fields';
  auto_renew_account_id?: Maybe<Scalars['Float']['output']>;
  auto_renew_period?: Maybe<Scalars['Float']['output']>;
  balance?: Maybe<Scalars['Float']['output']>;
  balance_timestamp?: Maybe<Scalars['Float']['output']>;
  created_timestamp?: Maybe<Scalars['Float']['output']>;
  ethereum_nonce?: Maybe<Scalars['Float']['output']>;
  expiration_timestamp?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  max_automatic_token_associations?: Maybe<Scalars['Float']['output']>;
  num?: Maybe<Scalars['Float']['output']>;
  obtainer_id?: Maybe<Scalars['Float']['output']>;
  proxy_account_id?: Maybe<Scalars['Float']['output']>;
  realm?: Maybe<Scalars['Float']['output']>;
  shard?: Maybe<Scalars['Float']['output']>;
  stake_period_start?: Maybe<Scalars['Float']['output']>;
  staked_account_id?: Maybe<Scalars['Float']['output']>;
  staked_node_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "entity_history" */
export type Entity_History_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Entity_History_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Entity_History_Stream_Cursor_Value_Input = {
  alias?: InputMaybe<Scalars['bytea']['input']>;
  auto_renew_account_id?: InputMaybe<Scalars['bigint']['input']>;
  auto_renew_period?: InputMaybe<Scalars['bigint']['input']>;
  balance?: InputMaybe<Scalars['bigint']['input']>;
  balance_timestamp?: InputMaybe<Scalars['bigint']['input']>;
  created_timestamp?: InputMaybe<Scalars['bigint']['input']>;
  decline_reward?: InputMaybe<Scalars['Boolean']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  ethereum_nonce?: InputMaybe<Scalars['bigint']['input']>;
  evm_address?: InputMaybe<Scalars['bytea']['input']>;
  expiration_timestamp?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  key?: InputMaybe<Scalars['bytea']['input']>;
  max_automatic_token_associations?: InputMaybe<Scalars['Int']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  num?: InputMaybe<Scalars['bigint']['input']>;
  obtainer_id?: InputMaybe<Scalars['bigint']['input']>;
  permanent_removal?: InputMaybe<Scalars['Boolean']['input']>;
  proxy_account_id?: InputMaybe<Scalars['bigint']['input']>;
  public_key?: InputMaybe<Scalars['String']['input']>;
  realm?: InputMaybe<Scalars['bigint']['input']>;
  receiver_sig_required?: InputMaybe<Scalars['Boolean']['input']>;
  shard?: InputMaybe<Scalars['bigint']['input']>;
  stake_period_start?: InputMaybe<Scalars['bigint']['input']>;
  staked_account_id?: InputMaybe<Scalars['bigint']['input']>;
  staked_node_id?: InputMaybe<Scalars['bigint']['input']>;
  timestamp_range?: InputMaybe<Scalars['int8range']['input']>;
  type?: InputMaybe<Scalars['entity_type']['input']>;
};

/** aggregate sum on columns */
export type Entity_History_Sum_Fields = {
  __typename?: 'entity_history_sum_fields';
  auto_renew_account_id?: Maybe<Scalars['bigint']['output']>;
  auto_renew_period?: Maybe<Scalars['bigint']['output']>;
  balance?: Maybe<Scalars['bigint']['output']>;
  balance_timestamp?: Maybe<Scalars['bigint']['output']>;
  created_timestamp?: Maybe<Scalars['bigint']['output']>;
  ethereum_nonce?: Maybe<Scalars['bigint']['output']>;
  expiration_timestamp?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  max_automatic_token_associations?: Maybe<Scalars['Int']['output']>;
  num?: Maybe<Scalars['bigint']['output']>;
  obtainer_id?: Maybe<Scalars['bigint']['output']>;
  proxy_account_id?: Maybe<Scalars['bigint']['output']>;
  realm?: Maybe<Scalars['bigint']['output']>;
  shard?: Maybe<Scalars['bigint']['output']>;
  stake_period_start?: Maybe<Scalars['bigint']['output']>;
  staked_account_id?: Maybe<Scalars['bigint']['output']>;
  staked_node_id?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type Entity_History_Var_Pop_Fields = {
  __typename?: 'entity_history_var_pop_fields';
  auto_renew_account_id?: Maybe<Scalars['Float']['output']>;
  auto_renew_period?: Maybe<Scalars['Float']['output']>;
  balance?: Maybe<Scalars['Float']['output']>;
  balance_timestamp?: Maybe<Scalars['Float']['output']>;
  created_timestamp?: Maybe<Scalars['Float']['output']>;
  ethereum_nonce?: Maybe<Scalars['Float']['output']>;
  expiration_timestamp?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  max_automatic_token_associations?: Maybe<Scalars['Float']['output']>;
  num?: Maybe<Scalars['Float']['output']>;
  obtainer_id?: Maybe<Scalars['Float']['output']>;
  proxy_account_id?: Maybe<Scalars['Float']['output']>;
  realm?: Maybe<Scalars['Float']['output']>;
  shard?: Maybe<Scalars['Float']['output']>;
  stake_period_start?: Maybe<Scalars['Float']['output']>;
  staked_account_id?: Maybe<Scalars['Float']['output']>;
  staked_node_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Entity_History_Var_Samp_Fields = {
  __typename?: 'entity_history_var_samp_fields';
  auto_renew_account_id?: Maybe<Scalars['Float']['output']>;
  auto_renew_period?: Maybe<Scalars['Float']['output']>;
  balance?: Maybe<Scalars['Float']['output']>;
  balance_timestamp?: Maybe<Scalars['Float']['output']>;
  created_timestamp?: Maybe<Scalars['Float']['output']>;
  ethereum_nonce?: Maybe<Scalars['Float']['output']>;
  expiration_timestamp?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  max_automatic_token_associations?: Maybe<Scalars['Float']['output']>;
  num?: Maybe<Scalars['Float']['output']>;
  obtainer_id?: Maybe<Scalars['Float']['output']>;
  proxy_account_id?: Maybe<Scalars['Float']['output']>;
  realm?: Maybe<Scalars['Float']['output']>;
  shard?: Maybe<Scalars['Float']['output']>;
  stake_period_start?: Maybe<Scalars['Float']['output']>;
  staked_account_id?: Maybe<Scalars['Float']['output']>;
  staked_node_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Entity_History_Variance_Fields = {
  __typename?: 'entity_history_variance_fields';
  auto_renew_account_id?: Maybe<Scalars['Float']['output']>;
  auto_renew_period?: Maybe<Scalars['Float']['output']>;
  balance?: Maybe<Scalars['Float']['output']>;
  balance_timestamp?: Maybe<Scalars['Float']['output']>;
  created_timestamp?: Maybe<Scalars['Float']['output']>;
  ethereum_nonce?: Maybe<Scalars['Float']['output']>;
  expiration_timestamp?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  max_automatic_token_associations?: Maybe<Scalars['Float']['output']>;
  num?: Maybe<Scalars['Float']['output']>;
  obtainer_id?: Maybe<Scalars['Float']['output']>;
  proxy_account_id?: Maybe<Scalars['Float']['output']>;
  realm?: Maybe<Scalars['Float']['output']>;
  shard?: Maybe<Scalars['Float']['output']>;
  stake_period_start?: Maybe<Scalars['Float']['output']>;
  staked_account_id?: Maybe<Scalars['Float']['output']>;
  staked_node_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate max on columns */
export type Entity_Max_Fields = {
  __typename?: 'entity_max_fields';
  auto_renew_account_id?: Maybe<Scalars['bigint']['output']>;
  auto_renew_period?: Maybe<Scalars['bigint']['output']>;
  balance?: Maybe<Scalars['bigint']['output']>;
  balance_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "entity_balance_timestamp_iso8601" */
  balance_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  created_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "entity_created_timestamp_iso8601" */
  created_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "entity_decoded_key" */
  decoded_key?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "entity_decoded_submit_key" */
  decoded_submit_key?: Maybe<Scalars['String']['output']>;
  ethereum_nonce?: Maybe<Scalars['bigint']['output']>;
  expiration_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "entity_expiration_timestamp_iso8601" */
  expiration_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "entity_key_type" */
  key_type?: Maybe<Scalars['String']['output']>;
  max_automatic_token_associations?: Maybe<Scalars['Int']['output']>;
  memo?: Maybe<Scalars['String']['output']>;
  num?: Maybe<Scalars['bigint']['output']>;
  obtainer_id?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "entity_pending_reward" */
  pending_reward?: Maybe<Scalars['bigint']['output']>;
  proxy_account_id?: Maybe<Scalars['bigint']['output']>;
  public_key?: Maybe<Scalars['String']['output']>;
  realm?: Maybe<Scalars['bigint']['output']>;
  shard?: Maybe<Scalars['bigint']['output']>;
  stake_period_start?: Maybe<Scalars['bigint']['output']>;
  staked_account_id?: Maybe<Scalars['bigint']['output']>;
  staked_node_id?: Maybe<Scalars['bigint']['output']>;
  type?: Maybe<Scalars['entity_type']['output']>;
};

/** aggregate min on columns */
export type Entity_Min_Fields = {
  __typename?: 'entity_min_fields';
  auto_renew_account_id?: Maybe<Scalars['bigint']['output']>;
  auto_renew_period?: Maybe<Scalars['bigint']['output']>;
  balance?: Maybe<Scalars['bigint']['output']>;
  balance_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "entity_balance_timestamp_iso8601" */
  balance_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  created_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "entity_created_timestamp_iso8601" */
  created_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "entity_decoded_key" */
  decoded_key?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "entity_decoded_submit_key" */
  decoded_submit_key?: Maybe<Scalars['String']['output']>;
  ethereum_nonce?: Maybe<Scalars['bigint']['output']>;
  expiration_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "entity_expiration_timestamp_iso8601" */
  expiration_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "entity_key_type" */
  key_type?: Maybe<Scalars['String']['output']>;
  max_automatic_token_associations?: Maybe<Scalars['Int']['output']>;
  memo?: Maybe<Scalars['String']['output']>;
  num?: Maybe<Scalars['bigint']['output']>;
  obtainer_id?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "entity_pending_reward" */
  pending_reward?: Maybe<Scalars['bigint']['output']>;
  proxy_account_id?: Maybe<Scalars['bigint']['output']>;
  public_key?: Maybe<Scalars['String']['output']>;
  realm?: Maybe<Scalars['bigint']['output']>;
  shard?: Maybe<Scalars['bigint']['output']>;
  stake_period_start?: Maybe<Scalars['bigint']['output']>;
  staked_account_id?: Maybe<Scalars['bigint']['output']>;
  staked_node_id?: Maybe<Scalars['bigint']['output']>;
  type?: Maybe<Scalars['entity_type']['output']>;
};

/** Ordering options when selecting data from "entity". */
export type Entity_Order_By = {
  alias?: InputMaybe<Order_By>;
  auto_renew_account_id?: InputMaybe<Order_By>;
  auto_renew_period?: InputMaybe<Order_By>;
  balance?: InputMaybe<Order_By>;
  balance_timestamp?: InputMaybe<Order_By>;
  balance_timestamp_iso8601?: InputMaybe<Order_By>;
  created_timestamp?: InputMaybe<Order_By>;
  created_timestamp_iso8601?: InputMaybe<Order_By>;
  decline_reward?: InputMaybe<Order_By>;
  decoded_key?: InputMaybe<Order_By>;
  decoded_submit_key?: InputMaybe<Order_By>;
  deleted?: InputMaybe<Order_By>;
  entity_history?: InputMaybe<Entity_History_Order_By>;
  entity_stake?: InputMaybe<Entity_Stake_Order_By>;
  ethereum_nonce?: InputMaybe<Order_By>;
  evm_address?: InputMaybe<Order_By>;
  expiration_timestamp?: InputMaybe<Order_By>;
  expiration_timestamp_iso8601?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  key?: InputMaybe<Order_By>;
  key_type?: InputMaybe<Order_By>;
  max_automatic_token_associations?: InputMaybe<Order_By>;
  memo?: InputMaybe<Order_By>;
  num?: InputMaybe<Order_By>;
  obtainer_id?: InputMaybe<Order_By>;
  pending_reward?: InputMaybe<Order_By>;
  permanent_removal?: InputMaybe<Order_By>;
  proxy_account_id?: InputMaybe<Order_By>;
  public_key?: InputMaybe<Order_By>;
  realm?: InputMaybe<Order_By>;
  receiver_sig_required?: InputMaybe<Order_By>;
  shard?: InputMaybe<Order_By>;
  stake_period_start?: InputMaybe<Order_By>;
  staked_account_id?: InputMaybe<Order_By>;
  staked_node_address_book_entry_aggregate?: InputMaybe<Address_Book_Entry_Aggregate_Order_By>;
  staked_node_id?: InputMaybe<Order_By>;
  staking_reward_transfer_aggregate?: InputMaybe<Staking_Reward_Transfer_Aggregate_Order_By>;
  timestamp_range?: InputMaybe<Order_By>;
  token_account_aggregate?: InputMaybe<Token_Account_Aggregate_Order_By>;
  topic_messages_aggregate?: InputMaybe<Topic_Message_Aggregate_Order_By>;
  transfer_aggregate?: InputMaybe<_Transfer_Aggregate_Order_By>;
  type?: InputMaybe<Order_By>;
};

/** select columns of table "entity" */
export enum Entity_Select_Column {
  /** column name */
  Alias = 'alias',
  /** column name */
  AutoRenewAccountId = 'auto_renew_account_id',
  /** column name */
  AutoRenewPeriod = 'auto_renew_period',
  /** column name */
  Balance = 'balance',
  /** column name */
  BalanceTimestamp = 'balance_timestamp',
  /** column name */
  CreatedTimestamp = 'created_timestamp',
  /** column name */
  DeclineReward = 'decline_reward',
  /** column name */
  Deleted = 'deleted',
  /** column name */
  EthereumNonce = 'ethereum_nonce',
  /** column name */
  EvmAddress = 'evm_address',
  /** column name */
  ExpirationTimestamp = 'expiration_timestamp',
  /** column name */
  Id = 'id',
  /** column name */
  Key = 'key',
  /** column name */
  MaxAutomaticTokenAssociations = 'max_automatic_token_associations',
  /** column name */
  Memo = 'memo',
  /** column name */
  Num = 'num',
  /** column name */
  ObtainerId = 'obtainer_id',
  /** column name */
  PermanentRemoval = 'permanent_removal',
  /** column name */
  ProxyAccountId = 'proxy_account_id',
  /** column name */
  PublicKey = 'public_key',
  /** column name */
  Realm = 'realm',
  /** column name */
  ReceiverSigRequired = 'receiver_sig_required',
  /** column name */
  Shard = 'shard',
  /** column name */
  StakePeriodStart = 'stake_period_start',
  /** column name */
  StakedAccountId = 'staked_account_id',
  /** column name */
  StakedNodeId = 'staked_node_id',
  /** column name */
  TimestampRange = 'timestamp_range',
  /** column name */
  Type = 'type'
}

/** columns and relationships of "entity_stake" */
export type Entity_Stake = {
  __typename?: 'entity_stake';
  end_stake_period: Scalars['bigint']['output'];
  id: Scalars['bigint']['output'];
  pending_reward: Scalars['bigint']['output'];
  stake_total_start: Scalars['bigint']['output'];
  staked_node_id_start: Scalars['bigint']['output'];
  staked_to_me: Scalars['bigint']['output'];
  timestamp_range: Scalars['int8range']['output'];
};

/** aggregated selection of "entity_stake" */
export type Entity_Stake_Aggregate = {
  __typename?: 'entity_stake_aggregate';
  aggregate?: Maybe<Entity_Stake_Aggregate_Fields>;
  nodes: Array<Entity_Stake>;
};

/** aggregate fields of "entity_stake" */
export type Entity_Stake_Aggregate_Fields = {
  __typename?: 'entity_stake_aggregate_fields';
  avg?: Maybe<Entity_Stake_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Entity_Stake_Max_Fields>;
  min?: Maybe<Entity_Stake_Min_Fields>;
  stddev?: Maybe<Entity_Stake_Stddev_Fields>;
  stddev_pop?: Maybe<Entity_Stake_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Entity_Stake_Stddev_Samp_Fields>;
  sum?: Maybe<Entity_Stake_Sum_Fields>;
  var_pop?: Maybe<Entity_Stake_Var_Pop_Fields>;
  var_samp?: Maybe<Entity_Stake_Var_Samp_Fields>;
  variance?: Maybe<Entity_Stake_Variance_Fields>;
};


/** aggregate fields of "entity_stake" */
export type Entity_Stake_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Entity_Stake_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Entity_Stake_Avg_Fields = {
  __typename?: 'entity_stake_avg_fields';
  end_stake_period?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  pending_reward?: Maybe<Scalars['Float']['output']>;
  stake_total_start?: Maybe<Scalars['Float']['output']>;
  staked_node_id_start?: Maybe<Scalars['Float']['output']>;
  staked_to_me?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "entity_stake". All fields are combined with a logical 'AND'. */
export type Entity_Stake_Bool_Exp = {
  _and?: InputMaybe<Array<Entity_Stake_Bool_Exp>>;
  _not?: InputMaybe<Entity_Stake_Bool_Exp>;
  _or?: InputMaybe<Array<Entity_Stake_Bool_Exp>>;
  end_stake_period?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  pending_reward?: InputMaybe<Bigint_Comparison_Exp>;
  stake_total_start?: InputMaybe<Bigint_Comparison_Exp>;
  staked_node_id_start?: InputMaybe<Bigint_Comparison_Exp>;
  staked_to_me?: InputMaybe<Bigint_Comparison_Exp>;
  timestamp_range?: InputMaybe<Int8range_Comparison_Exp>;
};

/** aggregate max on columns */
export type Entity_Stake_Max_Fields = {
  __typename?: 'entity_stake_max_fields';
  end_stake_period?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  pending_reward?: Maybe<Scalars['bigint']['output']>;
  stake_total_start?: Maybe<Scalars['bigint']['output']>;
  staked_node_id_start?: Maybe<Scalars['bigint']['output']>;
  staked_to_me?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type Entity_Stake_Min_Fields = {
  __typename?: 'entity_stake_min_fields';
  end_stake_period?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  pending_reward?: Maybe<Scalars['bigint']['output']>;
  stake_total_start?: Maybe<Scalars['bigint']['output']>;
  staked_node_id_start?: Maybe<Scalars['bigint']['output']>;
  staked_to_me?: Maybe<Scalars['bigint']['output']>;
};

/** Ordering options when selecting data from "entity_stake". */
export type Entity_Stake_Order_By = {
  end_stake_period?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  pending_reward?: InputMaybe<Order_By>;
  stake_total_start?: InputMaybe<Order_By>;
  staked_node_id_start?: InputMaybe<Order_By>;
  staked_to_me?: InputMaybe<Order_By>;
  timestamp_range?: InputMaybe<Order_By>;
};

/** select columns of table "entity_stake" */
export enum Entity_Stake_Select_Column {
  /** column name */
  EndStakePeriod = 'end_stake_period',
  /** column name */
  Id = 'id',
  /** column name */
  PendingReward = 'pending_reward',
  /** column name */
  StakeTotalStart = 'stake_total_start',
  /** column name */
  StakedNodeIdStart = 'staked_node_id_start',
  /** column name */
  StakedToMe = 'staked_to_me',
  /** column name */
  TimestampRange = 'timestamp_range'
}

/** aggregate stddev on columns */
export type Entity_Stake_Stddev_Fields = {
  __typename?: 'entity_stake_stddev_fields';
  end_stake_period?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  pending_reward?: Maybe<Scalars['Float']['output']>;
  stake_total_start?: Maybe<Scalars['Float']['output']>;
  staked_node_id_start?: Maybe<Scalars['Float']['output']>;
  staked_to_me?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Entity_Stake_Stddev_Pop_Fields = {
  __typename?: 'entity_stake_stddev_pop_fields';
  end_stake_period?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  pending_reward?: Maybe<Scalars['Float']['output']>;
  stake_total_start?: Maybe<Scalars['Float']['output']>;
  staked_node_id_start?: Maybe<Scalars['Float']['output']>;
  staked_to_me?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Entity_Stake_Stddev_Samp_Fields = {
  __typename?: 'entity_stake_stddev_samp_fields';
  end_stake_period?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  pending_reward?: Maybe<Scalars['Float']['output']>;
  stake_total_start?: Maybe<Scalars['Float']['output']>;
  staked_node_id_start?: Maybe<Scalars['Float']['output']>;
  staked_to_me?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "entity_stake" */
export type Entity_Stake_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Entity_Stake_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Entity_Stake_Stream_Cursor_Value_Input = {
  end_stake_period?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  pending_reward?: InputMaybe<Scalars['bigint']['input']>;
  stake_total_start?: InputMaybe<Scalars['bigint']['input']>;
  staked_node_id_start?: InputMaybe<Scalars['bigint']['input']>;
  staked_to_me?: InputMaybe<Scalars['bigint']['input']>;
  timestamp_range?: InputMaybe<Scalars['int8range']['input']>;
};

/** aggregate sum on columns */
export type Entity_Stake_Sum_Fields = {
  __typename?: 'entity_stake_sum_fields';
  end_stake_period?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  pending_reward?: Maybe<Scalars['bigint']['output']>;
  stake_total_start?: Maybe<Scalars['bigint']['output']>;
  staked_node_id_start?: Maybe<Scalars['bigint']['output']>;
  staked_to_me?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type Entity_Stake_Var_Pop_Fields = {
  __typename?: 'entity_stake_var_pop_fields';
  end_stake_period?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  pending_reward?: Maybe<Scalars['Float']['output']>;
  stake_total_start?: Maybe<Scalars['Float']['output']>;
  staked_node_id_start?: Maybe<Scalars['Float']['output']>;
  staked_to_me?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Entity_Stake_Var_Samp_Fields = {
  __typename?: 'entity_stake_var_samp_fields';
  end_stake_period?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  pending_reward?: Maybe<Scalars['Float']['output']>;
  stake_total_start?: Maybe<Scalars['Float']['output']>;
  staked_node_id_start?: Maybe<Scalars['Float']['output']>;
  staked_to_me?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Entity_Stake_Variance_Fields = {
  __typename?: 'entity_stake_variance_fields';
  end_stake_period?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  pending_reward?: Maybe<Scalars['Float']['output']>;
  stake_total_start?: Maybe<Scalars['Float']['output']>;
  staked_node_id_start?: Maybe<Scalars['Float']['output']>;
  staked_to_me?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev on columns */
export type Entity_Stddev_Fields = {
  __typename?: 'entity_stddev_fields';
  auto_renew_account_id?: Maybe<Scalars['Float']['output']>;
  auto_renew_period?: Maybe<Scalars['Float']['output']>;
  balance?: Maybe<Scalars['Float']['output']>;
  balance_timestamp?: Maybe<Scalars['Float']['output']>;
  created_timestamp?: Maybe<Scalars['Float']['output']>;
  ethereum_nonce?: Maybe<Scalars['Float']['output']>;
  expiration_timestamp?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  max_automatic_token_associations?: Maybe<Scalars['Float']['output']>;
  num?: Maybe<Scalars['Float']['output']>;
  obtainer_id?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "entity_pending_reward" */
  pending_reward?: Maybe<Scalars['bigint']['output']>;
  proxy_account_id?: Maybe<Scalars['Float']['output']>;
  realm?: Maybe<Scalars['Float']['output']>;
  shard?: Maybe<Scalars['Float']['output']>;
  stake_period_start?: Maybe<Scalars['Float']['output']>;
  staked_account_id?: Maybe<Scalars['Float']['output']>;
  staked_node_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Entity_Stddev_Pop_Fields = {
  __typename?: 'entity_stddev_pop_fields';
  auto_renew_account_id?: Maybe<Scalars['Float']['output']>;
  auto_renew_period?: Maybe<Scalars['Float']['output']>;
  balance?: Maybe<Scalars['Float']['output']>;
  balance_timestamp?: Maybe<Scalars['Float']['output']>;
  created_timestamp?: Maybe<Scalars['Float']['output']>;
  ethereum_nonce?: Maybe<Scalars['Float']['output']>;
  expiration_timestamp?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  max_automatic_token_associations?: Maybe<Scalars['Float']['output']>;
  num?: Maybe<Scalars['Float']['output']>;
  obtainer_id?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "entity_pending_reward" */
  pending_reward?: Maybe<Scalars['bigint']['output']>;
  proxy_account_id?: Maybe<Scalars['Float']['output']>;
  realm?: Maybe<Scalars['Float']['output']>;
  shard?: Maybe<Scalars['Float']['output']>;
  stake_period_start?: Maybe<Scalars['Float']['output']>;
  staked_account_id?: Maybe<Scalars['Float']['output']>;
  staked_node_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Entity_Stddev_Samp_Fields = {
  __typename?: 'entity_stddev_samp_fields';
  auto_renew_account_id?: Maybe<Scalars['Float']['output']>;
  auto_renew_period?: Maybe<Scalars['Float']['output']>;
  balance?: Maybe<Scalars['Float']['output']>;
  balance_timestamp?: Maybe<Scalars['Float']['output']>;
  created_timestamp?: Maybe<Scalars['Float']['output']>;
  ethereum_nonce?: Maybe<Scalars['Float']['output']>;
  expiration_timestamp?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  max_automatic_token_associations?: Maybe<Scalars['Float']['output']>;
  num?: Maybe<Scalars['Float']['output']>;
  obtainer_id?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "entity_pending_reward" */
  pending_reward?: Maybe<Scalars['bigint']['output']>;
  proxy_account_id?: Maybe<Scalars['Float']['output']>;
  realm?: Maybe<Scalars['Float']['output']>;
  shard?: Maybe<Scalars['Float']['output']>;
  stake_period_start?: Maybe<Scalars['Float']['output']>;
  staked_account_id?: Maybe<Scalars['Float']['output']>;
  staked_node_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "entity" */
export type Entity_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Entity_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Entity_Stream_Cursor_Value_Input = {
  alias?: InputMaybe<Scalars['bytea']['input']>;
  auto_renew_account_id?: InputMaybe<Scalars['bigint']['input']>;
  auto_renew_period?: InputMaybe<Scalars['bigint']['input']>;
  balance?: InputMaybe<Scalars['bigint']['input']>;
  balance_timestamp?: InputMaybe<Scalars['bigint']['input']>;
  created_timestamp?: InputMaybe<Scalars['bigint']['input']>;
  decline_reward?: InputMaybe<Scalars['Boolean']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  ethereum_nonce?: InputMaybe<Scalars['bigint']['input']>;
  evm_address?: InputMaybe<Scalars['bytea']['input']>;
  expiration_timestamp?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  key?: InputMaybe<Scalars['bytea']['input']>;
  max_automatic_token_associations?: InputMaybe<Scalars['Int']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  num?: InputMaybe<Scalars['bigint']['input']>;
  obtainer_id?: InputMaybe<Scalars['bigint']['input']>;
  permanent_removal?: InputMaybe<Scalars['Boolean']['input']>;
  proxy_account_id?: InputMaybe<Scalars['bigint']['input']>;
  public_key?: InputMaybe<Scalars['String']['input']>;
  realm?: InputMaybe<Scalars['bigint']['input']>;
  receiver_sig_required?: InputMaybe<Scalars['Boolean']['input']>;
  shard?: InputMaybe<Scalars['bigint']['input']>;
  stake_period_start?: InputMaybe<Scalars['bigint']['input']>;
  staked_account_id?: InputMaybe<Scalars['bigint']['input']>;
  staked_node_id?: InputMaybe<Scalars['bigint']['input']>;
  timestamp_range?: InputMaybe<Scalars['int8range']['input']>;
  type?: InputMaybe<Scalars['entity_type']['input']>;
};

/** aggregate sum on columns */
export type Entity_Sum_Fields = {
  __typename?: 'entity_sum_fields';
  auto_renew_account_id?: Maybe<Scalars['bigint']['output']>;
  auto_renew_period?: Maybe<Scalars['bigint']['output']>;
  balance?: Maybe<Scalars['bigint']['output']>;
  balance_timestamp?: Maybe<Scalars['bigint']['output']>;
  created_timestamp?: Maybe<Scalars['bigint']['output']>;
  ethereum_nonce?: Maybe<Scalars['bigint']['output']>;
  expiration_timestamp?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  max_automatic_token_associations?: Maybe<Scalars['Int']['output']>;
  num?: Maybe<Scalars['bigint']['output']>;
  obtainer_id?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "entity_pending_reward" */
  pending_reward?: Maybe<Scalars['bigint']['output']>;
  proxy_account_id?: Maybe<Scalars['bigint']['output']>;
  realm?: Maybe<Scalars['bigint']['output']>;
  shard?: Maybe<Scalars['bigint']['output']>;
  stake_period_start?: Maybe<Scalars['bigint']['output']>;
  staked_account_id?: Maybe<Scalars['bigint']['output']>;
  staked_node_id?: Maybe<Scalars['bigint']['output']>;
};

export type Entity_Transaction_Args = {
  _limit?: InputMaybe<Scalars['Int']['input']>;
  _offset?: InputMaybe<Scalars['Int']['input']>;
  _order?: InputMaybe<Scalars['order_by_consensus_timestamp']['input']>;
  entity_row?: InputMaybe<Scalars['entity_scalar']['input']>;
};

/** Boolean expression to compare columns of type "entity_type". All fields are combined with logical 'AND'. */
export type Entity_Type_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['entity_type']['input']>;
  _gt?: InputMaybe<Scalars['entity_type']['input']>;
  _gte?: InputMaybe<Scalars['entity_type']['input']>;
  _in?: InputMaybe<Array<Scalars['entity_type']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['entity_type']['input']>;
  _lte?: InputMaybe<Scalars['entity_type']['input']>;
  _neq?: InputMaybe<Scalars['entity_type']['input']>;
  _nin?: InputMaybe<Array<Scalars['entity_type']['input']>>;
};

/** aggregate var_pop on columns */
export type Entity_Var_Pop_Fields = {
  __typename?: 'entity_var_pop_fields';
  auto_renew_account_id?: Maybe<Scalars['Float']['output']>;
  auto_renew_period?: Maybe<Scalars['Float']['output']>;
  balance?: Maybe<Scalars['Float']['output']>;
  balance_timestamp?: Maybe<Scalars['Float']['output']>;
  created_timestamp?: Maybe<Scalars['Float']['output']>;
  ethereum_nonce?: Maybe<Scalars['Float']['output']>;
  expiration_timestamp?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  max_automatic_token_associations?: Maybe<Scalars['Float']['output']>;
  num?: Maybe<Scalars['Float']['output']>;
  obtainer_id?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "entity_pending_reward" */
  pending_reward?: Maybe<Scalars['bigint']['output']>;
  proxy_account_id?: Maybe<Scalars['Float']['output']>;
  realm?: Maybe<Scalars['Float']['output']>;
  shard?: Maybe<Scalars['Float']['output']>;
  stake_period_start?: Maybe<Scalars['Float']['output']>;
  staked_account_id?: Maybe<Scalars['Float']['output']>;
  staked_node_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Entity_Var_Samp_Fields = {
  __typename?: 'entity_var_samp_fields';
  auto_renew_account_id?: Maybe<Scalars['Float']['output']>;
  auto_renew_period?: Maybe<Scalars['Float']['output']>;
  balance?: Maybe<Scalars['Float']['output']>;
  balance_timestamp?: Maybe<Scalars['Float']['output']>;
  created_timestamp?: Maybe<Scalars['Float']['output']>;
  ethereum_nonce?: Maybe<Scalars['Float']['output']>;
  expiration_timestamp?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  max_automatic_token_associations?: Maybe<Scalars['Float']['output']>;
  num?: Maybe<Scalars['Float']['output']>;
  obtainer_id?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "entity_pending_reward" */
  pending_reward?: Maybe<Scalars['bigint']['output']>;
  proxy_account_id?: Maybe<Scalars['Float']['output']>;
  realm?: Maybe<Scalars['Float']['output']>;
  shard?: Maybe<Scalars['Float']['output']>;
  stake_period_start?: Maybe<Scalars['Float']['output']>;
  staked_account_id?: Maybe<Scalars['Float']['output']>;
  staked_node_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Entity_Variance_Fields = {
  __typename?: 'entity_variance_fields';
  auto_renew_account_id?: Maybe<Scalars['Float']['output']>;
  auto_renew_period?: Maybe<Scalars['Float']['output']>;
  balance?: Maybe<Scalars['Float']['output']>;
  balance_timestamp?: Maybe<Scalars['Float']['output']>;
  created_timestamp?: Maybe<Scalars['Float']['output']>;
  ethereum_nonce?: Maybe<Scalars['Float']['output']>;
  expiration_timestamp?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  max_automatic_token_associations?: Maybe<Scalars['Float']['output']>;
  num?: Maybe<Scalars['Float']['output']>;
  obtainer_id?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "entity_pending_reward" */
  pending_reward?: Maybe<Scalars['bigint']['output']>;
  proxy_account_id?: Maybe<Scalars['Float']['output']>;
  realm?: Maybe<Scalars['Float']['output']>;
  shard?: Maybe<Scalars['Float']['output']>;
  stake_period_start?: Maybe<Scalars['Float']['output']>;
  staked_account_id?: Maybe<Scalars['Float']['output']>;
  staked_node_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "errata_type". All fields are combined with logical 'AND'. */
export type Errata_Type_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['errata_type']['input']>;
  _gt?: InputMaybe<Scalars['errata_type']['input']>;
  _gte?: InputMaybe<Scalars['errata_type']['input']>;
  _in?: InputMaybe<Array<Scalars['errata_type']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['errata_type']['input']>;
  _lte?: InputMaybe<Scalars['errata_type']['input']>;
  _neq?: InputMaybe<Scalars['errata_type']['input']>;
  _nin?: InputMaybe<Array<Scalars['errata_type']['input']>>;
};

/** columns and relationships of "ethereum_transaction" */
export type Ethereum_Transaction = {
  __typename?: 'ethereum_transaction';
  access_list?: Maybe<Scalars['bytea']['output']>;
  call_data?: Maybe<Scalars['bytea']['output']>;
  call_data_id?: Maybe<Scalars['bigint']['output']>;
  chain_id?: Maybe<Scalars['bytea']['output']>;
  consensus_timestamp: Scalars['bigint']['output'];
  /** A computed field, executes function "ethereum_transaction_consensus_timestamp_iso8601" */
  consensus_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  data: Scalars['bytea']['output'];
  gas_limit: Scalars['bigint']['output'];
  gas_price?: Maybe<Scalars['bytea']['output']>;
  hash: Scalars['bytea']['output'];
  max_fee_per_gas?: Maybe<Scalars['bytea']['output']>;
  max_gas_allowance: Scalars['bigint']['output'];
  max_priority_fee_per_gas?: Maybe<Scalars['bytea']['output']>;
  nonce: Scalars['bigint']['output'];
  payer_account_id: Scalars['bigint']['output'];
  recovery_id?: Maybe<Scalars['smallint']['output']>;
  signature_r: Scalars['bytea']['output'];
  signature_s: Scalars['bytea']['output'];
  signature_v?: Maybe<Scalars['bytea']['output']>;
  to_address?: Maybe<Scalars['bytea']['output']>;
  type: Scalars['smallint']['output'];
  value?: Maybe<Scalars['bytea']['output']>;
};

/** aggregated selection of "ethereum_transaction" */
export type Ethereum_Transaction_Aggregate = {
  __typename?: 'ethereum_transaction_aggregate';
  aggregate?: Maybe<Ethereum_Transaction_Aggregate_Fields>;
  nodes: Array<Ethereum_Transaction>;
};

/** aggregate fields of "ethereum_transaction" */
export type Ethereum_Transaction_Aggregate_Fields = {
  __typename?: 'ethereum_transaction_aggregate_fields';
  avg?: Maybe<Ethereum_Transaction_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Ethereum_Transaction_Max_Fields>;
  min?: Maybe<Ethereum_Transaction_Min_Fields>;
  stddev?: Maybe<Ethereum_Transaction_Stddev_Fields>;
  stddev_pop?: Maybe<Ethereum_Transaction_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Ethereum_Transaction_Stddev_Samp_Fields>;
  sum?: Maybe<Ethereum_Transaction_Sum_Fields>;
  var_pop?: Maybe<Ethereum_Transaction_Var_Pop_Fields>;
  var_samp?: Maybe<Ethereum_Transaction_Var_Samp_Fields>;
  variance?: Maybe<Ethereum_Transaction_Variance_Fields>;
};


/** aggregate fields of "ethereum_transaction" */
export type Ethereum_Transaction_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Ethereum_Transaction_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Ethereum_Transaction_Avg_Fields = {
  __typename?: 'ethereum_transaction_avg_fields';
  call_data_id?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  gas_limit?: Maybe<Scalars['Float']['output']>;
  max_gas_allowance?: Maybe<Scalars['Float']['output']>;
  nonce?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  recovery_id?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "ethereum_transaction". All fields are combined with a logical 'AND'. */
export type Ethereum_Transaction_Bool_Exp = {
  _and?: InputMaybe<Array<Ethereum_Transaction_Bool_Exp>>;
  _not?: InputMaybe<Ethereum_Transaction_Bool_Exp>;
  _or?: InputMaybe<Array<Ethereum_Transaction_Bool_Exp>>;
  access_list?: InputMaybe<Bytea_Comparison_Exp>;
  call_data?: InputMaybe<Bytea_Comparison_Exp>;
  call_data_id?: InputMaybe<Bigint_Comparison_Exp>;
  chain_id?: InputMaybe<Bytea_Comparison_Exp>;
  consensus_timestamp?: InputMaybe<Bigint_Comparison_Exp>;
  consensus_timestamp_iso8601?: InputMaybe<String_Comparison_Exp>;
  data?: InputMaybe<Bytea_Comparison_Exp>;
  gas_limit?: InputMaybe<Bigint_Comparison_Exp>;
  gas_price?: InputMaybe<Bytea_Comparison_Exp>;
  hash?: InputMaybe<Bytea_Comparison_Exp>;
  max_fee_per_gas?: InputMaybe<Bytea_Comparison_Exp>;
  max_gas_allowance?: InputMaybe<Bigint_Comparison_Exp>;
  max_priority_fee_per_gas?: InputMaybe<Bytea_Comparison_Exp>;
  nonce?: InputMaybe<Bigint_Comparison_Exp>;
  payer_account_id?: InputMaybe<Bigint_Comparison_Exp>;
  recovery_id?: InputMaybe<Smallint_Comparison_Exp>;
  signature_r?: InputMaybe<Bytea_Comparison_Exp>;
  signature_s?: InputMaybe<Bytea_Comparison_Exp>;
  signature_v?: InputMaybe<Bytea_Comparison_Exp>;
  to_address?: InputMaybe<Bytea_Comparison_Exp>;
  type?: InputMaybe<Smallint_Comparison_Exp>;
  value?: InputMaybe<Bytea_Comparison_Exp>;
};

/** aggregate max on columns */
export type Ethereum_Transaction_Max_Fields = {
  __typename?: 'ethereum_transaction_max_fields';
  call_data_id?: Maybe<Scalars['bigint']['output']>;
  consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "ethereum_transaction_consensus_timestamp_iso8601" */
  consensus_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  gas_limit?: Maybe<Scalars['bigint']['output']>;
  max_gas_allowance?: Maybe<Scalars['bigint']['output']>;
  nonce?: Maybe<Scalars['bigint']['output']>;
  payer_account_id?: Maybe<Scalars['bigint']['output']>;
  recovery_id?: Maybe<Scalars['smallint']['output']>;
  type?: Maybe<Scalars['smallint']['output']>;
};

/** aggregate min on columns */
export type Ethereum_Transaction_Min_Fields = {
  __typename?: 'ethereum_transaction_min_fields';
  call_data_id?: Maybe<Scalars['bigint']['output']>;
  consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "ethereum_transaction_consensus_timestamp_iso8601" */
  consensus_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  gas_limit?: Maybe<Scalars['bigint']['output']>;
  max_gas_allowance?: Maybe<Scalars['bigint']['output']>;
  nonce?: Maybe<Scalars['bigint']['output']>;
  payer_account_id?: Maybe<Scalars['bigint']['output']>;
  recovery_id?: Maybe<Scalars['smallint']['output']>;
  type?: Maybe<Scalars['smallint']['output']>;
};

/** Ordering options when selecting data from "ethereum_transaction". */
export type Ethereum_Transaction_Order_By = {
  access_list?: InputMaybe<Order_By>;
  call_data?: InputMaybe<Order_By>;
  call_data_id?: InputMaybe<Order_By>;
  chain_id?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  consensus_timestamp_iso8601?: InputMaybe<Order_By>;
  data?: InputMaybe<Order_By>;
  gas_limit?: InputMaybe<Order_By>;
  gas_price?: InputMaybe<Order_By>;
  hash?: InputMaybe<Order_By>;
  max_fee_per_gas?: InputMaybe<Order_By>;
  max_gas_allowance?: InputMaybe<Order_By>;
  max_priority_fee_per_gas?: InputMaybe<Order_By>;
  nonce?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  recovery_id?: InputMaybe<Order_By>;
  signature_r?: InputMaybe<Order_By>;
  signature_s?: InputMaybe<Order_By>;
  signature_v?: InputMaybe<Order_By>;
  to_address?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** select columns of table "ethereum_transaction" */
export enum Ethereum_Transaction_Select_Column {
  /** column name */
  AccessList = 'access_list',
  /** column name */
  CallData = 'call_data',
  /** column name */
  CallDataId = 'call_data_id',
  /** column name */
  ChainId = 'chain_id',
  /** column name */
  ConsensusTimestamp = 'consensus_timestamp',
  /** column name */
  Data = 'data',
  /** column name */
  GasLimit = 'gas_limit',
  /** column name */
  GasPrice = 'gas_price',
  /** column name */
  Hash = 'hash',
  /** column name */
  MaxFeePerGas = 'max_fee_per_gas',
  /** column name */
  MaxGasAllowance = 'max_gas_allowance',
  /** column name */
  MaxPriorityFeePerGas = 'max_priority_fee_per_gas',
  /** column name */
  Nonce = 'nonce',
  /** column name */
  PayerAccountId = 'payer_account_id',
  /** column name */
  RecoveryId = 'recovery_id',
  /** column name */
  SignatureR = 'signature_r',
  /** column name */
  SignatureS = 'signature_s',
  /** column name */
  SignatureV = 'signature_v',
  /** column name */
  ToAddress = 'to_address',
  /** column name */
  Type = 'type',
  /** column name */
  Value = 'value'
}

/** aggregate stddev on columns */
export type Ethereum_Transaction_Stddev_Fields = {
  __typename?: 'ethereum_transaction_stddev_fields';
  call_data_id?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  gas_limit?: Maybe<Scalars['Float']['output']>;
  max_gas_allowance?: Maybe<Scalars['Float']['output']>;
  nonce?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  recovery_id?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Ethereum_Transaction_Stddev_Pop_Fields = {
  __typename?: 'ethereum_transaction_stddev_pop_fields';
  call_data_id?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  gas_limit?: Maybe<Scalars['Float']['output']>;
  max_gas_allowance?: Maybe<Scalars['Float']['output']>;
  nonce?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  recovery_id?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Ethereum_Transaction_Stddev_Samp_Fields = {
  __typename?: 'ethereum_transaction_stddev_samp_fields';
  call_data_id?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  gas_limit?: Maybe<Scalars['Float']['output']>;
  max_gas_allowance?: Maybe<Scalars['Float']['output']>;
  nonce?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  recovery_id?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "ethereum_transaction" */
export type Ethereum_Transaction_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Ethereum_Transaction_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Ethereum_Transaction_Stream_Cursor_Value_Input = {
  access_list?: InputMaybe<Scalars['bytea']['input']>;
  call_data?: InputMaybe<Scalars['bytea']['input']>;
  call_data_id?: InputMaybe<Scalars['bigint']['input']>;
  chain_id?: InputMaybe<Scalars['bytea']['input']>;
  consensus_timestamp?: InputMaybe<Scalars['bigint']['input']>;
  data?: InputMaybe<Scalars['bytea']['input']>;
  gas_limit?: InputMaybe<Scalars['bigint']['input']>;
  gas_price?: InputMaybe<Scalars['bytea']['input']>;
  hash?: InputMaybe<Scalars['bytea']['input']>;
  max_fee_per_gas?: InputMaybe<Scalars['bytea']['input']>;
  max_gas_allowance?: InputMaybe<Scalars['bigint']['input']>;
  max_priority_fee_per_gas?: InputMaybe<Scalars['bytea']['input']>;
  nonce?: InputMaybe<Scalars['bigint']['input']>;
  payer_account_id?: InputMaybe<Scalars['bigint']['input']>;
  recovery_id?: InputMaybe<Scalars['smallint']['input']>;
  signature_r?: InputMaybe<Scalars['bytea']['input']>;
  signature_s?: InputMaybe<Scalars['bytea']['input']>;
  signature_v?: InputMaybe<Scalars['bytea']['input']>;
  to_address?: InputMaybe<Scalars['bytea']['input']>;
  type?: InputMaybe<Scalars['smallint']['input']>;
  value?: InputMaybe<Scalars['bytea']['input']>;
};

/** aggregate sum on columns */
export type Ethereum_Transaction_Sum_Fields = {
  __typename?: 'ethereum_transaction_sum_fields';
  call_data_id?: Maybe<Scalars['bigint']['output']>;
  consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  gas_limit?: Maybe<Scalars['bigint']['output']>;
  max_gas_allowance?: Maybe<Scalars['bigint']['output']>;
  nonce?: Maybe<Scalars['bigint']['output']>;
  payer_account_id?: Maybe<Scalars['bigint']['output']>;
  recovery_id?: Maybe<Scalars['smallint']['output']>;
  type?: Maybe<Scalars['smallint']['output']>;
};

/** aggregate var_pop on columns */
export type Ethereum_Transaction_Var_Pop_Fields = {
  __typename?: 'ethereum_transaction_var_pop_fields';
  call_data_id?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  gas_limit?: Maybe<Scalars['Float']['output']>;
  max_gas_allowance?: Maybe<Scalars['Float']['output']>;
  nonce?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  recovery_id?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Ethereum_Transaction_Var_Samp_Fields = {
  __typename?: 'ethereum_transaction_var_samp_fields';
  call_data_id?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  gas_limit?: Maybe<Scalars['Float']['output']>;
  max_gas_allowance?: Maybe<Scalars['Float']['output']>;
  nonce?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  recovery_id?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Ethereum_Transaction_Variance_Fields = {
  __typename?: 'ethereum_transaction_variance_fields';
  call_data_id?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  gas_limit?: Maybe<Scalars['Float']['output']>;
  max_gas_allowance?: Maybe<Scalars['Float']['output']>;
  nonce?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  recovery_id?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "int8range". All fields are combined with logical 'AND'. */
export type Int8range_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['int8range']['input']>;
  _gt?: InputMaybe<Scalars['int8range']['input']>;
  _gte?: InputMaybe<Scalars['int8range']['input']>;
  _in?: InputMaybe<Array<Scalars['int8range']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['int8range']['input']>;
  _lte?: InputMaybe<Scalars['int8range']['input']>;
  _neq?: InputMaybe<Scalars['int8range']['input']>;
  _nin?: InputMaybe<Array<Scalars['int8range']['input']>>;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']['input']>;
  _eq?: InputMaybe<Scalars['jsonb']['input']>;
  _gt?: InputMaybe<Scalars['jsonb']['input']>;
  _gte?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']['input']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['jsonb']['input']>;
  _lte?: InputMaybe<Scalars['jsonb']['input']>;
  _neq?: InputMaybe<Scalars['jsonb']['input']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']['input']>>;
};

/** columns and relationships of "network_stake" */
export type Network_Stake = {
  __typename?: 'network_stake';
  consensus_timestamp: Scalars['bigint']['output'];
  /** A computed field, executes function "network_stake_consensus_timestamp_iso8601" */
  consensus_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  epoch_day: Scalars['bigint']['output'];
  max_stake_rewarded: Scalars['bigint']['output'];
  max_staking_reward_rate_per_hbar: Scalars['bigint']['output'];
  max_total_reward: Scalars['bigint']['output'];
  node_reward_fee_denominator: Scalars['bigint']['output'];
  node_reward_fee_numerator: Scalars['bigint']['output'];
  reserved_staking_rewards: Scalars['bigint']['output'];
  reward_balance_threshold: Scalars['bigint']['output'];
  stake_total: Scalars['bigint']['output'];
  staking_period: Scalars['bigint']['output'];
  staking_period_duration: Scalars['bigint']['output'];
  staking_periods_stored: Scalars['bigint']['output'];
  staking_reward_fee_denominator: Scalars['bigint']['output'];
  staking_reward_fee_numerator: Scalars['bigint']['output'];
  staking_reward_rate: Scalars['bigint']['output'];
  staking_start_threshold: Scalars['bigint']['output'];
  unreserved_staking_reward_balance: Scalars['bigint']['output'];
};

/** aggregated selection of "network_stake" */
export type Network_Stake_Aggregate = {
  __typename?: 'network_stake_aggregate';
  aggregate?: Maybe<Network_Stake_Aggregate_Fields>;
  nodes: Array<Network_Stake>;
};

/** aggregate fields of "network_stake" */
export type Network_Stake_Aggregate_Fields = {
  __typename?: 'network_stake_aggregate_fields';
  avg?: Maybe<Network_Stake_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Network_Stake_Max_Fields>;
  min?: Maybe<Network_Stake_Min_Fields>;
  stddev?: Maybe<Network_Stake_Stddev_Fields>;
  stddev_pop?: Maybe<Network_Stake_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Network_Stake_Stddev_Samp_Fields>;
  sum?: Maybe<Network_Stake_Sum_Fields>;
  var_pop?: Maybe<Network_Stake_Var_Pop_Fields>;
  var_samp?: Maybe<Network_Stake_Var_Samp_Fields>;
  variance?: Maybe<Network_Stake_Variance_Fields>;
};


/** aggregate fields of "network_stake" */
export type Network_Stake_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Network_Stake_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Network_Stake_Avg_Fields = {
  __typename?: 'network_stake_avg_fields';
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  epoch_day?: Maybe<Scalars['Float']['output']>;
  max_stake_rewarded?: Maybe<Scalars['Float']['output']>;
  max_staking_reward_rate_per_hbar?: Maybe<Scalars['Float']['output']>;
  max_total_reward?: Maybe<Scalars['Float']['output']>;
  node_reward_fee_denominator?: Maybe<Scalars['Float']['output']>;
  node_reward_fee_numerator?: Maybe<Scalars['Float']['output']>;
  reserved_staking_rewards?: Maybe<Scalars['Float']['output']>;
  reward_balance_threshold?: Maybe<Scalars['Float']['output']>;
  stake_total?: Maybe<Scalars['Float']['output']>;
  staking_period?: Maybe<Scalars['Float']['output']>;
  staking_period_duration?: Maybe<Scalars['Float']['output']>;
  staking_periods_stored?: Maybe<Scalars['Float']['output']>;
  staking_reward_fee_denominator?: Maybe<Scalars['Float']['output']>;
  staking_reward_fee_numerator?: Maybe<Scalars['Float']['output']>;
  staking_reward_rate?: Maybe<Scalars['Float']['output']>;
  staking_start_threshold?: Maybe<Scalars['Float']['output']>;
  unreserved_staking_reward_balance?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "network_stake". All fields are combined with a logical 'AND'. */
export type Network_Stake_Bool_Exp = {
  _and?: InputMaybe<Array<Network_Stake_Bool_Exp>>;
  _not?: InputMaybe<Network_Stake_Bool_Exp>;
  _or?: InputMaybe<Array<Network_Stake_Bool_Exp>>;
  consensus_timestamp?: InputMaybe<Bigint_Comparison_Exp>;
  consensus_timestamp_iso8601?: InputMaybe<String_Comparison_Exp>;
  epoch_day?: InputMaybe<Bigint_Comparison_Exp>;
  max_stake_rewarded?: InputMaybe<Bigint_Comparison_Exp>;
  max_staking_reward_rate_per_hbar?: InputMaybe<Bigint_Comparison_Exp>;
  max_total_reward?: InputMaybe<Bigint_Comparison_Exp>;
  node_reward_fee_denominator?: InputMaybe<Bigint_Comparison_Exp>;
  node_reward_fee_numerator?: InputMaybe<Bigint_Comparison_Exp>;
  reserved_staking_rewards?: InputMaybe<Bigint_Comparison_Exp>;
  reward_balance_threshold?: InputMaybe<Bigint_Comparison_Exp>;
  stake_total?: InputMaybe<Bigint_Comparison_Exp>;
  staking_period?: InputMaybe<Bigint_Comparison_Exp>;
  staking_period_duration?: InputMaybe<Bigint_Comparison_Exp>;
  staking_periods_stored?: InputMaybe<Bigint_Comparison_Exp>;
  staking_reward_fee_denominator?: InputMaybe<Bigint_Comparison_Exp>;
  staking_reward_fee_numerator?: InputMaybe<Bigint_Comparison_Exp>;
  staking_reward_rate?: InputMaybe<Bigint_Comparison_Exp>;
  staking_start_threshold?: InputMaybe<Bigint_Comparison_Exp>;
  unreserved_staking_reward_balance?: InputMaybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Network_Stake_Max_Fields = {
  __typename?: 'network_stake_max_fields';
  consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "network_stake_consensus_timestamp_iso8601" */
  consensus_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  epoch_day?: Maybe<Scalars['bigint']['output']>;
  max_stake_rewarded?: Maybe<Scalars['bigint']['output']>;
  max_staking_reward_rate_per_hbar?: Maybe<Scalars['bigint']['output']>;
  max_total_reward?: Maybe<Scalars['bigint']['output']>;
  node_reward_fee_denominator?: Maybe<Scalars['bigint']['output']>;
  node_reward_fee_numerator?: Maybe<Scalars['bigint']['output']>;
  reserved_staking_rewards?: Maybe<Scalars['bigint']['output']>;
  reward_balance_threshold?: Maybe<Scalars['bigint']['output']>;
  stake_total?: Maybe<Scalars['bigint']['output']>;
  staking_period?: Maybe<Scalars['bigint']['output']>;
  staking_period_duration?: Maybe<Scalars['bigint']['output']>;
  staking_periods_stored?: Maybe<Scalars['bigint']['output']>;
  staking_reward_fee_denominator?: Maybe<Scalars['bigint']['output']>;
  staking_reward_fee_numerator?: Maybe<Scalars['bigint']['output']>;
  staking_reward_rate?: Maybe<Scalars['bigint']['output']>;
  staking_start_threshold?: Maybe<Scalars['bigint']['output']>;
  unreserved_staking_reward_balance?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type Network_Stake_Min_Fields = {
  __typename?: 'network_stake_min_fields';
  consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "network_stake_consensus_timestamp_iso8601" */
  consensus_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  epoch_day?: Maybe<Scalars['bigint']['output']>;
  max_stake_rewarded?: Maybe<Scalars['bigint']['output']>;
  max_staking_reward_rate_per_hbar?: Maybe<Scalars['bigint']['output']>;
  max_total_reward?: Maybe<Scalars['bigint']['output']>;
  node_reward_fee_denominator?: Maybe<Scalars['bigint']['output']>;
  node_reward_fee_numerator?: Maybe<Scalars['bigint']['output']>;
  reserved_staking_rewards?: Maybe<Scalars['bigint']['output']>;
  reward_balance_threshold?: Maybe<Scalars['bigint']['output']>;
  stake_total?: Maybe<Scalars['bigint']['output']>;
  staking_period?: Maybe<Scalars['bigint']['output']>;
  staking_period_duration?: Maybe<Scalars['bigint']['output']>;
  staking_periods_stored?: Maybe<Scalars['bigint']['output']>;
  staking_reward_fee_denominator?: Maybe<Scalars['bigint']['output']>;
  staking_reward_fee_numerator?: Maybe<Scalars['bigint']['output']>;
  staking_reward_rate?: Maybe<Scalars['bigint']['output']>;
  staking_start_threshold?: Maybe<Scalars['bigint']['output']>;
  unreserved_staking_reward_balance?: Maybe<Scalars['bigint']['output']>;
};

/** Ordering options when selecting data from "network_stake". */
export type Network_Stake_Order_By = {
  consensus_timestamp?: InputMaybe<Order_By>;
  consensus_timestamp_iso8601?: InputMaybe<Order_By>;
  epoch_day?: InputMaybe<Order_By>;
  max_stake_rewarded?: InputMaybe<Order_By>;
  max_staking_reward_rate_per_hbar?: InputMaybe<Order_By>;
  max_total_reward?: InputMaybe<Order_By>;
  node_reward_fee_denominator?: InputMaybe<Order_By>;
  node_reward_fee_numerator?: InputMaybe<Order_By>;
  reserved_staking_rewards?: InputMaybe<Order_By>;
  reward_balance_threshold?: InputMaybe<Order_By>;
  stake_total?: InputMaybe<Order_By>;
  staking_period?: InputMaybe<Order_By>;
  staking_period_duration?: InputMaybe<Order_By>;
  staking_periods_stored?: InputMaybe<Order_By>;
  staking_reward_fee_denominator?: InputMaybe<Order_By>;
  staking_reward_fee_numerator?: InputMaybe<Order_By>;
  staking_reward_rate?: InputMaybe<Order_By>;
  staking_start_threshold?: InputMaybe<Order_By>;
  unreserved_staking_reward_balance?: InputMaybe<Order_By>;
};

/** select columns of table "network_stake" */
export enum Network_Stake_Select_Column {
  /** column name */
  ConsensusTimestamp = 'consensus_timestamp',
  /** column name */
  EpochDay = 'epoch_day',
  /** column name */
  MaxStakeRewarded = 'max_stake_rewarded',
  /** column name */
  MaxStakingRewardRatePerHbar = 'max_staking_reward_rate_per_hbar',
  /** column name */
  MaxTotalReward = 'max_total_reward',
  /** column name */
  NodeRewardFeeDenominator = 'node_reward_fee_denominator',
  /** column name */
  NodeRewardFeeNumerator = 'node_reward_fee_numerator',
  /** column name */
  ReservedStakingRewards = 'reserved_staking_rewards',
  /** column name */
  RewardBalanceThreshold = 'reward_balance_threshold',
  /** column name */
  StakeTotal = 'stake_total',
  /** column name */
  StakingPeriod = 'staking_period',
  /** column name */
  StakingPeriodDuration = 'staking_period_duration',
  /** column name */
  StakingPeriodsStored = 'staking_periods_stored',
  /** column name */
  StakingRewardFeeDenominator = 'staking_reward_fee_denominator',
  /** column name */
  StakingRewardFeeNumerator = 'staking_reward_fee_numerator',
  /** column name */
  StakingRewardRate = 'staking_reward_rate',
  /** column name */
  StakingStartThreshold = 'staking_start_threshold',
  /** column name */
  UnreservedStakingRewardBalance = 'unreserved_staking_reward_balance'
}

/** aggregate stddev on columns */
export type Network_Stake_Stddev_Fields = {
  __typename?: 'network_stake_stddev_fields';
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  epoch_day?: Maybe<Scalars['Float']['output']>;
  max_stake_rewarded?: Maybe<Scalars['Float']['output']>;
  max_staking_reward_rate_per_hbar?: Maybe<Scalars['Float']['output']>;
  max_total_reward?: Maybe<Scalars['Float']['output']>;
  node_reward_fee_denominator?: Maybe<Scalars['Float']['output']>;
  node_reward_fee_numerator?: Maybe<Scalars['Float']['output']>;
  reserved_staking_rewards?: Maybe<Scalars['Float']['output']>;
  reward_balance_threshold?: Maybe<Scalars['Float']['output']>;
  stake_total?: Maybe<Scalars['Float']['output']>;
  staking_period?: Maybe<Scalars['Float']['output']>;
  staking_period_duration?: Maybe<Scalars['Float']['output']>;
  staking_periods_stored?: Maybe<Scalars['Float']['output']>;
  staking_reward_fee_denominator?: Maybe<Scalars['Float']['output']>;
  staking_reward_fee_numerator?: Maybe<Scalars['Float']['output']>;
  staking_reward_rate?: Maybe<Scalars['Float']['output']>;
  staking_start_threshold?: Maybe<Scalars['Float']['output']>;
  unreserved_staking_reward_balance?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Network_Stake_Stddev_Pop_Fields = {
  __typename?: 'network_stake_stddev_pop_fields';
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  epoch_day?: Maybe<Scalars['Float']['output']>;
  max_stake_rewarded?: Maybe<Scalars['Float']['output']>;
  max_staking_reward_rate_per_hbar?: Maybe<Scalars['Float']['output']>;
  max_total_reward?: Maybe<Scalars['Float']['output']>;
  node_reward_fee_denominator?: Maybe<Scalars['Float']['output']>;
  node_reward_fee_numerator?: Maybe<Scalars['Float']['output']>;
  reserved_staking_rewards?: Maybe<Scalars['Float']['output']>;
  reward_balance_threshold?: Maybe<Scalars['Float']['output']>;
  stake_total?: Maybe<Scalars['Float']['output']>;
  staking_period?: Maybe<Scalars['Float']['output']>;
  staking_period_duration?: Maybe<Scalars['Float']['output']>;
  staking_periods_stored?: Maybe<Scalars['Float']['output']>;
  staking_reward_fee_denominator?: Maybe<Scalars['Float']['output']>;
  staking_reward_fee_numerator?: Maybe<Scalars['Float']['output']>;
  staking_reward_rate?: Maybe<Scalars['Float']['output']>;
  staking_start_threshold?: Maybe<Scalars['Float']['output']>;
  unreserved_staking_reward_balance?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Network_Stake_Stddev_Samp_Fields = {
  __typename?: 'network_stake_stddev_samp_fields';
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  epoch_day?: Maybe<Scalars['Float']['output']>;
  max_stake_rewarded?: Maybe<Scalars['Float']['output']>;
  max_staking_reward_rate_per_hbar?: Maybe<Scalars['Float']['output']>;
  max_total_reward?: Maybe<Scalars['Float']['output']>;
  node_reward_fee_denominator?: Maybe<Scalars['Float']['output']>;
  node_reward_fee_numerator?: Maybe<Scalars['Float']['output']>;
  reserved_staking_rewards?: Maybe<Scalars['Float']['output']>;
  reward_balance_threshold?: Maybe<Scalars['Float']['output']>;
  stake_total?: Maybe<Scalars['Float']['output']>;
  staking_period?: Maybe<Scalars['Float']['output']>;
  staking_period_duration?: Maybe<Scalars['Float']['output']>;
  staking_periods_stored?: Maybe<Scalars['Float']['output']>;
  staking_reward_fee_denominator?: Maybe<Scalars['Float']['output']>;
  staking_reward_fee_numerator?: Maybe<Scalars['Float']['output']>;
  staking_reward_rate?: Maybe<Scalars['Float']['output']>;
  staking_start_threshold?: Maybe<Scalars['Float']['output']>;
  unreserved_staking_reward_balance?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "network_stake" */
export type Network_Stake_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Network_Stake_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Network_Stake_Stream_Cursor_Value_Input = {
  consensus_timestamp?: InputMaybe<Scalars['bigint']['input']>;
  epoch_day?: InputMaybe<Scalars['bigint']['input']>;
  max_stake_rewarded?: InputMaybe<Scalars['bigint']['input']>;
  max_staking_reward_rate_per_hbar?: InputMaybe<Scalars['bigint']['input']>;
  max_total_reward?: InputMaybe<Scalars['bigint']['input']>;
  node_reward_fee_denominator?: InputMaybe<Scalars['bigint']['input']>;
  node_reward_fee_numerator?: InputMaybe<Scalars['bigint']['input']>;
  reserved_staking_rewards?: InputMaybe<Scalars['bigint']['input']>;
  reward_balance_threshold?: InputMaybe<Scalars['bigint']['input']>;
  stake_total?: InputMaybe<Scalars['bigint']['input']>;
  staking_period?: InputMaybe<Scalars['bigint']['input']>;
  staking_period_duration?: InputMaybe<Scalars['bigint']['input']>;
  staking_periods_stored?: InputMaybe<Scalars['bigint']['input']>;
  staking_reward_fee_denominator?: InputMaybe<Scalars['bigint']['input']>;
  staking_reward_fee_numerator?: InputMaybe<Scalars['bigint']['input']>;
  staking_reward_rate?: InputMaybe<Scalars['bigint']['input']>;
  staking_start_threshold?: InputMaybe<Scalars['bigint']['input']>;
  unreserved_staking_reward_balance?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Network_Stake_Sum_Fields = {
  __typename?: 'network_stake_sum_fields';
  consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  epoch_day?: Maybe<Scalars['bigint']['output']>;
  max_stake_rewarded?: Maybe<Scalars['bigint']['output']>;
  max_staking_reward_rate_per_hbar?: Maybe<Scalars['bigint']['output']>;
  max_total_reward?: Maybe<Scalars['bigint']['output']>;
  node_reward_fee_denominator?: Maybe<Scalars['bigint']['output']>;
  node_reward_fee_numerator?: Maybe<Scalars['bigint']['output']>;
  reserved_staking_rewards?: Maybe<Scalars['bigint']['output']>;
  reward_balance_threshold?: Maybe<Scalars['bigint']['output']>;
  stake_total?: Maybe<Scalars['bigint']['output']>;
  staking_period?: Maybe<Scalars['bigint']['output']>;
  staking_period_duration?: Maybe<Scalars['bigint']['output']>;
  staking_periods_stored?: Maybe<Scalars['bigint']['output']>;
  staking_reward_fee_denominator?: Maybe<Scalars['bigint']['output']>;
  staking_reward_fee_numerator?: Maybe<Scalars['bigint']['output']>;
  staking_reward_rate?: Maybe<Scalars['bigint']['output']>;
  staking_start_threshold?: Maybe<Scalars['bigint']['output']>;
  unreserved_staking_reward_balance?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type Network_Stake_Var_Pop_Fields = {
  __typename?: 'network_stake_var_pop_fields';
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  epoch_day?: Maybe<Scalars['Float']['output']>;
  max_stake_rewarded?: Maybe<Scalars['Float']['output']>;
  max_staking_reward_rate_per_hbar?: Maybe<Scalars['Float']['output']>;
  max_total_reward?: Maybe<Scalars['Float']['output']>;
  node_reward_fee_denominator?: Maybe<Scalars['Float']['output']>;
  node_reward_fee_numerator?: Maybe<Scalars['Float']['output']>;
  reserved_staking_rewards?: Maybe<Scalars['Float']['output']>;
  reward_balance_threshold?: Maybe<Scalars['Float']['output']>;
  stake_total?: Maybe<Scalars['Float']['output']>;
  staking_period?: Maybe<Scalars['Float']['output']>;
  staking_period_duration?: Maybe<Scalars['Float']['output']>;
  staking_periods_stored?: Maybe<Scalars['Float']['output']>;
  staking_reward_fee_denominator?: Maybe<Scalars['Float']['output']>;
  staking_reward_fee_numerator?: Maybe<Scalars['Float']['output']>;
  staking_reward_rate?: Maybe<Scalars['Float']['output']>;
  staking_start_threshold?: Maybe<Scalars['Float']['output']>;
  unreserved_staking_reward_balance?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Network_Stake_Var_Samp_Fields = {
  __typename?: 'network_stake_var_samp_fields';
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  epoch_day?: Maybe<Scalars['Float']['output']>;
  max_stake_rewarded?: Maybe<Scalars['Float']['output']>;
  max_staking_reward_rate_per_hbar?: Maybe<Scalars['Float']['output']>;
  max_total_reward?: Maybe<Scalars['Float']['output']>;
  node_reward_fee_denominator?: Maybe<Scalars['Float']['output']>;
  node_reward_fee_numerator?: Maybe<Scalars['Float']['output']>;
  reserved_staking_rewards?: Maybe<Scalars['Float']['output']>;
  reward_balance_threshold?: Maybe<Scalars['Float']['output']>;
  stake_total?: Maybe<Scalars['Float']['output']>;
  staking_period?: Maybe<Scalars['Float']['output']>;
  staking_period_duration?: Maybe<Scalars['Float']['output']>;
  staking_periods_stored?: Maybe<Scalars['Float']['output']>;
  staking_reward_fee_denominator?: Maybe<Scalars['Float']['output']>;
  staking_reward_fee_numerator?: Maybe<Scalars['Float']['output']>;
  staking_reward_rate?: Maybe<Scalars['Float']['output']>;
  staking_start_threshold?: Maybe<Scalars['Float']['output']>;
  unreserved_staking_reward_balance?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Network_Stake_Variance_Fields = {
  __typename?: 'network_stake_variance_fields';
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  epoch_day?: Maybe<Scalars['Float']['output']>;
  max_stake_rewarded?: Maybe<Scalars['Float']['output']>;
  max_staking_reward_rate_per_hbar?: Maybe<Scalars['Float']['output']>;
  max_total_reward?: Maybe<Scalars['Float']['output']>;
  node_reward_fee_denominator?: Maybe<Scalars['Float']['output']>;
  node_reward_fee_numerator?: Maybe<Scalars['Float']['output']>;
  reserved_staking_rewards?: Maybe<Scalars['Float']['output']>;
  reward_balance_threshold?: Maybe<Scalars['Float']['output']>;
  stake_total?: Maybe<Scalars['Float']['output']>;
  staking_period?: Maybe<Scalars['Float']['output']>;
  staking_period_duration?: Maybe<Scalars['Float']['output']>;
  staking_periods_stored?: Maybe<Scalars['Float']['output']>;
  staking_reward_fee_denominator?: Maybe<Scalars['Float']['output']>;
  staking_reward_fee_numerator?: Maybe<Scalars['Float']['output']>;
  staking_reward_rate?: Maybe<Scalars['Float']['output']>;
  staking_start_threshold?: Maybe<Scalars['Float']['output']>;
  unreserved_staking_reward_balance?: Maybe<Scalars['Float']['output']>;
};

/** Non-Fungible Tokens (NFTs) minted on network */
export type Nft = {
  __typename?: 'nft';
  account_id?: Maybe<Scalars['bigint']['output']>;
  created_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "nft_created_timestamp_iso8601" */
  created_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "decoded_metadata_nft" */
  decoded_metadata?: Maybe<Scalars['String']['output']>;
  delegating_spender?: Maybe<Scalars['bigint']['output']>;
  deleted?: Maybe<Scalars['Boolean']['output']>;
  /** An array relationship */
  history: Array<Nft_History>;
  /** An aggregate relationship */
  history_aggregate: Nft_History_Aggregate;
  metadata?: Maybe<Scalars['bytea']['output']>;
  /** A computed field, executes function "modified_timestamp_nft" */
  modified_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "nft_modified_timestamp_iso8601" */
  modified_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  serial_number: Scalars['bigint']['output'];
  spender?: Maybe<Scalars['bigint']['output']>;
  timestamp_range: Scalars['int8range']['output'];
  /** An object relationship */
  token?: Maybe<Token>;
  token_id: Scalars['bigint']['output'];
};


/** Non-Fungible Tokens (NFTs) minted on network */
export type NftHistoryArgs = {
  distinct_on?: InputMaybe<Array<Nft_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_History_Order_By>>;
  where?: InputMaybe<Nft_History_Bool_Exp>;
};


/** Non-Fungible Tokens (NFTs) minted on network */
export type NftHistory_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nft_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_History_Order_By>>;
  where?: InputMaybe<Nft_History_Bool_Exp>;
};

/** aggregated selection of "nft" */
export type Nft_Aggregate = {
  __typename?: 'nft_aggregate';
  aggregate?: Maybe<Nft_Aggregate_Fields>;
  nodes: Array<Nft>;
};

export type Nft_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Nft_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Nft_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Nft_Aggregate_Bool_Exp_Count>;
};

export type Nft_Aggregate_Bool_Exp_Bool_And = {
  arguments: Nft_Select_Column_Nft_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Nft_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Nft_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Nft_Select_Column_Nft_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Nft_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Nft_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Nft_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Nft_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "nft" */
export type Nft_Aggregate_Fields = {
  __typename?: 'nft_aggregate_fields';
  avg?: Maybe<Nft_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Nft_Max_Fields>;
  min?: Maybe<Nft_Min_Fields>;
  stddev?: Maybe<Nft_Stddev_Fields>;
  stddev_pop?: Maybe<Nft_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Nft_Stddev_Samp_Fields>;
  sum?: Maybe<Nft_Sum_Fields>;
  var_pop?: Maybe<Nft_Var_Pop_Fields>;
  var_samp?: Maybe<Nft_Var_Samp_Fields>;
  variance?: Maybe<Nft_Variance_Fields>;
};


/** aggregate fields of "nft" */
export type Nft_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nft_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "nft" */
export type Nft_Aggregate_Order_By = {
  avg?: InputMaybe<Nft_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Nft_Max_Order_By>;
  min?: InputMaybe<Nft_Min_Order_By>;
  stddev?: InputMaybe<Nft_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Nft_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Nft_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Nft_Sum_Order_By>;
  var_pop?: InputMaybe<Nft_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Nft_Var_Samp_Order_By>;
  variance?: InputMaybe<Nft_Variance_Order_By>;
};

/** NFT allowances delegated by payer to spender */
export type Nft_Allowance = {
  __typename?: 'nft_allowance';
  approved_for_all: Scalars['Boolean']['output'];
  /** A computed field, executes function "modified_timestamp_nft_allowance" */
  modified_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "nft_allowance_modified_timestamp_iso8601" */
  modified_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  owner: Scalars['bigint']['output'];
  payer_account_id: Scalars['bigint']['output'];
  spender: Scalars['bigint']['output'];
  timestamp_range: Scalars['int8range']['output'];
  token_id: Scalars['bigint']['output'];
};

/** aggregated selection of "nft_allowance" */
export type Nft_Allowance_Aggregate = {
  __typename?: 'nft_allowance_aggregate';
  aggregate?: Maybe<Nft_Allowance_Aggregate_Fields>;
  nodes: Array<Nft_Allowance>;
};

/** aggregate fields of "nft_allowance" */
export type Nft_Allowance_Aggregate_Fields = {
  __typename?: 'nft_allowance_aggregate_fields';
  avg?: Maybe<Nft_Allowance_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Nft_Allowance_Max_Fields>;
  min?: Maybe<Nft_Allowance_Min_Fields>;
  stddev?: Maybe<Nft_Allowance_Stddev_Fields>;
  stddev_pop?: Maybe<Nft_Allowance_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Nft_Allowance_Stddev_Samp_Fields>;
  sum?: Maybe<Nft_Allowance_Sum_Fields>;
  var_pop?: Maybe<Nft_Allowance_Var_Pop_Fields>;
  var_samp?: Maybe<Nft_Allowance_Var_Samp_Fields>;
  variance?: Maybe<Nft_Allowance_Variance_Fields>;
};


/** aggregate fields of "nft_allowance" */
export type Nft_Allowance_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nft_Allowance_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Nft_Allowance_Avg_Fields = {
  __typename?: 'nft_allowance_avg_fields';
  /** A computed field, executes function "modified_timestamp_nft_allowance" */
  modified_timestamp?: Maybe<Scalars['bigint']['output']>;
  owner?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  spender?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "nft_allowance". All fields are combined with a logical 'AND'. */
export type Nft_Allowance_Bool_Exp = {
  _and?: InputMaybe<Array<Nft_Allowance_Bool_Exp>>;
  _not?: InputMaybe<Nft_Allowance_Bool_Exp>;
  _or?: InputMaybe<Array<Nft_Allowance_Bool_Exp>>;
  approved_for_all?: InputMaybe<Boolean_Comparison_Exp>;
  modified_timestamp?: InputMaybe<Bigint_Comparison_Exp>;
  modified_timestamp_iso8601?: InputMaybe<String_Comparison_Exp>;
  owner?: InputMaybe<Bigint_Comparison_Exp>;
  payer_account_id?: InputMaybe<Bigint_Comparison_Exp>;
  spender?: InputMaybe<Bigint_Comparison_Exp>;
  timestamp_range?: InputMaybe<Int8range_Comparison_Exp>;
  token_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** History of NFT allowances delegated by payer to spender */
export type Nft_Allowance_History = {
  __typename?: 'nft_allowance_history';
  approved_for_all: Scalars['Boolean']['output'];
  owner: Scalars['bigint']['output'];
  payer_account_id: Scalars['bigint']['output'];
  spender: Scalars['bigint']['output'];
  timestamp_range: Scalars['int8range']['output'];
  token_id: Scalars['bigint']['output'];
};

/** aggregated selection of "nft_allowance_history" */
export type Nft_Allowance_History_Aggregate = {
  __typename?: 'nft_allowance_history_aggregate';
  aggregate?: Maybe<Nft_Allowance_History_Aggregate_Fields>;
  nodes: Array<Nft_Allowance_History>;
};

/** aggregate fields of "nft_allowance_history" */
export type Nft_Allowance_History_Aggregate_Fields = {
  __typename?: 'nft_allowance_history_aggregate_fields';
  avg?: Maybe<Nft_Allowance_History_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Nft_Allowance_History_Max_Fields>;
  min?: Maybe<Nft_Allowance_History_Min_Fields>;
  stddev?: Maybe<Nft_Allowance_History_Stddev_Fields>;
  stddev_pop?: Maybe<Nft_Allowance_History_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Nft_Allowance_History_Stddev_Samp_Fields>;
  sum?: Maybe<Nft_Allowance_History_Sum_Fields>;
  var_pop?: Maybe<Nft_Allowance_History_Var_Pop_Fields>;
  var_samp?: Maybe<Nft_Allowance_History_Var_Samp_Fields>;
  variance?: Maybe<Nft_Allowance_History_Variance_Fields>;
};


/** aggregate fields of "nft_allowance_history" */
export type Nft_Allowance_History_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nft_Allowance_History_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Nft_Allowance_History_Avg_Fields = {
  __typename?: 'nft_allowance_history_avg_fields';
  owner?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  spender?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "nft_allowance_history". All fields are combined with a logical 'AND'. */
export type Nft_Allowance_History_Bool_Exp = {
  _and?: InputMaybe<Array<Nft_Allowance_History_Bool_Exp>>;
  _not?: InputMaybe<Nft_Allowance_History_Bool_Exp>;
  _or?: InputMaybe<Array<Nft_Allowance_History_Bool_Exp>>;
  approved_for_all?: InputMaybe<Boolean_Comparison_Exp>;
  owner?: InputMaybe<Bigint_Comparison_Exp>;
  payer_account_id?: InputMaybe<Bigint_Comparison_Exp>;
  spender?: InputMaybe<Bigint_Comparison_Exp>;
  timestamp_range?: InputMaybe<Int8range_Comparison_Exp>;
  token_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Nft_Allowance_History_Max_Fields = {
  __typename?: 'nft_allowance_history_max_fields';
  owner?: Maybe<Scalars['bigint']['output']>;
  payer_account_id?: Maybe<Scalars['bigint']['output']>;
  spender?: Maybe<Scalars['bigint']['output']>;
  token_id?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type Nft_Allowance_History_Min_Fields = {
  __typename?: 'nft_allowance_history_min_fields';
  owner?: Maybe<Scalars['bigint']['output']>;
  payer_account_id?: Maybe<Scalars['bigint']['output']>;
  spender?: Maybe<Scalars['bigint']['output']>;
  token_id?: Maybe<Scalars['bigint']['output']>;
};

/** Ordering options when selecting data from "nft_allowance_history". */
export type Nft_Allowance_History_Order_By = {
  approved_for_all?: InputMaybe<Order_By>;
  owner?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  spender?: InputMaybe<Order_By>;
  timestamp_range?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** select columns of table "nft_allowance_history" */
export enum Nft_Allowance_History_Select_Column {
  /** column name */
  ApprovedForAll = 'approved_for_all',
  /** column name */
  Owner = 'owner',
  /** column name */
  PayerAccountId = 'payer_account_id',
  /** column name */
  Spender = 'spender',
  /** column name */
  TimestampRange = 'timestamp_range',
  /** column name */
  TokenId = 'token_id'
}

/** aggregate stddev on columns */
export type Nft_Allowance_History_Stddev_Fields = {
  __typename?: 'nft_allowance_history_stddev_fields';
  owner?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  spender?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Nft_Allowance_History_Stddev_Pop_Fields = {
  __typename?: 'nft_allowance_history_stddev_pop_fields';
  owner?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  spender?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Nft_Allowance_History_Stddev_Samp_Fields = {
  __typename?: 'nft_allowance_history_stddev_samp_fields';
  owner?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  spender?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "nft_allowance_history" */
export type Nft_Allowance_History_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Nft_Allowance_History_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Nft_Allowance_History_Stream_Cursor_Value_Input = {
  approved_for_all?: InputMaybe<Scalars['Boolean']['input']>;
  owner?: InputMaybe<Scalars['bigint']['input']>;
  payer_account_id?: InputMaybe<Scalars['bigint']['input']>;
  spender?: InputMaybe<Scalars['bigint']['input']>;
  timestamp_range?: InputMaybe<Scalars['int8range']['input']>;
  token_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Nft_Allowance_History_Sum_Fields = {
  __typename?: 'nft_allowance_history_sum_fields';
  owner?: Maybe<Scalars['bigint']['output']>;
  payer_account_id?: Maybe<Scalars['bigint']['output']>;
  spender?: Maybe<Scalars['bigint']['output']>;
  token_id?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type Nft_Allowance_History_Var_Pop_Fields = {
  __typename?: 'nft_allowance_history_var_pop_fields';
  owner?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  spender?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Nft_Allowance_History_Var_Samp_Fields = {
  __typename?: 'nft_allowance_history_var_samp_fields';
  owner?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  spender?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Nft_Allowance_History_Variance_Fields = {
  __typename?: 'nft_allowance_history_variance_fields';
  owner?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  spender?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate max on columns */
export type Nft_Allowance_Max_Fields = {
  __typename?: 'nft_allowance_max_fields';
  /** A computed field, executes function "modified_timestamp_nft_allowance" */
  modified_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "nft_allowance_modified_timestamp_iso8601" */
  modified_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['bigint']['output']>;
  payer_account_id?: Maybe<Scalars['bigint']['output']>;
  spender?: Maybe<Scalars['bigint']['output']>;
  token_id?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type Nft_Allowance_Min_Fields = {
  __typename?: 'nft_allowance_min_fields';
  /** A computed field, executes function "modified_timestamp_nft_allowance" */
  modified_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "nft_allowance_modified_timestamp_iso8601" */
  modified_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['bigint']['output']>;
  payer_account_id?: Maybe<Scalars['bigint']['output']>;
  spender?: Maybe<Scalars['bigint']['output']>;
  token_id?: Maybe<Scalars['bigint']['output']>;
};

/** Ordering options when selecting data from "nft_allowance". */
export type Nft_Allowance_Order_By = {
  approved_for_all?: InputMaybe<Order_By>;
  modified_timestamp?: InputMaybe<Order_By>;
  modified_timestamp_iso8601?: InputMaybe<Order_By>;
  owner?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  spender?: InputMaybe<Order_By>;
  timestamp_range?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** select columns of table "nft_allowance" */
export enum Nft_Allowance_Select_Column {
  /** column name */
  ApprovedForAll = 'approved_for_all',
  /** column name */
  Owner = 'owner',
  /** column name */
  PayerAccountId = 'payer_account_id',
  /** column name */
  Spender = 'spender',
  /** column name */
  TimestampRange = 'timestamp_range',
  /** column name */
  TokenId = 'token_id'
}

/** aggregate stddev on columns */
export type Nft_Allowance_Stddev_Fields = {
  __typename?: 'nft_allowance_stddev_fields';
  /** A computed field, executes function "modified_timestamp_nft_allowance" */
  modified_timestamp?: Maybe<Scalars['bigint']['output']>;
  owner?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  spender?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Nft_Allowance_Stddev_Pop_Fields = {
  __typename?: 'nft_allowance_stddev_pop_fields';
  /** A computed field, executes function "modified_timestamp_nft_allowance" */
  modified_timestamp?: Maybe<Scalars['bigint']['output']>;
  owner?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  spender?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Nft_Allowance_Stddev_Samp_Fields = {
  __typename?: 'nft_allowance_stddev_samp_fields';
  /** A computed field, executes function "modified_timestamp_nft_allowance" */
  modified_timestamp?: Maybe<Scalars['bigint']['output']>;
  owner?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  spender?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "nft_allowance" */
export type Nft_Allowance_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Nft_Allowance_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Nft_Allowance_Stream_Cursor_Value_Input = {
  approved_for_all?: InputMaybe<Scalars['Boolean']['input']>;
  owner?: InputMaybe<Scalars['bigint']['input']>;
  payer_account_id?: InputMaybe<Scalars['bigint']['input']>;
  spender?: InputMaybe<Scalars['bigint']['input']>;
  timestamp_range?: InputMaybe<Scalars['int8range']['input']>;
  token_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Nft_Allowance_Sum_Fields = {
  __typename?: 'nft_allowance_sum_fields';
  /** A computed field, executes function "modified_timestamp_nft_allowance" */
  modified_timestamp?: Maybe<Scalars['bigint']['output']>;
  owner?: Maybe<Scalars['bigint']['output']>;
  payer_account_id?: Maybe<Scalars['bigint']['output']>;
  spender?: Maybe<Scalars['bigint']['output']>;
  token_id?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type Nft_Allowance_Var_Pop_Fields = {
  __typename?: 'nft_allowance_var_pop_fields';
  /** A computed field, executes function "modified_timestamp_nft_allowance" */
  modified_timestamp?: Maybe<Scalars['bigint']['output']>;
  owner?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  spender?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Nft_Allowance_Var_Samp_Fields = {
  __typename?: 'nft_allowance_var_samp_fields';
  /** A computed field, executes function "modified_timestamp_nft_allowance" */
  modified_timestamp?: Maybe<Scalars['bigint']['output']>;
  owner?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  spender?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Nft_Allowance_Variance_Fields = {
  __typename?: 'nft_allowance_variance_fields';
  /** A computed field, executes function "modified_timestamp_nft_allowance" */
  modified_timestamp?: Maybe<Scalars['bigint']['output']>;
  owner?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  spender?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate avg on columns */
export type Nft_Avg_Fields = {
  __typename?: 'nft_avg_fields';
  account_id?: Maybe<Scalars['Float']['output']>;
  created_timestamp?: Maybe<Scalars['Float']['output']>;
  delegating_spender?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "modified_timestamp_nft" */
  modified_timestamp?: Maybe<Scalars['bigint']['output']>;
  serial_number?: Maybe<Scalars['Float']['output']>;
  spender?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "nft" */
export type Nft_Avg_Order_By = {
  account_id?: InputMaybe<Order_By>;
  created_timestamp?: InputMaybe<Order_By>;
  delegating_spender?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  spender?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "nft". All fields are combined with a logical 'AND'. */
export type Nft_Bool_Exp = {
  _and?: InputMaybe<Array<Nft_Bool_Exp>>;
  _not?: InputMaybe<Nft_Bool_Exp>;
  _or?: InputMaybe<Array<Nft_Bool_Exp>>;
  account_id?: InputMaybe<Bigint_Comparison_Exp>;
  created_timestamp?: InputMaybe<Bigint_Comparison_Exp>;
  created_timestamp_iso8601?: InputMaybe<String_Comparison_Exp>;
  decoded_metadata?: InputMaybe<String_Comparison_Exp>;
  delegating_spender?: InputMaybe<Bigint_Comparison_Exp>;
  deleted?: InputMaybe<Boolean_Comparison_Exp>;
  history?: InputMaybe<Nft_History_Bool_Exp>;
  history_aggregate?: InputMaybe<Nft_History_Aggregate_Bool_Exp>;
  metadata?: InputMaybe<Bytea_Comparison_Exp>;
  modified_timestamp?: InputMaybe<Bigint_Comparison_Exp>;
  modified_timestamp_iso8601?: InputMaybe<String_Comparison_Exp>;
  serial_number?: InputMaybe<Bigint_Comparison_Exp>;
  spender?: InputMaybe<Bigint_Comparison_Exp>;
  timestamp_range?: InputMaybe<Int8range_Comparison_Exp>;
  token?: InputMaybe<Token_Bool_Exp>;
  token_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** columns and relationships of "nft_history" */
export type Nft_History = {
  __typename?: 'nft_history';
  account_id?: Maybe<Scalars['bigint']['output']>;
  created_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "nft_history_created_timestamp_iso8601" */
  created_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "decoded_metadata_nft_history" */
  decoded_metadata?: Maybe<Scalars['String']['output']>;
  delegating_spender?: Maybe<Scalars['bigint']['output']>;
  deleted?: Maybe<Scalars['Boolean']['output']>;
  end_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** An object relationship */
  end_transaction?: Maybe<Transaction>;
  metadata?: Maybe<Scalars['bytea']['output']>;
  serial_number: Scalars['bigint']['output'];
  spender?: Maybe<Scalars['bigint']['output']>;
  start_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** An object relationship */
  start_transaction?: Maybe<Transaction>;
  timestamp_range: Scalars['int8range']['output'];
  token_id: Scalars['bigint']['output'];
};

/** aggregated selection of "nft_history" */
export type Nft_History_Aggregate = {
  __typename?: 'nft_history_aggregate';
  aggregate?: Maybe<Nft_History_Aggregate_Fields>;
  nodes: Array<Nft_History>;
};

export type Nft_History_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Nft_History_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Nft_History_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Nft_History_Aggregate_Bool_Exp_Count>;
};

export type Nft_History_Aggregate_Bool_Exp_Bool_And = {
  arguments: Nft_History_Select_Column_Nft_History_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Nft_History_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Nft_History_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Nft_History_Select_Column_Nft_History_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Nft_History_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Nft_History_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Nft_History_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Nft_History_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "nft_history" */
export type Nft_History_Aggregate_Fields = {
  __typename?: 'nft_history_aggregate_fields';
  avg?: Maybe<Nft_History_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Nft_History_Max_Fields>;
  min?: Maybe<Nft_History_Min_Fields>;
  stddev?: Maybe<Nft_History_Stddev_Fields>;
  stddev_pop?: Maybe<Nft_History_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Nft_History_Stddev_Samp_Fields>;
  sum?: Maybe<Nft_History_Sum_Fields>;
  var_pop?: Maybe<Nft_History_Var_Pop_Fields>;
  var_samp?: Maybe<Nft_History_Var_Samp_Fields>;
  variance?: Maybe<Nft_History_Variance_Fields>;
};


/** aggregate fields of "nft_history" */
export type Nft_History_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nft_History_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "nft_history" */
export type Nft_History_Aggregate_Order_By = {
  avg?: InputMaybe<Nft_History_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Nft_History_Max_Order_By>;
  min?: InputMaybe<Nft_History_Min_Order_By>;
  stddev?: InputMaybe<Nft_History_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Nft_History_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Nft_History_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Nft_History_Sum_Order_By>;
  var_pop?: InputMaybe<Nft_History_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Nft_History_Var_Samp_Order_By>;
  variance?: InputMaybe<Nft_History_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Nft_History_Avg_Fields = {
  __typename?: 'nft_history_avg_fields';
  account_id?: Maybe<Scalars['Float']['output']>;
  created_timestamp?: Maybe<Scalars['Float']['output']>;
  delegating_spender?: Maybe<Scalars['Float']['output']>;
  end_timestamp?: Maybe<Scalars['Float']['output']>;
  serial_number?: Maybe<Scalars['Float']['output']>;
  spender?: Maybe<Scalars['Float']['output']>;
  start_timestamp?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "nft_history" */
export type Nft_History_Avg_Order_By = {
  account_id?: InputMaybe<Order_By>;
  created_timestamp?: InputMaybe<Order_By>;
  delegating_spender?: InputMaybe<Order_By>;
  end_timestamp?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  spender?: InputMaybe<Order_By>;
  start_timestamp?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "nft_history". All fields are combined with a logical 'AND'. */
export type Nft_History_Bool_Exp = {
  _and?: InputMaybe<Array<Nft_History_Bool_Exp>>;
  _not?: InputMaybe<Nft_History_Bool_Exp>;
  _or?: InputMaybe<Array<Nft_History_Bool_Exp>>;
  account_id?: InputMaybe<Bigint_Comparison_Exp>;
  created_timestamp?: InputMaybe<Bigint_Comparison_Exp>;
  created_timestamp_iso8601?: InputMaybe<String_Comparison_Exp>;
  decoded_metadata?: InputMaybe<String_Comparison_Exp>;
  delegating_spender?: InputMaybe<Bigint_Comparison_Exp>;
  deleted?: InputMaybe<Boolean_Comparison_Exp>;
  end_timestamp?: InputMaybe<Bigint_Comparison_Exp>;
  end_transaction?: InputMaybe<Transaction_Bool_Exp>;
  metadata?: InputMaybe<Bytea_Comparison_Exp>;
  serial_number?: InputMaybe<Bigint_Comparison_Exp>;
  spender?: InputMaybe<Bigint_Comparison_Exp>;
  start_timestamp?: InputMaybe<Bigint_Comparison_Exp>;
  start_transaction?: InputMaybe<Transaction_Bool_Exp>;
  timestamp_range?: InputMaybe<Int8range_Comparison_Exp>;
  token_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Nft_History_Max_Fields = {
  __typename?: 'nft_history_max_fields';
  account_id?: Maybe<Scalars['bigint']['output']>;
  created_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "nft_history_created_timestamp_iso8601" */
  created_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "decoded_metadata_nft_history" */
  decoded_metadata?: Maybe<Scalars['String']['output']>;
  delegating_spender?: Maybe<Scalars['bigint']['output']>;
  end_timestamp?: Maybe<Scalars['bigint']['output']>;
  serial_number?: Maybe<Scalars['bigint']['output']>;
  spender?: Maybe<Scalars['bigint']['output']>;
  start_timestamp?: Maybe<Scalars['bigint']['output']>;
  token_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "nft_history" */
export type Nft_History_Max_Order_By = {
  account_id?: InputMaybe<Order_By>;
  created_timestamp?: InputMaybe<Order_By>;
  delegating_spender?: InputMaybe<Order_By>;
  end_timestamp?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  spender?: InputMaybe<Order_By>;
  start_timestamp?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Nft_History_Min_Fields = {
  __typename?: 'nft_history_min_fields';
  account_id?: Maybe<Scalars['bigint']['output']>;
  created_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "nft_history_created_timestamp_iso8601" */
  created_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "decoded_metadata_nft_history" */
  decoded_metadata?: Maybe<Scalars['String']['output']>;
  delegating_spender?: Maybe<Scalars['bigint']['output']>;
  end_timestamp?: Maybe<Scalars['bigint']['output']>;
  serial_number?: Maybe<Scalars['bigint']['output']>;
  spender?: Maybe<Scalars['bigint']['output']>;
  start_timestamp?: Maybe<Scalars['bigint']['output']>;
  token_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "nft_history" */
export type Nft_History_Min_Order_By = {
  account_id?: InputMaybe<Order_By>;
  created_timestamp?: InputMaybe<Order_By>;
  delegating_spender?: InputMaybe<Order_By>;
  end_timestamp?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  spender?: InputMaybe<Order_By>;
  start_timestamp?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "nft_history". */
export type Nft_History_Order_By = {
  account_id?: InputMaybe<Order_By>;
  created_timestamp?: InputMaybe<Order_By>;
  created_timestamp_iso8601?: InputMaybe<Order_By>;
  decoded_metadata?: InputMaybe<Order_By>;
  delegating_spender?: InputMaybe<Order_By>;
  deleted?: InputMaybe<Order_By>;
  end_timestamp?: InputMaybe<Order_By>;
  end_transaction?: InputMaybe<Transaction_Order_By>;
  metadata?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  spender?: InputMaybe<Order_By>;
  start_timestamp?: InputMaybe<Order_By>;
  start_transaction?: InputMaybe<Transaction_Order_By>;
  timestamp_range?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** select columns of table "nft_history" */
export enum Nft_History_Select_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  CreatedTimestamp = 'created_timestamp',
  /** column name */
  DelegatingSpender = 'delegating_spender',
  /** column name */
  Deleted = 'deleted',
  /** column name */
  EndTimestamp = 'end_timestamp',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  SerialNumber = 'serial_number',
  /** column name */
  Spender = 'spender',
  /** column name */
  StartTimestamp = 'start_timestamp',
  /** column name */
  TimestampRange = 'timestamp_range',
  /** column name */
  TokenId = 'token_id'
}

/** select "nft_history_aggregate_bool_exp_bool_and_arguments_columns" columns of table "nft_history" */
export enum Nft_History_Select_Column_Nft_History_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Deleted = 'deleted'
}

/** select "nft_history_aggregate_bool_exp_bool_or_arguments_columns" columns of table "nft_history" */
export enum Nft_History_Select_Column_Nft_History_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Deleted = 'deleted'
}

/** aggregate stddev on columns */
export type Nft_History_Stddev_Fields = {
  __typename?: 'nft_history_stddev_fields';
  account_id?: Maybe<Scalars['Float']['output']>;
  created_timestamp?: Maybe<Scalars['Float']['output']>;
  delegating_spender?: Maybe<Scalars['Float']['output']>;
  end_timestamp?: Maybe<Scalars['Float']['output']>;
  serial_number?: Maybe<Scalars['Float']['output']>;
  spender?: Maybe<Scalars['Float']['output']>;
  start_timestamp?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "nft_history" */
export type Nft_History_Stddev_Order_By = {
  account_id?: InputMaybe<Order_By>;
  created_timestamp?: InputMaybe<Order_By>;
  delegating_spender?: InputMaybe<Order_By>;
  end_timestamp?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  spender?: InputMaybe<Order_By>;
  start_timestamp?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Nft_History_Stddev_Pop_Fields = {
  __typename?: 'nft_history_stddev_pop_fields';
  account_id?: Maybe<Scalars['Float']['output']>;
  created_timestamp?: Maybe<Scalars['Float']['output']>;
  delegating_spender?: Maybe<Scalars['Float']['output']>;
  end_timestamp?: Maybe<Scalars['Float']['output']>;
  serial_number?: Maybe<Scalars['Float']['output']>;
  spender?: Maybe<Scalars['Float']['output']>;
  start_timestamp?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "nft_history" */
export type Nft_History_Stddev_Pop_Order_By = {
  account_id?: InputMaybe<Order_By>;
  created_timestamp?: InputMaybe<Order_By>;
  delegating_spender?: InputMaybe<Order_By>;
  end_timestamp?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  spender?: InputMaybe<Order_By>;
  start_timestamp?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Nft_History_Stddev_Samp_Fields = {
  __typename?: 'nft_history_stddev_samp_fields';
  account_id?: Maybe<Scalars['Float']['output']>;
  created_timestamp?: Maybe<Scalars['Float']['output']>;
  delegating_spender?: Maybe<Scalars['Float']['output']>;
  end_timestamp?: Maybe<Scalars['Float']['output']>;
  serial_number?: Maybe<Scalars['Float']['output']>;
  spender?: Maybe<Scalars['Float']['output']>;
  start_timestamp?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "nft_history" */
export type Nft_History_Stddev_Samp_Order_By = {
  account_id?: InputMaybe<Order_By>;
  created_timestamp?: InputMaybe<Order_By>;
  delegating_spender?: InputMaybe<Order_By>;
  end_timestamp?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  spender?: InputMaybe<Order_By>;
  start_timestamp?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "nft_history" */
export type Nft_History_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Nft_History_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Nft_History_Stream_Cursor_Value_Input = {
  account_id?: InputMaybe<Scalars['bigint']['input']>;
  created_timestamp?: InputMaybe<Scalars['bigint']['input']>;
  delegating_spender?: InputMaybe<Scalars['bigint']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  end_timestamp?: InputMaybe<Scalars['bigint']['input']>;
  metadata?: InputMaybe<Scalars['bytea']['input']>;
  serial_number?: InputMaybe<Scalars['bigint']['input']>;
  spender?: InputMaybe<Scalars['bigint']['input']>;
  start_timestamp?: InputMaybe<Scalars['bigint']['input']>;
  timestamp_range?: InputMaybe<Scalars['int8range']['input']>;
  token_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Nft_History_Sum_Fields = {
  __typename?: 'nft_history_sum_fields';
  account_id?: Maybe<Scalars['bigint']['output']>;
  created_timestamp?: Maybe<Scalars['bigint']['output']>;
  delegating_spender?: Maybe<Scalars['bigint']['output']>;
  end_timestamp?: Maybe<Scalars['bigint']['output']>;
  serial_number?: Maybe<Scalars['bigint']['output']>;
  spender?: Maybe<Scalars['bigint']['output']>;
  start_timestamp?: Maybe<Scalars['bigint']['output']>;
  token_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "nft_history" */
export type Nft_History_Sum_Order_By = {
  account_id?: InputMaybe<Order_By>;
  created_timestamp?: InputMaybe<Order_By>;
  delegating_spender?: InputMaybe<Order_By>;
  end_timestamp?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  spender?: InputMaybe<Order_By>;
  start_timestamp?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Nft_History_Var_Pop_Fields = {
  __typename?: 'nft_history_var_pop_fields';
  account_id?: Maybe<Scalars['Float']['output']>;
  created_timestamp?: Maybe<Scalars['Float']['output']>;
  delegating_spender?: Maybe<Scalars['Float']['output']>;
  end_timestamp?: Maybe<Scalars['Float']['output']>;
  serial_number?: Maybe<Scalars['Float']['output']>;
  spender?: Maybe<Scalars['Float']['output']>;
  start_timestamp?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "nft_history" */
export type Nft_History_Var_Pop_Order_By = {
  account_id?: InputMaybe<Order_By>;
  created_timestamp?: InputMaybe<Order_By>;
  delegating_spender?: InputMaybe<Order_By>;
  end_timestamp?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  spender?: InputMaybe<Order_By>;
  start_timestamp?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Nft_History_Var_Samp_Fields = {
  __typename?: 'nft_history_var_samp_fields';
  account_id?: Maybe<Scalars['Float']['output']>;
  created_timestamp?: Maybe<Scalars['Float']['output']>;
  delegating_spender?: Maybe<Scalars['Float']['output']>;
  end_timestamp?: Maybe<Scalars['Float']['output']>;
  serial_number?: Maybe<Scalars['Float']['output']>;
  spender?: Maybe<Scalars['Float']['output']>;
  start_timestamp?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "nft_history" */
export type Nft_History_Var_Samp_Order_By = {
  account_id?: InputMaybe<Order_By>;
  created_timestamp?: InputMaybe<Order_By>;
  delegating_spender?: InputMaybe<Order_By>;
  end_timestamp?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  spender?: InputMaybe<Order_By>;
  start_timestamp?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Nft_History_Variance_Fields = {
  __typename?: 'nft_history_variance_fields';
  account_id?: Maybe<Scalars['Float']['output']>;
  created_timestamp?: Maybe<Scalars['Float']['output']>;
  delegating_spender?: Maybe<Scalars['Float']['output']>;
  end_timestamp?: Maybe<Scalars['Float']['output']>;
  serial_number?: Maybe<Scalars['Float']['output']>;
  spender?: Maybe<Scalars['Float']['output']>;
  start_timestamp?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "nft_history" */
export type Nft_History_Variance_Order_By = {
  account_id?: InputMaybe<Order_By>;
  created_timestamp?: InputMaybe<Order_By>;
  delegating_spender?: InputMaybe<Order_By>;
  end_timestamp?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  spender?: InputMaybe<Order_By>;
  start_timestamp?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate max on columns */
export type Nft_Max_Fields = {
  __typename?: 'nft_max_fields';
  account_id?: Maybe<Scalars['bigint']['output']>;
  created_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "nft_created_timestamp_iso8601" */
  created_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "decoded_metadata_nft" */
  decoded_metadata?: Maybe<Scalars['String']['output']>;
  delegating_spender?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "modified_timestamp_nft" */
  modified_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "nft_modified_timestamp_iso8601" */
  modified_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  serial_number?: Maybe<Scalars['bigint']['output']>;
  spender?: Maybe<Scalars['bigint']['output']>;
  token_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "nft" */
export type Nft_Max_Order_By = {
  account_id?: InputMaybe<Order_By>;
  created_timestamp?: InputMaybe<Order_By>;
  delegating_spender?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  spender?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Nft_Min_Fields = {
  __typename?: 'nft_min_fields';
  account_id?: Maybe<Scalars['bigint']['output']>;
  created_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "nft_created_timestamp_iso8601" */
  created_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "decoded_metadata_nft" */
  decoded_metadata?: Maybe<Scalars['String']['output']>;
  delegating_spender?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "modified_timestamp_nft" */
  modified_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "nft_modified_timestamp_iso8601" */
  modified_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  serial_number?: Maybe<Scalars['bigint']['output']>;
  spender?: Maybe<Scalars['bigint']['output']>;
  token_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "nft" */
export type Nft_Min_Order_By = {
  account_id?: InputMaybe<Order_By>;
  created_timestamp?: InputMaybe<Order_By>;
  delegating_spender?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  spender?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "nft". */
export type Nft_Order_By = {
  account_id?: InputMaybe<Order_By>;
  created_timestamp?: InputMaybe<Order_By>;
  created_timestamp_iso8601?: InputMaybe<Order_By>;
  decoded_metadata?: InputMaybe<Order_By>;
  delegating_spender?: InputMaybe<Order_By>;
  deleted?: InputMaybe<Order_By>;
  history_aggregate?: InputMaybe<Nft_History_Aggregate_Order_By>;
  metadata?: InputMaybe<Order_By>;
  modified_timestamp?: InputMaybe<Order_By>;
  modified_timestamp_iso8601?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  spender?: InputMaybe<Order_By>;
  timestamp_range?: InputMaybe<Order_By>;
  token?: InputMaybe<Token_Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** select columns of table "nft" */
export enum Nft_Select_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  CreatedTimestamp = 'created_timestamp',
  /** column name */
  DelegatingSpender = 'delegating_spender',
  /** column name */
  Deleted = 'deleted',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  SerialNumber = 'serial_number',
  /** column name */
  Spender = 'spender',
  /** column name */
  TimestampRange = 'timestamp_range',
  /** column name */
  TokenId = 'token_id'
}

/** select "nft_aggregate_bool_exp_bool_and_arguments_columns" columns of table "nft" */
export enum Nft_Select_Column_Nft_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Deleted = 'deleted'
}

/** select "nft_aggregate_bool_exp_bool_or_arguments_columns" columns of table "nft" */
export enum Nft_Select_Column_Nft_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Deleted = 'deleted'
}

/** aggregate stddev on columns */
export type Nft_Stddev_Fields = {
  __typename?: 'nft_stddev_fields';
  account_id?: Maybe<Scalars['Float']['output']>;
  created_timestamp?: Maybe<Scalars['Float']['output']>;
  delegating_spender?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "modified_timestamp_nft" */
  modified_timestamp?: Maybe<Scalars['bigint']['output']>;
  serial_number?: Maybe<Scalars['Float']['output']>;
  spender?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "nft" */
export type Nft_Stddev_Order_By = {
  account_id?: InputMaybe<Order_By>;
  created_timestamp?: InputMaybe<Order_By>;
  delegating_spender?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  spender?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Nft_Stddev_Pop_Fields = {
  __typename?: 'nft_stddev_pop_fields';
  account_id?: Maybe<Scalars['Float']['output']>;
  created_timestamp?: Maybe<Scalars['Float']['output']>;
  delegating_spender?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "modified_timestamp_nft" */
  modified_timestamp?: Maybe<Scalars['bigint']['output']>;
  serial_number?: Maybe<Scalars['Float']['output']>;
  spender?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "nft" */
export type Nft_Stddev_Pop_Order_By = {
  account_id?: InputMaybe<Order_By>;
  created_timestamp?: InputMaybe<Order_By>;
  delegating_spender?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  spender?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Nft_Stddev_Samp_Fields = {
  __typename?: 'nft_stddev_samp_fields';
  account_id?: Maybe<Scalars['Float']['output']>;
  created_timestamp?: Maybe<Scalars['Float']['output']>;
  delegating_spender?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "modified_timestamp_nft" */
  modified_timestamp?: Maybe<Scalars['bigint']['output']>;
  serial_number?: Maybe<Scalars['Float']['output']>;
  spender?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "nft" */
export type Nft_Stddev_Samp_Order_By = {
  account_id?: InputMaybe<Order_By>;
  created_timestamp?: InputMaybe<Order_By>;
  delegating_spender?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  spender?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "nft" */
export type Nft_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Nft_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Nft_Stream_Cursor_Value_Input = {
  account_id?: InputMaybe<Scalars['bigint']['input']>;
  created_timestamp?: InputMaybe<Scalars['bigint']['input']>;
  delegating_spender?: InputMaybe<Scalars['bigint']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<Scalars['bytea']['input']>;
  serial_number?: InputMaybe<Scalars['bigint']['input']>;
  spender?: InputMaybe<Scalars['bigint']['input']>;
  timestamp_range?: InputMaybe<Scalars['int8range']['input']>;
  token_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Nft_Sum_Fields = {
  __typename?: 'nft_sum_fields';
  account_id?: Maybe<Scalars['bigint']['output']>;
  created_timestamp?: Maybe<Scalars['bigint']['output']>;
  delegating_spender?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "modified_timestamp_nft" */
  modified_timestamp?: Maybe<Scalars['bigint']['output']>;
  serial_number?: Maybe<Scalars['bigint']['output']>;
  spender?: Maybe<Scalars['bigint']['output']>;
  token_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "nft" */
export type Nft_Sum_Order_By = {
  account_id?: InputMaybe<Order_By>;
  created_timestamp?: InputMaybe<Order_By>;
  delegating_spender?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  spender?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "nft_transfer" */
export type Nft_Transfer = {
  __typename?: 'nft_transfer';
  consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** An array relationship */
  crypto_transfer: Array<Crypto_Transfer>;
  /** An aggregate relationship */
  crypto_transfer_aggregate: Crypto_Transfer_Aggregate;
  is_approval?: Maybe<Scalars['Boolean']['output']>;
  /** An object relationship */
  nft?: Maybe<Nft>;
  payer_account_id?: Maybe<Scalars['bigint']['output']>;
  receiver_account_id?: Maybe<Scalars['bigint']['output']>;
  sender_account_id?: Maybe<Scalars['bigint']['output']>;
  serial_number?: Maybe<Scalars['bigint']['output']>;
  /** An object relationship */
  token?: Maybe<Token>;
  token_id?: Maybe<Scalars['bigint']['output']>;
  /** An object relationship */
  transaction?: Maybe<Transaction>;
};


/** columns and relationships of "nft_transfer" */
export type Nft_TransferCrypto_TransferArgs = {
  distinct_on?: InputMaybe<Array<Crypto_Transfer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Crypto_Transfer_Order_By>>;
  where?: InputMaybe<Crypto_Transfer_Bool_Exp>;
};


/** columns and relationships of "nft_transfer" */
export type Nft_TransferCrypto_Transfer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Crypto_Transfer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Crypto_Transfer_Order_By>>;
  where?: InputMaybe<Crypto_Transfer_Bool_Exp>;
};

/** aggregated selection of "nft_transfer" */
export type Nft_Transfer_Aggregate = {
  __typename?: 'nft_transfer_aggregate';
  aggregate?: Maybe<Nft_Transfer_Aggregate_Fields>;
  nodes: Array<Nft_Transfer>;
};

export type Nft_Transfer_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Nft_Transfer_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Nft_Transfer_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Nft_Transfer_Aggregate_Bool_Exp_Count>;
};

export type Nft_Transfer_Aggregate_Bool_Exp_Bool_And = {
  arguments: Nft_Transfer_Select_Column_Nft_Transfer_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Nft_Transfer_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Nft_Transfer_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Nft_Transfer_Select_Column_Nft_Transfer_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Nft_Transfer_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Nft_Transfer_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Nft_Transfer_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Nft_Transfer_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "nft_transfer" */
export type Nft_Transfer_Aggregate_Fields = {
  __typename?: 'nft_transfer_aggregate_fields';
  avg?: Maybe<Nft_Transfer_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Nft_Transfer_Max_Fields>;
  min?: Maybe<Nft_Transfer_Min_Fields>;
  stddev?: Maybe<Nft_Transfer_Stddev_Fields>;
  stddev_pop?: Maybe<Nft_Transfer_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Nft_Transfer_Stddev_Samp_Fields>;
  sum?: Maybe<Nft_Transfer_Sum_Fields>;
  var_pop?: Maybe<Nft_Transfer_Var_Pop_Fields>;
  var_samp?: Maybe<Nft_Transfer_Var_Samp_Fields>;
  variance?: Maybe<Nft_Transfer_Variance_Fields>;
};


/** aggregate fields of "nft_transfer" */
export type Nft_Transfer_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nft_Transfer_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "nft_transfer" */
export type Nft_Transfer_Aggregate_Order_By = {
  avg?: InputMaybe<Nft_Transfer_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Nft_Transfer_Max_Order_By>;
  min?: InputMaybe<Nft_Transfer_Min_Order_By>;
  stddev?: InputMaybe<Nft_Transfer_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Nft_Transfer_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Nft_Transfer_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Nft_Transfer_Sum_Order_By>;
  var_pop?: InputMaybe<Nft_Transfer_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Nft_Transfer_Var_Samp_Order_By>;
  variance?: InputMaybe<Nft_Transfer_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Nft_Transfer_Avg_Fields = {
  __typename?: 'nft_transfer_avg_fields';
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  receiver_account_id?: Maybe<Scalars['Float']['output']>;
  sender_account_id?: Maybe<Scalars['Float']['output']>;
  serial_number?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "nft_transfer" */
export type Nft_Transfer_Avg_Order_By = {
  consensus_timestamp?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  receiver_account_id?: InputMaybe<Order_By>;
  sender_account_id?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "nft_transfer". All fields are combined with a logical 'AND'. */
export type Nft_Transfer_Bool_Exp = {
  _and?: InputMaybe<Array<Nft_Transfer_Bool_Exp>>;
  _not?: InputMaybe<Nft_Transfer_Bool_Exp>;
  _or?: InputMaybe<Array<Nft_Transfer_Bool_Exp>>;
  consensus_timestamp?: InputMaybe<Bigint_Comparison_Exp>;
  crypto_transfer?: InputMaybe<Crypto_Transfer_Bool_Exp>;
  crypto_transfer_aggregate?: InputMaybe<Crypto_Transfer_Aggregate_Bool_Exp>;
  is_approval?: InputMaybe<Boolean_Comparison_Exp>;
  nft?: InputMaybe<Nft_Bool_Exp>;
  payer_account_id?: InputMaybe<Bigint_Comparison_Exp>;
  receiver_account_id?: InputMaybe<Bigint_Comparison_Exp>;
  sender_account_id?: InputMaybe<Bigint_Comparison_Exp>;
  serial_number?: InputMaybe<Bigint_Comparison_Exp>;
  token?: InputMaybe<Token_Bool_Exp>;
  token_id?: InputMaybe<Bigint_Comparison_Exp>;
  transaction?: InputMaybe<Transaction_Bool_Exp>;
};

/** aggregate max on columns */
export type Nft_Transfer_Max_Fields = {
  __typename?: 'nft_transfer_max_fields';
  consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  payer_account_id?: Maybe<Scalars['bigint']['output']>;
  receiver_account_id?: Maybe<Scalars['bigint']['output']>;
  sender_account_id?: Maybe<Scalars['bigint']['output']>;
  serial_number?: Maybe<Scalars['bigint']['output']>;
  token_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "nft_transfer" */
export type Nft_Transfer_Max_Order_By = {
  consensus_timestamp?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  receiver_account_id?: InputMaybe<Order_By>;
  sender_account_id?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Nft_Transfer_Min_Fields = {
  __typename?: 'nft_transfer_min_fields';
  consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  payer_account_id?: Maybe<Scalars['bigint']['output']>;
  receiver_account_id?: Maybe<Scalars['bigint']['output']>;
  sender_account_id?: Maybe<Scalars['bigint']['output']>;
  serial_number?: Maybe<Scalars['bigint']['output']>;
  token_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "nft_transfer" */
export type Nft_Transfer_Min_Order_By = {
  consensus_timestamp?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  receiver_account_id?: InputMaybe<Order_By>;
  sender_account_id?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "nft_transfer". */
export type Nft_Transfer_Order_By = {
  consensus_timestamp?: InputMaybe<Order_By>;
  crypto_transfer_aggregate?: InputMaybe<Crypto_Transfer_Aggregate_Order_By>;
  is_approval?: InputMaybe<Order_By>;
  nft?: InputMaybe<Nft_Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  receiver_account_id?: InputMaybe<Order_By>;
  sender_account_id?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  token?: InputMaybe<Token_Order_By>;
  token_id?: InputMaybe<Order_By>;
  transaction?: InputMaybe<Transaction_Order_By>;
};

/** select columns of table "nft_transfer" */
export enum Nft_Transfer_Select_Column {
  /** column name */
  ConsensusTimestamp = 'consensus_timestamp',
  /** column name */
  IsApproval = 'is_approval',
  /** column name */
  PayerAccountId = 'payer_account_id',
  /** column name */
  ReceiverAccountId = 'receiver_account_id',
  /** column name */
  SenderAccountId = 'sender_account_id',
  /** column name */
  SerialNumber = 'serial_number',
  /** column name */
  TokenId = 'token_id'
}

/** select "nft_transfer_aggregate_bool_exp_bool_and_arguments_columns" columns of table "nft_transfer" */
export enum Nft_Transfer_Select_Column_Nft_Transfer_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsApproval = 'is_approval'
}

/** select "nft_transfer_aggregate_bool_exp_bool_or_arguments_columns" columns of table "nft_transfer" */
export enum Nft_Transfer_Select_Column_Nft_Transfer_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsApproval = 'is_approval'
}

/** aggregate stddev on columns */
export type Nft_Transfer_Stddev_Fields = {
  __typename?: 'nft_transfer_stddev_fields';
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  receiver_account_id?: Maybe<Scalars['Float']['output']>;
  sender_account_id?: Maybe<Scalars['Float']['output']>;
  serial_number?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "nft_transfer" */
export type Nft_Transfer_Stddev_Order_By = {
  consensus_timestamp?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  receiver_account_id?: InputMaybe<Order_By>;
  sender_account_id?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Nft_Transfer_Stddev_Pop_Fields = {
  __typename?: 'nft_transfer_stddev_pop_fields';
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  receiver_account_id?: Maybe<Scalars['Float']['output']>;
  sender_account_id?: Maybe<Scalars['Float']['output']>;
  serial_number?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "nft_transfer" */
export type Nft_Transfer_Stddev_Pop_Order_By = {
  consensus_timestamp?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  receiver_account_id?: InputMaybe<Order_By>;
  sender_account_id?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Nft_Transfer_Stddev_Samp_Fields = {
  __typename?: 'nft_transfer_stddev_samp_fields';
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  receiver_account_id?: Maybe<Scalars['Float']['output']>;
  sender_account_id?: Maybe<Scalars['Float']['output']>;
  serial_number?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "nft_transfer" */
export type Nft_Transfer_Stddev_Samp_Order_By = {
  consensus_timestamp?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  receiver_account_id?: InputMaybe<Order_By>;
  sender_account_id?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "nft_transfer" */
export type Nft_Transfer_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Nft_Transfer_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Nft_Transfer_Stream_Cursor_Value_Input = {
  consensus_timestamp?: InputMaybe<Scalars['bigint']['input']>;
  is_approval?: InputMaybe<Scalars['Boolean']['input']>;
  payer_account_id?: InputMaybe<Scalars['bigint']['input']>;
  receiver_account_id?: InputMaybe<Scalars['bigint']['input']>;
  sender_account_id?: InputMaybe<Scalars['bigint']['input']>;
  serial_number?: InputMaybe<Scalars['bigint']['input']>;
  token_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Nft_Transfer_Sum_Fields = {
  __typename?: 'nft_transfer_sum_fields';
  consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  payer_account_id?: Maybe<Scalars['bigint']['output']>;
  receiver_account_id?: Maybe<Scalars['bigint']['output']>;
  sender_account_id?: Maybe<Scalars['bigint']['output']>;
  serial_number?: Maybe<Scalars['bigint']['output']>;
  token_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "nft_transfer" */
export type Nft_Transfer_Sum_Order_By = {
  consensus_timestamp?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  receiver_account_id?: InputMaybe<Order_By>;
  sender_account_id?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Nft_Transfer_Var_Pop_Fields = {
  __typename?: 'nft_transfer_var_pop_fields';
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  receiver_account_id?: Maybe<Scalars['Float']['output']>;
  sender_account_id?: Maybe<Scalars['Float']['output']>;
  serial_number?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "nft_transfer" */
export type Nft_Transfer_Var_Pop_Order_By = {
  consensus_timestamp?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  receiver_account_id?: InputMaybe<Order_By>;
  sender_account_id?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Nft_Transfer_Var_Samp_Fields = {
  __typename?: 'nft_transfer_var_samp_fields';
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  receiver_account_id?: Maybe<Scalars['Float']['output']>;
  sender_account_id?: Maybe<Scalars['Float']['output']>;
  serial_number?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "nft_transfer" */
export type Nft_Transfer_Var_Samp_Order_By = {
  consensus_timestamp?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  receiver_account_id?: InputMaybe<Order_By>;
  sender_account_id?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Nft_Transfer_Variance_Fields = {
  __typename?: 'nft_transfer_variance_fields';
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  receiver_account_id?: Maybe<Scalars['Float']['output']>;
  sender_account_id?: Maybe<Scalars['Float']['output']>;
  serial_number?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "nft_transfer" */
export type Nft_Transfer_Variance_Order_By = {
  consensus_timestamp?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  receiver_account_id?: InputMaybe<Order_By>;
  sender_account_id?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Nft_Var_Pop_Fields = {
  __typename?: 'nft_var_pop_fields';
  account_id?: Maybe<Scalars['Float']['output']>;
  created_timestamp?: Maybe<Scalars['Float']['output']>;
  delegating_spender?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "modified_timestamp_nft" */
  modified_timestamp?: Maybe<Scalars['bigint']['output']>;
  serial_number?: Maybe<Scalars['Float']['output']>;
  spender?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "nft" */
export type Nft_Var_Pop_Order_By = {
  account_id?: InputMaybe<Order_By>;
  created_timestamp?: InputMaybe<Order_By>;
  delegating_spender?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  spender?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Nft_Var_Samp_Fields = {
  __typename?: 'nft_var_samp_fields';
  account_id?: Maybe<Scalars['Float']['output']>;
  created_timestamp?: Maybe<Scalars['Float']['output']>;
  delegating_spender?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "modified_timestamp_nft" */
  modified_timestamp?: Maybe<Scalars['bigint']['output']>;
  serial_number?: Maybe<Scalars['Float']['output']>;
  spender?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "nft" */
export type Nft_Var_Samp_Order_By = {
  account_id?: InputMaybe<Order_By>;
  created_timestamp?: InputMaybe<Order_By>;
  delegating_spender?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  spender?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Nft_Variance_Fields = {
  __typename?: 'nft_variance_fields';
  account_id?: Maybe<Scalars['Float']['output']>;
  created_timestamp?: Maybe<Scalars['Float']['output']>;
  delegating_spender?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "modified_timestamp_nft" */
  modified_timestamp?: Maybe<Scalars['bigint']['output']>;
  serial_number?: Maybe<Scalars['Float']['output']>;
  spender?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "nft" */
export type Nft_Variance_Order_By = {
  account_id?: InputMaybe<Order_By>;
  created_timestamp?: InputMaybe<Order_By>;
  delegating_spender?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  spender?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "node_stake" */
export type Node_Stake = {
  __typename?: 'node_stake';
  consensus_timestamp: Scalars['bigint']['output'];
  /** A computed field, executes function "node_stake_consensus_timestamp_iso8601" */
  consensus_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  epoch_day: Scalars['bigint']['output'];
  max_stake: Scalars['bigint']['output'];
  min_stake: Scalars['bigint']['output'];
  node_id: Scalars['bigint']['output'];
  reward_rate: Scalars['bigint']['output'];
  stake: Scalars['bigint']['output'];
  stake_not_rewarded: Scalars['bigint']['output'];
  stake_rewarded: Scalars['bigint']['output'];
  staking_period: Scalars['bigint']['output'];
};

/** aggregated selection of "node_stake" */
export type Node_Stake_Aggregate = {
  __typename?: 'node_stake_aggregate';
  aggregate?: Maybe<Node_Stake_Aggregate_Fields>;
  nodes: Array<Node_Stake>;
};

/** aggregate fields of "node_stake" */
export type Node_Stake_Aggregate_Fields = {
  __typename?: 'node_stake_aggregate_fields';
  avg?: Maybe<Node_Stake_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Node_Stake_Max_Fields>;
  min?: Maybe<Node_Stake_Min_Fields>;
  stddev?: Maybe<Node_Stake_Stddev_Fields>;
  stddev_pop?: Maybe<Node_Stake_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Node_Stake_Stddev_Samp_Fields>;
  sum?: Maybe<Node_Stake_Sum_Fields>;
  var_pop?: Maybe<Node_Stake_Var_Pop_Fields>;
  var_samp?: Maybe<Node_Stake_Var_Samp_Fields>;
  variance?: Maybe<Node_Stake_Variance_Fields>;
};


/** aggregate fields of "node_stake" */
export type Node_Stake_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Node_Stake_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Node_Stake_Avg_Fields = {
  __typename?: 'node_stake_avg_fields';
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  epoch_day?: Maybe<Scalars['Float']['output']>;
  max_stake?: Maybe<Scalars['Float']['output']>;
  min_stake?: Maybe<Scalars['Float']['output']>;
  node_id?: Maybe<Scalars['Float']['output']>;
  reward_rate?: Maybe<Scalars['Float']['output']>;
  stake?: Maybe<Scalars['Float']['output']>;
  stake_not_rewarded?: Maybe<Scalars['Float']['output']>;
  stake_rewarded?: Maybe<Scalars['Float']['output']>;
  staking_period?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "node_stake". All fields are combined with a logical 'AND'. */
export type Node_Stake_Bool_Exp = {
  _and?: InputMaybe<Array<Node_Stake_Bool_Exp>>;
  _not?: InputMaybe<Node_Stake_Bool_Exp>;
  _or?: InputMaybe<Array<Node_Stake_Bool_Exp>>;
  consensus_timestamp?: InputMaybe<Bigint_Comparison_Exp>;
  consensus_timestamp_iso8601?: InputMaybe<String_Comparison_Exp>;
  epoch_day?: InputMaybe<Bigint_Comparison_Exp>;
  max_stake?: InputMaybe<Bigint_Comparison_Exp>;
  min_stake?: InputMaybe<Bigint_Comparison_Exp>;
  node_id?: InputMaybe<Bigint_Comparison_Exp>;
  reward_rate?: InputMaybe<Bigint_Comparison_Exp>;
  stake?: InputMaybe<Bigint_Comparison_Exp>;
  stake_not_rewarded?: InputMaybe<Bigint_Comparison_Exp>;
  stake_rewarded?: InputMaybe<Bigint_Comparison_Exp>;
  staking_period?: InputMaybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Node_Stake_Max_Fields = {
  __typename?: 'node_stake_max_fields';
  consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "node_stake_consensus_timestamp_iso8601" */
  consensus_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  epoch_day?: Maybe<Scalars['bigint']['output']>;
  max_stake?: Maybe<Scalars['bigint']['output']>;
  min_stake?: Maybe<Scalars['bigint']['output']>;
  node_id?: Maybe<Scalars['bigint']['output']>;
  reward_rate?: Maybe<Scalars['bigint']['output']>;
  stake?: Maybe<Scalars['bigint']['output']>;
  stake_not_rewarded?: Maybe<Scalars['bigint']['output']>;
  stake_rewarded?: Maybe<Scalars['bigint']['output']>;
  staking_period?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type Node_Stake_Min_Fields = {
  __typename?: 'node_stake_min_fields';
  consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "node_stake_consensus_timestamp_iso8601" */
  consensus_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  epoch_day?: Maybe<Scalars['bigint']['output']>;
  max_stake?: Maybe<Scalars['bigint']['output']>;
  min_stake?: Maybe<Scalars['bigint']['output']>;
  node_id?: Maybe<Scalars['bigint']['output']>;
  reward_rate?: Maybe<Scalars['bigint']['output']>;
  stake?: Maybe<Scalars['bigint']['output']>;
  stake_not_rewarded?: Maybe<Scalars['bigint']['output']>;
  stake_rewarded?: Maybe<Scalars['bigint']['output']>;
  staking_period?: Maybe<Scalars['bigint']['output']>;
};

/** Ordering options when selecting data from "node_stake". */
export type Node_Stake_Order_By = {
  consensus_timestamp?: InputMaybe<Order_By>;
  consensus_timestamp_iso8601?: InputMaybe<Order_By>;
  epoch_day?: InputMaybe<Order_By>;
  max_stake?: InputMaybe<Order_By>;
  min_stake?: InputMaybe<Order_By>;
  node_id?: InputMaybe<Order_By>;
  reward_rate?: InputMaybe<Order_By>;
  stake?: InputMaybe<Order_By>;
  stake_not_rewarded?: InputMaybe<Order_By>;
  stake_rewarded?: InputMaybe<Order_By>;
  staking_period?: InputMaybe<Order_By>;
};

/** select columns of table "node_stake" */
export enum Node_Stake_Select_Column {
  /** column name */
  ConsensusTimestamp = 'consensus_timestamp',
  /** column name */
  EpochDay = 'epoch_day',
  /** column name */
  MaxStake = 'max_stake',
  /** column name */
  MinStake = 'min_stake',
  /** column name */
  NodeId = 'node_id',
  /** column name */
  RewardRate = 'reward_rate',
  /** column name */
  Stake = 'stake',
  /** column name */
  StakeNotRewarded = 'stake_not_rewarded',
  /** column name */
  StakeRewarded = 'stake_rewarded',
  /** column name */
  StakingPeriod = 'staking_period'
}

/** aggregate stddev on columns */
export type Node_Stake_Stddev_Fields = {
  __typename?: 'node_stake_stddev_fields';
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  epoch_day?: Maybe<Scalars['Float']['output']>;
  max_stake?: Maybe<Scalars['Float']['output']>;
  min_stake?: Maybe<Scalars['Float']['output']>;
  node_id?: Maybe<Scalars['Float']['output']>;
  reward_rate?: Maybe<Scalars['Float']['output']>;
  stake?: Maybe<Scalars['Float']['output']>;
  stake_not_rewarded?: Maybe<Scalars['Float']['output']>;
  stake_rewarded?: Maybe<Scalars['Float']['output']>;
  staking_period?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Node_Stake_Stddev_Pop_Fields = {
  __typename?: 'node_stake_stddev_pop_fields';
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  epoch_day?: Maybe<Scalars['Float']['output']>;
  max_stake?: Maybe<Scalars['Float']['output']>;
  min_stake?: Maybe<Scalars['Float']['output']>;
  node_id?: Maybe<Scalars['Float']['output']>;
  reward_rate?: Maybe<Scalars['Float']['output']>;
  stake?: Maybe<Scalars['Float']['output']>;
  stake_not_rewarded?: Maybe<Scalars['Float']['output']>;
  stake_rewarded?: Maybe<Scalars['Float']['output']>;
  staking_period?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Node_Stake_Stddev_Samp_Fields = {
  __typename?: 'node_stake_stddev_samp_fields';
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  epoch_day?: Maybe<Scalars['Float']['output']>;
  max_stake?: Maybe<Scalars['Float']['output']>;
  min_stake?: Maybe<Scalars['Float']['output']>;
  node_id?: Maybe<Scalars['Float']['output']>;
  reward_rate?: Maybe<Scalars['Float']['output']>;
  stake?: Maybe<Scalars['Float']['output']>;
  stake_not_rewarded?: Maybe<Scalars['Float']['output']>;
  stake_rewarded?: Maybe<Scalars['Float']['output']>;
  staking_period?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "node_stake" */
export type Node_Stake_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Node_Stake_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Node_Stake_Stream_Cursor_Value_Input = {
  consensus_timestamp?: InputMaybe<Scalars['bigint']['input']>;
  epoch_day?: InputMaybe<Scalars['bigint']['input']>;
  max_stake?: InputMaybe<Scalars['bigint']['input']>;
  min_stake?: InputMaybe<Scalars['bigint']['input']>;
  node_id?: InputMaybe<Scalars['bigint']['input']>;
  reward_rate?: InputMaybe<Scalars['bigint']['input']>;
  stake?: InputMaybe<Scalars['bigint']['input']>;
  stake_not_rewarded?: InputMaybe<Scalars['bigint']['input']>;
  stake_rewarded?: InputMaybe<Scalars['bigint']['input']>;
  staking_period?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Node_Stake_Sum_Fields = {
  __typename?: 'node_stake_sum_fields';
  consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  epoch_day?: Maybe<Scalars['bigint']['output']>;
  max_stake?: Maybe<Scalars['bigint']['output']>;
  min_stake?: Maybe<Scalars['bigint']['output']>;
  node_id?: Maybe<Scalars['bigint']['output']>;
  reward_rate?: Maybe<Scalars['bigint']['output']>;
  stake?: Maybe<Scalars['bigint']['output']>;
  stake_not_rewarded?: Maybe<Scalars['bigint']['output']>;
  stake_rewarded?: Maybe<Scalars['bigint']['output']>;
  staking_period?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type Node_Stake_Var_Pop_Fields = {
  __typename?: 'node_stake_var_pop_fields';
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  epoch_day?: Maybe<Scalars['Float']['output']>;
  max_stake?: Maybe<Scalars['Float']['output']>;
  min_stake?: Maybe<Scalars['Float']['output']>;
  node_id?: Maybe<Scalars['Float']['output']>;
  reward_rate?: Maybe<Scalars['Float']['output']>;
  stake?: Maybe<Scalars['Float']['output']>;
  stake_not_rewarded?: Maybe<Scalars['Float']['output']>;
  stake_rewarded?: Maybe<Scalars['Float']['output']>;
  staking_period?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Node_Stake_Var_Samp_Fields = {
  __typename?: 'node_stake_var_samp_fields';
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  epoch_day?: Maybe<Scalars['Float']['output']>;
  max_stake?: Maybe<Scalars['Float']['output']>;
  min_stake?: Maybe<Scalars['Float']['output']>;
  node_id?: Maybe<Scalars['Float']['output']>;
  reward_rate?: Maybe<Scalars['Float']['output']>;
  stake?: Maybe<Scalars['Float']['output']>;
  stake_not_rewarded?: Maybe<Scalars['Float']['output']>;
  stake_rewarded?: Maybe<Scalars['Float']['output']>;
  staking_period?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Node_Stake_Variance_Fields = {
  __typename?: 'node_stake_variance_fields';
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  epoch_day?: Maybe<Scalars['Float']['output']>;
  max_stake?: Maybe<Scalars['Float']['output']>;
  min_stake?: Maybe<Scalars['Float']['output']>;
  node_id?: Maybe<Scalars['Float']['output']>;
  reward_rate?: Maybe<Scalars['Float']['output']>;
  stake?: Maybe<Scalars['Float']['output']>;
  stake_not_rewarded?: Maybe<Scalars['Float']['output']>;
  stake_rewarded?: Maybe<Scalars['Float']['output']>;
  staking_period?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "non_fee_transfer" */
export type Non_Fee_Transfer = {
  __typename?: 'non_fee_transfer';
  amount: Scalars['bigint']['output'];
  consensus_timestamp: Scalars['bigint']['output'];
  /** A computed field, executes function "non_fee_transfer_consensus_timestamp_iso8601" */
  consensus_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  entity_id?: Maybe<Scalars['bigint']['output']>;
  is_approval?: Maybe<Scalars['Boolean']['output']>;
  payer_account_id: Scalars['bigint']['output'];
};

/** aggregated selection of "non_fee_transfer" */
export type Non_Fee_Transfer_Aggregate = {
  __typename?: 'non_fee_transfer_aggregate';
  aggregate?: Maybe<Non_Fee_Transfer_Aggregate_Fields>;
  nodes: Array<Non_Fee_Transfer>;
};

/** aggregate fields of "non_fee_transfer" */
export type Non_Fee_Transfer_Aggregate_Fields = {
  __typename?: 'non_fee_transfer_aggregate_fields';
  avg?: Maybe<Non_Fee_Transfer_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Non_Fee_Transfer_Max_Fields>;
  min?: Maybe<Non_Fee_Transfer_Min_Fields>;
  stddev?: Maybe<Non_Fee_Transfer_Stddev_Fields>;
  stddev_pop?: Maybe<Non_Fee_Transfer_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Non_Fee_Transfer_Stddev_Samp_Fields>;
  sum?: Maybe<Non_Fee_Transfer_Sum_Fields>;
  var_pop?: Maybe<Non_Fee_Transfer_Var_Pop_Fields>;
  var_samp?: Maybe<Non_Fee_Transfer_Var_Samp_Fields>;
  variance?: Maybe<Non_Fee_Transfer_Variance_Fields>;
};


/** aggregate fields of "non_fee_transfer" */
export type Non_Fee_Transfer_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Non_Fee_Transfer_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Non_Fee_Transfer_Avg_Fields = {
  __typename?: 'non_fee_transfer_avg_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  entity_id?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "non_fee_transfer". All fields are combined with a logical 'AND'. */
export type Non_Fee_Transfer_Bool_Exp = {
  _and?: InputMaybe<Array<Non_Fee_Transfer_Bool_Exp>>;
  _not?: InputMaybe<Non_Fee_Transfer_Bool_Exp>;
  _or?: InputMaybe<Array<Non_Fee_Transfer_Bool_Exp>>;
  amount?: InputMaybe<Bigint_Comparison_Exp>;
  consensus_timestamp?: InputMaybe<Bigint_Comparison_Exp>;
  consensus_timestamp_iso8601?: InputMaybe<String_Comparison_Exp>;
  entity_id?: InputMaybe<Bigint_Comparison_Exp>;
  is_approval?: InputMaybe<Boolean_Comparison_Exp>;
  payer_account_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Non_Fee_Transfer_Max_Fields = {
  __typename?: 'non_fee_transfer_max_fields';
  amount?: Maybe<Scalars['bigint']['output']>;
  consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "non_fee_transfer_consensus_timestamp_iso8601" */
  consensus_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  entity_id?: Maybe<Scalars['bigint']['output']>;
  payer_account_id?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type Non_Fee_Transfer_Min_Fields = {
  __typename?: 'non_fee_transfer_min_fields';
  amount?: Maybe<Scalars['bigint']['output']>;
  consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "non_fee_transfer_consensus_timestamp_iso8601" */
  consensus_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  entity_id?: Maybe<Scalars['bigint']['output']>;
  payer_account_id?: Maybe<Scalars['bigint']['output']>;
};

/** Ordering options when selecting data from "non_fee_transfer". */
export type Non_Fee_Transfer_Order_By = {
  amount?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  consensus_timestamp_iso8601?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  is_approval?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
};

/** select columns of table "non_fee_transfer" */
export enum Non_Fee_Transfer_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  ConsensusTimestamp = 'consensus_timestamp',
  /** column name */
  EntityId = 'entity_id',
  /** column name */
  IsApproval = 'is_approval',
  /** column name */
  PayerAccountId = 'payer_account_id'
}

/** aggregate stddev on columns */
export type Non_Fee_Transfer_Stddev_Fields = {
  __typename?: 'non_fee_transfer_stddev_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  entity_id?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Non_Fee_Transfer_Stddev_Pop_Fields = {
  __typename?: 'non_fee_transfer_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  entity_id?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Non_Fee_Transfer_Stddev_Samp_Fields = {
  __typename?: 'non_fee_transfer_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  entity_id?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "non_fee_transfer" */
export type Non_Fee_Transfer_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Non_Fee_Transfer_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Non_Fee_Transfer_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars['bigint']['input']>;
  consensus_timestamp?: InputMaybe<Scalars['bigint']['input']>;
  entity_id?: InputMaybe<Scalars['bigint']['input']>;
  is_approval?: InputMaybe<Scalars['Boolean']['input']>;
  payer_account_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Non_Fee_Transfer_Sum_Fields = {
  __typename?: 'non_fee_transfer_sum_fields';
  amount?: Maybe<Scalars['bigint']['output']>;
  consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  entity_id?: Maybe<Scalars['bigint']['output']>;
  payer_account_id?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type Non_Fee_Transfer_Var_Pop_Fields = {
  __typename?: 'non_fee_transfer_var_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  entity_id?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Non_Fee_Transfer_Var_Samp_Fields = {
  __typename?: 'non_fee_transfer_var_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  entity_id?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Non_Fee_Transfer_Variance_Fields = {
  __typename?: 'non_fee_transfer_variance_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  entity_id?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "_transfer" */
  _transfer: Array<_Transfer>;
  /** fetch aggregated fields from the table: "_transfer" */
  _transfer_aggregate: _Transfer_Aggregate;
  /** execute function "account_transfer" which returns "_transfer" */
  account_transfer: Array<_Transfer>;
  /** execute function "account_transfer" and query aggregates on result of table type "_transfer" */
  account_transfer_aggregate: _Transfer_Aggregate;
  /** fetch data from the table: "address_book" */
  address_book: Array<Address_Book>;
  /** fetch aggregated fields from the table: "address_book" */
  address_book_aggregate: Address_Book_Aggregate;
  /** fetch data from the table: "address_book" using primary key columns */
  address_book_by_pk?: Maybe<Address_Book>;
  /** An array relationship */
  address_book_entry: Array<Address_Book_Entry>;
  /** An aggregate relationship */
  address_book_entry_aggregate: Address_Book_Entry_Aggregate;
  /** fetch data from the table: "address_book_entry" using primary key columns */
  address_book_entry_by_pk?: Maybe<Address_Book_Entry>;
  /** fetch data from the table: "address_book_service_endpoint" */
  address_book_service_endpoint: Array<Address_Book_Service_Endpoint>;
  /** fetch aggregated fields from the table: "address_book_service_endpoint" */
  address_book_service_endpoint_aggregate: Address_Book_Service_Endpoint_Aggregate;
  /** An array relationship */
  assessed_custom_fee: Array<Assessed_Custom_Fee>;
  /** An aggregate relationship */
  assessed_custom_fee_aggregate: Assessed_Custom_Fee_Aggregate;
  /** execute function "child_transactions" which returns "transaction" */
  child_transactions: Array<Transaction>;
  /** execute function "child_transactions" and query aggregates on result of table type "transaction" */
  child_transactions_aggregate: Transaction_Aggregate;
  /** fetch data from the table: "contract" */
  contract: Array<Contract>;
  /** fetch data from the table: "contract_action" */
  contract_action: Array<Contract_Action>;
  /** fetch aggregated fields from the table: "contract_action" */
  contract_action_aggregate: Contract_Action_Aggregate;
  /** fetch data from the table: "contract_action" using primary key columns */
  contract_action_by_pk?: Maybe<Contract_Action>;
  /** fetch aggregated fields from the table: "contract" */
  contract_aggregate: Contract_Aggregate;
  /** fetch data from the table: "contract" using primary key columns */
  contract_by_pk?: Maybe<Contract>;
  /** fetch data from the table: "contract_log" */
  contract_log: Array<Contract_Log>;
  /** fetch aggregated fields from the table: "contract_log" */
  contract_log_aggregate: Contract_Log_Aggregate;
  /** fetch data from the table: "contract_log" using primary key columns */
  contract_log_by_pk?: Maybe<Contract_Log>;
  /** fetch data from the table: "contract_result" */
  contract_result: Array<Contract_Result>;
  /** fetch aggregated fields from the table: "contract_result" */
  contract_result_aggregate: Contract_Result_Aggregate;
  /** fetch data from the table: "contract_result" using primary key columns */
  contract_result_by_pk?: Maybe<Contract_Result>;
  /** fetch data from the table: "contract_state" */
  contract_state: Array<Contract_State>;
  /** fetch aggregated fields from the table: "contract_state" */
  contract_state_aggregate: Contract_State_Aggregate;
  /** fetch data from the table: "contract_state" using primary key columns */
  contract_state_by_pk?: Maybe<Contract_State>;
  /** fetch data from the table: "contract_state_change" */
  contract_state_change: Array<Contract_State_Change>;
  /** fetch aggregated fields from the table: "contract_state_change" */
  contract_state_change_aggregate: Contract_State_Change_Aggregate;
  /** fetch data from the table: "contract_state_change" using primary key columns */
  contract_state_change_by_pk?: Maybe<Contract_State_Change>;
  /** fetch data from the table: "contract_transactions_last_24hrs" */
  contract_transactions_last_24hrs: Array<Contract_Transactions_Last_24hrs>;
  /** fetch aggregated fields from the table: "contract_transactions_last_24hrs" */
  contract_transactions_last_24hrs_aggregate: Contract_Transactions_Last_24hrs_Aggregate;
  /** fetch data from the table: "crypto_allowance" */
  crypto_allowance: Array<Crypto_Allowance>;
  /** fetch aggregated fields from the table: "crypto_allowance" */
  crypto_allowance_aggregate: Crypto_Allowance_Aggregate;
  /** fetch data from the table: "crypto_allowance" using primary key columns */
  crypto_allowance_by_pk?: Maybe<Crypto_Allowance>;
  /** fetch data from the table: "crypto_allowance_history" */
  crypto_allowance_history: Array<Crypto_Allowance_History>;
  /** fetch aggregated fields from the table: "crypto_allowance_history" */
  crypto_allowance_history_aggregate: Crypto_Allowance_History_Aggregate;
  /** An array relationship */
  crypto_transfer: Array<Crypto_Transfer>;
  /** An aggregate relationship */
  crypto_transfer_aggregate: Crypto_Transfer_Aggregate;
  /** An array relationship */
  custom_fee: Array<Custom_Fee>;
  /** An aggregate relationship */
  custom_fee_aggregate: Custom_Fee_Aggregate;
  /** fetch data from the table: "custom_fee" using primary key columns */
  custom_fee_by_pk?: Maybe<Custom_Fee>;
  /** execute function "ecosystem.active_accounts_per_period" which returns "ecosystem.metric" */
  ecosystem_active_accounts_per_period: Array<Ecosystem_Metric>;
  /** execute function "ecosystem.active_accounts_per_period" and query aggregates on result of table type "ecosystem.metric" */
  ecosystem_active_accounts_per_period_aggregate: Ecosystem_Metric_Aggregate;
  /** fetch data from the table: "ecosystem.active_nft_account_cohorts" */
  ecosystem_active_nft_account_cohorts: Array<Ecosystem_Active_Nft_Account_Cohorts>;
  /** fetch aggregated fields from the table: "ecosystem.active_nft_account_cohorts" */
  ecosystem_active_nft_account_cohorts_aggregate: Ecosystem_Active_Nft_Account_Cohorts_Aggregate;
  /** execute function "ecosystem.associated_revenue_per_period" which returns "ecosystem.metric" */
  ecosystem_associated_revenue_per_period: Array<Ecosystem_Metric>;
  /** execute function "ecosystem.associated_revenue_per_period" and query aggregates on result of table type "ecosystem.metric" */
  ecosystem_associated_revenue_per_period_aggregate: Ecosystem_Metric_Aggregate;
  /** execute function "ecosystem.associated_transaction_fees_per_period" which returns "ecosystem.metric" */
  ecosystem_associated_transaction_fees_per_period: Array<Ecosystem_Metric>;
  /** execute function "ecosystem.associated_transaction_fees_per_period" and query aggregates on result of table type "ecosystem.metric" */
  ecosystem_associated_transaction_fees_per_period_aggregate: Ecosystem_Metric_Aggregate;
  /** execute function "ecosystem.associated_transactions_per_period" which returns "ecosystem.metric" */
  ecosystem_associated_transactions_per_period: Array<Ecosystem_Metric>;
  /** execute function "ecosystem.associated_transactions_per_period" and query aggregates on result of table type "ecosystem.metric" */
  ecosystem_associated_transactions_per_period_aggregate: Ecosystem_Metric_Aggregate;
  /** fetch data from the table: "ecosystem.estimated_transaction_totals" */
  ecosystem_estimated_transaction_totals: Array<Ecosystem_Estimated_Transaction_Totals>;
  /** fetch aggregated fields from the table: "ecosystem.estimated_transaction_totals" */
  ecosystem_estimated_transaction_totals_aggregate: Ecosystem_Estimated_Transaction_Totals_Aggregate;
  /** execute function "ecosystem.fees_paid_per_period" which returns "ecosystem.metric" */
  ecosystem_fees_paid_per_period: Array<Ecosystem_Metric>;
  /** execute function "ecosystem.fees_paid_per_period" and query aggregates on result of table type "ecosystem.metric" */
  ecosystem_fees_paid_per_period_aggregate: Ecosystem_Metric_Aggregate;
  /** execute function "ecosystem.fungible_token_transfers_per_period" which returns "ecosystem.metric" */
  ecosystem_fungible_token_transfers_per_period: Array<Ecosystem_Metric>;
  /** execute function "ecosystem.fungible_token_transfers_per_period" and query aggregates on result of table type "ecosystem.metric" */
  ecosystem_fungible_token_transfers_per_period_aggregate: Ecosystem_Metric_Aggregate;
  /** execute function "ecosystem.hcs_messages_per_period" which returns "ecosystem.metric" */
  ecosystem_hcs_messages_per_period: Array<Ecosystem_Metric>;
  /** execute function "ecosystem.hcs_messages_per_period" and query aggregates on result of table type "ecosystem.metric" */
  ecosystem_hcs_messages_per_period_aggregate: Ecosystem_Metric_Aggregate;
  /** fetch data from the table: "ecosystem.metric" */
  ecosystem_metric: Array<Ecosystem_Metric>;
  /** fetch aggregated fields from the table: "ecosystem.metric" */
  ecosystem_metric_aggregate: Ecosystem_Metric_Aggregate;
  /** fetch data from the table: "ecosystem.metric_description" */
  ecosystem_metric_description: Array<Ecosystem_Metric_Description>;
  /** fetch aggregated fields from the table: "ecosystem.metric_description" */
  ecosystem_metric_description_aggregate: Ecosystem_Metric_Description_Aggregate;
  /** fetch data from the table: "ecosystem.metric_description" using primary key columns */
  ecosystem_metric_description_by_pk?: Maybe<Ecosystem_Metric_Description>;
  /** execute function "ecosystem.nft_collection_sales_volume" which returns "ecosystem.metric" */
  ecosystem_nft_collection_sales_volume?: Maybe<Ecosystem_Metric>;
  /** execute function "ecosystem.nft_collection_sales_volume" and query aggregates on result of table type "ecosystem.metric" */
  ecosystem_nft_collection_sales_volume_aggregate: Ecosystem_Metric_Aggregate;
  /** execute function "ecosystem.nft_holders_per_period" which returns "ecosystem.metric" */
  ecosystem_nft_holders_per_period: Array<Ecosystem_Metric>;
  /** execute function "ecosystem.nft_holders_per_period" and query aggregates on result of table type "ecosystem.metric" */
  ecosystem_nft_holders_per_period_aggregate: Ecosystem_Metric_Aggregate;
  /** execute function "ecosystem.non_fungible_token_transfers_per_period" which returns "ecosystem.metric" */
  ecosystem_non_fungible_token_transfers_per_period: Array<Ecosystem_Metric>;
  /** execute function "ecosystem.non_fungible_token_transfers_per_period" and query aggregates on result of table type "ecosystem.metric" */
  ecosystem_non_fungible_token_transfers_per_period_aggregate: Ecosystem_Metric_Aggregate;
  /** execute function "ecosystem.revenue_per_period" which returns "ecosystem.metric" */
  ecosystem_revenue_per_period: Array<Ecosystem_Metric>;
  /** execute function "ecosystem.revenue_per_period" and query aggregates on result of table type "ecosystem.metric" */
  ecosystem_revenue_per_period_aggregate: Ecosystem_Metric_Aggregate;
  /** execute function "ecosystem.smart_contract_calls_per_period" which returns "ecosystem.metric" */
  ecosystem_smart_contract_calls_per_period: Array<Ecosystem_Metric>;
  /** execute function "ecosystem.smart_contract_calls_per_period" and query aggregates on result of table type "ecosystem.metric" */
  ecosystem_smart_contract_calls_per_period_aggregate: Ecosystem_Metric_Aggregate;
  /** fetch data from the table: "ecosystem.transaction_count_by_type" */
  ecosystem_transaction_count_by_type: Array<Ecosystem_Transaction_Count_By_Type>;
  /** fetch aggregated fields from the table: "ecosystem.transaction_count_by_type" */
  ecosystem_transaction_count_by_type_aggregate: Ecosystem_Transaction_Count_By_Type_Aggregate;
  /** execute function "ecosystem.transaction_fees_per_period" which returns "ecosystem.metric" */
  ecosystem_transaction_fees_per_period: Array<Ecosystem_Metric>;
  /** execute function "ecosystem.transaction_fees_per_period" and query aggregates on result of table type "ecosystem.metric" */
  ecosystem_transaction_fees_per_period_aggregate: Ecosystem_Metric_Aggregate;
  /** execute function "ecosystem.transactions_by_type" which returns "ecosystem.transaction_count_by_type" */
  ecosystem_transactions_by_type: Array<Ecosystem_Transaction_Count_By_Type>;
  /** execute function "ecosystem.transactions_by_type" and query aggregates on result of table type "ecosystem.transaction_count_by_type" */
  ecosystem_transactions_by_type_aggregate: Ecosystem_Transaction_Count_By_Type_Aggregate;
  /** execute function "ecosystem.transactions_per_period" which returns "ecosystem.metric" */
  ecosystem_transactions_per_period: Array<Ecosystem_Metric>;
  /** execute function "ecosystem.transactions_per_period" and query aggregates on result of table type "ecosystem.metric" */
  ecosystem_transactions_per_period_aggregate: Ecosystem_Metric_Aggregate;
  /** fetch data from the table: "entity" */
  entity: Array<Entity>;
  /** fetch aggregated fields from the table: "entity" */
  entity_aggregate: Entity_Aggregate;
  /** fetch data from the table: "entity" using primary key columns */
  entity_by_pk?: Maybe<Entity>;
  /** fetch data from the table: "entity_history" */
  entity_history: Array<Entity_History>;
  /** fetch aggregated fields from the table: "entity_history" */
  entity_history_aggregate: Entity_History_Aggregate;
  /** fetch data from the table: "entity_stake" */
  entity_stake: Array<Entity_Stake>;
  /** fetch aggregated fields from the table: "entity_stake" */
  entity_stake_aggregate: Entity_Stake_Aggregate;
  /** fetch data from the table: "entity_stake" using primary key columns */
  entity_stake_by_pk?: Maybe<Entity_Stake>;
  /** execute function "entity_transaction" which returns "transaction" */
  entity_transaction: Array<Transaction>;
  /** execute function "entity_transaction" and query aggregates on result of table type "transaction" */
  entity_transaction_aggregate: Transaction_Aggregate;
  /** fetch data from the table: "ethereum_transaction" */
  ethereum_transaction: Array<Ethereum_Transaction>;
  /** fetch aggregated fields from the table: "ethereum_transaction" */
  ethereum_transaction_aggregate: Ethereum_Transaction_Aggregate;
  /** fetch data from the table: "ethereum_transaction" using primary key columns */
  ethereum_transaction_by_pk?: Maybe<Ethereum_Transaction>;
  /** fetch data from the table: "network_stake" */
  network_stake: Array<Network_Stake>;
  /** fetch aggregated fields from the table: "network_stake" */
  network_stake_aggregate: Network_Stake_Aggregate;
  /** fetch data from the table: "network_stake" using primary key columns */
  network_stake_by_pk?: Maybe<Network_Stake>;
  /** An array relationship */
  nft: Array<Nft>;
  /** An aggregate relationship */
  nft_aggregate: Nft_Aggregate;
  /** fetch data from the table: "nft_allowance" */
  nft_allowance: Array<Nft_Allowance>;
  /** fetch aggregated fields from the table: "nft_allowance" */
  nft_allowance_aggregate: Nft_Allowance_Aggregate;
  /** fetch data from the table: "nft_allowance" using primary key columns */
  nft_allowance_by_pk?: Maybe<Nft_Allowance>;
  /** fetch data from the table: "nft_allowance_history" */
  nft_allowance_history: Array<Nft_Allowance_History>;
  /** fetch aggregated fields from the table: "nft_allowance_history" */
  nft_allowance_history_aggregate: Nft_Allowance_History_Aggregate;
  /** fetch data from the table: "nft" using primary key columns */
  nft_by_pk?: Maybe<Nft>;
  /** fetch data from the table: "nft_history" */
  nft_history: Array<Nft_History>;
  /** fetch aggregated fields from the table: "nft_history" */
  nft_history_aggregate: Nft_History_Aggregate;
  /** An array relationship */
  nft_transfer: Array<Nft_Transfer>;
  /** An aggregate relationship */
  nft_transfer_aggregate: Nft_Transfer_Aggregate;
  /** fetch data from the table: "node_stake" */
  node_stake: Array<Node_Stake>;
  /** fetch aggregated fields from the table: "node_stake" */
  node_stake_aggregate: Node_Stake_Aggregate;
  /** fetch data from the table: "node_stake" using primary key columns */
  node_stake_by_pk?: Maybe<Node_Stake>;
  /** fetch data from the table: "non_fee_transfer" */
  non_fee_transfer: Array<Non_Fee_Transfer>;
  /** fetch aggregated fields from the table: "non_fee_transfer" */
  non_fee_transfer_aggregate: Non_Fee_Transfer_Aggregate;
  /** fetch data from the table: "schedule" */
  schedule: Array<Schedule>;
  /** fetch aggregated fields from the table: "schedule" */
  schedule_aggregate: Schedule_Aggregate;
  /** fetch data from the table: "schedule" using primary key columns */
  schedule_by_pk?: Maybe<Schedule>;
  /** execute function "sibling_transactions" which returns "transaction" */
  sibling_transactions: Array<Transaction>;
  /** execute function "sibling_transactions" and query aggregates on result of table type "transaction" */
  sibling_transactions_aggregate: Transaction_Aggregate;
  /** An array relationship */
  staking_reward_transfer: Array<Staking_Reward_Transfer>;
  /** An aggregate relationship */
  staking_reward_transfer_aggregate: Staking_Reward_Transfer_Aggregate;
  /** fetch data from the table: "staking_reward_transfer" using primary key columns */
  staking_reward_transfer_by_pk?: Maybe<Staking_Reward_Transfer>;
  /** fetch data from the table: "token" */
  token: Array<Token>;
  /** An array relationship */
  token_account: Array<Token_Account>;
  /** An aggregate relationship */
  token_account_aggregate: Token_Account_Aggregate;
  /** fetch data from the table: "token_account" using primary key columns */
  token_account_by_pk?: Maybe<Token_Account>;
  /** fetch data from the table: "token_account_history" */
  token_account_history: Array<Token_Account_History>;
  /** fetch aggregated fields from the table: "token_account_history" */
  token_account_history_aggregate: Token_Account_History_Aggregate;
  /** fetch aggregated fields from the table: "token" */
  token_aggregate: Token_Aggregate;
  /** fetch data from the table: "token_airdrop" */
  token_airdrop: Array<Token_Airdrop>;
  /** fetch aggregated fields from the table: "token_airdrop" */
  token_airdrop_aggregate: Token_Airdrop_Aggregate;
  /** fetch data from the table: "token_airdrop_history" */
  token_airdrop_history: Array<Token_Airdrop_History>;
  /** fetch aggregated fields from the table: "token_airdrop_history" */
  token_airdrop_history_aggregate: Token_Airdrop_History_Aggregate;
  /** An array relationship */
  token_allowance: Array<Token_Allowance>;
  /** An aggregate relationship */
  token_allowance_aggregate: Token_Allowance_Aggregate;
  /** fetch data from the table: "token_allowance" using primary key columns */
  token_allowance_by_pk?: Maybe<Token_Allowance>;
  /** fetch data from the table: "token_allowance_history" */
  token_allowance_history: Array<Token_Allowance_History>;
  /** fetch aggregated fields from the table: "token_allowance_history" */
  token_allowance_history_aggregate: Token_Allowance_History_Aggregate;
  /** fetch data from the table: "token" using primary key columns */
  token_by_pk?: Maybe<Token>;
  /** fetch data from the table: "token_history" */
  token_history: Array<Token_History>;
  /** fetch aggregated fields from the table: "token_history" */
  token_history_aggregate: Token_History_Aggregate;
  /** An array relationship */
  token_transfer: Array<Token_Transfer>;
  /** An aggregate relationship */
  token_transfer_aggregate: Token_Transfer_Aggregate;
  /** fetch data from the table: "topic" */
  topic: Array<Topic>;
  /** fetch aggregated fields from the table: "topic" */
  topic_aggregate: Topic_Aggregate;
  /** fetch data from the table: "topic" using primary key columns */
  topic_by_pk?: Maybe<Topic>;
  /** fetch data from the table: "topic_message" */
  topic_message: Array<Topic_Message>;
  /** fetch aggregated fields from the table: "topic_message" */
  topic_message_aggregate: Topic_Message_Aggregate;
  /** fetch data from the table: "topic_message_lookup" */
  topic_message_lookup: Array<Topic_Message_Lookup>;
  /** fetch aggregated fields from the table: "topic_message_lookup" */
  topic_message_lookup_aggregate: Topic_Message_Lookup_Aggregate;
  /** fetch data from the table: "topic_message_lookup" using primary key columns */
  topic_message_lookup_by_pk?: Maybe<Topic_Message_Lookup>;
  /** fetch data from the table: "total_accounts" */
  total_accounts: Array<Total_Accounts>;
  /** fetch aggregated fields from the table: "total_accounts" */
  total_accounts_aggregate: Total_Accounts_Aggregate;
  /** fetch data from the table: "transaction" */
  transaction: Array<Transaction>;
  /** fetch aggregated fields from the table: "transaction" */
  transaction_aggregate: Transaction_Aggregate;
  /** fetch data from the table: "transaction" using primary key columns */
  transaction_by_pk?: Maybe<Transaction>;
  /** fetch data from the table: "transaction_signature" */
  transaction_signature: Array<Transaction_Signature>;
  /** fetch aggregated fields from the table: "transaction_signature" */
  transaction_signature_aggregate: Transaction_Signature_Aggregate;
  /** execute function "transaction_transfer" which returns "_transfer" */
  transaction_transfer: Array<_Transfer>;
  /** execute function "transaction_transfer" and query aggregates on result of table type "_transfer" */
  transaction_transfer_aggregate: _Transfer_Aggregate;
  /** fetch data from the table: "transactions_last_24hrs" */
  transactions_last_24hrs: Array<Transactions_Last_24hrs>;
  /** fetch aggregated fields from the table: "transactions_last_24hrs" */
  transactions_last_24hrs_aggregate: Transactions_Last_24hrs_Aggregate;
};


export type Query_Root_TransferArgs = {
  distinct_on?: InputMaybe<Array<_Transfer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<_Transfer_Order_By>>;
  where?: InputMaybe<_Transfer_Bool_Exp>;
};


export type Query_Root_Transfer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<_Transfer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<_Transfer_Order_By>>;
  where?: InputMaybe<_Transfer_Bool_Exp>;
};


export type Query_RootAccount_TransferArgs = {
  args: Account_Transfer_Args;
  distinct_on?: InputMaybe<Array<_Transfer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<_Transfer_Order_By>>;
  where?: InputMaybe<_Transfer_Bool_Exp>;
};


export type Query_RootAccount_Transfer_AggregateArgs = {
  args: Account_Transfer_Args;
  distinct_on?: InputMaybe<Array<_Transfer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<_Transfer_Order_By>>;
  where?: InputMaybe<_Transfer_Bool_Exp>;
};


export type Query_RootAddress_BookArgs = {
  distinct_on?: InputMaybe<Array<Address_Book_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Address_Book_Order_By>>;
  where?: InputMaybe<Address_Book_Bool_Exp>;
};


export type Query_RootAddress_Book_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Address_Book_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Address_Book_Order_By>>;
  where?: InputMaybe<Address_Book_Bool_Exp>;
};


export type Query_RootAddress_Book_By_PkArgs = {
  start_consensus_timestamp: Scalars['bigint']['input'];
};


export type Query_RootAddress_Book_EntryArgs = {
  distinct_on?: InputMaybe<Array<Address_Book_Entry_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Address_Book_Entry_Order_By>>;
  where?: InputMaybe<Address_Book_Entry_Bool_Exp>;
};


export type Query_RootAddress_Book_Entry_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Address_Book_Entry_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Address_Book_Entry_Order_By>>;
  where?: InputMaybe<Address_Book_Entry_Bool_Exp>;
};


export type Query_RootAddress_Book_Entry_By_PkArgs = {
  consensus_timestamp: Scalars['bigint']['input'];
  node_id: Scalars['bigint']['input'];
};


export type Query_RootAddress_Book_Service_EndpointArgs = {
  distinct_on?: InputMaybe<Array<Address_Book_Service_Endpoint_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Address_Book_Service_Endpoint_Order_By>>;
  where?: InputMaybe<Address_Book_Service_Endpoint_Bool_Exp>;
};


export type Query_RootAddress_Book_Service_Endpoint_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Address_Book_Service_Endpoint_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Address_Book_Service_Endpoint_Order_By>>;
  where?: InputMaybe<Address_Book_Service_Endpoint_Bool_Exp>;
};


export type Query_RootAssessed_Custom_FeeArgs = {
  distinct_on?: InputMaybe<Array<Assessed_Custom_Fee_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Assessed_Custom_Fee_Order_By>>;
  where?: InputMaybe<Assessed_Custom_Fee_Bool_Exp>;
};


export type Query_RootAssessed_Custom_Fee_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Assessed_Custom_Fee_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Assessed_Custom_Fee_Order_By>>;
  where?: InputMaybe<Assessed_Custom_Fee_Bool_Exp>;
};


export type Query_RootChild_TransactionsArgs = {
  args: Child_Transactions_Args;
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Query_RootChild_Transactions_AggregateArgs = {
  args: Child_Transactions_Args;
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Query_RootContractArgs = {
  distinct_on?: InputMaybe<Array<Contract_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contract_Order_By>>;
  where?: InputMaybe<Contract_Bool_Exp>;
};


export type Query_RootContract_ActionArgs = {
  distinct_on?: InputMaybe<Array<Contract_Action_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contract_Action_Order_By>>;
  where?: InputMaybe<Contract_Action_Bool_Exp>;
};


export type Query_RootContract_Action_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contract_Action_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contract_Action_Order_By>>;
  where?: InputMaybe<Contract_Action_Bool_Exp>;
};


export type Query_RootContract_Action_By_PkArgs = {
  consensus_timestamp: Scalars['bigint']['input'];
  index: Scalars['Int']['input'];
};


export type Query_RootContract_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contract_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contract_Order_By>>;
  where?: InputMaybe<Contract_Bool_Exp>;
};


export type Query_RootContract_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootContract_LogArgs = {
  distinct_on?: InputMaybe<Array<Contract_Log_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contract_Log_Order_By>>;
  where?: InputMaybe<Contract_Log_Bool_Exp>;
};


export type Query_RootContract_Log_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contract_Log_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contract_Log_Order_By>>;
  where?: InputMaybe<Contract_Log_Bool_Exp>;
};


export type Query_RootContract_Log_By_PkArgs = {
  consensus_timestamp: Scalars['bigint']['input'];
  index: Scalars['Int']['input'];
};


export type Query_RootContract_ResultArgs = {
  distinct_on?: InputMaybe<Array<Contract_Result_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contract_Result_Order_By>>;
  where?: InputMaybe<Contract_Result_Bool_Exp>;
};


export type Query_RootContract_Result_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contract_Result_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contract_Result_Order_By>>;
  where?: InputMaybe<Contract_Result_Bool_Exp>;
};


export type Query_RootContract_Result_By_PkArgs = {
  consensus_timestamp: Scalars['bigint']['input'];
};


export type Query_RootContract_StateArgs = {
  distinct_on?: InputMaybe<Array<Contract_State_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contract_State_Order_By>>;
  where?: InputMaybe<Contract_State_Bool_Exp>;
};


export type Query_RootContract_State_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contract_State_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contract_State_Order_By>>;
  where?: InputMaybe<Contract_State_Bool_Exp>;
};


export type Query_RootContract_State_By_PkArgs = {
  contract_id: Scalars['bigint']['input'];
  slot: Scalars['bytea']['input'];
};


export type Query_RootContract_State_ChangeArgs = {
  distinct_on?: InputMaybe<Array<Contract_State_Change_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contract_State_Change_Order_By>>;
  where?: InputMaybe<Contract_State_Change_Bool_Exp>;
};


export type Query_RootContract_State_Change_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contract_State_Change_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contract_State_Change_Order_By>>;
  where?: InputMaybe<Contract_State_Change_Bool_Exp>;
};


export type Query_RootContract_State_Change_By_PkArgs = {
  consensus_timestamp: Scalars['bigint']['input'];
  contract_id: Scalars['bigint']['input'];
  slot: Scalars['bytea']['input'];
};


export type Query_RootContract_Transactions_Last_24hrsArgs = {
  distinct_on?: InputMaybe<Array<Contract_Transactions_Last_24hrs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contract_Transactions_Last_24hrs_Order_By>>;
  where?: InputMaybe<Contract_Transactions_Last_24hrs_Bool_Exp>;
};


export type Query_RootContract_Transactions_Last_24hrs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contract_Transactions_Last_24hrs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contract_Transactions_Last_24hrs_Order_By>>;
  where?: InputMaybe<Contract_Transactions_Last_24hrs_Bool_Exp>;
};


export type Query_RootCrypto_AllowanceArgs = {
  distinct_on?: InputMaybe<Array<Crypto_Allowance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Crypto_Allowance_Order_By>>;
  where?: InputMaybe<Crypto_Allowance_Bool_Exp>;
};


export type Query_RootCrypto_Allowance_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Crypto_Allowance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Crypto_Allowance_Order_By>>;
  where?: InputMaybe<Crypto_Allowance_Bool_Exp>;
};


export type Query_RootCrypto_Allowance_By_PkArgs = {
  owner: Scalars['bigint']['input'];
  spender: Scalars['bigint']['input'];
};


export type Query_RootCrypto_Allowance_HistoryArgs = {
  distinct_on?: InputMaybe<Array<Crypto_Allowance_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Crypto_Allowance_History_Order_By>>;
  where?: InputMaybe<Crypto_Allowance_History_Bool_Exp>;
};


export type Query_RootCrypto_Allowance_History_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Crypto_Allowance_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Crypto_Allowance_History_Order_By>>;
  where?: InputMaybe<Crypto_Allowance_History_Bool_Exp>;
};


export type Query_RootCrypto_TransferArgs = {
  distinct_on?: InputMaybe<Array<Crypto_Transfer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Crypto_Transfer_Order_By>>;
  where?: InputMaybe<Crypto_Transfer_Bool_Exp>;
};


export type Query_RootCrypto_Transfer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Crypto_Transfer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Crypto_Transfer_Order_By>>;
  where?: InputMaybe<Crypto_Transfer_Bool_Exp>;
};


export type Query_RootCustom_FeeArgs = {
  distinct_on?: InputMaybe<Array<Custom_Fee_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Custom_Fee_Order_By>>;
  where?: InputMaybe<Custom_Fee_Bool_Exp>;
};


export type Query_RootCustom_Fee_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Custom_Fee_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Custom_Fee_Order_By>>;
  where?: InputMaybe<Custom_Fee_Bool_Exp>;
};


export type Query_RootCustom_Fee_By_PkArgs = {
  entity_id: Scalars['bigint']['input'];
};


export type Query_RootEcosystem_Active_Accounts_Per_PeriodArgs = {
  args: Ecosystem_Active_Accounts_Per_Period_Args;
  distinct_on?: InputMaybe<Array<Ecosystem_Metric_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Metric_Order_By>>;
  where?: InputMaybe<Ecosystem_Metric_Bool_Exp>;
};


export type Query_RootEcosystem_Active_Accounts_Per_Period_AggregateArgs = {
  args: Ecosystem_Active_Accounts_Per_Period_Args;
  distinct_on?: InputMaybe<Array<Ecosystem_Metric_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Metric_Order_By>>;
  where?: InputMaybe<Ecosystem_Metric_Bool_Exp>;
};


export type Query_RootEcosystem_Active_Nft_Account_CohortsArgs = {
  distinct_on?: InputMaybe<Array<Ecosystem_Active_Nft_Account_Cohorts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Active_Nft_Account_Cohorts_Order_By>>;
  where?: InputMaybe<Ecosystem_Active_Nft_Account_Cohorts_Bool_Exp>;
};


export type Query_RootEcosystem_Active_Nft_Account_Cohorts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ecosystem_Active_Nft_Account_Cohorts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Active_Nft_Account_Cohorts_Order_By>>;
  where?: InputMaybe<Ecosystem_Active_Nft_Account_Cohorts_Bool_Exp>;
};


export type Query_RootEcosystem_Associated_Revenue_Per_PeriodArgs = {
  args: Ecosystem_Associated_Revenue_Per_Period_Args;
  distinct_on?: InputMaybe<Array<Ecosystem_Metric_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Metric_Order_By>>;
  where?: InputMaybe<Ecosystem_Metric_Bool_Exp>;
};


export type Query_RootEcosystem_Associated_Revenue_Per_Period_AggregateArgs = {
  args: Ecosystem_Associated_Revenue_Per_Period_Args;
  distinct_on?: InputMaybe<Array<Ecosystem_Metric_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Metric_Order_By>>;
  where?: InputMaybe<Ecosystem_Metric_Bool_Exp>;
};


export type Query_RootEcosystem_Associated_Transaction_Fees_Per_PeriodArgs = {
  args: Ecosystem_Associated_Transaction_Fees_Per_Period_Args;
  distinct_on?: InputMaybe<Array<Ecosystem_Metric_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Metric_Order_By>>;
  where?: InputMaybe<Ecosystem_Metric_Bool_Exp>;
};


export type Query_RootEcosystem_Associated_Transaction_Fees_Per_Period_AggregateArgs = {
  args: Ecosystem_Associated_Transaction_Fees_Per_Period_Args;
  distinct_on?: InputMaybe<Array<Ecosystem_Metric_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Metric_Order_By>>;
  where?: InputMaybe<Ecosystem_Metric_Bool_Exp>;
};


export type Query_RootEcosystem_Associated_Transactions_Per_PeriodArgs = {
  args: Ecosystem_Associated_Transactions_Per_Period_Args;
  distinct_on?: InputMaybe<Array<Ecosystem_Metric_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Metric_Order_By>>;
  where?: InputMaybe<Ecosystem_Metric_Bool_Exp>;
};


export type Query_RootEcosystem_Associated_Transactions_Per_Period_AggregateArgs = {
  args: Ecosystem_Associated_Transactions_Per_Period_Args;
  distinct_on?: InputMaybe<Array<Ecosystem_Metric_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Metric_Order_By>>;
  where?: InputMaybe<Ecosystem_Metric_Bool_Exp>;
};


export type Query_RootEcosystem_Estimated_Transaction_TotalsArgs = {
  distinct_on?: InputMaybe<Array<Ecosystem_Estimated_Transaction_Totals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Estimated_Transaction_Totals_Order_By>>;
  where?: InputMaybe<Ecosystem_Estimated_Transaction_Totals_Bool_Exp>;
};


export type Query_RootEcosystem_Estimated_Transaction_Totals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ecosystem_Estimated_Transaction_Totals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Estimated_Transaction_Totals_Order_By>>;
  where?: InputMaybe<Ecosystem_Estimated_Transaction_Totals_Bool_Exp>;
};


export type Query_RootEcosystem_Fees_Paid_Per_PeriodArgs = {
  args: Ecosystem_Fees_Paid_Per_Period_Args;
  distinct_on?: InputMaybe<Array<Ecosystem_Metric_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Metric_Order_By>>;
  where?: InputMaybe<Ecosystem_Metric_Bool_Exp>;
};


export type Query_RootEcosystem_Fees_Paid_Per_Period_AggregateArgs = {
  args: Ecosystem_Fees_Paid_Per_Period_Args;
  distinct_on?: InputMaybe<Array<Ecosystem_Metric_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Metric_Order_By>>;
  where?: InputMaybe<Ecosystem_Metric_Bool_Exp>;
};


export type Query_RootEcosystem_Fungible_Token_Transfers_Per_PeriodArgs = {
  args: Ecosystem_Fungible_Token_Transfers_Per_Period_Args;
  distinct_on?: InputMaybe<Array<Ecosystem_Metric_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Metric_Order_By>>;
  where?: InputMaybe<Ecosystem_Metric_Bool_Exp>;
};


export type Query_RootEcosystem_Fungible_Token_Transfers_Per_Period_AggregateArgs = {
  args: Ecosystem_Fungible_Token_Transfers_Per_Period_Args;
  distinct_on?: InputMaybe<Array<Ecosystem_Metric_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Metric_Order_By>>;
  where?: InputMaybe<Ecosystem_Metric_Bool_Exp>;
};


export type Query_RootEcosystem_Hcs_Messages_Per_PeriodArgs = {
  args: Ecosystem_Hcs_Messages_Per_Period_Args;
  distinct_on?: InputMaybe<Array<Ecosystem_Metric_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Metric_Order_By>>;
  where?: InputMaybe<Ecosystem_Metric_Bool_Exp>;
};


export type Query_RootEcosystem_Hcs_Messages_Per_Period_AggregateArgs = {
  args: Ecosystem_Hcs_Messages_Per_Period_Args;
  distinct_on?: InputMaybe<Array<Ecosystem_Metric_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Metric_Order_By>>;
  where?: InputMaybe<Ecosystem_Metric_Bool_Exp>;
};


export type Query_RootEcosystem_MetricArgs = {
  distinct_on?: InputMaybe<Array<Ecosystem_Metric_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Metric_Order_By>>;
  where?: InputMaybe<Ecosystem_Metric_Bool_Exp>;
};


export type Query_RootEcosystem_Metric_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ecosystem_Metric_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Metric_Order_By>>;
  where?: InputMaybe<Ecosystem_Metric_Bool_Exp>;
};


export type Query_RootEcosystem_Metric_DescriptionArgs = {
  distinct_on?: InputMaybe<Array<Ecosystem_Metric_Description_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Metric_Description_Order_By>>;
  where?: InputMaybe<Ecosystem_Metric_Description_Bool_Exp>;
};


export type Query_RootEcosystem_Metric_Description_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ecosystem_Metric_Description_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Metric_Description_Order_By>>;
  where?: InputMaybe<Ecosystem_Metric_Description_Bool_Exp>;
};


export type Query_RootEcosystem_Metric_Description_By_PkArgs = {
  name: Scalars['String']['input'];
};


export type Query_RootEcosystem_Nft_Collection_Sales_VolumeArgs = {
  args: Ecosystem_Nft_Collection_Sales_Volume_Args;
  distinct_on?: InputMaybe<Array<Ecosystem_Metric_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Metric_Order_By>>;
  where?: InputMaybe<Ecosystem_Metric_Bool_Exp>;
};


export type Query_RootEcosystem_Nft_Collection_Sales_Volume_AggregateArgs = {
  args: Ecosystem_Nft_Collection_Sales_Volume_Args;
  distinct_on?: InputMaybe<Array<Ecosystem_Metric_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Metric_Order_By>>;
  where?: InputMaybe<Ecosystem_Metric_Bool_Exp>;
};


export type Query_RootEcosystem_Nft_Holders_Per_PeriodArgs = {
  args: Ecosystem_Nft_Holders_Per_Period_Args;
  distinct_on?: InputMaybe<Array<Ecosystem_Metric_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Metric_Order_By>>;
  where?: InputMaybe<Ecosystem_Metric_Bool_Exp>;
};


export type Query_RootEcosystem_Nft_Holders_Per_Period_AggregateArgs = {
  args: Ecosystem_Nft_Holders_Per_Period_Args;
  distinct_on?: InputMaybe<Array<Ecosystem_Metric_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Metric_Order_By>>;
  where?: InputMaybe<Ecosystem_Metric_Bool_Exp>;
};


export type Query_RootEcosystem_Non_Fungible_Token_Transfers_Per_PeriodArgs = {
  args: Ecosystem_Non_Fungible_Token_Transfers_Per_Period_Args;
  distinct_on?: InputMaybe<Array<Ecosystem_Metric_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Metric_Order_By>>;
  where?: InputMaybe<Ecosystem_Metric_Bool_Exp>;
};


export type Query_RootEcosystem_Non_Fungible_Token_Transfers_Per_Period_AggregateArgs = {
  args: Ecosystem_Non_Fungible_Token_Transfers_Per_Period_Args;
  distinct_on?: InputMaybe<Array<Ecosystem_Metric_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Metric_Order_By>>;
  where?: InputMaybe<Ecosystem_Metric_Bool_Exp>;
};


export type Query_RootEcosystem_Revenue_Per_PeriodArgs = {
  args: Ecosystem_Revenue_Per_Period_Args;
  distinct_on?: InputMaybe<Array<Ecosystem_Metric_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Metric_Order_By>>;
  where?: InputMaybe<Ecosystem_Metric_Bool_Exp>;
};


export type Query_RootEcosystem_Revenue_Per_Period_AggregateArgs = {
  args: Ecosystem_Revenue_Per_Period_Args;
  distinct_on?: InputMaybe<Array<Ecosystem_Metric_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Metric_Order_By>>;
  where?: InputMaybe<Ecosystem_Metric_Bool_Exp>;
};


export type Query_RootEcosystem_Smart_Contract_Calls_Per_PeriodArgs = {
  args: Ecosystem_Smart_Contract_Calls_Per_Period_Args;
  distinct_on?: InputMaybe<Array<Ecosystem_Metric_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Metric_Order_By>>;
  where?: InputMaybe<Ecosystem_Metric_Bool_Exp>;
};


export type Query_RootEcosystem_Smart_Contract_Calls_Per_Period_AggregateArgs = {
  args: Ecosystem_Smart_Contract_Calls_Per_Period_Args;
  distinct_on?: InputMaybe<Array<Ecosystem_Metric_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Metric_Order_By>>;
  where?: InputMaybe<Ecosystem_Metric_Bool_Exp>;
};


export type Query_RootEcosystem_Transaction_Count_By_TypeArgs = {
  distinct_on?: InputMaybe<Array<Ecosystem_Transaction_Count_By_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Transaction_Count_By_Type_Order_By>>;
  where?: InputMaybe<Ecosystem_Transaction_Count_By_Type_Bool_Exp>;
};


export type Query_RootEcosystem_Transaction_Count_By_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ecosystem_Transaction_Count_By_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Transaction_Count_By_Type_Order_By>>;
  where?: InputMaybe<Ecosystem_Transaction_Count_By_Type_Bool_Exp>;
};


export type Query_RootEcosystem_Transaction_Fees_Per_PeriodArgs = {
  args: Ecosystem_Transaction_Fees_Per_Period_Args;
  distinct_on?: InputMaybe<Array<Ecosystem_Metric_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Metric_Order_By>>;
  where?: InputMaybe<Ecosystem_Metric_Bool_Exp>;
};


export type Query_RootEcosystem_Transaction_Fees_Per_Period_AggregateArgs = {
  args: Ecosystem_Transaction_Fees_Per_Period_Args;
  distinct_on?: InputMaybe<Array<Ecosystem_Metric_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Metric_Order_By>>;
  where?: InputMaybe<Ecosystem_Metric_Bool_Exp>;
};


export type Query_RootEcosystem_Transactions_By_TypeArgs = {
  args: Ecosystem_Transactions_By_Type_Args;
  distinct_on?: InputMaybe<Array<Ecosystem_Transaction_Count_By_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Transaction_Count_By_Type_Order_By>>;
  where?: InputMaybe<Ecosystem_Transaction_Count_By_Type_Bool_Exp>;
};


export type Query_RootEcosystem_Transactions_By_Type_AggregateArgs = {
  args: Ecosystem_Transactions_By_Type_Args;
  distinct_on?: InputMaybe<Array<Ecosystem_Transaction_Count_By_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Transaction_Count_By_Type_Order_By>>;
  where?: InputMaybe<Ecosystem_Transaction_Count_By_Type_Bool_Exp>;
};


export type Query_RootEcosystem_Transactions_Per_PeriodArgs = {
  args: Ecosystem_Transactions_Per_Period_Args;
  distinct_on?: InputMaybe<Array<Ecosystem_Metric_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Metric_Order_By>>;
  where?: InputMaybe<Ecosystem_Metric_Bool_Exp>;
};


export type Query_RootEcosystem_Transactions_Per_Period_AggregateArgs = {
  args: Ecosystem_Transactions_Per_Period_Args;
  distinct_on?: InputMaybe<Array<Ecosystem_Metric_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Metric_Order_By>>;
  where?: InputMaybe<Ecosystem_Metric_Bool_Exp>;
};


export type Query_RootEntityArgs = {
  distinct_on?: InputMaybe<Array<Entity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Entity_Order_By>>;
  where?: InputMaybe<Entity_Bool_Exp>;
};


export type Query_RootEntity_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Entity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Entity_Order_By>>;
  where?: InputMaybe<Entity_Bool_Exp>;
};


export type Query_RootEntity_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootEntity_HistoryArgs = {
  distinct_on?: InputMaybe<Array<Entity_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Entity_History_Order_By>>;
  where?: InputMaybe<Entity_History_Bool_Exp>;
};


export type Query_RootEntity_History_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Entity_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Entity_History_Order_By>>;
  where?: InputMaybe<Entity_History_Bool_Exp>;
};


export type Query_RootEntity_StakeArgs = {
  distinct_on?: InputMaybe<Array<Entity_Stake_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Entity_Stake_Order_By>>;
  where?: InputMaybe<Entity_Stake_Bool_Exp>;
};


export type Query_RootEntity_Stake_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Entity_Stake_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Entity_Stake_Order_By>>;
  where?: InputMaybe<Entity_Stake_Bool_Exp>;
};


export type Query_RootEntity_Stake_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootEntity_TransactionArgs = {
  args: Entity_Transaction_Args;
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Query_RootEntity_Transaction_AggregateArgs = {
  args: Entity_Transaction_Args;
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Query_RootEthereum_TransactionArgs = {
  distinct_on?: InputMaybe<Array<Ethereum_Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ethereum_Transaction_Order_By>>;
  where?: InputMaybe<Ethereum_Transaction_Bool_Exp>;
};


export type Query_RootEthereum_Transaction_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ethereum_Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ethereum_Transaction_Order_By>>;
  where?: InputMaybe<Ethereum_Transaction_Bool_Exp>;
};


export type Query_RootEthereum_Transaction_By_PkArgs = {
  consensus_timestamp: Scalars['bigint']['input'];
};


export type Query_RootNetwork_StakeArgs = {
  distinct_on?: InputMaybe<Array<Network_Stake_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Network_Stake_Order_By>>;
  where?: InputMaybe<Network_Stake_Bool_Exp>;
};


export type Query_RootNetwork_Stake_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Network_Stake_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Network_Stake_Order_By>>;
  where?: InputMaybe<Network_Stake_Bool_Exp>;
};


export type Query_RootNetwork_Stake_By_PkArgs = {
  consensus_timestamp: Scalars['bigint']['input'];
};


export type Query_RootNftArgs = {
  distinct_on?: InputMaybe<Array<Nft_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Order_By>>;
  where?: InputMaybe<Nft_Bool_Exp>;
};


export type Query_RootNft_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nft_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Order_By>>;
  where?: InputMaybe<Nft_Bool_Exp>;
};


export type Query_RootNft_AllowanceArgs = {
  distinct_on?: InputMaybe<Array<Nft_Allowance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Allowance_Order_By>>;
  where?: InputMaybe<Nft_Allowance_Bool_Exp>;
};


export type Query_RootNft_Allowance_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nft_Allowance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Allowance_Order_By>>;
  where?: InputMaybe<Nft_Allowance_Bool_Exp>;
};


export type Query_RootNft_Allowance_By_PkArgs = {
  owner: Scalars['bigint']['input'];
  spender: Scalars['bigint']['input'];
  token_id: Scalars['bigint']['input'];
};


export type Query_RootNft_Allowance_HistoryArgs = {
  distinct_on?: InputMaybe<Array<Nft_Allowance_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Allowance_History_Order_By>>;
  where?: InputMaybe<Nft_Allowance_History_Bool_Exp>;
};


export type Query_RootNft_Allowance_History_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nft_Allowance_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Allowance_History_Order_By>>;
  where?: InputMaybe<Nft_Allowance_History_Bool_Exp>;
};


export type Query_RootNft_By_PkArgs = {
  serial_number: Scalars['bigint']['input'];
  token_id: Scalars['bigint']['input'];
};


export type Query_RootNft_HistoryArgs = {
  distinct_on?: InputMaybe<Array<Nft_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_History_Order_By>>;
  where?: InputMaybe<Nft_History_Bool_Exp>;
};


export type Query_RootNft_History_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nft_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_History_Order_By>>;
  where?: InputMaybe<Nft_History_Bool_Exp>;
};


export type Query_RootNft_TransferArgs = {
  distinct_on?: InputMaybe<Array<Nft_Transfer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Transfer_Order_By>>;
  where?: InputMaybe<Nft_Transfer_Bool_Exp>;
};


export type Query_RootNft_Transfer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nft_Transfer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Transfer_Order_By>>;
  where?: InputMaybe<Nft_Transfer_Bool_Exp>;
};


export type Query_RootNode_StakeArgs = {
  distinct_on?: InputMaybe<Array<Node_Stake_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Node_Stake_Order_By>>;
  where?: InputMaybe<Node_Stake_Bool_Exp>;
};


export type Query_RootNode_Stake_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Node_Stake_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Node_Stake_Order_By>>;
  where?: InputMaybe<Node_Stake_Bool_Exp>;
};


export type Query_RootNode_Stake_By_PkArgs = {
  consensus_timestamp: Scalars['bigint']['input'];
  node_id: Scalars['bigint']['input'];
};


export type Query_RootNon_Fee_TransferArgs = {
  distinct_on?: InputMaybe<Array<Non_Fee_Transfer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Non_Fee_Transfer_Order_By>>;
  where?: InputMaybe<Non_Fee_Transfer_Bool_Exp>;
};


export type Query_RootNon_Fee_Transfer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Non_Fee_Transfer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Non_Fee_Transfer_Order_By>>;
  where?: InputMaybe<Non_Fee_Transfer_Bool_Exp>;
};


export type Query_RootScheduleArgs = {
  distinct_on?: InputMaybe<Array<Schedule_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Schedule_Order_By>>;
  where?: InputMaybe<Schedule_Bool_Exp>;
};


export type Query_RootSchedule_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Schedule_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Schedule_Order_By>>;
  where?: InputMaybe<Schedule_Bool_Exp>;
};


export type Query_RootSchedule_By_PkArgs = {
  schedule_id: Scalars['bigint']['input'];
};


export type Query_RootSibling_TransactionsArgs = {
  args: Sibling_Transactions_Args;
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Query_RootSibling_Transactions_AggregateArgs = {
  args: Sibling_Transactions_Args;
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Query_RootStaking_Reward_TransferArgs = {
  distinct_on?: InputMaybe<Array<Staking_Reward_Transfer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staking_Reward_Transfer_Order_By>>;
  where?: InputMaybe<Staking_Reward_Transfer_Bool_Exp>;
};


export type Query_RootStaking_Reward_Transfer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Staking_Reward_Transfer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staking_Reward_Transfer_Order_By>>;
  where?: InputMaybe<Staking_Reward_Transfer_Bool_Exp>;
};


export type Query_RootStaking_Reward_Transfer_By_PkArgs = {
  account_id: Scalars['bigint']['input'];
  consensus_timestamp: Scalars['bigint']['input'];
};


export type Query_RootTokenArgs = {
  distinct_on?: InputMaybe<Array<Token_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Token_Order_By>>;
  where?: InputMaybe<Token_Bool_Exp>;
};


export type Query_RootToken_AccountArgs = {
  distinct_on?: InputMaybe<Array<Token_Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Token_Account_Order_By>>;
  where?: InputMaybe<Token_Account_Bool_Exp>;
};


export type Query_RootToken_Account_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Token_Account_Order_By>>;
  where?: InputMaybe<Token_Account_Bool_Exp>;
};


export type Query_RootToken_Account_By_PkArgs = {
  account_id: Scalars['bigint']['input'];
  token_id: Scalars['bigint']['input'];
};


export type Query_RootToken_Account_HistoryArgs = {
  distinct_on?: InputMaybe<Array<Token_Account_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Token_Account_History_Order_By>>;
  where?: InputMaybe<Token_Account_History_Bool_Exp>;
};


export type Query_RootToken_Account_History_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Account_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Token_Account_History_Order_By>>;
  where?: InputMaybe<Token_Account_History_Bool_Exp>;
};


export type Query_RootToken_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Token_Order_By>>;
  where?: InputMaybe<Token_Bool_Exp>;
};


export type Query_RootToken_AirdropArgs = {
  distinct_on?: InputMaybe<Array<Token_Airdrop_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Token_Airdrop_Order_By>>;
  where?: InputMaybe<Token_Airdrop_Bool_Exp>;
};


export type Query_RootToken_Airdrop_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Airdrop_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Token_Airdrop_Order_By>>;
  where?: InputMaybe<Token_Airdrop_Bool_Exp>;
};


export type Query_RootToken_Airdrop_HistoryArgs = {
  distinct_on?: InputMaybe<Array<Token_Airdrop_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Token_Airdrop_History_Order_By>>;
  where?: InputMaybe<Token_Airdrop_History_Bool_Exp>;
};


export type Query_RootToken_Airdrop_History_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Airdrop_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Token_Airdrop_History_Order_By>>;
  where?: InputMaybe<Token_Airdrop_History_Bool_Exp>;
};


export type Query_RootToken_AllowanceArgs = {
  distinct_on?: InputMaybe<Array<Token_Allowance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Token_Allowance_Order_By>>;
  where?: InputMaybe<Token_Allowance_Bool_Exp>;
};


export type Query_RootToken_Allowance_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Allowance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Token_Allowance_Order_By>>;
  where?: InputMaybe<Token_Allowance_Bool_Exp>;
};


export type Query_RootToken_Allowance_By_PkArgs = {
  owner: Scalars['bigint']['input'];
  spender: Scalars['bigint']['input'];
  token_id: Scalars['bigint']['input'];
};


export type Query_RootToken_Allowance_HistoryArgs = {
  distinct_on?: InputMaybe<Array<Token_Allowance_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Token_Allowance_History_Order_By>>;
  where?: InputMaybe<Token_Allowance_History_Bool_Exp>;
};


export type Query_RootToken_Allowance_History_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Allowance_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Token_Allowance_History_Order_By>>;
  where?: InputMaybe<Token_Allowance_History_Bool_Exp>;
};


export type Query_RootToken_By_PkArgs = {
  token_id: Scalars['bigint']['input'];
};


export type Query_RootToken_HistoryArgs = {
  distinct_on?: InputMaybe<Array<Token_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Token_History_Order_By>>;
  where?: InputMaybe<Token_History_Bool_Exp>;
};


export type Query_RootToken_History_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Token_History_Order_By>>;
  where?: InputMaybe<Token_History_Bool_Exp>;
};


export type Query_RootToken_TransferArgs = {
  distinct_on?: InputMaybe<Array<Token_Transfer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Token_Transfer_Order_By>>;
  where?: InputMaybe<Token_Transfer_Bool_Exp>;
};


export type Query_RootToken_Transfer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Transfer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Token_Transfer_Order_By>>;
  where?: InputMaybe<Token_Transfer_Bool_Exp>;
};


export type Query_RootTopicArgs = {
  distinct_on?: InputMaybe<Array<Topic_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Topic_Order_By>>;
  where?: InputMaybe<Topic_Bool_Exp>;
};


export type Query_RootTopic_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Topic_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Topic_Order_By>>;
  where?: InputMaybe<Topic_Bool_Exp>;
};


export type Query_RootTopic_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootTopic_MessageArgs = {
  distinct_on?: InputMaybe<Array<Topic_Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Topic_Message_Order_By>>;
  where?: InputMaybe<Topic_Message_Bool_Exp>;
};


export type Query_RootTopic_Message_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Topic_Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Topic_Message_Order_By>>;
  where?: InputMaybe<Topic_Message_Bool_Exp>;
};


export type Query_RootTopic_Message_LookupArgs = {
  distinct_on?: InputMaybe<Array<Topic_Message_Lookup_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Topic_Message_Lookup_Order_By>>;
  where?: InputMaybe<Topic_Message_Lookup_Bool_Exp>;
};


export type Query_RootTopic_Message_Lookup_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Topic_Message_Lookup_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Topic_Message_Lookup_Order_By>>;
  where?: InputMaybe<Topic_Message_Lookup_Bool_Exp>;
};


export type Query_RootTopic_Message_Lookup_By_PkArgs = {
  partition: Scalars['String']['input'];
  topic_id: Scalars['bigint']['input'];
};


export type Query_RootTotal_AccountsArgs = {
  distinct_on?: InputMaybe<Array<Total_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Total_Accounts_Order_By>>;
  where?: InputMaybe<Total_Accounts_Bool_Exp>;
};


export type Query_RootTotal_Accounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Total_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Total_Accounts_Order_By>>;
  where?: InputMaybe<Total_Accounts_Bool_Exp>;
};


export type Query_RootTransactionArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Query_RootTransaction_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Query_RootTransaction_By_PkArgs = {
  consensus_timestamp: Scalars['bigint']['input'];
};


export type Query_RootTransaction_SignatureArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Signature_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Signature_Order_By>>;
  where?: InputMaybe<Transaction_Signature_Bool_Exp>;
};


export type Query_RootTransaction_Signature_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Signature_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Signature_Order_By>>;
  where?: InputMaybe<Transaction_Signature_Bool_Exp>;
};


export type Query_RootTransaction_TransferArgs = {
  args: Transaction_Transfer_Args;
  distinct_on?: InputMaybe<Array<_Transfer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<_Transfer_Order_By>>;
  where?: InputMaybe<_Transfer_Bool_Exp>;
};


export type Query_RootTransaction_Transfer_AggregateArgs = {
  args: Transaction_Transfer_Args;
  distinct_on?: InputMaybe<Array<_Transfer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<_Transfer_Order_By>>;
  where?: InputMaybe<_Transfer_Bool_Exp>;
};


export type Query_RootTransactions_Last_24hrsArgs = {
  distinct_on?: InputMaybe<Array<Transactions_Last_24hrs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transactions_Last_24hrs_Order_By>>;
  where?: InputMaybe<Transactions_Last_24hrs_Bool_Exp>;
};


export type Query_RootTransactions_Last_24hrs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transactions_Last_24hrs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transactions_Last_24hrs_Order_By>>;
  where?: InputMaybe<Transactions_Last_24hrs_Bool_Exp>;
};

/** Schedule transaction signatories */
export type Schedule = {
  __typename?: 'schedule';
  consensus_timestamp: Scalars['bigint']['output'];
  /** A computed field, executes function "schedule_consensus_timestamp_iso8601" */
  consensus_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  creator_account_id: Scalars['bigint']['output'];
  executed_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "schedule_executed_timestamp_iso8601" */
  executed_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  expiration_time?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "schedule_expiration_time_iso8601" */
  expiration_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  payer_account_id: Scalars['bigint']['output'];
  schedule_id: Scalars['bigint']['output'];
  transaction_body: Scalars['bytea']['output'];
  wait_for_expiry: Scalars['Boolean']['output'];
};

/** aggregated selection of "schedule" */
export type Schedule_Aggregate = {
  __typename?: 'schedule_aggregate';
  aggregate?: Maybe<Schedule_Aggregate_Fields>;
  nodes: Array<Schedule>;
};

/** aggregate fields of "schedule" */
export type Schedule_Aggregate_Fields = {
  __typename?: 'schedule_aggregate_fields';
  avg?: Maybe<Schedule_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Schedule_Max_Fields>;
  min?: Maybe<Schedule_Min_Fields>;
  stddev?: Maybe<Schedule_Stddev_Fields>;
  stddev_pop?: Maybe<Schedule_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Schedule_Stddev_Samp_Fields>;
  sum?: Maybe<Schedule_Sum_Fields>;
  var_pop?: Maybe<Schedule_Var_Pop_Fields>;
  var_samp?: Maybe<Schedule_Var_Samp_Fields>;
  variance?: Maybe<Schedule_Variance_Fields>;
};


/** aggregate fields of "schedule" */
export type Schedule_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Schedule_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Schedule_Avg_Fields = {
  __typename?: 'schedule_avg_fields';
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  creator_account_id?: Maybe<Scalars['Float']['output']>;
  executed_timestamp?: Maybe<Scalars['Float']['output']>;
  expiration_time?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  schedule_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "schedule". All fields are combined with a logical 'AND'. */
export type Schedule_Bool_Exp = {
  _and?: InputMaybe<Array<Schedule_Bool_Exp>>;
  _not?: InputMaybe<Schedule_Bool_Exp>;
  _or?: InputMaybe<Array<Schedule_Bool_Exp>>;
  consensus_timestamp?: InputMaybe<Bigint_Comparison_Exp>;
  consensus_timestamp_iso8601?: InputMaybe<String_Comparison_Exp>;
  creator_account_id?: InputMaybe<Bigint_Comparison_Exp>;
  executed_timestamp?: InputMaybe<Bigint_Comparison_Exp>;
  executed_timestamp_iso8601?: InputMaybe<String_Comparison_Exp>;
  expiration_time?: InputMaybe<Bigint_Comparison_Exp>;
  expiration_timestamp_iso8601?: InputMaybe<String_Comparison_Exp>;
  payer_account_id?: InputMaybe<Bigint_Comparison_Exp>;
  schedule_id?: InputMaybe<Bigint_Comparison_Exp>;
  transaction_body?: InputMaybe<Bytea_Comparison_Exp>;
  wait_for_expiry?: InputMaybe<Boolean_Comparison_Exp>;
};

/** aggregate max on columns */
export type Schedule_Max_Fields = {
  __typename?: 'schedule_max_fields';
  consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "schedule_consensus_timestamp_iso8601" */
  consensus_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  creator_account_id?: Maybe<Scalars['bigint']['output']>;
  executed_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "schedule_executed_timestamp_iso8601" */
  executed_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  expiration_time?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "schedule_expiration_time_iso8601" */
  expiration_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  payer_account_id?: Maybe<Scalars['bigint']['output']>;
  schedule_id?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type Schedule_Min_Fields = {
  __typename?: 'schedule_min_fields';
  consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "schedule_consensus_timestamp_iso8601" */
  consensus_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  creator_account_id?: Maybe<Scalars['bigint']['output']>;
  executed_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "schedule_executed_timestamp_iso8601" */
  executed_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  expiration_time?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "schedule_expiration_time_iso8601" */
  expiration_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  payer_account_id?: Maybe<Scalars['bigint']['output']>;
  schedule_id?: Maybe<Scalars['bigint']['output']>;
};

/** Ordering options when selecting data from "schedule". */
export type Schedule_Order_By = {
  consensus_timestamp?: InputMaybe<Order_By>;
  consensus_timestamp_iso8601?: InputMaybe<Order_By>;
  creator_account_id?: InputMaybe<Order_By>;
  executed_timestamp?: InputMaybe<Order_By>;
  executed_timestamp_iso8601?: InputMaybe<Order_By>;
  expiration_time?: InputMaybe<Order_By>;
  expiration_timestamp_iso8601?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  schedule_id?: InputMaybe<Order_By>;
  transaction_body?: InputMaybe<Order_By>;
  wait_for_expiry?: InputMaybe<Order_By>;
};

/** select columns of table "schedule" */
export enum Schedule_Select_Column {
  /** column name */
  ConsensusTimestamp = 'consensus_timestamp',
  /** column name */
  CreatorAccountId = 'creator_account_id',
  /** column name */
  ExecutedTimestamp = 'executed_timestamp',
  /** column name */
  ExpirationTime = 'expiration_time',
  /** column name */
  PayerAccountId = 'payer_account_id',
  /** column name */
  ScheduleId = 'schedule_id',
  /** column name */
  TransactionBody = 'transaction_body',
  /** column name */
  WaitForExpiry = 'wait_for_expiry'
}

/** aggregate stddev on columns */
export type Schedule_Stddev_Fields = {
  __typename?: 'schedule_stddev_fields';
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  creator_account_id?: Maybe<Scalars['Float']['output']>;
  executed_timestamp?: Maybe<Scalars['Float']['output']>;
  expiration_time?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  schedule_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Schedule_Stddev_Pop_Fields = {
  __typename?: 'schedule_stddev_pop_fields';
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  creator_account_id?: Maybe<Scalars['Float']['output']>;
  executed_timestamp?: Maybe<Scalars['Float']['output']>;
  expiration_time?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  schedule_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Schedule_Stddev_Samp_Fields = {
  __typename?: 'schedule_stddev_samp_fields';
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  creator_account_id?: Maybe<Scalars['Float']['output']>;
  executed_timestamp?: Maybe<Scalars['Float']['output']>;
  expiration_time?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  schedule_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "schedule" */
export type Schedule_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Schedule_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Schedule_Stream_Cursor_Value_Input = {
  consensus_timestamp?: InputMaybe<Scalars['bigint']['input']>;
  creator_account_id?: InputMaybe<Scalars['bigint']['input']>;
  executed_timestamp?: InputMaybe<Scalars['bigint']['input']>;
  expiration_time?: InputMaybe<Scalars['bigint']['input']>;
  payer_account_id?: InputMaybe<Scalars['bigint']['input']>;
  schedule_id?: InputMaybe<Scalars['bigint']['input']>;
  transaction_body?: InputMaybe<Scalars['bytea']['input']>;
  wait_for_expiry?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate sum on columns */
export type Schedule_Sum_Fields = {
  __typename?: 'schedule_sum_fields';
  consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  creator_account_id?: Maybe<Scalars['bigint']['output']>;
  executed_timestamp?: Maybe<Scalars['bigint']['output']>;
  expiration_time?: Maybe<Scalars['bigint']['output']>;
  payer_account_id?: Maybe<Scalars['bigint']['output']>;
  schedule_id?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type Schedule_Var_Pop_Fields = {
  __typename?: 'schedule_var_pop_fields';
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  creator_account_id?: Maybe<Scalars['Float']['output']>;
  executed_timestamp?: Maybe<Scalars['Float']['output']>;
  expiration_time?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  schedule_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Schedule_Var_Samp_Fields = {
  __typename?: 'schedule_var_samp_fields';
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  creator_account_id?: Maybe<Scalars['Float']['output']>;
  executed_timestamp?: Maybe<Scalars['Float']['output']>;
  expiration_time?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  schedule_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Schedule_Variance_Fields = {
  __typename?: 'schedule_variance_fields';
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  creator_account_id?: Maybe<Scalars['Float']['output']>;
  executed_timestamp?: Maybe<Scalars['Float']['output']>;
  expiration_time?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  schedule_id?: Maybe<Scalars['Float']['output']>;
};

export type Sibling_Transactions_Args = {
  transaction_row?: InputMaybe<Scalars['transaction_scalar']['input']>;
};

/** Boolean expression to compare columns of type "smallint". All fields are combined with logical 'AND'. */
export type Smallint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['smallint']['input']>;
  _gt?: InputMaybe<Scalars['smallint']['input']>;
  _gte?: InputMaybe<Scalars['smallint']['input']>;
  _in?: InputMaybe<Array<Scalars['smallint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['smallint']['input']>;
  _lte?: InputMaybe<Scalars['smallint']['input']>;
  _neq?: InputMaybe<Scalars['smallint']['input']>;
  _nin?: InputMaybe<Array<Scalars['smallint']['input']>>;
};

/** columns and relationships of "staking_reward_transfer" */
export type Staking_Reward_Transfer = {
  __typename?: 'staking_reward_transfer';
  account_id: Scalars['bigint']['output'];
  amount: Scalars['bigint']['output'];
  consensus_timestamp: Scalars['bigint']['output'];
  /** A computed field, executes function "staking_reward_transfer_consensus_timestamp_iso8601" */
  consensus_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  payer_account_id: Scalars['bigint']['output'];
  /** An object relationship */
  transaction?: Maybe<Transaction>;
};

/** aggregated selection of "staking_reward_transfer" */
export type Staking_Reward_Transfer_Aggregate = {
  __typename?: 'staking_reward_transfer_aggregate';
  aggregate?: Maybe<Staking_Reward_Transfer_Aggregate_Fields>;
  nodes: Array<Staking_Reward_Transfer>;
};

export type Staking_Reward_Transfer_Aggregate_Bool_Exp = {
  count?: InputMaybe<Staking_Reward_Transfer_Aggregate_Bool_Exp_Count>;
};

export type Staking_Reward_Transfer_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Staking_Reward_Transfer_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Staking_Reward_Transfer_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "staking_reward_transfer" */
export type Staking_Reward_Transfer_Aggregate_Fields = {
  __typename?: 'staking_reward_transfer_aggregate_fields';
  avg?: Maybe<Staking_Reward_Transfer_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Staking_Reward_Transfer_Max_Fields>;
  min?: Maybe<Staking_Reward_Transfer_Min_Fields>;
  stddev?: Maybe<Staking_Reward_Transfer_Stddev_Fields>;
  stddev_pop?: Maybe<Staking_Reward_Transfer_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Staking_Reward_Transfer_Stddev_Samp_Fields>;
  sum?: Maybe<Staking_Reward_Transfer_Sum_Fields>;
  var_pop?: Maybe<Staking_Reward_Transfer_Var_Pop_Fields>;
  var_samp?: Maybe<Staking_Reward_Transfer_Var_Samp_Fields>;
  variance?: Maybe<Staking_Reward_Transfer_Variance_Fields>;
};


/** aggregate fields of "staking_reward_transfer" */
export type Staking_Reward_Transfer_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Staking_Reward_Transfer_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "staking_reward_transfer" */
export type Staking_Reward_Transfer_Aggregate_Order_By = {
  avg?: InputMaybe<Staking_Reward_Transfer_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Staking_Reward_Transfer_Max_Order_By>;
  min?: InputMaybe<Staking_Reward_Transfer_Min_Order_By>;
  stddev?: InputMaybe<Staking_Reward_Transfer_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Staking_Reward_Transfer_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Staking_Reward_Transfer_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Staking_Reward_Transfer_Sum_Order_By>;
  var_pop?: InputMaybe<Staking_Reward_Transfer_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Staking_Reward_Transfer_Var_Samp_Order_By>;
  variance?: InputMaybe<Staking_Reward_Transfer_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Staking_Reward_Transfer_Avg_Fields = {
  __typename?: 'staking_reward_transfer_avg_fields';
  account_id?: Maybe<Scalars['Float']['output']>;
  amount?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "staking_reward_transfer" */
export type Staking_Reward_Transfer_Avg_Order_By = {
  account_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "staking_reward_transfer". All fields are combined with a logical 'AND'. */
export type Staking_Reward_Transfer_Bool_Exp = {
  _and?: InputMaybe<Array<Staking_Reward_Transfer_Bool_Exp>>;
  _not?: InputMaybe<Staking_Reward_Transfer_Bool_Exp>;
  _or?: InputMaybe<Array<Staking_Reward_Transfer_Bool_Exp>>;
  account_id?: InputMaybe<Bigint_Comparison_Exp>;
  amount?: InputMaybe<Bigint_Comparison_Exp>;
  consensus_timestamp?: InputMaybe<Bigint_Comparison_Exp>;
  consensus_timestamp_iso8601?: InputMaybe<String_Comparison_Exp>;
  payer_account_id?: InputMaybe<Bigint_Comparison_Exp>;
  transaction?: InputMaybe<Transaction_Bool_Exp>;
};

/** aggregate max on columns */
export type Staking_Reward_Transfer_Max_Fields = {
  __typename?: 'staking_reward_transfer_max_fields';
  account_id?: Maybe<Scalars['bigint']['output']>;
  amount?: Maybe<Scalars['bigint']['output']>;
  consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "staking_reward_transfer_consensus_timestamp_iso8601" */
  consensus_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  payer_account_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "staking_reward_transfer" */
export type Staking_Reward_Transfer_Max_Order_By = {
  account_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Staking_Reward_Transfer_Min_Fields = {
  __typename?: 'staking_reward_transfer_min_fields';
  account_id?: Maybe<Scalars['bigint']['output']>;
  amount?: Maybe<Scalars['bigint']['output']>;
  consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "staking_reward_transfer_consensus_timestamp_iso8601" */
  consensus_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  payer_account_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "staking_reward_transfer" */
export type Staking_Reward_Transfer_Min_Order_By = {
  account_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "staking_reward_transfer". */
export type Staking_Reward_Transfer_Order_By = {
  account_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  consensus_timestamp_iso8601?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  transaction?: InputMaybe<Transaction_Order_By>;
};

/** select columns of table "staking_reward_transfer" */
export enum Staking_Reward_Transfer_Select_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  Amount = 'amount',
  /** column name */
  ConsensusTimestamp = 'consensus_timestamp',
  /** column name */
  PayerAccountId = 'payer_account_id'
}

/** aggregate stddev on columns */
export type Staking_Reward_Transfer_Stddev_Fields = {
  __typename?: 'staking_reward_transfer_stddev_fields';
  account_id?: Maybe<Scalars['Float']['output']>;
  amount?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "staking_reward_transfer" */
export type Staking_Reward_Transfer_Stddev_Order_By = {
  account_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Staking_Reward_Transfer_Stddev_Pop_Fields = {
  __typename?: 'staking_reward_transfer_stddev_pop_fields';
  account_id?: Maybe<Scalars['Float']['output']>;
  amount?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "staking_reward_transfer" */
export type Staking_Reward_Transfer_Stddev_Pop_Order_By = {
  account_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Staking_Reward_Transfer_Stddev_Samp_Fields = {
  __typename?: 'staking_reward_transfer_stddev_samp_fields';
  account_id?: Maybe<Scalars['Float']['output']>;
  amount?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "staking_reward_transfer" */
export type Staking_Reward_Transfer_Stddev_Samp_Order_By = {
  account_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "staking_reward_transfer" */
export type Staking_Reward_Transfer_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Staking_Reward_Transfer_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Staking_Reward_Transfer_Stream_Cursor_Value_Input = {
  account_id?: InputMaybe<Scalars['bigint']['input']>;
  amount?: InputMaybe<Scalars['bigint']['input']>;
  consensus_timestamp?: InputMaybe<Scalars['bigint']['input']>;
  payer_account_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Staking_Reward_Transfer_Sum_Fields = {
  __typename?: 'staking_reward_transfer_sum_fields';
  account_id?: Maybe<Scalars['bigint']['output']>;
  amount?: Maybe<Scalars['bigint']['output']>;
  consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  payer_account_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "staking_reward_transfer" */
export type Staking_Reward_Transfer_Sum_Order_By = {
  account_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Staking_Reward_Transfer_Var_Pop_Fields = {
  __typename?: 'staking_reward_transfer_var_pop_fields';
  account_id?: Maybe<Scalars['Float']['output']>;
  amount?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "staking_reward_transfer" */
export type Staking_Reward_Transfer_Var_Pop_Order_By = {
  account_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Staking_Reward_Transfer_Var_Samp_Fields = {
  __typename?: 'staking_reward_transfer_var_samp_fields';
  account_id?: Maybe<Scalars['Float']['output']>;
  amount?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "staking_reward_transfer" */
export type Staking_Reward_Transfer_Var_Samp_Order_By = {
  account_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Staking_Reward_Transfer_Variance_Fields = {
  __typename?: 'staking_reward_transfer_variance_fields';
  account_id?: Maybe<Scalars['Float']['output']>;
  amount?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "staking_reward_transfer" */
export type Staking_Reward_Transfer_Variance_Order_By = {
  account_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "_transfer" */
  _transfer: Array<_Transfer>;
  /** fetch aggregated fields from the table: "_transfer" */
  _transfer_aggregate: _Transfer_Aggregate;
  /** fetch data from the table in a streaming manner: "_transfer" */
  _transfer_stream: Array<_Transfer>;
  /** execute function "account_transfer" which returns "_transfer" */
  account_transfer: Array<_Transfer>;
  /** execute function "account_transfer" and query aggregates on result of table type "_transfer" */
  account_transfer_aggregate: _Transfer_Aggregate;
  /** fetch data from the table: "address_book" */
  address_book: Array<Address_Book>;
  /** fetch aggregated fields from the table: "address_book" */
  address_book_aggregate: Address_Book_Aggregate;
  /** fetch data from the table: "address_book" using primary key columns */
  address_book_by_pk?: Maybe<Address_Book>;
  /** An array relationship */
  address_book_entry: Array<Address_Book_Entry>;
  /** An aggregate relationship */
  address_book_entry_aggregate: Address_Book_Entry_Aggregate;
  /** fetch data from the table: "address_book_entry" using primary key columns */
  address_book_entry_by_pk?: Maybe<Address_Book_Entry>;
  /** fetch data from the table in a streaming manner: "address_book_entry" */
  address_book_entry_stream: Array<Address_Book_Entry>;
  /** fetch data from the table: "address_book_service_endpoint" */
  address_book_service_endpoint: Array<Address_Book_Service_Endpoint>;
  /** fetch aggregated fields from the table: "address_book_service_endpoint" */
  address_book_service_endpoint_aggregate: Address_Book_Service_Endpoint_Aggregate;
  /** fetch data from the table in a streaming manner: "address_book_service_endpoint" */
  address_book_service_endpoint_stream: Array<Address_Book_Service_Endpoint>;
  /** fetch data from the table in a streaming manner: "address_book" */
  address_book_stream: Array<Address_Book>;
  /** An array relationship */
  assessed_custom_fee: Array<Assessed_Custom_Fee>;
  /** An aggregate relationship */
  assessed_custom_fee_aggregate: Assessed_Custom_Fee_Aggregate;
  /** fetch data from the table in a streaming manner: "assessed_custom_fee" */
  assessed_custom_fee_stream: Array<Assessed_Custom_Fee>;
  /** execute function "child_transactions" which returns "transaction" */
  child_transactions: Array<Transaction>;
  /** execute function "child_transactions" and query aggregates on result of table type "transaction" */
  child_transactions_aggregate: Transaction_Aggregate;
  /** fetch data from the table: "contract" */
  contract: Array<Contract>;
  /** fetch data from the table: "contract_action" */
  contract_action: Array<Contract_Action>;
  /** fetch aggregated fields from the table: "contract_action" */
  contract_action_aggregate: Contract_Action_Aggregate;
  /** fetch data from the table: "contract_action" using primary key columns */
  contract_action_by_pk?: Maybe<Contract_Action>;
  /** fetch data from the table in a streaming manner: "contract_action" */
  contract_action_stream: Array<Contract_Action>;
  /** fetch aggregated fields from the table: "contract" */
  contract_aggregate: Contract_Aggregate;
  /** fetch data from the table: "contract" using primary key columns */
  contract_by_pk?: Maybe<Contract>;
  /** fetch data from the table: "contract_log" */
  contract_log: Array<Contract_Log>;
  /** fetch aggregated fields from the table: "contract_log" */
  contract_log_aggregate: Contract_Log_Aggregate;
  /** fetch data from the table: "contract_log" using primary key columns */
  contract_log_by_pk?: Maybe<Contract_Log>;
  /** fetch data from the table in a streaming manner: "contract_log" */
  contract_log_stream: Array<Contract_Log>;
  /** fetch data from the table: "contract_result" */
  contract_result: Array<Contract_Result>;
  /** fetch aggregated fields from the table: "contract_result" */
  contract_result_aggregate: Contract_Result_Aggregate;
  /** fetch data from the table: "contract_result" using primary key columns */
  contract_result_by_pk?: Maybe<Contract_Result>;
  /** fetch data from the table in a streaming manner: "contract_result" */
  contract_result_stream: Array<Contract_Result>;
  /** fetch data from the table: "contract_state" */
  contract_state: Array<Contract_State>;
  /** fetch aggregated fields from the table: "contract_state" */
  contract_state_aggregate: Contract_State_Aggregate;
  /** fetch data from the table: "contract_state" using primary key columns */
  contract_state_by_pk?: Maybe<Contract_State>;
  /** fetch data from the table: "contract_state_change" */
  contract_state_change: Array<Contract_State_Change>;
  /** fetch aggregated fields from the table: "contract_state_change" */
  contract_state_change_aggregate: Contract_State_Change_Aggregate;
  /** fetch data from the table: "contract_state_change" using primary key columns */
  contract_state_change_by_pk?: Maybe<Contract_State_Change>;
  /** fetch data from the table in a streaming manner: "contract_state_change" */
  contract_state_change_stream: Array<Contract_State_Change>;
  /** fetch data from the table in a streaming manner: "contract_state" */
  contract_state_stream: Array<Contract_State>;
  /** fetch data from the table in a streaming manner: "contract" */
  contract_stream: Array<Contract>;
  /** fetch data from the table: "contract_transactions_last_24hrs" */
  contract_transactions_last_24hrs: Array<Contract_Transactions_Last_24hrs>;
  /** fetch aggregated fields from the table: "contract_transactions_last_24hrs" */
  contract_transactions_last_24hrs_aggregate: Contract_Transactions_Last_24hrs_Aggregate;
  /** fetch data from the table in a streaming manner: "contract_transactions_last_24hrs" */
  contract_transactions_last_24hrs_stream: Array<Contract_Transactions_Last_24hrs>;
  /** fetch data from the table: "crypto_allowance" */
  crypto_allowance: Array<Crypto_Allowance>;
  /** fetch aggregated fields from the table: "crypto_allowance" */
  crypto_allowance_aggregate: Crypto_Allowance_Aggregate;
  /** fetch data from the table: "crypto_allowance" using primary key columns */
  crypto_allowance_by_pk?: Maybe<Crypto_Allowance>;
  /** fetch data from the table: "crypto_allowance_history" */
  crypto_allowance_history: Array<Crypto_Allowance_History>;
  /** fetch aggregated fields from the table: "crypto_allowance_history" */
  crypto_allowance_history_aggregate: Crypto_Allowance_History_Aggregate;
  /** fetch data from the table in a streaming manner: "crypto_allowance_history" */
  crypto_allowance_history_stream: Array<Crypto_Allowance_History>;
  /** fetch data from the table in a streaming manner: "crypto_allowance" */
  crypto_allowance_stream: Array<Crypto_Allowance>;
  /** An array relationship */
  crypto_transfer: Array<Crypto_Transfer>;
  /** An aggregate relationship */
  crypto_transfer_aggregate: Crypto_Transfer_Aggregate;
  /** fetch data from the table in a streaming manner: "crypto_transfer" */
  crypto_transfer_stream: Array<Crypto_Transfer>;
  /** An array relationship */
  custom_fee: Array<Custom_Fee>;
  /** An aggregate relationship */
  custom_fee_aggregate: Custom_Fee_Aggregate;
  /** fetch data from the table: "custom_fee" using primary key columns */
  custom_fee_by_pk?: Maybe<Custom_Fee>;
  /** fetch data from the table in a streaming manner: "custom_fee" */
  custom_fee_stream: Array<Custom_Fee>;
  /** execute function "ecosystem.active_accounts_per_period" which returns "ecosystem.metric" */
  ecosystem_active_accounts_per_period: Array<Ecosystem_Metric>;
  /** execute function "ecosystem.active_accounts_per_period" and query aggregates on result of table type "ecosystem.metric" */
  ecosystem_active_accounts_per_period_aggregate: Ecosystem_Metric_Aggregate;
  /** fetch data from the table: "ecosystem.active_nft_account_cohorts" */
  ecosystem_active_nft_account_cohorts: Array<Ecosystem_Active_Nft_Account_Cohorts>;
  /** fetch aggregated fields from the table: "ecosystem.active_nft_account_cohorts" */
  ecosystem_active_nft_account_cohorts_aggregate: Ecosystem_Active_Nft_Account_Cohorts_Aggregate;
  /** fetch data from the table in a streaming manner: "ecosystem.active_nft_account_cohorts" */
  ecosystem_active_nft_account_cohorts_stream: Array<Ecosystem_Active_Nft_Account_Cohorts>;
  /** execute function "ecosystem.associated_revenue_per_period" which returns "ecosystem.metric" */
  ecosystem_associated_revenue_per_period: Array<Ecosystem_Metric>;
  /** execute function "ecosystem.associated_revenue_per_period" and query aggregates on result of table type "ecosystem.metric" */
  ecosystem_associated_revenue_per_period_aggregate: Ecosystem_Metric_Aggregate;
  /** execute function "ecosystem.associated_transaction_fees_per_period" which returns "ecosystem.metric" */
  ecosystem_associated_transaction_fees_per_period: Array<Ecosystem_Metric>;
  /** execute function "ecosystem.associated_transaction_fees_per_period" and query aggregates on result of table type "ecosystem.metric" */
  ecosystem_associated_transaction_fees_per_period_aggregate: Ecosystem_Metric_Aggregate;
  /** execute function "ecosystem.associated_transactions_per_period" which returns "ecosystem.metric" */
  ecosystem_associated_transactions_per_period: Array<Ecosystem_Metric>;
  /** execute function "ecosystem.associated_transactions_per_period" and query aggregates on result of table type "ecosystem.metric" */
  ecosystem_associated_transactions_per_period_aggregate: Ecosystem_Metric_Aggregate;
  /** fetch data from the table: "ecosystem.estimated_transaction_totals" */
  ecosystem_estimated_transaction_totals: Array<Ecosystem_Estimated_Transaction_Totals>;
  /** fetch aggregated fields from the table: "ecosystem.estimated_transaction_totals" */
  ecosystem_estimated_transaction_totals_aggregate: Ecosystem_Estimated_Transaction_Totals_Aggregate;
  /** fetch data from the table in a streaming manner: "ecosystem.estimated_transaction_totals" */
  ecosystem_estimated_transaction_totals_stream: Array<Ecosystem_Estimated_Transaction_Totals>;
  /** execute function "ecosystem.fees_paid_per_period" which returns "ecosystem.metric" */
  ecosystem_fees_paid_per_period: Array<Ecosystem_Metric>;
  /** execute function "ecosystem.fees_paid_per_period" and query aggregates on result of table type "ecosystem.metric" */
  ecosystem_fees_paid_per_period_aggregate: Ecosystem_Metric_Aggregate;
  /** execute function "ecosystem.fungible_token_transfers_per_period" which returns "ecosystem.metric" */
  ecosystem_fungible_token_transfers_per_period: Array<Ecosystem_Metric>;
  /** execute function "ecosystem.fungible_token_transfers_per_period" and query aggregates on result of table type "ecosystem.metric" */
  ecosystem_fungible_token_transfers_per_period_aggregate: Ecosystem_Metric_Aggregate;
  /** execute function "ecosystem.hcs_messages_per_period" which returns "ecosystem.metric" */
  ecosystem_hcs_messages_per_period: Array<Ecosystem_Metric>;
  /** execute function "ecosystem.hcs_messages_per_period" and query aggregates on result of table type "ecosystem.metric" */
  ecosystem_hcs_messages_per_period_aggregate: Ecosystem_Metric_Aggregate;
  /** fetch data from the table: "ecosystem.metric" */
  ecosystem_metric: Array<Ecosystem_Metric>;
  /** fetch aggregated fields from the table: "ecosystem.metric" */
  ecosystem_metric_aggregate: Ecosystem_Metric_Aggregate;
  /** fetch data from the table: "ecosystem.metric_description" */
  ecosystem_metric_description: Array<Ecosystem_Metric_Description>;
  /** fetch aggregated fields from the table: "ecosystem.metric_description" */
  ecosystem_metric_description_aggregate: Ecosystem_Metric_Description_Aggregate;
  /** fetch data from the table: "ecosystem.metric_description" using primary key columns */
  ecosystem_metric_description_by_pk?: Maybe<Ecosystem_Metric_Description>;
  /** fetch data from the table in a streaming manner: "ecosystem.metric_description" */
  ecosystem_metric_description_stream: Array<Ecosystem_Metric_Description>;
  /** fetch data from the table in a streaming manner: "ecosystem.metric" */
  ecosystem_metric_stream: Array<Ecosystem_Metric>;
  /** execute function "ecosystem.nft_collection_sales_volume" which returns "ecosystem.metric" */
  ecosystem_nft_collection_sales_volume?: Maybe<Ecosystem_Metric>;
  /** execute function "ecosystem.nft_collection_sales_volume" and query aggregates on result of table type "ecosystem.metric" */
  ecosystem_nft_collection_sales_volume_aggregate: Ecosystem_Metric_Aggregate;
  /** execute function "ecosystem.nft_holders_per_period" which returns "ecosystem.metric" */
  ecosystem_nft_holders_per_period: Array<Ecosystem_Metric>;
  /** execute function "ecosystem.nft_holders_per_period" and query aggregates on result of table type "ecosystem.metric" */
  ecosystem_nft_holders_per_period_aggregate: Ecosystem_Metric_Aggregate;
  /** execute function "ecosystem.non_fungible_token_transfers_per_period" which returns "ecosystem.metric" */
  ecosystem_non_fungible_token_transfers_per_period: Array<Ecosystem_Metric>;
  /** execute function "ecosystem.non_fungible_token_transfers_per_period" and query aggregates on result of table type "ecosystem.metric" */
  ecosystem_non_fungible_token_transfers_per_period_aggregate: Ecosystem_Metric_Aggregate;
  /** execute function "ecosystem.revenue_per_period" which returns "ecosystem.metric" */
  ecosystem_revenue_per_period: Array<Ecosystem_Metric>;
  /** execute function "ecosystem.revenue_per_period" and query aggregates on result of table type "ecosystem.metric" */
  ecosystem_revenue_per_period_aggregate: Ecosystem_Metric_Aggregate;
  /** execute function "ecosystem.smart_contract_calls_per_period" which returns "ecosystem.metric" */
  ecosystem_smart_contract_calls_per_period: Array<Ecosystem_Metric>;
  /** execute function "ecosystem.smart_contract_calls_per_period" and query aggregates on result of table type "ecosystem.metric" */
  ecosystem_smart_contract_calls_per_period_aggregate: Ecosystem_Metric_Aggregate;
  /** fetch data from the table: "ecosystem.transaction_count_by_type" */
  ecosystem_transaction_count_by_type: Array<Ecosystem_Transaction_Count_By_Type>;
  /** fetch aggregated fields from the table: "ecosystem.transaction_count_by_type" */
  ecosystem_transaction_count_by_type_aggregate: Ecosystem_Transaction_Count_By_Type_Aggregate;
  /** fetch data from the table in a streaming manner: "ecosystem.transaction_count_by_type" */
  ecosystem_transaction_count_by_type_stream: Array<Ecosystem_Transaction_Count_By_Type>;
  /** execute function "ecosystem.transaction_fees_per_period" which returns "ecosystem.metric" */
  ecosystem_transaction_fees_per_period: Array<Ecosystem_Metric>;
  /** execute function "ecosystem.transaction_fees_per_period" and query aggregates on result of table type "ecosystem.metric" */
  ecosystem_transaction_fees_per_period_aggregate: Ecosystem_Metric_Aggregate;
  /** execute function "ecosystem.transactions_by_type" which returns "ecosystem.transaction_count_by_type" */
  ecosystem_transactions_by_type: Array<Ecosystem_Transaction_Count_By_Type>;
  /** execute function "ecosystem.transactions_by_type" and query aggregates on result of table type "ecosystem.transaction_count_by_type" */
  ecosystem_transactions_by_type_aggregate: Ecosystem_Transaction_Count_By_Type_Aggregate;
  /** execute function "ecosystem.transactions_per_period" which returns "ecosystem.metric" */
  ecosystem_transactions_per_period: Array<Ecosystem_Metric>;
  /** execute function "ecosystem.transactions_per_period" and query aggregates on result of table type "ecosystem.metric" */
  ecosystem_transactions_per_period_aggregate: Ecosystem_Metric_Aggregate;
  /** fetch data from the table: "entity" */
  entity: Array<Entity>;
  /** fetch aggregated fields from the table: "entity" */
  entity_aggregate: Entity_Aggregate;
  /** fetch data from the table: "entity" using primary key columns */
  entity_by_pk?: Maybe<Entity>;
  /** fetch data from the table: "entity_history" */
  entity_history: Array<Entity_History>;
  /** fetch aggregated fields from the table: "entity_history" */
  entity_history_aggregate: Entity_History_Aggregate;
  /** fetch data from the table in a streaming manner: "entity_history" */
  entity_history_stream: Array<Entity_History>;
  /** fetch data from the table: "entity_stake" */
  entity_stake: Array<Entity_Stake>;
  /** fetch aggregated fields from the table: "entity_stake" */
  entity_stake_aggregate: Entity_Stake_Aggregate;
  /** fetch data from the table: "entity_stake" using primary key columns */
  entity_stake_by_pk?: Maybe<Entity_Stake>;
  /** fetch data from the table in a streaming manner: "entity_stake" */
  entity_stake_stream: Array<Entity_Stake>;
  /** fetch data from the table in a streaming manner: "entity" */
  entity_stream: Array<Entity>;
  /** execute function "entity_transaction" which returns "transaction" */
  entity_transaction: Array<Transaction>;
  /** execute function "entity_transaction" and query aggregates on result of table type "transaction" */
  entity_transaction_aggregate: Transaction_Aggregate;
  /** fetch data from the table: "ethereum_transaction" */
  ethereum_transaction: Array<Ethereum_Transaction>;
  /** fetch aggregated fields from the table: "ethereum_transaction" */
  ethereum_transaction_aggregate: Ethereum_Transaction_Aggregate;
  /** fetch data from the table: "ethereum_transaction" using primary key columns */
  ethereum_transaction_by_pk?: Maybe<Ethereum_Transaction>;
  /** fetch data from the table in a streaming manner: "ethereum_transaction" */
  ethereum_transaction_stream: Array<Ethereum_Transaction>;
  /** fetch data from the table: "network_stake" */
  network_stake: Array<Network_Stake>;
  /** fetch aggregated fields from the table: "network_stake" */
  network_stake_aggregate: Network_Stake_Aggregate;
  /** fetch data from the table: "network_stake" using primary key columns */
  network_stake_by_pk?: Maybe<Network_Stake>;
  /** fetch data from the table in a streaming manner: "network_stake" */
  network_stake_stream: Array<Network_Stake>;
  /** An array relationship */
  nft: Array<Nft>;
  /** An aggregate relationship */
  nft_aggregate: Nft_Aggregate;
  /** fetch data from the table: "nft_allowance" */
  nft_allowance: Array<Nft_Allowance>;
  /** fetch aggregated fields from the table: "nft_allowance" */
  nft_allowance_aggregate: Nft_Allowance_Aggregate;
  /** fetch data from the table: "nft_allowance" using primary key columns */
  nft_allowance_by_pk?: Maybe<Nft_Allowance>;
  /** fetch data from the table: "nft_allowance_history" */
  nft_allowance_history: Array<Nft_Allowance_History>;
  /** fetch aggregated fields from the table: "nft_allowance_history" */
  nft_allowance_history_aggregate: Nft_Allowance_History_Aggregate;
  /** fetch data from the table in a streaming manner: "nft_allowance_history" */
  nft_allowance_history_stream: Array<Nft_Allowance_History>;
  /** fetch data from the table in a streaming manner: "nft_allowance" */
  nft_allowance_stream: Array<Nft_Allowance>;
  /** fetch data from the table: "nft" using primary key columns */
  nft_by_pk?: Maybe<Nft>;
  /** fetch data from the table: "nft_history" */
  nft_history: Array<Nft_History>;
  /** fetch aggregated fields from the table: "nft_history" */
  nft_history_aggregate: Nft_History_Aggregate;
  /** fetch data from the table in a streaming manner: "nft_history" */
  nft_history_stream: Array<Nft_History>;
  /** fetch data from the table in a streaming manner: "nft" */
  nft_stream: Array<Nft>;
  /** An array relationship */
  nft_transfer: Array<Nft_Transfer>;
  /** An aggregate relationship */
  nft_transfer_aggregate: Nft_Transfer_Aggregate;
  /** fetch data from the table in a streaming manner: "nft_transfer" */
  nft_transfer_stream: Array<Nft_Transfer>;
  /** fetch data from the table: "node_stake" */
  node_stake: Array<Node_Stake>;
  /** fetch aggregated fields from the table: "node_stake" */
  node_stake_aggregate: Node_Stake_Aggregate;
  /** fetch data from the table: "node_stake" using primary key columns */
  node_stake_by_pk?: Maybe<Node_Stake>;
  /** fetch data from the table in a streaming manner: "node_stake" */
  node_stake_stream: Array<Node_Stake>;
  /** fetch data from the table: "non_fee_transfer" */
  non_fee_transfer: Array<Non_Fee_Transfer>;
  /** fetch aggregated fields from the table: "non_fee_transfer" */
  non_fee_transfer_aggregate: Non_Fee_Transfer_Aggregate;
  /** fetch data from the table in a streaming manner: "non_fee_transfer" */
  non_fee_transfer_stream: Array<Non_Fee_Transfer>;
  /** fetch data from the table: "schedule" */
  schedule: Array<Schedule>;
  /** fetch aggregated fields from the table: "schedule" */
  schedule_aggregate: Schedule_Aggregate;
  /** fetch data from the table: "schedule" using primary key columns */
  schedule_by_pk?: Maybe<Schedule>;
  /** fetch data from the table in a streaming manner: "schedule" */
  schedule_stream: Array<Schedule>;
  /** execute function "sibling_transactions" which returns "transaction" */
  sibling_transactions: Array<Transaction>;
  /** execute function "sibling_transactions" and query aggregates on result of table type "transaction" */
  sibling_transactions_aggregate: Transaction_Aggregate;
  /** An array relationship */
  staking_reward_transfer: Array<Staking_Reward_Transfer>;
  /** An aggregate relationship */
  staking_reward_transfer_aggregate: Staking_Reward_Transfer_Aggregate;
  /** fetch data from the table: "staking_reward_transfer" using primary key columns */
  staking_reward_transfer_by_pk?: Maybe<Staking_Reward_Transfer>;
  /** fetch data from the table in a streaming manner: "staking_reward_transfer" */
  staking_reward_transfer_stream: Array<Staking_Reward_Transfer>;
  /** fetch data from the table: "token" */
  token: Array<Token>;
  /** An array relationship */
  token_account: Array<Token_Account>;
  /** An aggregate relationship */
  token_account_aggregate: Token_Account_Aggregate;
  /** fetch data from the table: "token_account" using primary key columns */
  token_account_by_pk?: Maybe<Token_Account>;
  /** fetch data from the table: "token_account_history" */
  token_account_history: Array<Token_Account_History>;
  /** fetch aggregated fields from the table: "token_account_history" */
  token_account_history_aggregate: Token_Account_History_Aggregate;
  /** fetch data from the table in a streaming manner: "token_account_history" */
  token_account_history_stream: Array<Token_Account_History>;
  /** fetch data from the table in a streaming manner: "token_account" */
  token_account_stream: Array<Token_Account>;
  /** fetch aggregated fields from the table: "token" */
  token_aggregate: Token_Aggregate;
  /** fetch data from the table: "token_airdrop" */
  token_airdrop: Array<Token_Airdrop>;
  /** fetch aggregated fields from the table: "token_airdrop" */
  token_airdrop_aggregate: Token_Airdrop_Aggregate;
  /** fetch data from the table: "token_airdrop_history" */
  token_airdrop_history: Array<Token_Airdrop_History>;
  /** fetch aggregated fields from the table: "token_airdrop_history" */
  token_airdrop_history_aggregate: Token_Airdrop_History_Aggregate;
  /** fetch data from the table in a streaming manner: "token_airdrop_history" */
  token_airdrop_history_stream: Array<Token_Airdrop_History>;
  /** fetch data from the table in a streaming manner: "token_airdrop" */
  token_airdrop_stream: Array<Token_Airdrop>;
  /** An array relationship */
  token_allowance: Array<Token_Allowance>;
  /** An aggregate relationship */
  token_allowance_aggregate: Token_Allowance_Aggregate;
  /** fetch data from the table: "token_allowance" using primary key columns */
  token_allowance_by_pk?: Maybe<Token_Allowance>;
  /** fetch data from the table: "token_allowance_history" */
  token_allowance_history: Array<Token_Allowance_History>;
  /** fetch aggregated fields from the table: "token_allowance_history" */
  token_allowance_history_aggregate: Token_Allowance_History_Aggregate;
  /** fetch data from the table in a streaming manner: "token_allowance_history" */
  token_allowance_history_stream: Array<Token_Allowance_History>;
  /** fetch data from the table in a streaming manner: "token_allowance" */
  token_allowance_stream: Array<Token_Allowance>;
  /** fetch data from the table: "token" using primary key columns */
  token_by_pk?: Maybe<Token>;
  /** fetch data from the table: "token_history" */
  token_history: Array<Token_History>;
  /** fetch aggregated fields from the table: "token_history" */
  token_history_aggregate: Token_History_Aggregate;
  /** fetch data from the table in a streaming manner: "token_history" */
  token_history_stream: Array<Token_History>;
  /** fetch data from the table in a streaming manner: "token" */
  token_stream: Array<Token>;
  /** An array relationship */
  token_transfer: Array<Token_Transfer>;
  /** An aggregate relationship */
  token_transfer_aggregate: Token_Transfer_Aggregate;
  /** fetch data from the table in a streaming manner: "token_transfer" */
  token_transfer_stream: Array<Token_Transfer>;
  /** fetch data from the table: "topic" */
  topic: Array<Topic>;
  /** fetch aggregated fields from the table: "topic" */
  topic_aggregate: Topic_Aggregate;
  /** fetch data from the table: "topic" using primary key columns */
  topic_by_pk?: Maybe<Topic>;
  /** fetch data from the table: "topic_message" */
  topic_message: Array<Topic_Message>;
  /** fetch aggregated fields from the table: "topic_message" */
  topic_message_aggregate: Topic_Message_Aggregate;
  /** fetch data from the table: "topic_message_lookup" */
  topic_message_lookup: Array<Topic_Message_Lookup>;
  /** fetch aggregated fields from the table: "topic_message_lookup" */
  topic_message_lookup_aggregate: Topic_Message_Lookup_Aggregate;
  /** fetch data from the table: "topic_message_lookup" using primary key columns */
  topic_message_lookup_by_pk?: Maybe<Topic_Message_Lookup>;
  /** fetch data from the table in a streaming manner: "topic_message_lookup" */
  topic_message_lookup_stream: Array<Topic_Message_Lookup>;
  /** fetch data from the table in a streaming manner: "topic_message" */
  topic_message_stream: Array<Topic_Message>;
  /** fetch data from the table in a streaming manner: "topic" */
  topic_stream: Array<Topic>;
  /** fetch data from the table: "total_accounts" */
  total_accounts: Array<Total_Accounts>;
  /** fetch aggregated fields from the table: "total_accounts" */
  total_accounts_aggregate: Total_Accounts_Aggregate;
  /** fetch data from the table in a streaming manner: "total_accounts" */
  total_accounts_stream: Array<Total_Accounts>;
  /** fetch data from the table: "transaction" */
  transaction: Array<Transaction>;
  /** fetch aggregated fields from the table: "transaction" */
  transaction_aggregate: Transaction_Aggregate;
  /** fetch data from the table: "transaction" using primary key columns */
  transaction_by_pk?: Maybe<Transaction>;
  /** fetch data from the table: "transaction_signature" */
  transaction_signature: Array<Transaction_Signature>;
  /** fetch aggregated fields from the table: "transaction_signature" */
  transaction_signature_aggregate: Transaction_Signature_Aggregate;
  /** fetch data from the table in a streaming manner: "transaction_signature" */
  transaction_signature_stream: Array<Transaction_Signature>;
  /** fetch data from the table in a streaming manner: "transaction" */
  transaction_stream: Array<Transaction>;
  /** execute function "transaction_transfer" which returns "_transfer" */
  transaction_transfer: Array<_Transfer>;
  /** execute function "transaction_transfer" and query aggregates on result of table type "_transfer" */
  transaction_transfer_aggregate: _Transfer_Aggregate;
  /** fetch data from the table: "transactions_last_24hrs" */
  transactions_last_24hrs: Array<Transactions_Last_24hrs>;
  /** fetch aggregated fields from the table: "transactions_last_24hrs" */
  transactions_last_24hrs_aggregate: Transactions_Last_24hrs_Aggregate;
  /** fetch data from the table in a streaming manner: "transactions_last_24hrs" */
  transactions_last_24hrs_stream: Array<Transactions_Last_24hrs>;
};


export type Subscription_Root_TransferArgs = {
  distinct_on?: InputMaybe<Array<_Transfer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<_Transfer_Order_By>>;
  where?: InputMaybe<_Transfer_Bool_Exp>;
};


export type Subscription_Root_Transfer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<_Transfer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<_Transfer_Order_By>>;
  where?: InputMaybe<_Transfer_Bool_Exp>;
};


export type Subscription_Root_Transfer_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<_Transfer_Stream_Cursor_Input>>;
  where?: InputMaybe<_Transfer_Bool_Exp>;
};


export type Subscription_RootAccount_TransferArgs = {
  args: Account_Transfer_Args;
  distinct_on?: InputMaybe<Array<_Transfer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<_Transfer_Order_By>>;
  where?: InputMaybe<_Transfer_Bool_Exp>;
};


export type Subscription_RootAccount_Transfer_AggregateArgs = {
  args: Account_Transfer_Args;
  distinct_on?: InputMaybe<Array<_Transfer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<_Transfer_Order_By>>;
  where?: InputMaybe<_Transfer_Bool_Exp>;
};


export type Subscription_RootAddress_BookArgs = {
  distinct_on?: InputMaybe<Array<Address_Book_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Address_Book_Order_By>>;
  where?: InputMaybe<Address_Book_Bool_Exp>;
};


export type Subscription_RootAddress_Book_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Address_Book_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Address_Book_Order_By>>;
  where?: InputMaybe<Address_Book_Bool_Exp>;
};


export type Subscription_RootAddress_Book_By_PkArgs = {
  start_consensus_timestamp: Scalars['bigint']['input'];
};


export type Subscription_RootAddress_Book_EntryArgs = {
  distinct_on?: InputMaybe<Array<Address_Book_Entry_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Address_Book_Entry_Order_By>>;
  where?: InputMaybe<Address_Book_Entry_Bool_Exp>;
};


export type Subscription_RootAddress_Book_Entry_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Address_Book_Entry_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Address_Book_Entry_Order_By>>;
  where?: InputMaybe<Address_Book_Entry_Bool_Exp>;
};


export type Subscription_RootAddress_Book_Entry_By_PkArgs = {
  consensus_timestamp: Scalars['bigint']['input'];
  node_id: Scalars['bigint']['input'];
};


export type Subscription_RootAddress_Book_Entry_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Address_Book_Entry_Stream_Cursor_Input>>;
  where?: InputMaybe<Address_Book_Entry_Bool_Exp>;
};


export type Subscription_RootAddress_Book_Service_EndpointArgs = {
  distinct_on?: InputMaybe<Array<Address_Book_Service_Endpoint_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Address_Book_Service_Endpoint_Order_By>>;
  where?: InputMaybe<Address_Book_Service_Endpoint_Bool_Exp>;
};


export type Subscription_RootAddress_Book_Service_Endpoint_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Address_Book_Service_Endpoint_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Address_Book_Service_Endpoint_Order_By>>;
  where?: InputMaybe<Address_Book_Service_Endpoint_Bool_Exp>;
};


export type Subscription_RootAddress_Book_Service_Endpoint_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Address_Book_Service_Endpoint_Stream_Cursor_Input>>;
  where?: InputMaybe<Address_Book_Service_Endpoint_Bool_Exp>;
};


export type Subscription_RootAddress_Book_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Address_Book_Stream_Cursor_Input>>;
  where?: InputMaybe<Address_Book_Bool_Exp>;
};


export type Subscription_RootAssessed_Custom_FeeArgs = {
  distinct_on?: InputMaybe<Array<Assessed_Custom_Fee_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Assessed_Custom_Fee_Order_By>>;
  where?: InputMaybe<Assessed_Custom_Fee_Bool_Exp>;
};


export type Subscription_RootAssessed_Custom_Fee_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Assessed_Custom_Fee_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Assessed_Custom_Fee_Order_By>>;
  where?: InputMaybe<Assessed_Custom_Fee_Bool_Exp>;
};


export type Subscription_RootAssessed_Custom_Fee_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Assessed_Custom_Fee_Stream_Cursor_Input>>;
  where?: InputMaybe<Assessed_Custom_Fee_Bool_Exp>;
};


export type Subscription_RootChild_TransactionsArgs = {
  args: Child_Transactions_Args;
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Subscription_RootChild_Transactions_AggregateArgs = {
  args: Child_Transactions_Args;
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Subscription_RootContractArgs = {
  distinct_on?: InputMaybe<Array<Contract_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contract_Order_By>>;
  where?: InputMaybe<Contract_Bool_Exp>;
};


export type Subscription_RootContract_ActionArgs = {
  distinct_on?: InputMaybe<Array<Contract_Action_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contract_Action_Order_By>>;
  where?: InputMaybe<Contract_Action_Bool_Exp>;
};


export type Subscription_RootContract_Action_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contract_Action_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contract_Action_Order_By>>;
  where?: InputMaybe<Contract_Action_Bool_Exp>;
};


export type Subscription_RootContract_Action_By_PkArgs = {
  consensus_timestamp: Scalars['bigint']['input'];
  index: Scalars['Int']['input'];
};


export type Subscription_RootContract_Action_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Contract_Action_Stream_Cursor_Input>>;
  where?: InputMaybe<Contract_Action_Bool_Exp>;
};


export type Subscription_RootContract_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contract_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contract_Order_By>>;
  where?: InputMaybe<Contract_Bool_Exp>;
};


export type Subscription_RootContract_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootContract_LogArgs = {
  distinct_on?: InputMaybe<Array<Contract_Log_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contract_Log_Order_By>>;
  where?: InputMaybe<Contract_Log_Bool_Exp>;
};


export type Subscription_RootContract_Log_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contract_Log_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contract_Log_Order_By>>;
  where?: InputMaybe<Contract_Log_Bool_Exp>;
};


export type Subscription_RootContract_Log_By_PkArgs = {
  consensus_timestamp: Scalars['bigint']['input'];
  index: Scalars['Int']['input'];
};


export type Subscription_RootContract_Log_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Contract_Log_Stream_Cursor_Input>>;
  where?: InputMaybe<Contract_Log_Bool_Exp>;
};


export type Subscription_RootContract_ResultArgs = {
  distinct_on?: InputMaybe<Array<Contract_Result_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contract_Result_Order_By>>;
  where?: InputMaybe<Contract_Result_Bool_Exp>;
};


export type Subscription_RootContract_Result_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contract_Result_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contract_Result_Order_By>>;
  where?: InputMaybe<Contract_Result_Bool_Exp>;
};


export type Subscription_RootContract_Result_By_PkArgs = {
  consensus_timestamp: Scalars['bigint']['input'];
};


export type Subscription_RootContract_Result_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Contract_Result_Stream_Cursor_Input>>;
  where?: InputMaybe<Contract_Result_Bool_Exp>;
};


export type Subscription_RootContract_StateArgs = {
  distinct_on?: InputMaybe<Array<Contract_State_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contract_State_Order_By>>;
  where?: InputMaybe<Contract_State_Bool_Exp>;
};


export type Subscription_RootContract_State_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contract_State_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contract_State_Order_By>>;
  where?: InputMaybe<Contract_State_Bool_Exp>;
};


export type Subscription_RootContract_State_By_PkArgs = {
  contract_id: Scalars['bigint']['input'];
  slot: Scalars['bytea']['input'];
};


export type Subscription_RootContract_State_ChangeArgs = {
  distinct_on?: InputMaybe<Array<Contract_State_Change_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contract_State_Change_Order_By>>;
  where?: InputMaybe<Contract_State_Change_Bool_Exp>;
};


export type Subscription_RootContract_State_Change_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contract_State_Change_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contract_State_Change_Order_By>>;
  where?: InputMaybe<Contract_State_Change_Bool_Exp>;
};


export type Subscription_RootContract_State_Change_By_PkArgs = {
  consensus_timestamp: Scalars['bigint']['input'];
  contract_id: Scalars['bigint']['input'];
  slot: Scalars['bytea']['input'];
};


export type Subscription_RootContract_State_Change_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Contract_State_Change_Stream_Cursor_Input>>;
  where?: InputMaybe<Contract_State_Change_Bool_Exp>;
};


export type Subscription_RootContract_State_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Contract_State_Stream_Cursor_Input>>;
  where?: InputMaybe<Contract_State_Bool_Exp>;
};


export type Subscription_RootContract_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Contract_Stream_Cursor_Input>>;
  where?: InputMaybe<Contract_Bool_Exp>;
};


export type Subscription_RootContract_Transactions_Last_24hrsArgs = {
  distinct_on?: InputMaybe<Array<Contract_Transactions_Last_24hrs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contract_Transactions_Last_24hrs_Order_By>>;
  where?: InputMaybe<Contract_Transactions_Last_24hrs_Bool_Exp>;
};


export type Subscription_RootContract_Transactions_Last_24hrs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contract_Transactions_Last_24hrs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contract_Transactions_Last_24hrs_Order_By>>;
  where?: InputMaybe<Contract_Transactions_Last_24hrs_Bool_Exp>;
};


export type Subscription_RootContract_Transactions_Last_24hrs_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Contract_Transactions_Last_24hrs_Stream_Cursor_Input>>;
  where?: InputMaybe<Contract_Transactions_Last_24hrs_Bool_Exp>;
};


export type Subscription_RootCrypto_AllowanceArgs = {
  distinct_on?: InputMaybe<Array<Crypto_Allowance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Crypto_Allowance_Order_By>>;
  where?: InputMaybe<Crypto_Allowance_Bool_Exp>;
};


export type Subscription_RootCrypto_Allowance_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Crypto_Allowance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Crypto_Allowance_Order_By>>;
  where?: InputMaybe<Crypto_Allowance_Bool_Exp>;
};


export type Subscription_RootCrypto_Allowance_By_PkArgs = {
  owner: Scalars['bigint']['input'];
  spender: Scalars['bigint']['input'];
};


export type Subscription_RootCrypto_Allowance_HistoryArgs = {
  distinct_on?: InputMaybe<Array<Crypto_Allowance_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Crypto_Allowance_History_Order_By>>;
  where?: InputMaybe<Crypto_Allowance_History_Bool_Exp>;
};


export type Subscription_RootCrypto_Allowance_History_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Crypto_Allowance_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Crypto_Allowance_History_Order_By>>;
  where?: InputMaybe<Crypto_Allowance_History_Bool_Exp>;
};


export type Subscription_RootCrypto_Allowance_History_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Crypto_Allowance_History_Stream_Cursor_Input>>;
  where?: InputMaybe<Crypto_Allowance_History_Bool_Exp>;
};


export type Subscription_RootCrypto_Allowance_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Crypto_Allowance_Stream_Cursor_Input>>;
  where?: InputMaybe<Crypto_Allowance_Bool_Exp>;
};


export type Subscription_RootCrypto_TransferArgs = {
  distinct_on?: InputMaybe<Array<Crypto_Transfer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Crypto_Transfer_Order_By>>;
  where?: InputMaybe<Crypto_Transfer_Bool_Exp>;
};


export type Subscription_RootCrypto_Transfer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Crypto_Transfer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Crypto_Transfer_Order_By>>;
  where?: InputMaybe<Crypto_Transfer_Bool_Exp>;
};


export type Subscription_RootCrypto_Transfer_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Crypto_Transfer_Stream_Cursor_Input>>;
  where?: InputMaybe<Crypto_Transfer_Bool_Exp>;
};


export type Subscription_RootCustom_FeeArgs = {
  distinct_on?: InputMaybe<Array<Custom_Fee_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Custom_Fee_Order_By>>;
  where?: InputMaybe<Custom_Fee_Bool_Exp>;
};


export type Subscription_RootCustom_Fee_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Custom_Fee_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Custom_Fee_Order_By>>;
  where?: InputMaybe<Custom_Fee_Bool_Exp>;
};


export type Subscription_RootCustom_Fee_By_PkArgs = {
  entity_id: Scalars['bigint']['input'];
};


export type Subscription_RootCustom_Fee_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Custom_Fee_Stream_Cursor_Input>>;
  where?: InputMaybe<Custom_Fee_Bool_Exp>;
};


export type Subscription_RootEcosystem_Active_Accounts_Per_PeriodArgs = {
  args: Ecosystem_Active_Accounts_Per_Period_Args;
  distinct_on?: InputMaybe<Array<Ecosystem_Metric_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Metric_Order_By>>;
  where?: InputMaybe<Ecosystem_Metric_Bool_Exp>;
};


export type Subscription_RootEcosystem_Active_Accounts_Per_Period_AggregateArgs = {
  args: Ecosystem_Active_Accounts_Per_Period_Args;
  distinct_on?: InputMaybe<Array<Ecosystem_Metric_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Metric_Order_By>>;
  where?: InputMaybe<Ecosystem_Metric_Bool_Exp>;
};


export type Subscription_RootEcosystem_Active_Nft_Account_CohortsArgs = {
  distinct_on?: InputMaybe<Array<Ecosystem_Active_Nft_Account_Cohorts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Active_Nft_Account_Cohorts_Order_By>>;
  where?: InputMaybe<Ecosystem_Active_Nft_Account_Cohorts_Bool_Exp>;
};


export type Subscription_RootEcosystem_Active_Nft_Account_Cohorts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ecosystem_Active_Nft_Account_Cohorts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Active_Nft_Account_Cohorts_Order_By>>;
  where?: InputMaybe<Ecosystem_Active_Nft_Account_Cohorts_Bool_Exp>;
};


export type Subscription_RootEcosystem_Active_Nft_Account_Cohorts_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Ecosystem_Active_Nft_Account_Cohorts_Stream_Cursor_Input>>;
  where?: InputMaybe<Ecosystem_Active_Nft_Account_Cohorts_Bool_Exp>;
};


export type Subscription_RootEcosystem_Associated_Revenue_Per_PeriodArgs = {
  args: Ecosystem_Associated_Revenue_Per_Period_Args;
  distinct_on?: InputMaybe<Array<Ecosystem_Metric_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Metric_Order_By>>;
  where?: InputMaybe<Ecosystem_Metric_Bool_Exp>;
};


export type Subscription_RootEcosystem_Associated_Revenue_Per_Period_AggregateArgs = {
  args: Ecosystem_Associated_Revenue_Per_Period_Args;
  distinct_on?: InputMaybe<Array<Ecosystem_Metric_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Metric_Order_By>>;
  where?: InputMaybe<Ecosystem_Metric_Bool_Exp>;
};


export type Subscription_RootEcosystem_Associated_Transaction_Fees_Per_PeriodArgs = {
  args: Ecosystem_Associated_Transaction_Fees_Per_Period_Args;
  distinct_on?: InputMaybe<Array<Ecosystem_Metric_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Metric_Order_By>>;
  where?: InputMaybe<Ecosystem_Metric_Bool_Exp>;
};


export type Subscription_RootEcosystem_Associated_Transaction_Fees_Per_Period_AggregateArgs = {
  args: Ecosystem_Associated_Transaction_Fees_Per_Period_Args;
  distinct_on?: InputMaybe<Array<Ecosystem_Metric_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Metric_Order_By>>;
  where?: InputMaybe<Ecosystem_Metric_Bool_Exp>;
};


export type Subscription_RootEcosystem_Associated_Transactions_Per_PeriodArgs = {
  args: Ecosystem_Associated_Transactions_Per_Period_Args;
  distinct_on?: InputMaybe<Array<Ecosystem_Metric_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Metric_Order_By>>;
  where?: InputMaybe<Ecosystem_Metric_Bool_Exp>;
};


export type Subscription_RootEcosystem_Associated_Transactions_Per_Period_AggregateArgs = {
  args: Ecosystem_Associated_Transactions_Per_Period_Args;
  distinct_on?: InputMaybe<Array<Ecosystem_Metric_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Metric_Order_By>>;
  where?: InputMaybe<Ecosystem_Metric_Bool_Exp>;
};


export type Subscription_RootEcosystem_Estimated_Transaction_TotalsArgs = {
  distinct_on?: InputMaybe<Array<Ecosystem_Estimated_Transaction_Totals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Estimated_Transaction_Totals_Order_By>>;
  where?: InputMaybe<Ecosystem_Estimated_Transaction_Totals_Bool_Exp>;
};


export type Subscription_RootEcosystem_Estimated_Transaction_Totals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ecosystem_Estimated_Transaction_Totals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Estimated_Transaction_Totals_Order_By>>;
  where?: InputMaybe<Ecosystem_Estimated_Transaction_Totals_Bool_Exp>;
};


export type Subscription_RootEcosystem_Estimated_Transaction_Totals_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Ecosystem_Estimated_Transaction_Totals_Stream_Cursor_Input>>;
  where?: InputMaybe<Ecosystem_Estimated_Transaction_Totals_Bool_Exp>;
};


export type Subscription_RootEcosystem_Fees_Paid_Per_PeriodArgs = {
  args: Ecosystem_Fees_Paid_Per_Period_Args;
  distinct_on?: InputMaybe<Array<Ecosystem_Metric_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Metric_Order_By>>;
  where?: InputMaybe<Ecosystem_Metric_Bool_Exp>;
};


export type Subscription_RootEcosystem_Fees_Paid_Per_Period_AggregateArgs = {
  args: Ecosystem_Fees_Paid_Per_Period_Args;
  distinct_on?: InputMaybe<Array<Ecosystem_Metric_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Metric_Order_By>>;
  where?: InputMaybe<Ecosystem_Metric_Bool_Exp>;
};


export type Subscription_RootEcosystem_Fungible_Token_Transfers_Per_PeriodArgs = {
  args: Ecosystem_Fungible_Token_Transfers_Per_Period_Args;
  distinct_on?: InputMaybe<Array<Ecosystem_Metric_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Metric_Order_By>>;
  where?: InputMaybe<Ecosystem_Metric_Bool_Exp>;
};


export type Subscription_RootEcosystem_Fungible_Token_Transfers_Per_Period_AggregateArgs = {
  args: Ecosystem_Fungible_Token_Transfers_Per_Period_Args;
  distinct_on?: InputMaybe<Array<Ecosystem_Metric_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Metric_Order_By>>;
  where?: InputMaybe<Ecosystem_Metric_Bool_Exp>;
};


export type Subscription_RootEcosystem_Hcs_Messages_Per_PeriodArgs = {
  args: Ecosystem_Hcs_Messages_Per_Period_Args;
  distinct_on?: InputMaybe<Array<Ecosystem_Metric_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Metric_Order_By>>;
  where?: InputMaybe<Ecosystem_Metric_Bool_Exp>;
};


export type Subscription_RootEcosystem_Hcs_Messages_Per_Period_AggregateArgs = {
  args: Ecosystem_Hcs_Messages_Per_Period_Args;
  distinct_on?: InputMaybe<Array<Ecosystem_Metric_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Metric_Order_By>>;
  where?: InputMaybe<Ecosystem_Metric_Bool_Exp>;
};


export type Subscription_RootEcosystem_MetricArgs = {
  distinct_on?: InputMaybe<Array<Ecosystem_Metric_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Metric_Order_By>>;
  where?: InputMaybe<Ecosystem_Metric_Bool_Exp>;
};


export type Subscription_RootEcosystem_Metric_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ecosystem_Metric_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Metric_Order_By>>;
  where?: InputMaybe<Ecosystem_Metric_Bool_Exp>;
};


export type Subscription_RootEcosystem_Metric_DescriptionArgs = {
  distinct_on?: InputMaybe<Array<Ecosystem_Metric_Description_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Metric_Description_Order_By>>;
  where?: InputMaybe<Ecosystem_Metric_Description_Bool_Exp>;
};


export type Subscription_RootEcosystem_Metric_Description_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ecosystem_Metric_Description_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Metric_Description_Order_By>>;
  where?: InputMaybe<Ecosystem_Metric_Description_Bool_Exp>;
};


export type Subscription_RootEcosystem_Metric_Description_By_PkArgs = {
  name: Scalars['String']['input'];
};


export type Subscription_RootEcosystem_Metric_Description_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Ecosystem_Metric_Description_Stream_Cursor_Input>>;
  where?: InputMaybe<Ecosystem_Metric_Description_Bool_Exp>;
};


export type Subscription_RootEcosystem_Metric_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Ecosystem_Metric_Stream_Cursor_Input>>;
  where?: InputMaybe<Ecosystem_Metric_Bool_Exp>;
};


export type Subscription_RootEcosystem_Nft_Collection_Sales_VolumeArgs = {
  args: Ecosystem_Nft_Collection_Sales_Volume_Args;
  distinct_on?: InputMaybe<Array<Ecosystem_Metric_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Metric_Order_By>>;
  where?: InputMaybe<Ecosystem_Metric_Bool_Exp>;
};


export type Subscription_RootEcosystem_Nft_Collection_Sales_Volume_AggregateArgs = {
  args: Ecosystem_Nft_Collection_Sales_Volume_Args;
  distinct_on?: InputMaybe<Array<Ecosystem_Metric_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Metric_Order_By>>;
  where?: InputMaybe<Ecosystem_Metric_Bool_Exp>;
};


export type Subscription_RootEcosystem_Nft_Holders_Per_PeriodArgs = {
  args: Ecosystem_Nft_Holders_Per_Period_Args;
  distinct_on?: InputMaybe<Array<Ecosystem_Metric_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Metric_Order_By>>;
  where?: InputMaybe<Ecosystem_Metric_Bool_Exp>;
};


export type Subscription_RootEcosystem_Nft_Holders_Per_Period_AggregateArgs = {
  args: Ecosystem_Nft_Holders_Per_Period_Args;
  distinct_on?: InputMaybe<Array<Ecosystem_Metric_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Metric_Order_By>>;
  where?: InputMaybe<Ecosystem_Metric_Bool_Exp>;
};


export type Subscription_RootEcosystem_Non_Fungible_Token_Transfers_Per_PeriodArgs = {
  args: Ecosystem_Non_Fungible_Token_Transfers_Per_Period_Args;
  distinct_on?: InputMaybe<Array<Ecosystem_Metric_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Metric_Order_By>>;
  where?: InputMaybe<Ecosystem_Metric_Bool_Exp>;
};


export type Subscription_RootEcosystem_Non_Fungible_Token_Transfers_Per_Period_AggregateArgs = {
  args: Ecosystem_Non_Fungible_Token_Transfers_Per_Period_Args;
  distinct_on?: InputMaybe<Array<Ecosystem_Metric_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Metric_Order_By>>;
  where?: InputMaybe<Ecosystem_Metric_Bool_Exp>;
};


export type Subscription_RootEcosystem_Revenue_Per_PeriodArgs = {
  args: Ecosystem_Revenue_Per_Period_Args;
  distinct_on?: InputMaybe<Array<Ecosystem_Metric_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Metric_Order_By>>;
  where?: InputMaybe<Ecosystem_Metric_Bool_Exp>;
};


export type Subscription_RootEcosystem_Revenue_Per_Period_AggregateArgs = {
  args: Ecosystem_Revenue_Per_Period_Args;
  distinct_on?: InputMaybe<Array<Ecosystem_Metric_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Metric_Order_By>>;
  where?: InputMaybe<Ecosystem_Metric_Bool_Exp>;
};


export type Subscription_RootEcosystem_Smart_Contract_Calls_Per_PeriodArgs = {
  args: Ecosystem_Smart_Contract_Calls_Per_Period_Args;
  distinct_on?: InputMaybe<Array<Ecosystem_Metric_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Metric_Order_By>>;
  where?: InputMaybe<Ecosystem_Metric_Bool_Exp>;
};


export type Subscription_RootEcosystem_Smart_Contract_Calls_Per_Period_AggregateArgs = {
  args: Ecosystem_Smart_Contract_Calls_Per_Period_Args;
  distinct_on?: InputMaybe<Array<Ecosystem_Metric_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Metric_Order_By>>;
  where?: InputMaybe<Ecosystem_Metric_Bool_Exp>;
};


export type Subscription_RootEcosystem_Transaction_Count_By_TypeArgs = {
  distinct_on?: InputMaybe<Array<Ecosystem_Transaction_Count_By_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Transaction_Count_By_Type_Order_By>>;
  where?: InputMaybe<Ecosystem_Transaction_Count_By_Type_Bool_Exp>;
};


export type Subscription_RootEcosystem_Transaction_Count_By_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ecosystem_Transaction_Count_By_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Transaction_Count_By_Type_Order_By>>;
  where?: InputMaybe<Ecosystem_Transaction_Count_By_Type_Bool_Exp>;
};


export type Subscription_RootEcosystem_Transaction_Count_By_Type_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Ecosystem_Transaction_Count_By_Type_Stream_Cursor_Input>>;
  where?: InputMaybe<Ecosystem_Transaction_Count_By_Type_Bool_Exp>;
};


export type Subscription_RootEcosystem_Transaction_Fees_Per_PeriodArgs = {
  args: Ecosystem_Transaction_Fees_Per_Period_Args;
  distinct_on?: InputMaybe<Array<Ecosystem_Metric_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Metric_Order_By>>;
  where?: InputMaybe<Ecosystem_Metric_Bool_Exp>;
};


export type Subscription_RootEcosystem_Transaction_Fees_Per_Period_AggregateArgs = {
  args: Ecosystem_Transaction_Fees_Per_Period_Args;
  distinct_on?: InputMaybe<Array<Ecosystem_Metric_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Metric_Order_By>>;
  where?: InputMaybe<Ecosystem_Metric_Bool_Exp>;
};


export type Subscription_RootEcosystem_Transactions_By_TypeArgs = {
  args: Ecosystem_Transactions_By_Type_Args;
  distinct_on?: InputMaybe<Array<Ecosystem_Transaction_Count_By_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Transaction_Count_By_Type_Order_By>>;
  where?: InputMaybe<Ecosystem_Transaction_Count_By_Type_Bool_Exp>;
};


export type Subscription_RootEcosystem_Transactions_By_Type_AggregateArgs = {
  args: Ecosystem_Transactions_By_Type_Args;
  distinct_on?: InputMaybe<Array<Ecosystem_Transaction_Count_By_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Transaction_Count_By_Type_Order_By>>;
  where?: InputMaybe<Ecosystem_Transaction_Count_By_Type_Bool_Exp>;
};


export type Subscription_RootEcosystem_Transactions_Per_PeriodArgs = {
  args: Ecosystem_Transactions_Per_Period_Args;
  distinct_on?: InputMaybe<Array<Ecosystem_Metric_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Metric_Order_By>>;
  where?: InputMaybe<Ecosystem_Metric_Bool_Exp>;
};


export type Subscription_RootEcosystem_Transactions_Per_Period_AggregateArgs = {
  args: Ecosystem_Transactions_Per_Period_Args;
  distinct_on?: InputMaybe<Array<Ecosystem_Metric_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ecosystem_Metric_Order_By>>;
  where?: InputMaybe<Ecosystem_Metric_Bool_Exp>;
};


export type Subscription_RootEntityArgs = {
  distinct_on?: InputMaybe<Array<Entity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Entity_Order_By>>;
  where?: InputMaybe<Entity_Bool_Exp>;
};


export type Subscription_RootEntity_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Entity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Entity_Order_By>>;
  where?: InputMaybe<Entity_Bool_Exp>;
};


export type Subscription_RootEntity_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootEntity_HistoryArgs = {
  distinct_on?: InputMaybe<Array<Entity_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Entity_History_Order_By>>;
  where?: InputMaybe<Entity_History_Bool_Exp>;
};


export type Subscription_RootEntity_History_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Entity_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Entity_History_Order_By>>;
  where?: InputMaybe<Entity_History_Bool_Exp>;
};


export type Subscription_RootEntity_History_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Entity_History_Stream_Cursor_Input>>;
  where?: InputMaybe<Entity_History_Bool_Exp>;
};


export type Subscription_RootEntity_StakeArgs = {
  distinct_on?: InputMaybe<Array<Entity_Stake_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Entity_Stake_Order_By>>;
  where?: InputMaybe<Entity_Stake_Bool_Exp>;
};


export type Subscription_RootEntity_Stake_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Entity_Stake_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Entity_Stake_Order_By>>;
  where?: InputMaybe<Entity_Stake_Bool_Exp>;
};


export type Subscription_RootEntity_Stake_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootEntity_Stake_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Entity_Stake_Stream_Cursor_Input>>;
  where?: InputMaybe<Entity_Stake_Bool_Exp>;
};


export type Subscription_RootEntity_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Entity_Stream_Cursor_Input>>;
  where?: InputMaybe<Entity_Bool_Exp>;
};


export type Subscription_RootEntity_TransactionArgs = {
  args: Entity_Transaction_Args;
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Subscription_RootEntity_Transaction_AggregateArgs = {
  args: Entity_Transaction_Args;
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Subscription_RootEthereum_TransactionArgs = {
  distinct_on?: InputMaybe<Array<Ethereum_Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ethereum_Transaction_Order_By>>;
  where?: InputMaybe<Ethereum_Transaction_Bool_Exp>;
};


export type Subscription_RootEthereum_Transaction_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ethereum_Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ethereum_Transaction_Order_By>>;
  where?: InputMaybe<Ethereum_Transaction_Bool_Exp>;
};


export type Subscription_RootEthereum_Transaction_By_PkArgs = {
  consensus_timestamp: Scalars['bigint']['input'];
};


export type Subscription_RootEthereum_Transaction_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Ethereum_Transaction_Stream_Cursor_Input>>;
  where?: InputMaybe<Ethereum_Transaction_Bool_Exp>;
};


export type Subscription_RootNetwork_StakeArgs = {
  distinct_on?: InputMaybe<Array<Network_Stake_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Network_Stake_Order_By>>;
  where?: InputMaybe<Network_Stake_Bool_Exp>;
};


export type Subscription_RootNetwork_Stake_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Network_Stake_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Network_Stake_Order_By>>;
  where?: InputMaybe<Network_Stake_Bool_Exp>;
};


export type Subscription_RootNetwork_Stake_By_PkArgs = {
  consensus_timestamp: Scalars['bigint']['input'];
};


export type Subscription_RootNetwork_Stake_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Network_Stake_Stream_Cursor_Input>>;
  where?: InputMaybe<Network_Stake_Bool_Exp>;
};


export type Subscription_RootNftArgs = {
  distinct_on?: InputMaybe<Array<Nft_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Order_By>>;
  where?: InputMaybe<Nft_Bool_Exp>;
};


export type Subscription_RootNft_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nft_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Order_By>>;
  where?: InputMaybe<Nft_Bool_Exp>;
};


export type Subscription_RootNft_AllowanceArgs = {
  distinct_on?: InputMaybe<Array<Nft_Allowance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Allowance_Order_By>>;
  where?: InputMaybe<Nft_Allowance_Bool_Exp>;
};


export type Subscription_RootNft_Allowance_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nft_Allowance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Allowance_Order_By>>;
  where?: InputMaybe<Nft_Allowance_Bool_Exp>;
};


export type Subscription_RootNft_Allowance_By_PkArgs = {
  owner: Scalars['bigint']['input'];
  spender: Scalars['bigint']['input'];
  token_id: Scalars['bigint']['input'];
};


export type Subscription_RootNft_Allowance_HistoryArgs = {
  distinct_on?: InputMaybe<Array<Nft_Allowance_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Allowance_History_Order_By>>;
  where?: InputMaybe<Nft_Allowance_History_Bool_Exp>;
};


export type Subscription_RootNft_Allowance_History_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nft_Allowance_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Allowance_History_Order_By>>;
  where?: InputMaybe<Nft_Allowance_History_Bool_Exp>;
};


export type Subscription_RootNft_Allowance_History_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Nft_Allowance_History_Stream_Cursor_Input>>;
  where?: InputMaybe<Nft_Allowance_History_Bool_Exp>;
};


export type Subscription_RootNft_Allowance_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Nft_Allowance_Stream_Cursor_Input>>;
  where?: InputMaybe<Nft_Allowance_Bool_Exp>;
};


export type Subscription_RootNft_By_PkArgs = {
  serial_number: Scalars['bigint']['input'];
  token_id: Scalars['bigint']['input'];
};


export type Subscription_RootNft_HistoryArgs = {
  distinct_on?: InputMaybe<Array<Nft_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_History_Order_By>>;
  where?: InputMaybe<Nft_History_Bool_Exp>;
};


export type Subscription_RootNft_History_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nft_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_History_Order_By>>;
  where?: InputMaybe<Nft_History_Bool_Exp>;
};


export type Subscription_RootNft_History_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Nft_History_Stream_Cursor_Input>>;
  where?: InputMaybe<Nft_History_Bool_Exp>;
};


export type Subscription_RootNft_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Nft_Stream_Cursor_Input>>;
  where?: InputMaybe<Nft_Bool_Exp>;
};


export type Subscription_RootNft_TransferArgs = {
  distinct_on?: InputMaybe<Array<Nft_Transfer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Transfer_Order_By>>;
  where?: InputMaybe<Nft_Transfer_Bool_Exp>;
};


export type Subscription_RootNft_Transfer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nft_Transfer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Transfer_Order_By>>;
  where?: InputMaybe<Nft_Transfer_Bool_Exp>;
};


export type Subscription_RootNft_Transfer_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Nft_Transfer_Stream_Cursor_Input>>;
  where?: InputMaybe<Nft_Transfer_Bool_Exp>;
};


export type Subscription_RootNode_StakeArgs = {
  distinct_on?: InputMaybe<Array<Node_Stake_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Node_Stake_Order_By>>;
  where?: InputMaybe<Node_Stake_Bool_Exp>;
};


export type Subscription_RootNode_Stake_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Node_Stake_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Node_Stake_Order_By>>;
  where?: InputMaybe<Node_Stake_Bool_Exp>;
};


export type Subscription_RootNode_Stake_By_PkArgs = {
  consensus_timestamp: Scalars['bigint']['input'];
  node_id: Scalars['bigint']['input'];
};


export type Subscription_RootNode_Stake_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Node_Stake_Stream_Cursor_Input>>;
  where?: InputMaybe<Node_Stake_Bool_Exp>;
};


export type Subscription_RootNon_Fee_TransferArgs = {
  distinct_on?: InputMaybe<Array<Non_Fee_Transfer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Non_Fee_Transfer_Order_By>>;
  where?: InputMaybe<Non_Fee_Transfer_Bool_Exp>;
};


export type Subscription_RootNon_Fee_Transfer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Non_Fee_Transfer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Non_Fee_Transfer_Order_By>>;
  where?: InputMaybe<Non_Fee_Transfer_Bool_Exp>;
};


export type Subscription_RootNon_Fee_Transfer_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Non_Fee_Transfer_Stream_Cursor_Input>>;
  where?: InputMaybe<Non_Fee_Transfer_Bool_Exp>;
};


export type Subscription_RootScheduleArgs = {
  distinct_on?: InputMaybe<Array<Schedule_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Schedule_Order_By>>;
  where?: InputMaybe<Schedule_Bool_Exp>;
};


export type Subscription_RootSchedule_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Schedule_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Schedule_Order_By>>;
  where?: InputMaybe<Schedule_Bool_Exp>;
};


export type Subscription_RootSchedule_By_PkArgs = {
  schedule_id: Scalars['bigint']['input'];
};


export type Subscription_RootSchedule_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Schedule_Stream_Cursor_Input>>;
  where?: InputMaybe<Schedule_Bool_Exp>;
};


export type Subscription_RootSibling_TransactionsArgs = {
  args: Sibling_Transactions_Args;
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Subscription_RootSibling_Transactions_AggregateArgs = {
  args: Sibling_Transactions_Args;
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Subscription_RootStaking_Reward_TransferArgs = {
  distinct_on?: InputMaybe<Array<Staking_Reward_Transfer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staking_Reward_Transfer_Order_By>>;
  where?: InputMaybe<Staking_Reward_Transfer_Bool_Exp>;
};


export type Subscription_RootStaking_Reward_Transfer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Staking_Reward_Transfer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staking_Reward_Transfer_Order_By>>;
  where?: InputMaybe<Staking_Reward_Transfer_Bool_Exp>;
};


export type Subscription_RootStaking_Reward_Transfer_By_PkArgs = {
  account_id: Scalars['bigint']['input'];
  consensus_timestamp: Scalars['bigint']['input'];
};


export type Subscription_RootStaking_Reward_Transfer_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Staking_Reward_Transfer_Stream_Cursor_Input>>;
  where?: InputMaybe<Staking_Reward_Transfer_Bool_Exp>;
};


export type Subscription_RootTokenArgs = {
  distinct_on?: InputMaybe<Array<Token_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Token_Order_By>>;
  where?: InputMaybe<Token_Bool_Exp>;
};


export type Subscription_RootToken_AccountArgs = {
  distinct_on?: InputMaybe<Array<Token_Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Token_Account_Order_By>>;
  where?: InputMaybe<Token_Account_Bool_Exp>;
};


export type Subscription_RootToken_Account_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Token_Account_Order_By>>;
  where?: InputMaybe<Token_Account_Bool_Exp>;
};


export type Subscription_RootToken_Account_By_PkArgs = {
  account_id: Scalars['bigint']['input'];
  token_id: Scalars['bigint']['input'];
};


export type Subscription_RootToken_Account_HistoryArgs = {
  distinct_on?: InputMaybe<Array<Token_Account_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Token_Account_History_Order_By>>;
  where?: InputMaybe<Token_Account_History_Bool_Exp>;
};


export type Subscription_RootToken_Account_History_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Account_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Token_Account_History_Order_By>>;
  where?: InputMaybe<Token_Account_History_Bool_Exp>;
};


export type Subscription_RootToken_Account_History_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Token_Account_History_Stream_Cursor_Input>>;
  where?: InputMaybe<Token_Account_History_Bool_Exp>;
};


export type Subscription_RootToken_Account_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Token_Account_Stream_Cursor_Input>>;
  where?: InputMaybe<Token_Account_Bool_Exp>;
};


export type Subscription_RootToken_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Token_Order_By>>;
  where?: InputMaybe<Token_Bool_Exp>;
};


export type Subscription_RootToken_AirdropArgs = {
  distinct_on?: InputMaybe<Array<Token_Airdrop_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Token_Airdrop_Order_By>>;
  where?: InputMaybe<Token_Airdrop_Bool_Exp>;
};


export type Subscription_RootToken_Airdrop_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Airdrop_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Token_Airdrop_Order_By>>;
  where?: InputMaybe<Token_Airdrop_Bool_Exp>;
};


export type Subscription_RootToken_Airdrop_HistoryArgs = {
  distinct_on?: InputMaybe<Array<Token_Airdrop_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Token_Airdrop_History_Order_By>>;
  where?: InputMaybe<Token_Airdrop_History_Bool_Exp>;
};


export type Subscription_RootToken_Airdrop_History_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Airdrop_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Token_Airdrop_History_Order_By>>;
  where?: InputMaybe<Token_Airdrop_History_Bool_Exp>;
};


export type Subscription_RootToken_Airdrop_History_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Token_Airdrop_History_Stream_Cursor_Input>>;
  where?: InputMaybe<Token_Airdrop_History_Bool_Exp>;
};


export type Subscription_RootToken_Airdrop_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Token_Airdrop_Stream_Cursor_Input>>;
  where?: InputMaybe<Token_Airdrop_Bool_Exp>;
};


export type Subscription_RootToken_AllowanceArgs = {
  distinct_on?: InputMaybe<Array<Token_Allowance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Token_Allowance_Order_By>>;
  where?: InputMaybe<Token_Allowance_Bool_Exp>;
};


export type Subscription_RootToken_Allowance_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Allowance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Token_Allowance_Order_By>>;
  where?: InputMaybe<Token_Allowance_Bool_Exp>;
};


export type Subscription_RootToken_Allowance_By_PkArgs = {
  owner: Scalars['bigint']['input'];
  spender: Scalars['bigint']['input'];
  token_id: Scalars['bigint']['input'];
};


export type Subscription_RootToken_Allowance_HistoryArgs = {
  distinct_on?: InputMaybe<Array<Token_Allowance_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Token_Allowance_History_Order_By>>;
  where?: InputMaybe<Token_Allowance_History_Bool_Exp>;
};


export type Subscription_RootToken_Allowance_History_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Allowance_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Token_Allowance_History_Order_By>>;
  where?: InputMaybe<Token_Allowance_History_Bool_Exp>;
};


export type Subscription_RootToken_Allowance_History_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Token_Allowance_History_Stream_Cursor_Input>>;
  where?: InputMaybe<Token_Allowance_History_Bool_Exp>;
};


export type Subscription_RootToken_Allowance_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Token_Allowance_Stream_Cursor_Input>>;
  where?: InputMaybe<Token_Allowance_Bool_Exp>;
};


export type Subscription_RootToken_By_PkArgs = {
  token_id: Scalars['bigint']['input'];
};


export type Subscription_RootToken_HistoryArgs = {
  distinct_on?: InputMaybe<Array<Token_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Token_History_Order_By>>;
  where?: InputMaybe<Token_History_Bool_Exp>;
};


export type Subscription_RootToken_History_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Token_History_Order_By>>;
  where?: InputMaybe<Token_History_Bool_Exp>;
};


export type Subscription_RootToken_History_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Token_History_Stream_Cursor_Input>>;
  where?: InputMaybe<Token_History_Bool_Exp>;
};


export type Subscription_RootToken_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Token_Stream_Cursor_Input>>;
  where?: InputMaybe<Token_Bool_Exp>;
};


export type Subscription_RootToken_TransferArgs = {
  distinct_on?: InputMaybe<Array<Token_Transfer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Token_Transfer_Order_By>>;
  where?: InputMaybe<Token_Transfer_Bool_Exp>;
};


export type Subscription_RootToken_Transfer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Transfer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Token_Transfer_Order_By>>;
  where?: InputMaybe<Token_Transfer_Bool_Exp>;
};


export type Subscription_RootToken_Transfer_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Token_Transfer_Stream_Cursor_Input>>;
  where?: InputMaybe<Token_Transfer_Bool_Exp>;
};


export type Subscription_RootTopicArgs = {
  distinct_on?: InputMaybe<Array<Topic_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Topic_Order_By>>;
  where?: InputMaybe<Topic_Bool_Exp>;
};


export type Subscription_RootTopic_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Topic_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Topic_Order_By>>;
  where?: InputMaybe<Topic_Bool_Exp>;
};


export type Subscription_RootTopic_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootTopic_MessageArgs = {
  distinct_on?: InputMaybe<Array<Topic_Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Topic_Message_Order_By>>;
  where?: InputMaybe<Topic_Message_Bool_Exp>;
};


export type Subscription_RootTopic_Message_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Topic_Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Topic_Message_Order_By>>;
  where?: InputMaybe<Topic_Message_Bool_Exp>;
};


export type Subscription_RootTopic_Message_LookupArgs = {
  distinct_on?: InputMaybe<Array<Topic_Message_Lookup_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Topic_Message_Lookup_Order_By>>;
  where?: InputMaybe<Topic_Message_Lookup_Bool_Exp>;
};


export type Subscription_RootTopic_Message_Lookup_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Topic_Message_Lookup_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Topic_Message_Lookup_Order_By>>;
  where?: InputMaybe<Topic_Message_Lookup_Bool_Exp>;
};


export type Subscription_RootTopic_Message_Lookup_By_PkArgs = {
  partition: Scalars['String']['input'];
  topic_id: Scalars['bigint']['input'];
};


export type Subscription_RootTopic_Message_Lookup_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Topic_Message_Lookup_Stream_Cursor_Input>>;
  where?: InputMaybe<Topic_Message_Lookup_Bool_Exp>;
};


export type Subscription_RootTopic_Message_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Topic_Message_Stream_Cursor_Input>>;
  where?: InputMaybe<Topic_Message_Bool_Exp>;
};


export type Subscription_RootTopic_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Topic_Stream_Cursor_Input>>;
  where?: InputMaybe<Topic_Bool_Exp>;
};


export type Subscription_RootTotal_AccountsArgs = {
  distinct_on?: InputMaybe<Array<Total_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Total_Accounts_Order_By>>;
  where?: InputMaybe<Total_Accounts_Bool_Exp>;
};


export type Subscription_RootTotal_Accounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Total_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Total_Accounts_Order_By>>;
  where?: InputMaybe<Total_Accounts_Bool_Exp>;
};


export type Subscription_RootTotal_Accounts_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Total_Accounts_Stream_Cursor_Input>>;
  where?: InputMaybe<Total_Accounts_Bool_Exp>;
};


export type Subscription_RootTransactionArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Subscription_RootTransaction_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Subscription_RootTransaction_By_PkArgs = {
  consensus_timestamp: Scalars['bigint']['input'];
};


export type Subscription_RootTransaction_SignatureArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Signature_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Signature_Order_By>>;
  where?: InputMaybe<Transaction_Signature_Bool_Exp>;
};


export type Subscription_RootTransaction_Signature_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Signature_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Signature_Order_By>>;
  where?: InputMaybe<Transaction_Signature_Bool_Exp>;
};


export type Subscription_RootTransaction_Signature_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Transaction_Signature_Stream_Cursor_Input>>;
  where?: InputMaybe<Transaction_Signature_Bool_Exp>;
};


export type Subscription_RootTransaction_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Transaction_Stream_Cursor_Input>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Subscription_RootTransaction_TransferArgs = {
  args: Transaction_Transfer_Args;
  distinct_on?: InputMaybe<Array<_Transfer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<_Transfer_Order_By>>;
  where?: InputMaybe<_Transfer_Bool_Exp>;
};


export type Subscription_RootTransaction_Transfer_AggregateArgs = {
  args: Transaction_Transfer_Args;
  distinct_on?: InputMaybe<Array<_Transfer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<_Transfer_Order_By>>;
  where?: InputMaybe<_Transfer_Bool_Exp>;
};


export type Subscription_RootTransactions_Last_24hrsArgs = {
  distinct_on?: InputMaybe<Array<Transactions_Last_24hrs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transactions_Last_24hrs_Order_By>>;
  where?: InputMaybe<Transactions_Last_24hrs_Bool_Exp>;
};


export type Subscription_RootTransactions_Last_24hrs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transactions_Last_24hrs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transactions_Last_24hrs_Order_By>>;
  where?: InputMaybe<Transactions_Last_24hrs_Bool_Exp>;
};


export type Subscription_RootTransactions_Last_24hrs_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Transactions_Last_24hrs_Stream_Cursor_Input>>;
  where?: InputMaybe<Transactions_Last_24hrs_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']['input']>;
  _gt?: InputMaybe<Scalars['timestamp']['input']>;
  _gte?: InputMaybe<Scalars['timestamp']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamp']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamp']['input']>;
  _lte?: InputMaybe<Scalars['timestamp']['input']>;
  _neq?: InputMaybe<Scalars['timestamp']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']['input']>>;
};

/** columns and relationships of "token" */
export type Token = {
  __typename?: 'token';
  /** A computed field, executes function "token_admin_key" */
  admin_key?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  airdrop: Array<Token_Airdrop>;
  /** An aggregate relationship */
  airdrop_aggregate: Token_Airdrop_Aggregate;
  /** An array relationship */
  assessed_custom_fee: Array<Assessed_Custom_Fee>;
  /** An aggregate relationship */
  assessed_custom_fee_aggregate: Assessed_Custom_Fee_Aggregate;
  created_timestamp: Scalars['bigint']['output'];
  /** A computed field, executes function "token_created_timestamp_iso8601" */
  created_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  custom_fee: Array<Custom_Fee>;
  /** An aggregate relationship */
  custom_fee_aggregate: Custom_Fee_Aggregate;
  decimals: Scalars['bigint']['output'];
  /** A computed field, executes function "token_decoded_admin_key" */
  decoded_admin_key?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "token_decoded_fee_schedule_key" */
  decoded_fee_schedule_key?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "token_decoded_freeze_key" */
  decoded_freeze_key?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "token_decoded_kyc_key" */
  decoded_kyc_key?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "token_decoded_metadata" */
  decoded_metadata?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "token_decoded_metadata_key" */
  decoded_metadata_key?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "token_decoded_pause_key" */
  decoded_pause_key?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "token_decoded_supply_key" */
  decoded_supply_key?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "token_decoded_wipe_key" */
  decoded_wipe_key?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  entity?: Maybe<Entity>;
  fee_schedule_key?: Maybe<Scalars['bytea']['output']>;
  freeze_default: Scalars['Boolean']['output'];
  freeze_key?: Maybe<Scalars['bytea']['output']>;
  freeze_status: Scalars['smallint']['output'];
  initial_supply: Scalars['bigint']['output'];
  kyc_key?: Maybe<Scalars['bytea']['output']>;
  kyc_status: Scalars['smallint']['output'];
  max_supply: Scalars['bigint']['output'];
  metadata?: Maybe<Scalars['bytea']['output']>;
  metadata_key?: Maybe<Scalars['bytea']['output']>;
  /** A computed field, executes function "modified_timestamp_token" */
  modified_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "token_modified_timestamp_iso8601" */
  modified_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  /** An array relationship */
  nft: Array<Nft>;
  /** An aggregate relationship */
  nft_aggregate: Nft_Aggregate;
  pause_key?: Maybe<Scalars['bytea']['output']>;
  pause_status: Scalars['token_pause_status']['output'];
  supply_key?: Maybe<Scalars['bytea']['output']>;
  supply_type: Scalars['token_supply_type']['output'];
  symbol: Scalars['String']['output'];
  timestamp_range: Scalars['int8range']['output'];
  /** An array relationship */
  token_account: Array<Token_Account>;
  /** An aggregate relationship */
  token_account_aggregate: Token_Account_Aggregate;
  /** An array relationship */
  token_allowance: Array<Token_Allowance>;
  /** An aggregate relationship */
  token_allowance_aggregate: Token_Allowance_Aggregate;
  token_id: Scalars['bigint']['output'];
  total_supply: Scalars['bigint']['output'];
  treasury_account_id: Scalars['bigint']['output'];
  type: Scalars['token_type']['output'];
  wipe_key?: Maybe<Scalars['bytea']['output']>;
};


/** columns and relationships of "token" */
export type TokenAirdropArgs = {
  distinct_on?: InputMaybe<Array<Token_Airdrop_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Token_Airdrop_Order_By>>;
  where?: InputMaybe<Token_Airdrop_Bool_Exp>;
};


/** columns and relationships of "token" */
export type TokenAirdrop_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Airdrop_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Token_Airdrop_Order_By>>;
  where?: InputMaybe<Token_Airdrop_Bool_Exp>;
};


/** columns and relationships of "token" */
export type TokenAssessed_Custom_FeeArgs = {
  distinct_on?: InputMaybe<Array<Assessed_Custom_Fee_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Assessed_Custom_Fee_Order_By>>;
  where?: InputMaybe<Assessed_Custom_Fee_Bool_Exp>;
};


/** columns and relationships of "token" */
export type TokenAssessed_Custom_Fee_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Assessed_Custom_Fee_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Assessed_Custom_Fee_Order_By>>;
  where?: InputMaybe<Assessed_Custom_Fee_Bool_Exp>;
};


/** columns and relationships of "token" */
export type TokenCustom_FeeArgs = {
  distinct_on?: InputMaybe<Array<Custom_Fee_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Custom_Fee_Order_By>>;
  where?: InputMaybe<Custom_Fee_Bool_Exp>;
};


/** columns and relationships of "token" */
export type TokenCustom_Fee_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Custom_Fee_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Custom_Fee_Order_By>>;
  where?: InputMaybe<Custom_Fee_Bool_Exp>;
};


/** columns and relationships of "token" */
export type TokenNftArgs = {
  distinct_on?: InputMaybe<Array<Nft_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Order_By>>;
  where?: InputMaybe<Nft_Bool_Exp>;
};


/** columns and relationships of "token" */
export type TokenNft_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nft_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Order_By>>;
  where?: InputMaybe<Nft_Bool_Exp>;
};


/** columns and relationships of "token" */
export type TokenToken_AccountArgs = {
  distinct_on?: InputMaybe<Array<Token_Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Token_Account_Order_By>>;
  where?: InputMaybe<Token_Account_Bool_Exp>;
};


/** columns and relationships of "token" */
export type TokenToken_Account_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Token_Account_Order_By>>;
  where?: InputMaybe<Token_Account_Bool_Exp>;
};


/** columns and relationships of "token" */
export type TokenToken_AllowanceArgs = {
  distinct_on?: InputMaybe<Array<Token_Allowance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Token_Allowance_Order_By>>;
  where?: InputMaybe<Token_Allowance_Bool_Exp>;
};


/** columns and relationships of "token" */
export type TokenToken_Allowance_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Allowance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Token_Allowance_Order_By>>;
  where?: InputMaybe<Token_Allowance_Bool_Exp>;
};

/** columns and relationships of "token_account" */
export type Token_Account = {
  __typename?: 'token_account';
  account_id: Scalars['bigint']['output'];
  associated: Scalars['Boolean']['output'];
  automatic_association?: Maybe<Scalars['Boolean']['output']>;
  balance: Scalars['bigint']['output'];
  balance_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "token_account_balance_timestamp_iso8601" */
  balance_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  created_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "token_account_created_timestamp_iso8601" */
  created_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  entity?: Maybe<Entity>;
  freeze_status?: Maybe<Scalars['smallint']['output']>;
  kyc_status?: Maybe<Scalars['smallint']['output']>;
  /** A computed field, executes function "modified_timestamp_token_account" */
  modified_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "token_account_modified_timestamp_iso8601" */
  modified_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  nft: Array<Nft>;
  /** An aggregate relationship */
  nft_aggregate: Nft_Aggregate;
  timestamp_range: Scalars['int8range']['output'];
  /** An object relationship */
  token?: Maybe<Token>;
  token_id: Scalars['bigint']['output'];
};


/** columns and relationships of "token_account" */
export type Token_AccountNftArgs = {
  distinct_on?: InputMaybe<Array<Nft_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Order_By>>;
  where?: InputMaybe<Nft_Bool_Exp>;
};


/** columns and relationships of "token_account" */
export type Token_AccountNft_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nft_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Order_By>>;
  where?: InputMaybe<Nft_Bool_Exp>;
};

/** aggregated selection of "token_account" */
export type Token_Account_Aggregate = {
  __typename?: 'token_account_aggregate';
  aggregate?: Maybe<Token_Account_Aggregate_Fields>;
  nodes: Array<Token_Account>;
};

export type Token_Account_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Token_Account_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Token_Account_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Token_Account_Aggregate_Bool_Exp_Count>;
};

export type Token_Account_Aggregate_Bool_Exp_Bool_And = {
  arguments: Token_Account_Select_Column_Token_Account_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Token_Account_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Token_Account_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Token_Account_Select_Column_Token_Account_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Token_Account_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Token_Account_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Token_Account_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Token_Account_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "token_account" */
export type Token_Account_Aggregate_Fields = {
  __typename?: 'token_account_aggregate_fields';
  avg?: Maybe<Token_Account_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Token_Account_Max_Fields>;
  min?: Maybe<Token_Account_Min_Fields>;
  stddev?: Maybe<Token_Account_Stddev_Fields>;
  stddev_pop?: Maybe<Token_Account_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Token_Account_Stddev_Samp_Fields>;
  sum?: Maybe<Token_Account_Sum_Fields>;
  var_pop?: Maybe<Token_Account_Var_Pop_Fields>;
  var_samp?: Maybe<Token_Account_Var_Samp_Fields>;
  variance?: Maybe<Token_Account_Variance_Fields>;
};


/** aggregate fields of "token_account" */
export type Token_Account_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Token_Account_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "token_account" */
export type Token_Account_Aggregate_Order_By = {
  avg?: InputMaybe<Token_Account_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Token_Account_Max_Order_By>;
  min?: InputMaybe<Token_Account_Min_Order_By>;
  stddev?: InputMaybe<Token_Account_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Token_Account_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Token_Account_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Token_Account_Sum_Order_By>;
  var_pop?: InputMaybe<Token_Account_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Token_Account_Var_Samp_Order_By>;
  variance?: InputMaybe<Token_Account_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Token_Account_Avg_Fields = {
  __typename?: 'token_account_avg_fields';
  account_id?: Maybe<Scalars['Float']['output']>;
  balance?: Maybe<Scalars['Float']['output']>;
  balance_timestamp?: Maybe<Scalars['Float']['output']>;
  created_timestamp?: Maybe<Scalars['Float']['output']>;
  freeze_status?: Maybe<Scalars['Float']['output']>;
  kyc_status?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "modified_timestamp_token_account" */
  modified_timestamp?: Maybe<Scalars['bigint']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "token_account" */
export type Token_Account_Avg_Order_By = {
  account_id?: InputMaybe<Order_By>;
  balance?: InputMaybe<Order_By>;
  balance_timestamp?: InputMaybe<Order_By>;
  created_timestamp?: InputMaybe<Order_By>;
  freeze_status?: InputMaybe<Order_By>;
  kyc_status?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "token_account". All fields are combined with a logical 'AND'. */
export type Token_Account_Bool_Exp = {
  _and?: InputMaybe<Array<Token_Account_Bool_Exp>>;
  _not?: InputMaybe<Token_Account_Bool_Exp>;
  _or?: InputMaybe<Array<Token_Account_Bool_Exp>>;
  account_id?: InputMaybe<Bigint_Comparison_Exp>;
  associated?: InputMaybe<Boolean_Comparison_Exp>;
  automatic_association?: InputMaybe<Boolean_Comparison_Exp>;
  balance?: InputMaybe<Bigint_Comparison_Exp>;
  balance_timestamp?: InputMaybe<Bigint_Comparison_Exp>;
  balance_timestamp_iso8601?: InputMaybe<String_Comparison_Exp>;
  created_timestamp?: InputMaybe<Bigint_Comparison_Exp>;
  created_timestamp_iso8601?: InputMaybe<String_Comparison_Exp>;
  entity?: InputMaybe<Entity_Bool_Exp>;
  freeze_status?: InputMaybe<Smallint_Comparison_Exp>;
  kyc_status?: InputMaybe<Smallint_Comparison_Exp>;
  modified_timestamp?: InputMaybe<Bigint_Comparison_Exp>;
  modified_timestamp_iso8601?: InputMaybe<String_Comparison_Exp>;
  nft?: InputMaybe<Nft_Bool_Exp>;
  nft_aggregate?: InputMaybe<Nft_Aggregate_Bool_Exp>;
  timestamp_range?: InputMaybe<Int8range_Comparison_Exp>;
  token?: InputMaybe<Token_Bool_Exp>;
  token_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** columns and relationships of "token_account_history" */
export type Token_Account_History = {
  __typename?: 'token_account_history';
  account_id: Scalars['bigint']['output'];
  associated: Scalars['Boolean']['output'];
  automatic_association?: Maybe<Scalars['Boolean']['output']>;
  balance: Scalars['bigint']['output'];
  balance_timestamp?: Maybe<Scalars['bigint']['output']>;
  created_timestamp?: Maybe<Scalars['bigint']['output']>;
  freeze_status?: Maybe<Scalars['smallint']['output']>;
  kyc_status?: Maybe<Scalars['smallint']['output']>;
  timestamp_range: Scalars['int8range']['output'];
  token_id: Scalars['bigint']['output'];
};

/** aggregated selection of "token_account_history" */
export type Token_Account_History_Aggregate = {
  __typename?: 'token_account_history_aggregate';
  aggregate?: Maybe<Token_Account_History_Aggregate_Fields>;
  nodes: Array<Token_Account_History>;
};

/** aggregate fields of "token_account_history" */
export type Token_Account_History_Aggregate_Fields = {
  __typename?: 'token_account_history_aggregate_fields';
  avg?: Maybe<Token_Account_History_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Token_Account_History_Max_Fields>;
  min?: Maybe<Token_Account_History_Min_Fields>;
  stddev?: Maybe<Token_Account_History_Stddev_Fields>;
  stddev_pop?: Maybe<Token_Account_History_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Token_Account_History_Stddev_Samp_Fields>;
  sum?: Maybe<Token_Account_History_Sum_Fields>;
  var_pop?: Maybe<Token_Account_History_Var_Pop_Fields>;
  var_samp?: Maybe<Token_Account_History_Var_Samp_Fields>;
  variance?: Maybe<Token_Account_History_Variance_Fields>;
};


/** aggregate fields of "token_account_history" */
export type Token_Account_History_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Token_Account_History_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Token_Account_History_Avg_Fields = {
  __typename?: 'token_account_history_avg_fields';
  account_id?: Maybe<Scalars['Float']['output']>;
  balance?: Maybe<Scalars['Float']['output']>;
  balance_timestamp?: Maybe<Scalars['Float']['output']>;
  created_timestamp?: Maybe<Scalars['Float']['output']>;
  freeze_status?: Maybe<Scalars['Float']['output']>;
  kyc_status?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "token_account_history". All fields are combined with a logical 'AND'. */
export type Token_Account_History_Bool_Exp = {
  _and?: InputMaybe<Array<Token_Account_History_Bool_Exp>>;
  _not?: InputMaybe<Token_Account_History_Bool_Exp>;
  _or?: InputMaybe<Array<Token_Account_History_Bool_Exp>>;
  account_id?: InputMaybe<Bigint_Comparison_Exp>;
  associated?: InputMaybe<Boolean_Comparison_Exp>;
  automatic_association?: InputMaybe<Boolean_Comparison_Exp>;
  balance?: InputMaybe<Bigint_Comparison_Exp>;
  balance_timestamp?: InputMaybe<Bigint_Comparison_Exp>;
  created_timestamp?: InputMaybe<Bigint_Comparison_Exp>;
  freeze_status?: InputMaybe<Smallint_Comparison_Exp>;
  kyc_status?: InputMaybe<Smallint_Comparison_Exp>;
  timestamp_range?: InputMaybe<Int8range_Comparison_Exp>;
  token_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Token_Account_History_Max_Fields = {
  __typename?: 'token_account_history_max_fields';
  account_id?: Maybe<Scalars['bigint']['output']>;
  balance?: Maybe<Scalars['bigint']['output']>;
  balance_timestamp?: Maybe<Scalars['bigint']['output']>;
  created_timestamp?: Maybe<Scalars['bigint']['output']>;
  freeze_status?: Maybe<Scalars['smallint']['output']>;
  kyc_status?: Maybe<Scalars['smallint']['output']>;
  token_id?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type Token_Account_History_Min_Fields = {
  __typename?: 'token_account_history_min_fields';
  account_id?: Maybe<Scalars['bigint']['output']>;
  balance?: Maybe<Scalars['bigint']['output']>;
  balance_timestamp?: Maybe<Scalars['bigint']['output']>;
  created_timestamp?: Maybe<Scalars['bigint']['output']>;
  freeze_status?: Maybe<Scalars['smallint']['output']>;
  kyc_status?: Maybe<Scalars['smallint']['output']>;
  token_id?: Maybe<Scalars['bigint']['output']>;
};

/** Ordering options when selecting data from "token_account_history". */
export type Token_Account_History_Order_By = {
  account_id?: InputMaybe<Order_By>;
  associated?: InputMaybe<Order_By>;
  automatic_association?: InputMaybe<Order_By>;
  balance?: InputMaybe<Order_By>;
  balance_timestamp?: InputMaybe<Order_By>;
  created_timestamp?: InputMaybe<Order_By>;
  freeze_status?: InputMaybe<Order_By>;
  kyc_status?: InputMaybe<Order_By>;
  timestamp_range?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** select columns of table "token_account_history" */
export enum Token_Account_History_Select_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  Associated = 'associated',
  /** column name */
  AutomaticAssociation = 'automatic_association',
  /** column name */
  Balance = 'balance',
  /** column name */
  BalanceTimestamp = 'balance_timestamp',
  /** column name */
  CreatedTimestamp = 'created_timestamp',
  /** column name */
  FreezeStatus = 'freeze_status',
  /** column name */
  KycStatus = 'kyc_status',
  /** column name */
  TimestampRange = 'timestamp_range',
  /** column name */
  TokenId = 'token_id'
}

/** aggregate stddev on columns */
export type Token_Account_History_Stddev_Fields = {
  __typename?: 'token_account_history_stddev_fields';
  account_id?: Maybe<Scalars['Float']['output']>;
  balance?: Maybe<Scalars['Float']['output']>;
  balance_timestamp?: Maybe<Scalars['Float']['output']>;
  created_timestamp?: Maybe<Scalars['Float']['output']>;
  freeze_status?: Maybe<Scalars['Float']['output']>;
  kyc_status?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Token_Account_History_Stddev_Pop_Fields = {
  __typename?: 'token_account_history_stddev_pop_fields';
  account_id?: Maybe<Scalars['Float']['output']>;
  balance?: Maybe<Scalars['Float']['output']>;
  balance_timestamp?: Maybe<Scalars['Float']['output']>;
  created_timestamp?: Maybe<Scalars['Float']['output']>;
  freeze_status?: Maybe<Scalars['Float']['output']>;
  kyc_status?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Token_Account_History_Stddev_Samp_Fields = {
  __typename?: 'token_account_history_stddev_samp_fields';
  account_id?: Maybe<Scalars['Float']['output']>;
  balance?: Maybe<Scalars['Float']['output']>;
  balance_timestamp?: Maybe<Scalars['Float']['output']>;
  created_timestamp?: Maybe<Scalars['Float']['output']>;
  freeze_status?: Maybe<Scalars['Float']['output']>;
  kyc_status?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "token_account_history" */
export type Token_Account_History_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Token_Account_History_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Token_Account_History_Stream_Cursor_Value_Input = {
  account_id?: InputMaybe<Scalars['bigint']['input']>;
  associated?: InputMaybe<Scalars['Boolean']['input']>;
  automatic_association?: InputMaybe<Scalars['Boolean']['input']>;
  balance?: InputMaybe<Scalars['bigint']['input']>;
  balance_timestamp?: InputMaybe<Scalars['bigint']['input']>;
  created_timestamp?: InputMaybe<Scalars['bigint']['input']>;
  freeze_status?: InputMaybe<Scalars['smallint']['input']>;
  kyc_status?: InputMaybe<Scalars['smallint']['input']>;
  timestamp_range?: InputMaybe<Scalars['int8range']['input']>;
  token_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Token_Account_History_Sum_Fields = {
  __typename?: 'token_account_history_sum_fields';
  account_id?: Maybe<Scalars['bigint']['output']>;
  balance?: Maybe<Scalars['bigint']['output']>;
  balance_timestamp?: Maybe<Scalars['bigint']['output']>;
  created_timestamp?: Maybe<Scalars['bigint']['output']>;
  freeze_status?: Maybe<Scalars['smallint']['output']>;
  kyc_status?: Maybe<Scalars['smallint']['output']>;
  token_id?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type Token_Account_History_Var_Pop_Fields = {
  __typename?: 'token_account_history_var_pop_fields';
  account_id?: Maybe<Scalars['Float']['output']>;
  balance?: Maybe<Scalars['Float']['output']>;
  balance_timestamp?: Maybe<Scalars['Float']['output']>;
  created_timestamp?: Maybe<Scalars['Float']['output']>;
  freeze_status?: Maybe<Scalars['Float']['output']>;
  kyc_status?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Token_Account_History_Var_Samp_Fields = {
  __typename?: 'token_account_history_var_samp_fields';
  account_id?: Maybe<Scalars['Float']['output']>;
  balance?: Maybe<Scalars['Float']['output']>;
  balance_timestamp?: Maybe<Scalars['Float']['output']>;
  created_timestamp?: Maybe<Scalars['Float']['output']>;
  freeze_status?: Maybe<Scalars['Float']['output']>;
  kyc_status?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Token_Account_History_Variance_Fields = {
  __typename?: 'token_account_history_variance_fields';
  account_id?: Maybe<Scalars['Float']['output']>;
  balance?: Maybe<Scalars['Float']['output']>;
  balance_timestamp?: Maybe<Scalars['Float']['output']>;
  created_timestamp?: Maybe<Scalars['Float']['output']>;
  freeze_status?: Maybe<Scalars['Float']['output']>;
  kyc_status?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate max on columns */
export type Token_Account_Max_Fields = {
  __typename?: 'token_account_max_fields';
  account_id?: Maybe<Scalars['bigint']['output']>;
  balance?: Maybe<Scalars['bigint']['output']>;
  balance_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "token_account_balance_timestamp_iso8601" */
  balance_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  created_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "token_account_created_timestamp_iso8601" */
  created_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  freeze_status?: Maybe<Scalars['smallint']['output']>;
  kyc_status?: Maybe<Scalars['smallint']['output']>;
  /** A computed field, executes function "modified_timestamp_token_account" */
  modified_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "token_account_modified_timestamp_iso8601" */
  modified_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  token_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "token_account" */
export type Token_Account_Max_Order_By = {
  account_id?: InputMaybe<Order_By>;
  balance?: InputMaybe<Order_By>;
  balance_timestamp?: InputMaybe<Order_By>;
  created_timestamp?: InputMaybe<Order_By>;
  freeze_status?: InputMaybe<Order_By>;
  kyc_status?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Token_Account_Min_Fields = {
  __typename?: 'token_account_min_fields';
  account_id?: Maybe<Scalars['bigint']['output']>;
  balance?: Maybe<Scalars['bigint']['output']>;
  balance_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "token_account_balance_timestamp_iso8601" */
  balance_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  created_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "token_account_created_timestamp_iso8601" */
  created_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  freeze_status?: Maybe<Scalars['smallint']['output']>;
  kyc_status?: Maybe<Scalars['smallint']['output']>;
  /** A computed field, executes function "modified_timestamp_token_account" */
  modified_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "token_account_modified_timestamp_iso8601" */
  modified_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  token_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "token_account" */
export type Token_Account_Min_Order_By = {
  account_id?: InputMaybe<Order_By>;
  balance?: InputMaybe<Order_By>;
  balance_timestamp?: InputMaybe<Order_By>;
  created_timestamp?: InputMaybe<Order_By>;
  freeze_status?: InputMaybe<Order_By>;
  kyc_status?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "token_account". */
export type Token_Account_Order_By = {
  account_id?: InputMaybe<Order_By>;
  associated?: InputMaybe<Order_By>;
  automatic_association?: InputMaybe<Order_By>;
  balance?: InputMaybe<Order_By>;
  balance_timestamp?: InputMaybe<Order_By>;
  balance_timestamp_iso8601?: InputMaybe<Order_By>;
  created_timestamp?: InputMaybe<Order_By>;
  created_timestamp_iso8601?: InputMaybe<Order_By>;
  entity?: InputMaybe<Entity_Order_By>;
  freeze_status?: InputMaybe<Order_By>;
  kyc_status?: InputMaybe<Order_By>;
  modified_timestamp?: InputMaybe<Order_By>;
  modified_timestamp_iso8601?: InputMaybe<Order_By>;
  nft_aggregate?: InputMaybe<Nft_Aggregate_Order_By>;
  timestamp_range?: InputMaybe<Order_By>;
  token?: InputMaybe<Token_Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** select columns of table "token_account" */
export enum Token_Account_Select_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  Associated = 'associated',
  /** column name */
  AutomaticAssociation = 'automatic_association',
  /** column name */
  Balance = 'balance',
  /** column name */
  BalanceTimestamp = 'balance_timestamp',
  /** column name */
  CreatedTimestamp = 'created_timestamp',
  /** column name */
  FreezeStatus = 'freeze_status',
  /** column name */
  KycStatus = 'kyc_status',
  /** column name */
  TimestampRange = 'timestamp_range',
  /** column name */
  TokenId = 'token_id'
}

/** select "token_account_aggregate_bool_exp_bool_and_arguments_columns" columns of table "token_account" */
export enum Token_Account_Select_Column_Token_Account_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Associated = 'associated',
  /** column name */
  AutomaticAssociation = 'automatic_association'
}

/** select "token_account_aggregate_bool_exp_bool_or_arguments_columns" columns of table "token_account" */
export enum Token_Account_Select_Column_Token_Account_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Associated = 'associated',
  /** column name */
  AutomaticAssociation = 'automatic_association'
}

/** aggregate stddev on columns */
export type Token_Account_Stddev_Fields = {
  __typename?: 'token_account_stddev_fields';
  account_id?: Maybe<Scalars['Float']['output']>;
  balance?: Maybe<Scalars['Float']['output']>;
  balance_timestamp?: Maybe<Scalars['Float']['output']>;
  created_timestamp?: Maybe<Scalars['Float']['output']>;
  freeze_status?: Maybe<Scalars['Float']['output']>;
  kyc_status?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "modified_timestamp_token_account" */
  modified_timestamp?: Maybe<Scalars['bigint']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "token_account" */
export type Token_Account_Stddev_Order_By = {
  account_id?: InputMaybe<Order_By>;
  balance?: InputMaybe<Order_By>;
  balance_timestamp?: InputMaybe<Order_By>;
  created_timestamp?: InputMaybe<Order_By>;
  freeze_status?: InputMaybe<Order_By>;
  kyc_status?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Token_Account_Stddev_Pop_Fields = {
  __typename?: 'token_account_stddev_pop_fields';
  account_id?: Maybe<Scalars['Float']['output']>;
  balance?: Maybe<Scalars['Float']['output']>;
  balance_timestamp?: Maybe<Scalars['Float']['output']>;
  created_timestamp?: Maybe<Scalars['Float']['output']>;
  freeze_status?: Maybe<Scalars['Float']['output']>;
  kyc_status?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "modified_timestamp_token_account" */
  modified_timestamp?: Maybe<Scalars['bigint']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "token_account" */
export type Token_Account_Stddev_Pop_Order_By = {
  account_id?: InputMaybe<Order_By>;
  balance?: InputMaybe<Order_By>;
  balance_timestamp?: InputMaybe<Order_By>;
  created_timestamp?: InputMaybe<Order_By>;
  freeze_status?: InputMaybe<Order_By>;
  kyc_status?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Token_Account_Stddev_Samp_Fields = {
  __typename?: 'token_account_stddev_samp_fields';
  account_id?: Maybe<Scalars['Float']['output']>;
  balance?: Maybe<Scalars['Float']['output']>;
  balance_timestamp?: Maybe<Scalars['Float']['output']>;
  created_timestamp?: Maybe<Scalars['Float']['output']>;
  freeze_status?: Maybe<Scalars['Float']['output']>;
  kyc_status?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "modified_timestamp_token_account" */
  modified_timestamp?: Maybe<Scalars['bigint']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "token_account" */
export type Token_Account_Stddev_Samp_Order_By = {
  account_id?: InputMaybe<Order_By>;
  balance?: InputMaybe<Order_By>;
  balance_timestamp?: InputMaybe<Order_By>;
  created_timestamp?: InputMaybe<Order_By>;
  freeze_status?: InputMaybe<Order_By>;
  kyc_status?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "token_account" */
export type Token_Account_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Token_Account_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Token_Account_Stream_Cursor_Value_Input = {
  account_id?: InputMaybe<Scalars['bigint']['input']>;
  associated?: InputMaybe<Scalars['Boolean']['input']>;
  automatic_association?: InputMaybe<Scalars['Boolean']['input']>;
  balance?: InputMaybe<Scalars['bigint']['input']>;
  balance_timestamp?: InputMaybe<Scalars['bigint']['input']>;
  created_timestamp?: InputMaybe<Scalars['bigint']['input']>;
  freeze_status?: InputMaybe<Scalars['smallint']['input']>;
  kyc_status?: InputMaybe<Scalars['smallint']['input']>;
  timestamp_range?: InputMaybe<Scalars['int8range']['input']>;
  token_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Token_Account_Sum_Fields = {
  __typename?: 'token_account_sum_fields';
  account_id?: Maybe<Scalars['bigint']['output']>;
  balance?: Maybe<Scalars['bigint']['output']>;
  balance_timestamp?: Maybe<Scalars['bigint']['output']>;
  created_timestamp?: Maybe<Scalars['bigint']['output']>;
  freeze_status?: Maybe<Scalars['smallint']['output']>;
  kyc_status?: Maybe<Scalars['smallint']['output']>;
  /** A computed field, executes function "modified_timestamp_token_account" */
  modified_timestamp?: Maybe<Scalars['bigint']['output']>;
  token_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "token_account" */
export type Token_Account_Sum_Order_By = {
  account_id?: InputMaybe<Order_By>;
  balance?: InputMaybe<Order_By>;
  balance_timestamp?: InputMaybe<Order_By>;
  created_timestamp?: InputMaybe<Order_By>;
  freeze_status?: InputMaybe<Order_By>;
  kyc_status?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Token_Account_Var_Pop_Fields = {
  __typename?: 'token_account_var_pop_fields';
  account_id?: Maybe<Scalars['Float']['output']>;
  balance?: Maybe<Scalars['Float']['output']>;
  balance_timestamp?: Maybe<Scalars['Float']['output']>;
  created_timestamp?: Maybe<Scalars['Float']['output']>;
  freeze_status?: Maybe<Scalars['Float']['output']>;
  kyc_status?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "modified_timestamp_token_account" */
  modified_timestamp?: Maybe<Scalars['bigint']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "token_account" */
export type Token_Account_Var_Pop_Order_By = {
  account_id?: InputMaybe<Order_By>;
  balance?: InputMaybe<Order_By>;
  balance_timestamp?: InputMaybe<Order_By>;
  created_timestamp?: InputMaybe<Order_By>;
  freeze_status?: InputMaybe<Order_By>;
  kyc_status?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Token_Account_Var_Samp_Fields = {
  __typename?: 'token_account_var_samp_fields';
  account_id?: Maybe<Scalars['Float']['output']>;
  balance?: Maybe<Scalars['Float']['output']>;
  balance_timestamp?: Maybe<Scalars['Float']['output']>;
  created_timestamp?: Maybe<Scalars['Float']['output']>;
  freeze_status?: Maybe<Scalars['Float']['output']>;
  kyc_status?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "modified_timestamp_token_account" */
  modified_timestamp?: Maybe<Scalars['bigint']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "token_account" */
export type Token_Account_Var_Samp_Order_By = {
  account_id?: InputMaybe<Order_By>;
  balance?: InputMaybe<Order_By>;
  balance_timestamp?: InputMaybe<Order_By>;
  created_timestamp?: InputMaybe<Order_By>;
  freeze_status?: InputMaybe<Order_By>;
  kyc_status?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Token_Account_Variance_Fields = {
  __typename?: 'token_account_variance_fields';
  account_id?: Maybe<Scalars['Float']['output']>;
  balance?: Maybe<Scalars['Float']['output']>;
  balance_timestamp?: Maybe<Scalars['Float']['output']>;
  created_timestamp?: Maybe<Scalars['Float']['output']>;
  freeze_status?: Maybe<Scalars['Float']['output']>;
  kyc_status?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "modified_timestamp_token_account" */
  modified_timestamp?: Maybe<Scalars['bigint']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "token_account" */
export type Token_Account_Variance_Order_By = {
  account_id?: InputMaybe<Order_By>;
  balance?: InputMaybe<Order_By>;
  balance_timestamp?: InputMaybe<Order_By>;
  created_timestamp?: InputMaybe<Order_By>;
  freeze_status?: InputMaybe<Order_By>;
  kyc_status?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregated selection of "token" */
export type Token_Aggregate = {
  __typename?: 'token_aggregate';
  aggregate?: Maybe<Token_Aggregate_Fields>;
  nodes: Array<Token>;
};

/** aggregate fields of "token" */
export type Token_Aggregate_Fields = {
  __typename?: 'token_aggregate_fields';
  avg?: Maybe<Token_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Token_Max_Fields>;
  min?: Maybe<Token_Min_Fields>;
  stddev?: Maybe<Token_Stddev_Fields>;
  stddev_pop?: Maybe<Token_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Token_Stddev_Samp_Fields>;
  sum?: Maybe<Token_Sum_Fields>;
  var_pop?: Maybe<Token_Var_Pop_Fields>;
  var_samp?: Maybe<Token_Var_Samp_Fields>;
  variance?: Maybe<Token_Variance_Fields>;
};


/** aggregate fields of "token" */
export type Token_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Token_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** columns and relationships of "token_airdrop" */
export type Token_Airdrop = {
  __typename?: 'token_airdrop';
  amount?: Maybe<Scalars['bigint']['output']>;
  receiver_account_id: Scalars['bigint']['output'];
  sender_account_id: Scalars['bigint']['output'];
  serial_number: Scalars['bigint']['output'];
  state: Scalars['airdrop_state']['output'];
  timestamp_range: Scalars['int8range']['output'];
  /** An object relationship */
  token?: Maybe<Token>;
  token_id: Scalars['bigint']['output'];
};

/** aggregated selection of "token_airdrop" */
export type Token_Airdrop_Aggregate = {
  __typename?: 'token_airdrop_aggregate';
  aggregate?: Maybe<Token_Airdrop_Aggregate_Fields>;
  nodes: Array<Token_Airdrop>;
};

export type Token_Airdrop_Aggregate_Bool_Exp = {
  count?: InputMaybe<Token_Airdrop_Aggregate_Bool_Exp_Count>;
};

export type Token_Airdrop_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Token_Airdrop_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Token_Airdrop_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "token_airdrop" */
export type Token_Airdrop_Aggregate_Fields = {
  __typename?: 'token_airdrop_aggregate_fields';
  avg?: Maybe<Token_Airdrop_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Token_Airdrop_Max_Fields>;
  min?: Maybe<Token_Airdrop_Min_Fields>;
  stddev?: Maybe<Token_Airdrop_Stddev_Fields>;
  stddev_pop?: Maybe<Token_Airdrop_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Token_Airdrop_Stddev_Samp_Fields>;
  sum?: Maybe<Token_Airdrop_Sum_Fields>;
  var_pop?: Maybe<Token_Airdrop_Var_Pop_Fields>;
  var_samp?: Maybe<Token_Airdrop_Var_Samp_Fields>;
  variance?: Maybe<Token_Airdrop_Variance_Fields>;
};


/** aggregate fields of "token_airdrop" */
export type Token_Airdrop_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Token_Airdrop_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "token_airdrop" */
export type Token_Airdrop_Aggregate_Order_By = {
  avg?: InputMaybe<Token_Airdrop_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Token_Airdrop_Max_Order_By>;
  min?: InputMaybe<Token_Airdrop_Min_Order_By>;
  stddev?: InputMaybe<Token_Airdrop_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Token_Airdrop_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Token_Airdrop_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Token_Airdrop_Sum_Order_By>;
  var_pop?: InputMaybe<Token_Airdrop_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Token_Airdrop_Var_Samp_Order_By>;
  variance?: InputMaybe<Token_Airdrop_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Token_Airdrop_Avg_Fields = {
  __typename?: 'token_airdrop_avg_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  receiver_account_id?: Maybe<Scalars['Float']['output']>;
  sender_account_id?: Maybe<Scalars['Float']['output']>;
  serial_number?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "token_airdrop" */
export type Token_Airdrop_Avg_Order_By = {
  amount?: InputMaybe<Order_By>;
  receiver_account_id?: InputMaybe<Order_By>;
  sender_account_id?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "token_airdrop". All fields are combined with a logical 'AND'. */
export type Token_Airdrop_Bool_Exp = {
  _and?: InputMaybe<Array<Token_Airdrop_Bool_Exp>>;
  _not?: InputMaybe<Token_Airdrop_Bool_Exp>;
  _or?: InputMaybe<Array<Token_Airdrop_Bool_Exp>>;
  amount?: InputMaybe<Bigint_Comparison_Exp>;
  receiver_account_id?: InputMaybe<Bigint_Comparison_Exp>;
  sender_account_id?: InputMaybe<Bigint_Comparison_Exp>;
  serial_number?: InputMaybe<Bigint_Comparison_Exp>;
  state?: InputMaybe<Airdrop_State_Comparison_Exp>;
  timestamp_range?: InputMaybe<Int8range_Comparison_Exp>;
  token?: InputMaybe<Token_Bool_Exp>;
  token_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** columns and relationships of "token_airdrop_history" */
export type Token_Airdrop_History = {
  __typename?: 'token_airdrop_history';
  amount?: Maybe<Scalars['bigint']['output']>;
  receiver_account_id: Scalars['bigint']['output'];
  sender_account_id: Scalars['bigint']['output'];
  serial_number: Scalars['bigint']['output'];
  state: Scalars['airdrop_state']['output'];
  timestamp_range: Scalars['int8range']['output'];
  token_id: Scalars['bigint']['output'];
};

/** aggregated selection of "token_airdrop_history" */
export type Token_Airdrop_History_Aggregate = {
  __typename?: 'token_airdrop_history_aggregate';
  aggregate?: Maybe<Token_Airdrop_History_Aggregate_Fields>;
  nodes: Array<Token_Airdrop_History>;
};

/** aggregate fields of "token_airdrop_history" */
export type Token_Airdrop_History_Aggregate_Fields = {
  __typename?: 'token_airdrop_history_aggregate_fields';
  avg?: Maybe<Token_Airdrop_History_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Token_Airdrop_History_Max_Fields>;
  min?: Maybe<Token_Airdrop_History_Min_Fields>;
  stddev?: Maybe<Token_Airdrop_History_Stddev_Fields>;
  stddev_pop?: Maybe<Token_Airdrop_History_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Token_Airdrop_History_Stddev_Samp_Fields>;
  sum?: Maybe<Token_Airdrop_History_Sum_Fields>;
  var_pop?: Maybe<Token_Airdrop_History_Var_Pop_Fields>;
  var_samp?: Maybe<Token_Airdrop_History_Var_Samp_Fields>;
  variance?: Maybe<Token_Airdrop_History_Variance_Fields>;
};


/** aggregate fields of "token_airdrop_history" */
export type Token_Airdrop_History_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Token_Airdrop_History_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Token_Airdrop_History_Avg_Fields = {
  __typename?: 'token_airdrop_history_avg_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  receiver_account_id?: Maybe<Scalars['Float']['output']>;
  sender_account_id?: Maybe<Scalars['Float']['output']>;
  serial_number?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "token_airdrop_history". All fields are combined with a logical 'AND'. */
export type Token_Airdrop_History_Bool_Exp = {
  _and?: InputMaybe<Array<Token_Airdrop_History_Bool_Exp>>;
  _not?: InputMaybe<Token_Airdrop_History_Bool_Exp>;
  _or?: InputMaybe<Array<Token_Airdrop_History_Bool_Exp>>;
  amount?: InputMaybe<Bigint_Comparison_Exp>;
  receiver_account_id?: InputMaybe<Bigint_Comparison_Exp>;
  sender_account_id?: InputMaybe<Bigint_Comparison_Exp>;
  serial_number?: InputMaybe<Bigint_Comparison_Exp>;
  state?: InputMaybe<Airdrop_State_Comparison_Exp>;
  timestamp_range?: InputMaybe<Int8range_Comparison_Exp>;
  token_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Token_Airdrop_History_Max_Fields = {
  __typename?: 'token_airdrop_history_max_fields';
  amount?: Maybe<Scalars['bigint']['output']>;
  receiver_account_id?: Maybe<Scalars['bigint']['output']>;
  sender_account_id?: Maybe<Scalars['bigint']['output']>;
  serial_number?: Maybe<Scalars['bigint']['output']>;
  state?: Maybe<Scalars['airdrop_state']['output']>;
  token_id?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type Token_Airdrop_History_Min_Fields = {
  __typename?: 'token_airdrop_history_min_fields';
  amount?: Maybe<Scalars['bigint']['output']>;
  receiver_account_id?: Maybe<Scalars['bigint']['output']>;
  sender_account_id?: Maybe<Scalars['bigint']['output']>;
  serial_number?: Maybe<Scalars['bigint']['output']>;
  state?: Maybe<Scalars['airdrop_state']['output']>;
  token_id?: Maybe<Scalars['bigint']['output']>;
};

/** Ordering options when selecting data from "token_airdrop_history". */
export type Token_Airdrop_History_Order_By = {
  amount?: InputMaybe<Order_By>;
  receiver_account_id?: InputMaybe<Order_By>;
  sender_account_id?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  timestamp_range?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** select columns of table "token_airdrop_history" */
export enum Token_Airdrop_History_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  ReceiverAccountId = 'receiver_account_id',
  /** column name */
  SenderAccountId = 'sender_account_id',
  /** column name */
  SerialNumber = 'serial_number',
  /** column name */
  State = 'state',
  /** column name */
  TimestampRange = 'timestamp_range',
  /** column name */
  TokenId = 'token_id'
}

/** aggregate stddev on columns */
export type Token_Airdrop_History_Stddev_Fields = {
  __typename?: 'token_airdrop_history_stddev_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  receiver_account_id?: Maybe<Scalars['Float']['output']>;
  sender_account_id?: Maybe<Scalars['Float']['output']>;
  serial_number?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Token_Airdrop_History_Stddev_Pop_Fields = {
  __typename?: 'token_airdrop_history_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  receiver_account_id?: Maybe<Scalars['Float']['output']>;
  sender_account_id?: Maybe<Scalars['Float']['output']>;
  serial_number?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Token_Airdrop_History_Stddev_Samp_Fields = {
  __typename?: 'token_airdrop_history_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  receiver_account_id?: Maybe<Scalars['Float']['output']>;
  sender_account_id?: Maybe<Scalars['Float']['output']>;
  serial_number?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "token_airdrop_history" */
export type Token_Airdrop_History_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Token_Airdrop_History_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Token_Airdrop_History_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars['bigint']['input']>;
  receiver_account_id?: InputMaybe<Scalars['bigint']['input']>;
  sender_account_id?: InputMaybe<Scalars['bigint']['input']>;
  serial_number?: InputMaybe<Scalars['bigint']['input']>;
  state?: InputMaybe<Scalars['airdrop_state']['input']>;
  timestamp_range?: InputMaybe<Scalars['int8range']['input']>;
  token_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Token_Airdrop_History_Sum_Fields = {
  __typename?: 'token_airdrop_history_sum_fields';
  amount?: Maybe<Scalars['bigint']['output']>;
  receiver_account_id?: Maybe<Scalars['bigint']['output']>;
  sender_account_id?: Maybe<Scalars['bigint']['output']>;
  serial_number?: Maybe<Scalars['bigint']['output']>;
  token_id?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type Token_Airdrop_History_Var_Pop_Fields = {
  __typename?: 'token_airdrop_history_var_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  receiver_account_id?: Maybe<Scalars['Float']['output']>;
  sender_account_id?: Maybe<Scalars['Float']['output']>;
  serial_number?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Token_Airdrop_History_Var_Samp_Fields = {
  __typename?: 'token_airdrop_history_var_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  receiver_account_id?: Maybe<Scalars['Float']['output']>;
  sender_account_id?: Maybe<Scalars['Float']['output']>;
  serial_number?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Token_Airdrop_History_Variance_Fields = {
  __typename?: 'token_airdrop_history_variance_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  receiver_account_id?: Maybe<Scalars['Float']['output']>;
  sender_account_id?: Maybe<Scalars['Float']['output']>;
  serial_number?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate max on columns */
export type Token_Airdrop_Max_Fields = {
  __typename?: 'token_airdrop_max_fields';
  amount?: Maybe<Scalars['bigint']['output']>;
  receiver_account_id?: Maybe<Scalars['bigint']['output']>;
  sender_account_id?: Maybe<Scalars['bigint']['output']>;
  serial_number?: Maybe<Scalars['bigint']['output']>;
  state?: Maybe<Scalars['airdrop_state']['output']>;
  token_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "token_airdrop" */
export type Token_Airdrop_Max_Order_By = {
  amount?: InputMaybe<Order_By>;
  receiver_account_id?: InputMaybe<Order_By>;
  sender_account_id?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Token_Airdrop_Min_Fields = {
  __typename?: 'token_airdrop_min_fields';
  amount?: Maybe<Scalars['bigint']['output']>;
  receiver_account_id?: Maybe<Scalars['bigint']['output']>;
  sender_account_id?: Maybe<Scalars['bigint']['output']>;
  serial_number?: Maybe<Scalars['bigint']['output']>;
  state?: Maybe<Scalars['airdrop_state']['output']>;
  token_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "token_airdrop" */
export type Token_Airdrop_Min_Order_By = {
  amount?: InputMaybe<Order_By>;
  receiver_account_id?: InputMaybe<Order_By>;
  sender_account_id?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "token_airdrop". */
export type Token_Airdrop_Order_By = {
  amount?: InputMaybe<Order_By>;
  receiver_account_id?: InputMaybe<Order_By>;
  sender_account_id?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  timestamp_range?: InputMaybe<Order_By>;
  token?: InputMaybe<Token_Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** select columns of table "token_airdrop" */
export enum Token_Airdrop_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  ReceiverAccountId = 'receiver_account_id',
  /** column name */
  SenderAccountId = 'sender_account_id',
  /** column name */
  SerialNumber = 'serial_number',
  /** column name */
  State = 'state',
  /** column name */
  TimestampRange = 'timestamp_range',
  /** column name */
  TokenId = 'token_id'
}

/** aggregate stddev on columns */
export type Token_Airdrop_Stddev_Fields = {
  __typename?: 'token_airdrop_stddev_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  receiver_account_id?: Maybe<Scalars['Float']['output']>;
  sender_account_id?: Maybe<Scalars['Float']['output']>;
  serial_number?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "token_airdrop" */
export type Token_Airdrop_Stddev_Order_By = {
  amount?: InputMaybe<Order_By>;
  receiver_account_id?: InputMaybe<Order_By>;
  sender_account_id?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Token_Airdrop_Stddev_Pop_Fields = {
  __typename?: 'token_airdrop_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  receiver_account_id?: Maybe<Scalars['Float']['output']>;
  sender_account_id?: Maybe<Scalars['Float']['output']>;
  serial_number?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "token_airdrop" */
export type Token_Airdrop_Stddev_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
  receiver_account_id?: InputMaybe<Order_By>;
  sender_account_id?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Token_Airdrop_Stddev_Samp_Fields = {
  __typename?: 'token_airdrop_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  receiver_account_id?: Maybe<Scalars['Float']['output']>;
  sender_account_id?: Maybe<Scalars['Float']['output']>;
  serial_number?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "token_airdrop" */
export type Token_Airdrop_Stddev_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
  receiver_account_id?: InputMaybe<Order_By>;
  sender_account_id?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "token_airdrop" */
export type Token_Airdrop_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Token_Airdrop_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Token_Airdrop_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars['bigint']['input']>;
  receiver_account_id?: InputMaybe<Scalars['bigint']['input']>;
  sender_account_id?: InputMaybe<Scalars['bigint']['input']>;
  serial_number?: InputMaybe<Scalars['bigint']['input']>;
  state?: InputMaybe<Scalars['airdrop_state']['input']>;
  timestamp_range?: InputMaybe<Scalars['int8range']['input']>;
  token_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Token_Airdrop_Sum_Fields = {
  __typename?: 'token_airdrop_sum_fields';
  amount?: Maybe<Scalars['bigint']['output']>;
  receiver_account_id?: Maybe<Scalars['bigint']['output']>;
  sender_account_id?: Maybe<Scalars['bigint']['output']>;
  serial_number?: Maybe<Scalars['bigint']['output']>;
  token_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "token_airdrop" */
export type Token_Airdrop_Sum_Order_By = {
  amount?: InputMaybe<Order_By>;
  receiver_account_id?: InputMaybe<Order_By>;
  sender_account_id?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Token_Airdrop_Var_Pop_Fields = {
  __typename?: 'token_airdrop_var_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  receiver_account_id?: Maybe<Scalars['Float']['output']>;
  sender_account_id?: Maybe<Scalars['Float']['output']>;
  serial_number?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "token_airdrop" */
export type Token_Airdrop_Var_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
  receiver_account_id?: InputMaybe<Order_By>;
  sender_account_id?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Token_Airdrop_Var_Samp_Fields = {
  __typename?: 'token_airdrop_var_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  receiver_account_id?: Maybe<Scalars['Float']['output']>;
  sender_account_id?: Maybe<Scalars['Float']['output']>;
  serial_number?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "token_airdrop" */
export type Token_Airdrop_Var_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
  receiver_account_id?: InputMaybe<Order_By>;
  sender_account_id?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Token_Airdrop_Variance_Fields = {
  __typename?: 'token_airdrop_variance_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  receiver_account_id?: Maybe<Scalars['Float']['output']>;
  sender_account_id?: Maybe<Scalars['Float']['output']>;
  serial_number?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "token_airdrop" */
export type Token_Airdrop_Variance_Order_By = {
  amount?: InputMaybe<Order_By>;
  receiver_account_id?: InputMaybe<Order_By>;
  sender_account_id?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** Token allowances delegated by payer to spender */
export type Token_Allowance = {
  __typename?: 'token_allowance';
  amount: Scalars['bigint']['output'];
  amount_granted: Scalars['bigint']['output'];
  /** A computed field, executes function "modified_timestamp_token_allowance" */
  modified_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "token_allowance_modified_timestamp_iso8601" */
  modified_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  owner: Scalars['bigint']['output'];
  payer_account_id: Scalars['bigint']['output'];
  spender: Scalars['bigint']['output'];
  timestamp_range: Scalars['int8range']['output'];
  /** An object relationship */
  token?: Maybe<Token>;
  token_id: Scalars['bigint']['output'];
};

/** aggregated selection of "token_allowance" */
export type Token_Allowance_Aggregate = {
  __typename?: 'token_allowance_aggregate';
  aggregate?: Maybe<Token_Allowance_Aggregate_Fields>;
  nodes: Array<Token_Allowance>;
};

export type Token_Allowance_Aggregate_Bool_Exp = {
  count?: InputMaybe<Token_Allowance_Aggregate_Bool_Exp_Count>;
};

export type Token_Allowance_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Token_Allowance_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Token_Allowance_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "token_allowance" */
export type Token_Allowance_Aggregate_Fields = {
  __typename?: 'token_allowance_aggregate_fields';
  avg?: Maybe<Token_Allowance_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Token_Allowance_Max_Fields>;
  min?: Maybe<Token_Allowance_Min_Fields>;
  stddev?: Maybe<Token_Allowance_Stddev_Fields>;
  stddev_pop?: Maybe<Token_Allowance_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Token_Allowance_Stddev_Samp_Fields>;
  sum?: Maybe<Token_Allowance_Sum_Fields>;
  var_pop?: Maybe<Token_Allowance_Var_Pop_Fields>;
  var_samp?: Maybe<Token_Allowance_Var_Samp_Fields>;
  variance?: Maybe<Token_Allowance_Variance_Fields>;
};


/** aggregate fields of "token_allowance" */
export type Token_Allowance_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Token_Allowance_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "token_allowance" */
export type Token_Allowance_Aggregate_Order_By = {
  avg?: InputMaybe<Token_Allowance_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Token_Allowance_Max_Order_By>;
  min?: InputMaybe<Token_Allowance_Min_Order_By>;
  stddev?: InputMaybe<Token_Allowance_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Token_Allowance_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Token_Allowance_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Token_Allowance_Sum_Order_By>;
  var_pop?: InputMaybe<Token_Allowance_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Token_Allowance_Var_Samp_Order_By>;
  variance?: InputMaybe<Token_Allowance_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Token_Allowance_Avg_Fields = {
  __typename?: 'token_allowance_avg_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  amount_granted?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "modified_timestamp_token_allowance" */
  modified_timestamp?: Maybe<Scalars['bigint']['output']>;
  owner?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  spender?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "token_allowance" */
export type Token_Allowance_Avg_Order_By = {
  amount?: InputMaybe<Order_By>;
  amount_granted?: InputMaybe<Order_By>;
  owner?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  spender?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "token_allowance". All fields are combined with a logical 'AND'. */
export type Token_Allowance_Bool_Exp = {
  _and?: InputMaybe<Array<Token_Allowance_Bool_Exp>>;
  _not?: InputMaybe<Token_Allowance_Bool_Exp>;
  _or?: InputMaybe<Array<Token_Allowance_Bool_Exp>>;
  amount?: InputMaybe<Bigint_Comparison_Exp>;
  amount_granted?: InputMaybe<Bigint_Comparison_Exp>;
  modified_timestamp?: InputMaybe<Bigint_Comparison_Exp>;
  modified_timestamp_iso8601?: InputMaybe<String_Comparison_Exp>;
  owner?: InputMaybe<Bigint_Comparison_Exp>;
  payer_account_id?: InputMaybe<Bigint_Comparison_Exp>;
  spender?: InputMaybe<Bigint_Comparison_Exp>;
  timestamp_range?: InputMaybe<Int8range_Comparison_Exp>;
  token?: InputMaybe<Token_Bool_Exp>;
  token_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** History of token allowances delegated by payer to spender */
export type Token_Allowance_History = {
  __typename?: 'token_allowance_history';
  amount: Scalars['bigint']['output'];
  amount_granted: Scalars['bigint']['output'];
  owner: Scalars['bigint']['output'];
  payer_account_id: Scalars['bigint']['output'];
  spender: Scalars['bigint']['output'];
  timestamp_range: Scalars['int8range']['output'];
  token_id: Scalars['bigint']['output'];
};

/** aggregated selection of "token_allowance_history" */
export type Token_Allowance_History_Aggregate = {
  __typename?: 'token_allowance_history_aggregate';
  aggregate?: Maybe<Token_Allowance_History_Aggregate_Fields>;
  nodes: Array<Token_Allowance_History>;
};

/** aggregate fields of "token_allowance_history" */
export type Token_Allowance_History_Aggregate_Fields = {
  __typename?: 'token_allowance_history_aggregate_fields';
  avg?: Maybe<Token_Allowance_History_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Token_Allowance_History_Max_Fields>;
  min?: Maybe<Token_Allowance_History_Min_Fields>;
  stddev?: Maybe<Token_Allowance_History_Stddev_Fields>;
  stddev_pop?: Maybe<Token_Allowance_History_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Token_Allowance_History_Stddev_Samp_Fields>;
  sum?: Maybe<Token_Allowance_History_Sum_Fields>;
  var_pop?: Maybe<Token_Allowance_History_Var_Pop_Fields>;
  var_samp?: Maybe<Token_Allowance_History_Var_Samp_Fields>;
  variance?: Maybe<Token_Allowance_History_Variance_Fields>;
};


/** aggregate fields of "token_allowance_history" */
export type Token_Allowance_History_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Token_Allowance_History_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Token_Allowance_History_Avg_Fields = {
  __typename?: 'token_allowance_history_avg_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  amount_granted?: Maybe<Scalars['Float']['output']>;
  owner?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  spender?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "token_allowance_history". All fields are combined with a logical 'AND'. */
export type Token_Allowance_History_Bool_Exp = {
  _and?: InputMaybe<Array<Token_Allowance_History_Bool_Exp>>;
  _not?: InputMaybe<Token_Allowance_History_Bool_Exp>;
  _or?: InputMaybe<Array<Token_Allowance_History_Bool_Exp>>;
  amount?: InputMaybe<Bigint_Comparison_Exp>;
  amount_granted?: InputMaybe<Bigint_Comparison_Exp>;
  owner?: InputMaybe<Bigint_Comparison_Exp>;
  payer_account_id?: InputMaybe<Bigint_Comparison_Exp>;
  spender?: InputMaybe<Bigint_Comparison_Exp>;
  timestamp_range?: InputMaybe<Int8range_Comparison_Exp>;
  token_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Token_Allowance_History_Max_Fields = {
  __typename?: 'token_allowance_history_max_fields';
  amount?: Maybe<Scalars['bigint']['output']>;
  amount_granted?: Maybe<Scalars['bigint']['output']>;
  owner?: Maybe<Scalars['bigint']['output']>;
  payer_account_id?: Maybe<Scalars['bigint']['output']>;
  spender?: Maybe<Scalars['bigint']['output']>;
  token_id?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type Token_Allowance_History_Min_Fields = {
  __typename?: 'token_allowance_history_min_fields';
  amount?: Maybe<Scalars['bigint']['output']>;
  amount_granted?: Maybe<Scalars['bigint']['output']>;
  owner?: Maybe<Scalars['bigint']['output']>;
  payer_account_id?: Maybe<Scalars['bigint']['output']>;
  spender?: Maybe<Scalars['bigint']['output']>;
  token_id?: Maybe<Scalars['bigint']['output']>;
};

/** Ordering options when selecting data from "token_allowance_history". */
export type Token_Allowance_History_Order_By = {
  amount?: InputMaybe<Order_By>;
  amount_granted?: InputMaybe<Order_By>;
  owner?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  spender?: InputMaybe<Order_By>;
  timestamp_range?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** select columns of table "token_allowance_history" */
export enum Token_Allowance_History_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  AmountGranted = 'amount_granted',
  /** column name */
  Owner = 'owner',
  /** column name */
  PayerAccountId = 'payer_account_id',
  /** column name */
  Spender = 'spender',
  /** column name */
  TimestampRange = 'timestamp_range',
  /** column name */
  TokenId = 'token_id'
}

/** aggregate stddev on columns */
export type Token_Allowance_History_Stddev_Fields = {
  __typename?: 'token_allowance_history_stddev_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  amount_granted?: Maybe<Scalars['Float']['output']>;
  owner?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  spender?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Token_Allowance_History_Stddev_Pop_Fields = {
  __typename?: 'token_allowance_history_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  amount_granted?: Maybe<Scalars['Float']['output']>;
  owner?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  spender?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Token_Allowance_History_Stddev_Samp_Fields = {
  __typename?: 'token_allowance_history_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  amount_granted?: Maybe<Scalars['Float']['output']>;
  owner?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  spender?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "token_allowance_history" */
export type Token_Allowance_History_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Token_Allowance_History_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Token_Allowance_History_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars['bigint']['input']>;
  amount_granted?: InputMaybe<Scalars['bigint']['input']>;
  owner?: InputMaybe<Scalars['bigint']['input']>;
  payer_account_id?: InputMaybe<Scalars['bigint']['input']>;
  spender?: InputMaybe<Scalars['bigint']['input']>;
  timestamp_range?: InputMaybe<Scalars['int8range']['input']>;
  token_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Token_Allowance_History_Sum_Fields = {
  __typename?: 'token_allowance_history_sum_fields';
  amount?: Maybe<Scalars['bigint']['output']>;
  amount_granted?: Maybe<Scalars['bigint']['output']>;
  owner?: Maybe<Scalars['bigint']['output']>;
  payer_account_id?: Maybe<Scalars['bigint']['output']>;
  spender?: Maybe<Scalars['bigint']['output']>;
  token_id?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type Token_Allowance_History_Var_Pop_Fields = {
  __typename?: 'token_allowance_history_var_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  amount_granted?: Maybe<Scalars['Float']['output']>;
  owner?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  spender?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Token_Allowance_History_Var_Samp_Fields = {
  __typename?: 'token_allowance_history_var_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  amount_granted?: Maybe<Scalars['Float']['output']>;
  owner?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  spender?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Token_Allowance_History_Variance_Fields = {
  __typename?: 'token_allowance_history_variance_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  amount_granted?: Maybe<Scalars['Float']['output']>;
  owner?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  spender?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate max on columns */
export type Token_Allowance_Max_Fields = {
  __typename?: 'token_allowance_max_fields';
  amount?: Maybe<Scalars['bigint']['output']>;
  amount_granted?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "modified_timestamp_token_allowance" */
  modified_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "token_allowance_modified_timestamp_iso8601" */
  modified_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['bigint']['output']>;
  payer_account_id?: Maybe<Scalars['bigint']['output']>;
  spender?: Maybe<Scalars['bigint']['output']>;
  token_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "token_allowance" */
export type Token_Allowance_Max_Order_By = {
  amount?: InputMaybe<Order_By>;
  amount_granted?: InputMaybe<Order_By>;
  owner?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  spender?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Token_Allowance_Min_Fields = {
  __typename?: 'token_allowance_min_fields';
  amount?: Maybe<Scalars['bigint']['output']>;
  amount_granted?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "modified_timestamp_token_allowance" */
  modified_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "token_allowance_modified_timestamp_iso8601" */
  modified_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['bigint']['output']>;
  payer_account_id?: Maybe<Scalars['bigint']['output']>;
  spender?: Maybe<Scalars['bigint']['output']>;
  token_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "token_allowance" */
export type Token_Allowance_Min_Order_By = {
  amount?: InputMaybe<Order_By>;
  amount_granted?: InputMaybe<Order_By>;
  owner?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  spender?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "token_allowance". */
export type Token_Allowance_Order_By = {
  amount?: InputMaybe<Order_By>;
  amount_granted?: InputMaybe<Order_By>;
  modified_timestamp?: InputMaybe<Order_By>;
  modified_timestamp_iso8601?: InputMaybe<Order_By>;
  owner?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  spender?: InputMaybe<Order_By>;
  timestamp_range?: InputMaybe<Order_By>;
  token?: InputMaybe<Token_Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** select columns of table "token_allowance" */
export enum Token_Allowance_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  AmountGranted = 'amount_granted',
  /** column name */
  Owner = 'owner',
  /** column name */
  PayerAccountId = 'payer_account_id',
  /** column name */
  Spender = 'spender',
  /** column name */
  TimestampRange = 'timestamp_range',
  /** column name */
  TokenId = 'token_id'
}

/** aggregate stddev on columns */
export type Token_Allowance_Stddev_Fields = {
  __typename?: 'token_allowance_stddev_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  amount_granted?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "modified_timestamp_token_allowance" */
  modified_timestamp?: Maybe<Scalars['bigint']['output']>;
  owner?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  spender?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "token_allowance" */
export type Token_Allowance_Stddev_Order_By = {
  amount?: InputMaybe<Order_By>;
  amount_granted?: InputMaybe<Order_By>;
  owner?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  spender?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Token_Allowance_Stddev_Pop_Fields = {
  __typename?: 'token_allowance_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  amount_granted?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "modified_timestamp_token_allowance" */
  modified_timestamp?: Maybe<Scalars['bigint']['output']>;
  owner?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  spender?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "token_allowance" */
export type Token_Allowance_Stddev_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
  amount_granted?: InputMaybe<Order_By>;
  owner?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  spender?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Token_Allowance_Stddev_Samp_Fields = {
  __typename?: 'token_allowance_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  amount_granted?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "modified_timestamp_token_allowance" */
  modified_timestamp?: Maybe<Scalars['bigint']['output']>;
  owner?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  spender?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "token_allowance" */
export type Token_Allowance_Stddev_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
  amount_granted?: InputMaybe<Order_By>;
  owner?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  spender?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "token_allowance" */
export type Token_Allowance_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Token_Allowance_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Token_Allowance_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars['bigint']['input']>;
  amount_granted?: InputMaybe<Scalars['bigint']['input']>;
  owner?: InputMaybe<Scalars['bigint']['input']>;
  payer_account_id?: InputMaybe<Scalars['bigint']['input']>;
  spender?: InputMaybe<Scalars['bigint']['input']>;
  timestamp_range?: InputMaybe<Scalars['int8range']['input']>;
  token_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Token_Allowance_Sum_Fields = {
  __typename?: 'token_allowance_sum_fields';
  amount?: Maybe<Scalars['bigint']['output']>;
  amount_granted?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "modified_timestamp_token_allowance" */
  modified_timestamp?: Maybe<Scalars['bigint']['output']>;
  owner?: Maybe<Scalars['bigint']['output']>;
  payer_account_id?: Maybe<Scalars['bigint']['output']>;
  spender?: Maybe<Scalars['bigint']['output']>;
  token_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "token_allowance" */
export type Token_Allowance_Sum_Order_By = {
  amount?: InputMaybe<Order_By>;
  amount_granted?: InputMaybe<Order_By>;
  owner?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  spender?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Token_Allowance_Var_Pop_Fields = {
  __typename?: 'token_allowance_var_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  amount_granted?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "modified_timestamp_token_allowance" */
  modified_timestamp?: Maybe<Scalars['bigint']['output']>;
  owner?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  spender?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "token_allowance" */
export type Token_Allowance_Var_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
  amount_granted?: InputMaybe<Order_By>;
  owner?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  spender?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Token_Allowance_Var_Samp_Fields = {
  __typename?: 'token_allowance_var_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  amount_granted?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "modified_timestamp_token_allowance" */
  modified_timestamp?: Maybe<Scalars['bigint']['output']>;
  owner?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  spender?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "token_allowance" */
export type Token_Allowance_Var_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
  amount_granted?: InputMaybe<Order_By>;
  owner?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  spender?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Token_Allowance_Variance_Fields = {
  __typename?: 'token_allowance_variance_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  amount_granted?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "modified_timestamp_token_allowance" */
  modified_timestamp?: Maybe<Scalars['bigint']['output']>;
  owner?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  spender?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "token_allowance" */
export type Token_Allowance_Variance_Order_By = {
  amount?: InputMaybe<Order_By>;
  amount_granted?: InputMaybe<Order_By>;
  owner?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  spender?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate avg on columns */
export type Token_Avg_Fields = {
  __typename?: 'token_avg_fields';
  created_timestamp?: Maybe<Scalars['Float']['output']>;
  decimals?: Maybe<Scalars['Float']['output']>;
  freeze_status?: Maybe<Scalars['Float']['output']>;
  initial_supply?: Maybe<Scalars['Float']['output']>;
  kyc_status?: Maybe<Scalars['Float']['output']>;
  max_supply?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "modified_timestamp_token" */
  modified_timestamp?: Maybe<Scalars['bigint']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
  total_supply?: Maybe<Scalars['Float']['output']>;
  treasury_account_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "token". All fields are combined with a logical 'AND'. */
export type Token_Bool_Exp = {
  _and?: InputMaybe<Array<Token_Bool_Exp>>;
  _not?: InputMaybe<Token_Bool_Exp>;
  _or?: InputMaybe<Array<Token_Bool_Exp>>;
  admin_key?: InputMaybe<String_Comparison_Exp>;
  airdrop?: InputMaybe<Token_Airdrop_Bool_Exp>;
  airdrop_aggregate?: InputMaybe<Token_Airdrop_Aggregate_Bool_Exp>;
  assessed_custom_fee?: InputMaybe<Assessed_Custom_Fee_Bool_Exp>;
  assessed_custom_fee_aggregate?: InputMaybe<Assessed_Custom_Fee_Aggregate_Bool_Exp>;
  created_timestamp?: InputMaybe<Bigint_Comparison_Exp>;
  created_timestamp_iso8601?: InputMaybe<String_Comparison_Exp>;
  custom_fee?: InputMaybe<Custom_Fee_Bool_Exp>;
  custom_fee_aggregate?: InputMaybe<Custom_Fee_Aggregate_Bool_Exp>;
  decimals?: InputMaybe<Bigint_Comparison_Exp>;
  decoded_admin_key?: InputMaybe<String_Comparison_Exp>;
  decoded_fee_schedule_key?: InputMaybe<String_Comparison_Exp>;
  decoded_freeze_key?: InputMaybe<String_Comparison_Exp>;
  decoded_kyc_key?: InputMaybe<String_Comparison_Exp>;
  decoded_metadata?: InputMaybe<String_Comparison_Exp>;
  decoded_metadata_key?: InputMaybe<String_Comparison_Exp>;
  decoded_pause_key?: InputMaybe<String_Comparison_Exp>;
  decoded_supply_key?: InputMaybe<String_Comparison_Exp>;
  decoded_wipe_key?: InputMaybe<String_Comparison_Exp>;
  entity?: InputMaybe<Entity_Bool_Exp>;
  fee_schedule_key?: InputMaybe<Bytea_Comparison_Exp>;
  freeze_default?: InputMaybe<Boolean_Comparison_Exp>;
  freeze_key?: InputMaybe<Bytea_Comparison_Exp>;
  freeze_status?: InputMaybe<Smallint_Comparison_Exp>;
  initial_supply?: InputMaybe<Bigint_Comparison_Exp>;
  kyc_key?: InputMaybe<Bytea_Comparison_Exp>;
  kyc_status?: InputMaybe<Smallint_Comparison_Exp>;
  max_supply?: InputMaybe<Bigint_Comparison_Exp>;
  metadata?: InputMaybe<Bytea_Comparison_Exp>;
  metadata_key?: InputMaybe<Bytea_Comparison_Exp>;
  modified_timestamp?: InputMaybe<Bigint_Comparison_Exp>;
  modified_timestamp_iso8601?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  nft?: InputMaybe<Nft_Bool_Exp>;
  nft_aggregate?: InputMaybe<Nft_Aggregate_Bool_Exp>;
  pause_key?: InputMaybe<Bytea_Comparison_Exp>;
  pause_status?: InputMaybe<Token_Pause_Status_Comparison_Exp>;
  supply_key?: InputMaybe<Bytea_Comparison_Exp>;
  supply_type?: InputMaybe<Token_Supply_Type_Comparison_Exp>;
  symbol?: InputMaybe<String_Comparison_Exp>;
  timestamp_range?: InputMaybe<Int8range_Comparison_Exp>;
  token_account?: InputMaybe<Token_Account_Bool_Exp>;
  token_account_aggregate?: InputMaybe<Token_Account_Aggregate_Bool_Exp>;
  token_allowance?: InputMaybe<Token_Allowance_Bool_Exp>;
  token_allowance_aggregate?: InputMaybe<Token_Allowance_Aggregate_Bool_Exp>;
  token_id?: InputMaybe<Bigint_Comparison_Exp>;
  total_supply?: InputMaybe<Bigint_Comparison_Exp>;
  treasury_account_id?: InputMaybe<Bigint_Comparison_Exp>;
  type?: InputMaybe<Token_Type_Comparison_Exp>;
  wipe_key?: InputMaybe<Bytea_Comparison_Exp>;
};

/** columns and relationships of "token_history" */
export type Token_History = {
  __typename?: 'token_history';
  created_timestamp: Scalars['bigint']['output'];
  decimals: Scalars['bigint']['output'];
  /** A computed field, executes function "token_history_decoded_fee_schedule_key" */
  decoded_fee_schedule_key?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "token_history_decoded_freeze_key" */
  decoded_freeze_key?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "token_history_decoded_kyc_key" */
  decoded_kyc_key?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "token_history_decoded_metadata" */
  decoded_metadata?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "token_history_decoded_metadata_key" */
  decoded_metadata_key?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "token_history_decoded_pause_key" */
  decoded_pause_key?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "token_history_decoded_supply_key" */
  decoded_supply_key?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "token_history_decoded_wipe_key" */
  decoded_wipe_key?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "end_timestamp_token_history" */
  end_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "token_history_end_timestamp_iso8601" */
  end_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  fee_schedule_key?: Maybe<Scalars['bytea']['output']>;
  freeze_default: Scalars['Boolean']['output'];
  freeze_key?: Maybe<Scalars['bytea']['output']>;
  freeze_status: Scalars['smallint']['output'];
  initial_supply: Scalars['bigint']['output'];
  kyc_key?: Maybe<Scalars['bytea']['output']>;
  kyc_status: Scalars['smallint']['output'];
  max_supply: Scalars['bigint']['output'];
  metadata?: Maybe<Scalars['bytea']['output']>;
  metadata_key?: Maybe<Scalars['bytea']['output']>;
  name: Scalars['String']['output'];
  pause_key?: Maybe<Scalars['bytea']['output']>;
  pause_status: Scalars['token_pause_status']['output'];
  /** A computed field, executes function "start_timestamp_token_history" */
  start_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "token_history_start_timestamp_iso8601" */
  start_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  supply_key?: Maybe<Scalars['bytea']['output']>;
  supply_type: Scalars['token_supply_type']['output'];
  symbol: Scalars['String']['output'];
  timestamp_range: Scalars['int8range']['output'];
  token_id: Scalars['bigint']['output'];
  total_supply: Scalars['bigint']['output'];
  treasury_account_id: Scalars['bigint']['output'];
  type: Scalars['token_type']['output'];
  wipe_key?: Maybe<Scalars['bytea']['output']>;
};

/** aggregated selection of "token_history" */
export type Token_History_Aggregate = {
  __typename?: 'token_history_aggregate';
  aggregate?: Maybe<Token_History_Aggregate_Fields>;
  nodes: Array<Token_History>;
};

/** aggregate fields of "token_history" */
export type Token_History_Aggregate_Fields = {
  __typename?: 'token_history_aggregate_fields';
  avg?: Maybe<Token_History_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Token_History_Max_Fields>;
  min?: Maybe<Token_History_Min_Fields>;
  stddev?: Maybe<Token_History_Stddev_Fields>;
  stddev_pop?: Maybe<Token_History_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Token_History_Stddev_Samp_Fields>;
  sum?: Maybe<Token_History_Sum_Fields>;
  var_pop?: Maybe<Token_History_Var_Pop_Fields>;
  var_samp?: Maybe<Token_History_Var_Samp_Fields>;
  variance?: Maybe<Token_History_Variance_Fields>;
};


/** aggregate fields of "token_history" */
export type Token_History_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Token_History_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Token_History_Avg_Fields = {
  __typename?: 'token_history_avg_fields';
  created_timestamp?: Maybe<Scalars['Float']['output']>;
  decimals?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "end_timestamp_token_history" */
  end_timestamp?: Maybe<Scalars['bigint']['output']>;
  freeze_status?: Maybe<Scalars['Float']['output']>;
  initial_supply?: Maybe<Scalars['Float']['output']>;
  kyc_status?: Maybe<Scalars['Float']['output']>;
  max_supply?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "start_timestamp_token_history" */
  start_timestamp?: Maybe<Scalars['bigint']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
  total_supply?: Maybe<Scalars['Float']['output']>;
  treasury_account_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "token_history". All fields are combined with a logical 'AND'. */
export type Token_History_Bool_Exp = {
  _and?: InputMaybe<Array<Token_History_Bool_Exp>>;
  _not?: InputMaybe<Token_History_Bool_Exp>;
  _or?: InputMaybe<Array<Token_History_Bool_Exp>>;
  created_timestamp?: InputMaybe<Bigint_Comparison_Exp>;
  decimals?: InputMaybe<Bigint_Comparison_Exp>;
  decoded_fee_schedule_key?: InputMaybe<String_Comparison_Exp>;
  decoded_freeze_key?: InputMaybe<String_Comparison_Exp>;
  decoded_kyc_key?: InputMaybe<String_Comparison_Exp>;
  decoded_metadata?: InputMaybe<String_Comparison_Exp>;
  decoded_metadata_key?: InputMaybe<String_Comparison_Exp>;
  decoded_pause_key?: InputMaybe<String_Comparison_Exp>;
  decoded_supply_key?: InputMaybe<String_Comparison_Exp>;
  decoded_wipe_key?: InputMaybe<String_Comparison_Exp>;
  end_timestamp?: InputMaybe<Bigint_Comparison_Exp>;
  end_timestamp_iso8601?: InputMaybe<String_Comparison_Exp>;
  fee_schedule_key?: InputMaybe<Bytea_Comparison_Exp>;
  freeze_default?: InputMaybe<Boolean_Comparison_Exp>;
  freeze_key?: InputMaybe<Bytea_Comparison_Exp>;
  freeze_status?: InputMaybe<Smallint_Comparison_Exp>;
  initial_supply?: InputMaybe<Bigint_Comparison_Exp>;
  kyc_key?: InputMaybe<Bytea_Comparison_Exp>;
  kyc_status?: InputMaybe<Smallint_Comparison_Exp>;
  max_supply?: InputMaybe<Bigint_Comparison_Exp>;
  metadata?: InputMaybe<Bytea_Comparison_Exp>;
  metadata_key?: InputMaybe<Bytea_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  pause_key?: InputMaybe<Bytea_Comparison_Exp>;
  pause_status?: InputMaybe<Token_Pause_Status_Comparison_Exp>;
  start_timestamp?: InputMaybe<Bigint_Comparison_Exp>;
  start_timestamp_iso8601?: InputMaybe<String_Comparison_Exp>;
  supply_key?: InputMaybe<Bytea_Comparison_Exp>;
  supply_type?: InputMaybe<Token_Supply_Type_Comparison_Exp>;
  symbol?: InputMaybe<String_Comparison_Exp>;
  timestamp_range?: InputMaybe<Int8range_Comparison_Exp>;
  token_id?: InputMaybe<Bigint_Comparison_Exp>;
  total_supply?: InputMaybe<Bigint_Comparison_Exp>;
  treasury_account_id?: InputMaybe<Bigint_Comparison_Exp>;
  type?: InputMaybe<Token_Type_Comparison_Exp>;
  wipe_key?: InputMaybe<Bytea_Comparison_Exp>;
};

/** aggregate max on columns */
export type Token_History_Max_Fields = {
  __typename?: 'token_history_max_fields';
  created_timestamp?: Maybe<Scalars['bigint']['output']>;
  decimals?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "token_history_decoded_fee_schedule_key" */
  decoded_fee_schedule_key?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "token_history_decoded_freeze_key" */
  decoded_freeze_key?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "token_history_decoded_kyc_key" */
  decoded_kyc_key?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "token_history_decoded_metadata" */
  decoded_metadata?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "token_history_decoded_metadata_key" */
  decoded_metadata_key?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "token_history_decoded_pause_key" */
  decoded_pause_key?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "token_history_decoded_supply_key" */
  decoded_supply_key?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "token_history_decoded_wipe_key" */
  decoded_wipe_key?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "end_timestamp_token_history" */
  end_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "token_history_end_timestamp_iso8601" */
  end_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  freeze_status?: Maybe<Scalars['smallint']['output']>;
  initial_supply?: Maybe<Scalars['bigint']['output']>;
  kyc_status?: Maybe<Scalars['smallint']['output']>;
  max_supply?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  pause_status?: Maybe<Scalars['token_pause_status']['output']>;
  /** A computed field, executes function "start_timestamp_token_history" */
  start_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "token_history_start_timestamp_iso8601" */
  start_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  supply_type?: Maybe<Scalars['token_supply_type']['output']>;
  symbol?: Maybe<Scalars['String']['output']>;
  token_id?: Maybe<Scalars['bigint']['output']>;
  total_supply?: Maybe<Scalars['bigint']['output']>;
  treasury_account_id?: Maybe<Scalars['bigint']['output']>;
  type?: Maybe<Scalars['token_type']['output']>;
};

/** aggregate min on columns */
export type Token_History_Min_Fields = {
  __typename?: 'token_history_min_fields';
  created_timestamp?: Maybe<Scalars['bigint']['output']>;
  decimals?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "token_history_decoded_fee_schedule_key" */
  decoded_fee_schedule_key?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "token_history_decoded_freeze_key" */
  decoded_freeze_key?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "token_history_decoded_kyc_key" */
  decoded_kyc_key?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "token_history_decoded_metadata" */
  decoded_metadata?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "token_history_decoded_metadata_key" */
  decoded_metadata_key?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "token_history_decoded_pause_key" */
  decoded_pause_key?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "token_history_decoded_supply_key" */
  decoded_supply_key?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "token_history_decoded_wipe_key" */
  decoded_wipe_key?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "end_timestamp_token_history" */
  end_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "token_history_end_timestamp_iso8601" */
  end_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  freeze_status?: Maybe<Scalars['smallint']['output']>;
  initial_supply?: Maybe<Scalars['bigint']['output']>;
  kyc_status?: Maybe<Scalars['smallint']['output']>;
  max_supply?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  pause_status?: Maybe<Scalars['token_pause_status']['output']>;
  /** A computed field, executes function "start_timestamp_token_history" */
  start_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "token_history_start_timestamp_iso8601" */
  start_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  supply_type?: Maybe<Scalars['token_supply_type']['output']>;
  symbol?: Maybe<Scalars['String']['output']>;
  token_id?: Maybe<Scalars['bigint']['output']>;
  total_supply?: Maybe<Scalars['bigint']['output']>;
  treasury_account_id?: Maybe<Scalars['bigint']['output']>;
  type?: Maybe<Scalars['token_type']['output']>;
};

/** Ordering options when selecting data from "token_history". */
export type Token_History_Order_By = {
  created_timestamp?: InputMaybe<Order_By>;
  decimals?: InputMaybe<Order_By>;
  decoded_fee_schedule_key?: InputMaybe<Order_By>;
  decoded_freeze_key?: InputMaybe<Order_By>;
  decoded_kyc_key?: InputMaybe<Order_By>;
  decoded_metadata?: InputMaybe<Order_By>;
  decoded_metadata_key?: InputMaybe<Order_By>;
  decoded_pause_key?: InputMaybe<Order_By>;
  decoded_supply_key?: InputMaybe<Order_By>;
  decoded_wipe_key?: InputMaybe<Order_By>;
  end_timestamp?: InputMaybe<Order_By>;
  end_timestamp_iso8601?: InputMaybe<Order_By>;
  fee_schedule_key?: InputMaybe<Order_By>;
  freeze_default?: InputMaybe<Order_By>;
  freeze_key?: InputMaybe<Order_By>;
  freeze_status?: InputMaybe<Order_By>;
  initial_supply?: InputMaybe<Order_By>;
  kyc_key?: InputMaybe<Order_By>;
  kyc_status?: InputMaybe<Order_By>;
  max_supply?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  metadata_key?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  pause_key?: InputMaybe<Order_By>;
  pause_status?: InputMaybe<Order_By>;
  start_timestamp?: InputMaybe<Order_By>;
  start_timestamp_iso8601?: InputMaybe<Order_By>;
  supply_key?: InputMaybe<Order_By>;
  supply_type?: InputMaybe<Order_By>;
  symbol?: InputMaybe<Order_By>;
  timestamp_range?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
  total_supply?: InputMaybe<Order_By>;
  treasury_account_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  wipe_key?: InputMaybe<Order_By>;
};

/** select columns of table "token_history" */
export enum Token_History_Select_Column {
  /** column name */
  CreatedTimestamp = 'created_timestamp',
  /** column name */
  Decimals = 'decimals',
  /** column name */
  FeeScheduleKey = 'fee_schedule_key',
  /** column name */
  FreezeDefault = 'freeze_default',
  /** column name */
  FreezeKey = 'freeze_key',
  /** column name */
  FreezeStatus = 'freeze_status',
  /** column name */
  InitialSupply = 'initial_supply',
  /** column name */
  KycKey = 'kyc_key',
  /** column name */
  KycStatus = 'kyc_status',
  /** column name */
  MaxSupply = 'max_supply',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  MetadataKey = 'metadata_key',
  /** column name */
  Name = 'name',
  /** column name */
  PauseKey = 'pause_key',
  /** column name */
  PauseStatus = 'pause_status',
  /** column name */
  SupplyKey = 'supply_key',
  /** column name */
  SupplyType = 'supply_type',
  /** column name */
  Symbol = 'symbol',
  /** column name */
  TimestampRange = 'timestamp_range',
  /** column name */
  TokenId = 'token_id',
  /** column name */
  TotalSupply = 'total_supply',
  /** column name */
  TreasuryAccountId = 'treasury_account_id',
  /** column name */
  Type = 'type',
  /** column name */
  WipeKey = 'wipe_key'
}

/** aggregate stddev on columns */
export type Token_History_Stddev_Fields = {
  __typename?: 'token_history_stddev_fields';
  created_timestamp?: Maybe<Scalars['Float']['output']>;
  decimals?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "end_timestamp_token_history" */
  end_timestamp?: Maybe<Scalars['bigint']['output']>;
  freeze_status?: Maybe<Scalars['Float']['output']>;
  initial_supply?: Maybe<Scalars['Float']['output']>;
  kyc_status?: Maybe<Scalars['Float']['output']>;
  max_supply?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "start_timestamp_token_history" */
  start_timestamp?: Maybe<Scalars['bigint']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
  total_supply?: Maybe<Scalars['Float']['output']>;
  treasury_account_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Token_History_Stddev_Pop_Fields = {
  __typename?: 'token_history_stddev_pop_fields';
  created_timestamp?: Maybe<Scalars['Float']['output']>;
  decimals?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "end_timestamp_token_history" */
  end_timestamp?: Maybe<Scalars['bigint']['output']>;
  freeze_status?: Maybe<Scalars['Float']['output']>;
  initial_supply?: Maybe<Scalars['Float']['output']>;
  kyc_status?: Maybe<Scalars['Float']['output']>;
  max_supply?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "start_timestamp_token_history" */
  start_timestamp?: Maybe<Scalars['bigint']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
  total_supply?: Maybe<Scalars['Float']['output']>;
  treasury_account_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Token_History_Stddev_Samp_Fields = {
  __typename?: 'token_history_stddev_samp_fields';
  created_timestamp?: Maybe<Scalars['Float']['output']>;
  decimals?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "end_timestamp_token_history" */
  end_timestamp?: Maybe<Scalars['bigint']['output']>;
  freeze_status?: Maybe<Scalars['Float']['output']>;
  initial_supply?: Maybe<Scalars['Float']['output']>;
  kyc_status?: Maybe<Scalars['Float']['output']>;
  max_supply?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "start_timestamp_token_history" */
  start_timestamp?: Maybe<Scalars['bigint']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
  total_supply?: Maybe<Scalars['Float']['output']>;
  treasury_account_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "token_history" */
export type Token_History_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Token_History_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Token_History_Stream_Cursor_Value_Input = {
  created_timestamp?: InputMaybe<Scalars['bigint']['input']>;
  decimals?: InputMaybe<Scalars['bigint']['input']>;
  fee_schedule_key?: InputMaybe<Scalars['bytea']['input']>;
  freeze_default?: InputMaybe<Scalars['Boolean']['input']>;
  freeze_key?: InputMaybe<Scalars['bytea']['input']>;
  freeze_status?: InputMaybe<Scalars['smallint']['input']>;
  initial_supply?: InputMaybe<Scalars['bigint']['input']>;
  kyc_key?: InputMaybe<Scalars['bytea']['input']>;
  kyc_status?: InputMaybe<Scalars['smallint']['input']>;
  max_supply?: InputMaybe<Scalars['bigint']['input']>;
  metadata?: InputMaybe<Scalars['bytea']['input']>;
  metadata_key?: InputMaybe<Scalars['bytea']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  pause_key?: InputMaybe<Scalars['bytea']['input']>;
  pause_status?: InputMaybe<Scalars['token_pause_status']['input']>;
  supply_key?: InputMaybe<Scalars['bytea']['input']>;
  supply_type?: InputMaybe<Scalars['token_supply_type']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  timestamp_range?: InputMaybe<Scalars['int8range']['input']>;
  token_id?: InputMaybe<Scalars['bigint']['input']>;
  total_supply?: InputMaybe<Scalars['bigint']['input']>;
  treasury_account_id?: InputMaybe<Scalars['bigint']['input']>;
  type?: InputMaybe<Scalars['token_type']['input']>;
  wipe_key?: InputMaybe<Scalars['bytea']['input']>;
};

/** aggregate sum on columns */
export type Token_History_Sum_Fields = {
  __typename?: 'token_history_sum_fields';
  created_timestamp?: Maybe<Scalars['bigint']['output']>;
  decimals?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "end_timestamp_token_history" */
  end_timestamp?: Maybe<Scalars['bigint']['output']>;
  freeze_status?: Maybe<Scalars['smallint']['output']>;
  initial_supply?: Maybe<Scalars['bigint']['output']>;
  kyc_status?: Maybe<Scalars['smallint']['output']>;
  max_supply?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "start_timestamp_token_history" */
  start_timestamp?: Maybe<Scalars['bigint']['output']>;
  token_id?: Maybe<Scalars['bigint']['output']>;
  total_supply?: Maybe<Scalars['bigint']['output']>;
  treasury_account_id?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type Token_History_Var_Pop_Fields = {
  __typename?: 'token_history_var_pop_fields';
  created_timestamp?: Maybe<Scalars['Float']['output']>;
  decimals?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "end_timestamp_token_history" */
  end_timestamp?: Maybe<Scalars['bigint']['output']>;
  freeze_status?: Maybe<Scalars['Float']['output']>;
  initial_supply?: Maybe<Scalars['Float']['output']>;
  kyc_status?: Maybe<Scalars['Float']['output']>;
  max_supply?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "start_timestamp_token_history" */
  start_timestamp?: Maybe<Scalars['bigint']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
  total_supply?: Maybe<Scalars['Float']['output']>;
  treasury_account_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Token_History_Var_Samp_Fields = {
  __typename?: 'token_history_var_samp_fields';
  created_timestamp?: Maybe<Scalars['Float']['output']>;
  decimals?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "end_timestamp_token_history" */
  end_timestamp?: Maybe<Scalars['bigint']['output']>;
  freeze_status?: Maybe<Scalars['Float']['output']>;
  initial_supply?: Maybe<Scalars['Float']['output']>;
  kyc_status?: Maybe<Scalars['Float']['output']>;
  max_supply?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "start_timestamp_token_history" */
  start_timestamp?: Maybe<Scalars['bigint']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
  total_supply?: Maybe<Scalars['Float']['output']>;
  treasury_account_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Token_History_Variance_Fields = {
  __typename?: 'token_history_variance_fields';
  created_timestamp?: Maybe<Scalars['Float']['output']>;
  decimals?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "end_timestamp_token_history" */
  end_timestamp?: Maybe<Scalars['bigint']['output']>;
  freeze_status?: Maybe<Scalars['Float']['output']>;
  initial_supply?: Maybe<Scalars['Float']['output']>;
  kyc_status?: Maybe<Scalars['Float']['output']>;
  max_supply?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "start_timestamp_token_history" */
  start_timestamp?: Maybe<Scalars['bigint']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
  total_supply?: Maybe<Scalars['Float']['output']>;
  treasury_account_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate max on columns */
export type Token_Max_Fields = {
  __typename?: 'token_max_fields';
  /** A computed field, executes function "token_admin_key" */
  admin_key?: Maybe<Scalars['String']['output']>;
  created_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "token_created_timestamp_iso8601" */
  created_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  decimals?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "token_decoded_admin_key" */
  decoded_admin_key?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "token_decoded_fee_schedule_key" */
  decoded_fee_schedule_key?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "token_decoded_freeze_key" */
  decoded_freeze_key?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "token_decoded_kyc_key" */
  decoded_kyc_key?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "token_decoded_metadata" */
  decoded_metadata?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "token_decoded_metadata_key" */
  decoded_metadata_key?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "token_decoded_pause_key" */
  decoded_pause_key?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "token_decoded_supply_key" */
  decoded_supply_key?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "token_decoded_wipe_key" */
  decoded_wipe_key?: Maybe<Scalars['String']['output']>;
  freeze_status?: Maybe<Scalars['smallint']['output']>;
  initial_supply?: Maybe<Scalars['bigint']['output']>;
  kyc_status?: Maybe<Scalars['smallint']['output']>;
  max_supply?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "modified_timestamp_token" */
  modified_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "token_modified_timestamp_iso8601" */
  modified_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  pause_status?: Maybe<Scalars['token_pause_status']['output']>;
  supply_type?: Maybe<Scalars['token_supply_type']['output']>;
  symbol?: Maybe<Scalars['String']['output']>;
  token_id?: Maybe<Scalars['bigint']['output']>;
  total_supply?: Maybe<Scalars['bigint']['output']>;
  treasury_account_id?: Maybe<Scalars['bigint']['output']>;
  type?: Maybe<Scalars['token_type']['output']>;
};

/** aggregate min on columns */
export type Token_Min_Fields = {
  __typename?: 'token_min_fields';
  /** A computed field, executes function "token_admin_key" */
  admin_key?: Maybe<Scalars['String']['output']>;
  created_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "token_created_timestamp_iso8601" */
  created_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  decimals?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "token_decoded_admin_key" */
  decoded_admin_key?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "token_decoded_fee_schedule_key" */
  decoded_fee_schedule_key?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "token_decoded_freeze_key" */
  decoded_freeze_key?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "token_decoded_kyc_key" */
  decoded_kyc_key?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "token_decoded_metadata" */
  decoded_metadata?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "token_decoded_metadata_key" */
  decoded_metadata_key?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "token_decoded_pause_key" */
  decoded_pause_key?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "token_decoded_supply_key" */
  decoded_supply_key?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "token_decoded_wipe_key" */
  decoded_wipe_key?: Maybe<Scalars['String']['output']>;
  freeze_status?: Maybe<Scalars['smallint']['output']>;
  initial_supply?: Maybe<Scalars['bigint']['output']>;
  kyc_status?: Maybe<Scalars['smallint']['output']>;
  max_supply?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "modified_timestamp_token" */
  modified_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "token_modified_timestamp_iso8601" */
  modified_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  pause_status?: Maybe<Scalars['token_pause_status']['output']>;
  supply_type?: Maybe<Scalars['token_supply_type']['output']>;
  symbol?: Maybe<Scalars['String']['output']>;
  token_id?: Maybe<Scalars['bigint']['output']>;
  total_supply?: Maybe<Scalars['bigint']['output']>;
  treasury_account_id?: Maybe<Scalars['bigint']['output']>;
  type?: Maybe<Scalars['token_type']['output']>;
};

/** Ordering options when selecting data from "token". */
export type Token_Order_By = {
  admin_key?: InputMaybe<Order_By>;
  airdrop_aggregate?: InputMaybe<Token_Airdrop_Aggregate_Order_By>;
  assessed_custom_fee_aggregate?: InputMaybe<Assessed_Custom_Fee_Aggregate_Order_By>;
  created_timestamp?: InputMaybe<Order_By>;
  created_timestamp_iso8601?: InputMaybe<Order_By>;
  custom_fee_aggregate?: InputMaybe<Custom_Fee_Aggregate_Order_By>;
  decimals?: InputMaybe<Order_By>;
  decoded_admin_key?: InputMaybe<Order_By>;
  decoded_fee_schedule_key?: InputMaybe<Order_By>;
  decoded_freeze_key?: InputMaybe<Order_By>;
  decoded_kyc_key?: InputMaybe<Order_By>;
  decoded_metadata?: InputMaybe<Order_By>;
  decoded_metadata_key?: InputMaybe<Order_By>;
  decoded_pause_key?: InputMaybe<Order_By>;
  decoded_supply_key?: InputMaybe<Order_By>;
  decoded_wipe_key?: InputMaybe<Order_By>;
  entity?: InputMaybe<Entity_Order_By>;
  fee_schedule_key?: InputMaybe<Order_By>;
  freeze_default?: InputMaybe<Order_By>;
  freeze_key?: InputMaybe<Order_By>;
  freeze_status?: InputMaybe<Order_By>;
  initial_supply?: InputMaybe<Order_By>;
  kyc_key?: InputMaybe<Order_By>;
  kyc_status?: InputMaybe<Order_By>;
  max_supply?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  metadata_key?: InputMaybe<Order_By>;
  modified_timestamp?: InputMaybe<Order_By>;
  modified_timestamp_iso8601?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  nft_aggregate?: InputMaybe<Nft_Aggregate_Order_By>;
  pause_key?: InputMaybe<Order_By>;
  pause_status?: InputMaybe<Order_By>;
  supply_key?: InputMaybe<Order_By>;
  supply_type?: InputMaybe<Order_By>;
  symbol?: InputMaybe<Order_By>;
  timestamp_range?: InputMaybe<Order_By>;
  token_account_aggregate?: InputMaybe<Token_Account_Aggregate_Order_By>;
  token_allowance_aggregate?: InputMaybe<Token_Allowance_Aggregate_Order_By>;
  token_id?: InputMaybe<Order_By>;
  total_supply?: InputMaybe<Order_By>;
  treasury_account_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  wipe_key?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "token_pause_status". All fields are combined with logical 'AND'. */
export type Token_Pause_Status_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['token_pause_status']['input']>;
  _gt?: InputMaybe<Scalars['token_pause_status']['input']>;
  _gte?: InputMaybe<Scalars['token_pause_status']['input']>;
  _in?: InputMaybe<Array<Scalars['token_pause_status']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['token_pause_status']['input']>;
  _lte?: InputMaybe<Scalars['token_pause_status']['input']>;
  _neq?: InputMaybe<Scalars['token_pause_status']['input']>;
  _nin?: InputMaybe<Array<Scalars['token_pause_status']['input']>>;
};

/** select columns of table "token" */
export enum Token_Select_Column {
  /** column name */
  CreatedTimestamp = 'created_timestamp',
  /** column name */
  Decimals = 'decimals',
  /** column name */
  FeeScheduleKey = 'fee_schedule_key',
  /** column name */
  FreezeDefault = 'freeze_default',
  /** column name */
  FreezeKey = 'freeze_key',
  /** column name */
  FreezeStatus = 'freeze_status',
  /** column name */
  InitialSupply = 'initial_supply',
  /** column name */
  KycKey = 'kyc_key',
  /** column name */
  KycStatus = 'kyc_status',
  /** column name */
  MaxSupply = 'max_supply',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  MetadataKey = 'metadata_key',
  /** column name */
  Name = 'name',
  /** column name */
  PauseKey = 'pause_key',
  /** column name */
  PauseStatus = 'pause_status',
  /** column name */
  SupplyKey = 'supply_key',
  /** column name */
  SupplyType = 'supply_type',
  /** column name */
  Symbol = 'symbol',
  /** column name */
  TimestampRange = 'timestamp_range',
  /** column name */
  TokenId = 'token_id',
  /** column name */
  TotalSupply = 'total_supply',
  /** column name */
  TreasuryAccountId = 'treasury_account_id',
  /** column name */
  Type = 'type',
  /** column name */
  WipeKey = 'wipe_key'
}

/** aggregate stddev on columns */
export type Token_Stddev_Fields = {
  __typename?: 'token_stddev_fields';
  created_timestamp?: Maybe<Scalars['Float']['output']>;
  decimals?: Maybe<Scalars['Float']['output']>;
  freeze_status?: Maybe<Scalars['Float']['output']>;
  initial_supply?: Maybe<Scalars['Float']['output']>;
  kyc_status?: Maybe<Scalars['Float']['output']>;
  max_supply?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "modified_timestamp_token" */
  modified_timestamp?: Maybe<Scalars['bigint']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
  total_supply?: Maybe<Scalars['Float']['output']>;
  treasury_account_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Token_Stddev_Pop_Fields = {
  __typename?: 'token_stddev_pop_fields';
  created_timestamp?: Maybe<Scalars['Float']['output']>;
  decimals?: Maybe<Scalars['Float']['output']>;
  freeze_status?: Maybe<Scalars['Float']['output']>;
  initial_supply?: Maybe<Scalars['Float']['output']>;
  kyc_status?: Maybe<Scalars['Float']['output']>;
  max_supply?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "modified_timestamp_token" */
  modified_timestamp?: Maybe<Scalars['bigint']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
  total_supply?: Maybe<Scalars['Float']['output']>;
  treasury_account_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Token_Stddev_Samp_Fields = {
  __typename?: 'token_stddev_samp_fields';
  created_timestamp?: Maybe<Scalars['Float']['output']>;
  decimals?: Maybe<Scalars['Float']['output']>;
  freeze_status?: Maybe<Scalars['Float']['output']>;
  initial_supply?: Maybe<Scalars['Float']['output']>;
  kyc_status?: Maybe<Scalars['Float']['output']>;
  max_supply?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "modified_timestamp_token" */
  modified_timestamp?: Maybe<Scalars['bigint']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
  total_supply?: Maybe<Scalars['Float']['output']>;
  treasury_account_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "token" */
export type Token_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Token_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Token_Stream_Cursor_Value_Input = {
  created_timestamp?: InputMaybe<Scalars['bigint']['input']>;
  decimals?: InputMaybe<Scalars['bigint']['input']>;
  fee_schedule_key?: InputMaybe<Scalars['bytea']['input']>;
  freeze_default?: InputMaybe<Scalars['Boolean']['input']>;
  freeze_key?: InputMaybe<Scalars['bytea']['input']>;
  freeze_status?: InputMaybe<Scalars['smallint']['input']>;
  initial_supply?: InputMaybe<Scalars['bigint']['input']>;
  kyc_key?: InputMaybe<Scalars['bytea']['input']>;
  kyc_status?: InputMaybe<Scalars['smallint']['input']>;
  max_supply?: InputMaybe<Scalars['bigint']['input']>;
  metadata?: InputMaybe<Scalars['bytea']['input']>;
  metadata_key?: InputMaybe<Scalars['bytea']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  pause_key?: InputMaybe<Scalars['bytea']['input']>;
  pause_status?: InputMaybe<Scalars['token_pause_status']['input']>;
  supply_key?: InputMaybe<Scalars['bytea']['input']>;
  supply_type?: InputMaybe<Scalars['token_supply_type']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  timestamp_range?: InputMaybe<Scalars['int8range']['input']>;
  token_id?: InputMaybe<Scalars['bigint']['input']>;
  total_supply?: InputMaybe<Scalars['bigint']['input']>;
  treasury_account_id?: InputMaybe<Scalars['bigint']['input']>;
  type?: InputMaybe<Scalars['token_type']['input']>;
  wipe_key?: InputMaybe<Scalars['bytea']['input']>;
};

/** aggregate sum on columns */
export type Token_Sum_Fields = {
  __typename?: 'token_sum_fields';
  created_timestamp?: Maybe<Scalars['bigint']['output']>;
  decimals?: Maybe<Scalars['bigint']['output']>;
  freeze_status?: Maybe<Scalars['smallint']['output']>;
  initial_supply?: Maybe<Scalars['bigint']['output']>;
  kyc_status?: Maybe<Scalars['smallint']['output']>;
  max_supply?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "modified_timestamp_token" */
  modified_timestamp?: Maybe<Scalars['bigint']['output']>;
  token_id?: Maybe<Scalars['bigint']['output']>;
  total_supply?: Maybe<Scalars['bigint']['output']>;
  treasury_account_id?: Maybe<Scalars['bigint']['output']>;
};

/** Boolean expression to compare columns of type "token_supply_type". All fields are combined with logical 'AND'. */
export type Token_Supply_Type_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['token_supply_type']['input']>;
  _gt?: InputMaybe<Scalars['token_supply_type']['input']>;
  _gte?: InputMaybe<Scalars['token_supply_type']['input']>;
  _in?: InputMaybe<Array<Scalars['token_supply_type']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['token_supply_type']['input']>;
  _lte?: InputMaybe<Scalars['token_supply_type']['input']>;
  _neq?: InputMaybe<Scalars['token_supply_type']['input']>;
  _nin?: InputMaybe<Array<Scalars['token_supply_type']['input']>>;
};

/** columns and relationships of "token_transfer" */
export type Token_Transfer = {
  __typename?: 'token_transfer';
  account_id: Scalars['bigint']['output'];
  amount: Scalars['bigint']['output'];
  consensus_timestamp: Scalars['bigint']['output'];
  /** A computed field, executes function "token_transfer_consensus_timestamp_iso8601" */
  consensus_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  is_approval?: Maybe<Scalars['Boolean']['output']>;
  payer_account_id: Scalars['bigint']['output'];
  /** An object relationship */
  token?: Maybe<Token>;
  token_id: Scalars['bigint']['output'];
  /** An object relationship */
  transaction?: Maybe<Transaction>;
};

/** aggregated selection of "token_transfer" */
export type Token_Transfer_Aggregate = {
  __typename?: 'token_transfer_aggregate';
  aggregate?: Maybe<Token_Transfer_Aggregate_Fields>;
  nodes: Array<Token_Transfer>;
};

export type Token_Transfer_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Token_Transfer_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Token_Transfer_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Token_Transfer_Aggregate_Bool_Exp_Count>;
};

export type Token_Transfer_Aggregate_Bool_Exp_Bool_And = {
  arguments: Token_Transfer_Select_Column_Token_Transfer_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Token_Transfer_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Token_Transfer_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Token_Transfer_Select_Column_Token_Transfer_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Token_Transfer_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Token_Transfer_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Token_Transfer_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Token_Transfer_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "token_transfer" */
export type Token_Transfer_Aggregate_Fields = {
  __typename?: 'token_transfer_aggregate_fields';
  avg?: Maybe<Token_Transfer_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Token_Transfer_Max_Fields>;
  min?: Maybe<Token_Transfer_Min_Fields>;
  stddev?: Maybe<Token_Transfer_Stddev_Fields>;
  stddev_pop?: Maybe<Token_Transfer_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Token_Transfer_Stddev_Samp_Fields>;
  sum?: Maybe<Token_Transfer_Sum_Fields>;
  var_pop?: Maybe<Token_Transfer_Var_Pop_Fields>;
  var_samp?: Maybe<Token_Transfer_Var_Samp_Fields>;
  variance?: Maybe<Token_Transfer_Variance_Fields>;
};


/** aggregate fields of "token_transfer" */
export type Token_Transfer_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Token_Transfer_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "token_transfer" */
export type Token_Transfer_Aggregate_Order_By = {
  avg?: InputMaybe<Token_Transfer_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Token_Transfer_Max_Order_By>;
  min?: InputMaybe<Token_Transfer_Min_Order_By>;
  stddev?: InputMaybe<Token_Transfer_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Token_Transfer_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Token_Transfer_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Token_Transfer_Sum_Order_By>;
  var_pop?: InputMaybe<Token_Transfer_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Token_Transfer_Var_Samp_Order_By>;
  variance?: InputMaybe<Token_Transfer_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Token_Transfer_Avg_Fields = {
  __typename?: 'token_transfer_avg_fields';
  account_id?: Maybe<Scalars['Float']['output']>;
  amount?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "token_transfer" */
export type Token_Transfer_Avg_Order_By = {
  account_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "token_transfer". All fields are combined with a logical 'AND'. */
export type Token_Transfer_Bool_Exp = {
  _and?: InputMaybe<Array<Token_Transfer_Bool_Exp>>;
  _not?: InputMaybe<Token_Transfer_Bool_Exp>;
  _or?: InputMaybe<Array<Token_Transfer_Bool_Exp>>;
  account_id?: InputMaybe<Bigint_Comparison_Exp>;
  amount?: InputMaybe<Bigint_Comparison_Exp>;
  consensus_timestamp?: InputMaybe<Bigint_Comparison_Exp>;
  consensus_timestamp_iso8601?: InputMaybe<String_Comparison_Exp>;
  is_approval?: InputMaybe<Boolean_Comparison_Exp>;
  payer_account_id?: InputMaybe<Bigint_Comparison_Exp>;
  token?: InputMaybe<Token_Bool_Exp>;
  token_id?: InputMaybe<Bigint_Comparison_Exp>;
  transaction?: InputMaybe<Transaction_Bool_Exp>;
};

/** aggregate max on columns */
export type Token_Transfer_Max_Fields = {
  __typename?: 'token_transfer_max_fields';
  account_id?: Maybe<Scalars['bigint']['output']>;
  amount?: Maybe<Scalars['bigint']['output']>;
  consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "token_transfer_consensus_timestamp_iso8601" */
  consensus_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  payer_account_id?: Maybe<Scalars['bigint']['output']>;
  token_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "token_transfer" */
export type Token_Transfer_Max_Order_By = {
  account_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Token_Transfer_Min_Fields = {
  __typename?: 'token_transfer_min_fields';
  account_id?: Maybe<Scalars['bigint']['output']>;
  amount?: Maybe<Scalars['bigint']['output']>;
  consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "token_transfer_consensus_timestamp_iso8601" */
  consensus_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  payer_account_id?: Maybe<Scalars['bigint']['output']>;
  token_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "token_transfer" */
export type Token_Transfer_Min_Order_By = {
  account_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "token_transfer". */
export type Token_Transfer_Order_By = {
  account_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  consensus_timestamp_iso8601?: InputMaybe<Order_By>;
  is_approval?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  token?: InputMaybe<Token_Order_By>;
  token_id?: InputMaybe<Order_By>;
  transaction?: InputMaybe<Transaction_Order_By>;
};

/** select columns of table "token_transfer" */
export enum Token_Transfer_Select_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  Amount = 'amount',
  /** column name */
  ConsensusTimestamp = 'consensus_timestamp',
  /** column name */
  IsApproval = 'is_approval',
  /** column name */
  PayerAccountId = 'payer_account_id',
  /** column name */
  TokenId = 'token_id'
}

/** select "token_transfer_aggregate_bool_exp_bool_and_arguments_columns" columns of table "token_transfer" */
export enum Token_Transfer_Select_Column_Token_Transfer_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsApproval = 'is_approval'
}

/** select "token_transfer_aggregate_bool_exp_bool_or_arguments_columns" columns of table "token_transfer" */
export enum Token_Transfer_Select_Column_Token_Transfer_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsApproval = 'is_approval'
}

/** aggregate stddev on columns */
export type Token_Transfer_Stddev_Fields = {
  __typename?: 'token_transfer_stddev_fields';
  account_id?: Maybe<Scalars['Float']['output']>;
  amount?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "token_transfer" */
export type Token_Transfer_Stddev_Order_By = {
  account_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Token_Transfer_Stddev_Pop_Fields = {
  __typename?: 'token_transfer_stddev_pop_fields';
  account_id?: Maybe<Scalars['Float']['output']>;
  amount?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "token_transfer" */
export type Token_Transfer_Stddev_Pop_Order_By = {
  account_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Token_Transfer_Stddev_Samp_Fields = {
  __typename?: 'token_transfer_stddev_samp_fields';
  account_id?: Maybe<Scalars['Float']['output']>;
  amount?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "token_transfer" */
export type Token_Transfer_Stddev_Samp_Order_By = {
  account_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "token_transfer" */
export type Token_Transfer_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Token_Transfer_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Token_Transfer_Stream_Cursor_Value_Input = {
  account_id?: InputMaybe<Scalars['bigint']['input']>;
  amount?: InputMaybe<Scalars['bigint']['input']>;
  consensus_timestamp?: InputMaybe<Scalars['bigint']['input']>;
  is_approval?: InputMaybe<Scalars['Boolean']['input']>;
  payer_account_id?: InputMaybe<Scalars['bigint']['input']>;
  token_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Token_Transfer_Sum_Fields = {
  __typename?: 'token_transfer_sum_fields';
  account_id?: Maybe<Scalars['bigint']['output']>;
  amount?: Maybe<Scalars['bigint']['output']>;
  consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  payer_account_id?: Maybe<Scalars['bigint']['output']>;
  token_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "token_transfer" */
export type Token_Transfer_Sum_Order_By = {
  account_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Token_Transfer_Var_Pop_Fields = {
  __typename?: 'token_transfer_var_pop_fields';
  account_id?: Maybe<Scalars['Float']['output']>;
  amount?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "token_transfer" */
export type Token_Transfer_Var_Pop_Order_By = {
  account_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Token_Transfer_Var_Samp_Fields = {
  __typename?: 'token_transfer_var_samp_fields';
  account_id?: Maybe<Scalars['Float']['output']>;
  amount?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "token_transfer" */
export type Token_Transfer_Var_Samp_Order_By = {
  account_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Token_Transfer_Variance_Fields = {
  __typename?: 'token_transfer_variance_fields';
  account_id?: Maybe<Scalars['Float']['output']>;
  amount?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "token_transfer" */
export type Token_Transfer_Variance_Order_By = {
  account_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "token_type". All fields are combined with logical 'AND'. */
export type Token_Type_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['token_type']['input']>;
  _gt?: InputMaybe<Scalars['token_type']['input']>;
  _gte?: InputMaybe<Scalars['token_type']['input']>;
  _in?: InputMaybe<Array<Scalars['token_type']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['token_type']['input']>;
  _lte?: InputMaybe<Scalars['token_type']['input']>;
  _neq?: InputMaybe<Scalars['token_type']['input']>;
  _nin?: InputMaybe<Array<Scalars['token_type']['input']>>;
};

/** aggregate var_pop on columns */
export type Token_Var_Pop_Fields = {
  __typename?: 'token_var_pop_fields';
  created_timestamp?: Maybe<Scalars['Float']['output']>;
  decimals?: Maybe<Scalars['Float']['output']>;
  freeze_status?: Maybe<Scalars['Float']['output']>;
  initial_supply?: Maybe<Scalars['Float']['output']>;
  kyc_status?: Maybe<Scalars['Float']['output']>;
  max_supply?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "modified_timestamp_token" */
  modified_timestamp?: Maybe<Scalars['bigint']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
  total_supply?: Maybe<Scalars['Float']['output']>;
  treasury_account_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Token_Var_Samp_Fields = {
  __typename?: 'token_var_samp_fields';
  created_timestamp?: Maybe<Scalars['Float']['output']>;
  decimals?: Maybe<Scalars['Float']['output']>;
  freeze_status?: Maybe<Scalars['Float']['output']>;
  initial_supply?: Maybe<Scalars['Float']['output']>;
  kyc_status?: Maybe<Scalars['Float']['output']>;
  max_supply?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "modified_timestamp_token" */
  modified_timestamp?: Maybe<Scalars['bigint']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
  total_supply?: Maybe<Scalars['Float']['output']>;
  treasury_account_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Token_Variance_Fields = {
  __typename?: 'token_variance_fields';
  created_timestamp?: Maybe<Scalars['Float']['output']>;
  decimals?: Maybe<Scalars['Float']['output']>;
  freeze_status?: Maybe<Scalars['Float']['output']>;
  initial_supply?: Maybe<Scalars['Float']['output']>;
  kyc_status?: Maybe<Scalars['Float']['output']>;
  max_supply?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "modified_timestamp_token" */
  modified_timestamp?: Maybe<Scalars['bigint']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
  total_supply?: Maybe<Scalars['Float']['output']>;
  treasury_account_id?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "topic" */
export type Topic = {
  __typename?: 'topic';
  admin_key?: Maybe<Scalars['bytea']['output']>;
  created_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** An object relationship */
  entity?: Maybe<Entity>;
  fee_exempt_key_list?: Maybe<Scalars['bytea']['output']>;
  fee_schedule_key?: Maybe<Scalars['bytea']['output']>;
  id: Scalars['bigint']['output'];
  submit_key?: Maybe<Scalars['bytea']['output']>;
  timestamp_range: Scalars['int8range']['output'];
};

/** aggregated selection of "topic" */
export type Topic_Aggregate = {
  __typename?: 'topic_aggregate';
  aggregate?: Maybe<Topic_Aggregate_Fields>;
  nodes: Array<Topic>;
};

/** aggregate fields of "topic" */
export type Topic_Aggregate_Fields = {
  __typename?: 'topic_aggregate_fields';
  avg?: Maybe<Topic_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Topic_Max_Fields>;
  min?: Maybe<Topic_Min_Fields>;
  stddev?: Maybe<Topic_Stddev_Fields>;
  stddev_pop?: Maybe<Topic_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Topic_Stddev_Samp_Fields>;
  sum?: Maybe<Topic_Sum_Fields>;
  var_pop?: Maybe<Topic_Var_Pop_Fields>;
  var_samp?: Maybe<Topic_Var_Samp_Fields>;
  variance?: Maybe<Topic_Variance_Fields>;
};


/** aggregate fields of "topic" */
export type Topic_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Topic_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Topic_Avg_Fields = {
  __typename?: 'topic_avg_fields';
  created_timestamp?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "topic". All fields are combined with a logical 'AND'. */
export type Topic_Bool_Exp = {
  _and?: InputMaybe<Array<Topic_Bool_Exp>>;
  _not?: InputMaybe<Topic_Bool_Exp>;
  _or?: InputMaybe<Array<Topic_Bool_Exp>>;
  admin_key?: InputMaybe<Bytea_Comparison_Exp>;
  created_timestamp?: InputMaybe<Bigint_Comparison_Exp>;
  entity?: InputMaybe<Entity_Bool_Exp>;
  fee_exempt_key_list?: InputMaybe<Bytea_Comparison_Exp>;
  fee_schedule_key?: InputMaybe<Bytea_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  submit_key?: InputMaybe<Bytea_Comparison_Exp>;
  timestamp_range?: InputMaybe<Int8range_Comparison_Exp>;
};

/** aggregate max on columns */
export type Topic_Max_Fields = {
  __typename?: 'topic_max_fields';
  created_timestamp?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
};

/** columns and relationships of "topic_message" */
export type Topic_Message = {
  __typename?: 'topic_message';
  chunk_num?: Maybe<Scalars['Int']['output']>;
  chunk_total?: Maybe<Scalars['Int']['output']>;
  consensus_timestamp: Scalars['bigint']['output'];
  /** A computed field, executes function "topic_message_consensus_timestamp_iso8601" */
  consensus_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "decoded_topic_message" */
  decoded_message?: Maybe<Scalars['String']['output']>;
  initial_transaction_id?: Maybe<Scalars['bytea']['output']>;
  message: Scalars['bytea']['output'];
  payer_account_id?: Maybe<Scalars['bigint']['output']>;
  running_hash: Scalars['bytea']['output'];
  running_hash_version?: Maybe<Scalars['smallint']['output']>;
  sequence_number: Scalars['bigint']['output'];
  /** An object relationship */
  topic?: Maybe<Entity>;
  topic_id: Scalars['bigint']['output'];
  valid_start_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "topic_message_valid_start_timestamp_iso8601" */
  valid_start_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "topic_message" */
export type Topic_Message_Aggregate = {
  __typename?: 'topic_message_aggregate';
  aggregate?: Maybe<Topic_Message_Aggregate_Fields>;
  nodes: Array<Topic_Message>;
};

export type Topic_Message_Aggregate_Bool_Exp = {
  count?: InputMaybe<Topic_Message_Aggregate_Bool_Exp_Count>;
};

export type Topic_Message_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Topic_Message_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Topic_Message_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "topic_message" */
export type Topic_Message_Aggregate_Fields = {
  __typename?: 'topic_message_aggregate_fields';
  avg?: Maybe<Topic_Message_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Topic_Message_Max_Fields>;
  min?: Maybe<Topic_Message_Min_Fields>;
  stddev?: Maybe<Topic_Message_Stddev_Fields>;
  stddev_pop?: Maybe<Topic_Message_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Topic_Message_Stddev_Samp_Fields>;
  sum?: Maybe<Topic_Message_Sum_Fields>;
  var_pop?: Maybe<Topic_Message_Var_Pop_Fields>;
  var_samp?: Maybe<Topic_Message_Var_Samp_Fields>;
  variance?: Maybe<Topic_Message_Variance_Fields>;
};


/** aggregate fields of "topic_message" */
export type Topic_Message_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Topic_Message_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "topic_message" */
export type Topic_Message_Aggregate_Order_By = {
  avg?: InputMaybe<Topic_Message_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Topic_Message_Max_Order_By>;
  min?: InputMaybe<Topic_Message_Min_Order_By>;
  stddev?: InputMaybe<Topic_Message_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Topic_Message_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Topic_Message_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Topic_Message_Sum_Order_By>;
  var_pop?: InputMaybe<Topic_Message_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Topic_Message_Var_Samp_Order_By>;
  variance?: InputMaybe<Topic_Message_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Topic_Message_Avg_Fields = {
  __typename?: 'topic_message_avg_fields';
  chunk_num?: Maybe<Scalars['Float']['output']>;
  chunk_total?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  running_hash_version?: Maybe<Scalars['Float']['output']>;
  sequence_number?: Maybe<Scalars['Float']['output']>;
  topic_id?: Maybe<Scalars['Float']['output']>;
  valid_start_timestamp?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "topic_message" */
export type Topic_Message_Avg_Order_By = {
  chunk_num?: InputMaybe<Order_By>;
  chunk_total?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  running_hash_version?: InputMaybe<Order_By>;
  sequence_number?: InputMaybe<Order_By>;
  topic_id?: InputMaybe<Order_By>;
  valid_start_timestamp?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "topic_message". All fields are combined with a logical 'AND'. */
export type Topic_Message_Bool_Exp = {
  _and?: InputMaybe<Array<Topic_Message_Bool_Exp>>;
  _not?: InputMaybe<Topic_Message_Bool_Exp>;
  _or?: InputMaybe<Array<Topic_Message_Bool_Exp>>;
  chunk_num?: InputMaybe<Int_Comparison_Exp>;
  chunk_total?: InputMaybe<Int_Comparison_Exp>;
  consensus_timestamp?: InputMaybe<Bigint_Comparison_Exp>;
  consensus_timestamp_iso8601?: InputMaybe<String_Comparison_Exp>;
  decoded_message?: InputMaybe<String_Comparison_Exp>;
  initial_transaction_id?: InputMaybe<Bytea_Comparison_Exp>;
  message?: InputMaybe<Bytea_Comparison_Exp>;
  payer_account_id?: InputMaybe<Bigint_Comparison_Exp>;
  running_hash?: InputMaybe<Bytea_Comparison_Exp>;
  running_hash_version?: InputMaybe<Smallint_Comparison_Exp>;
  sequence_number?: InputMaybe<Bigint_Comparison_Exp>;
  topic?: InputMaybe<Entity_Bool_Exp>;
  topic_id?: InputMaybe<Bigint_Comparison_Exp>;
  valid_start_timestamp?: InputMaybe<Bigint_Comparison_Exp>;
  valid_start_timestamp_iso8601?: InputMaybe<String_Comparison_Exp>;
};

/** columns and relationships of "topic_message_lookup" */
export type Topic_Message_Lookup = {
  __typename?: 'topic_message_lookup';
  partition: Scalars['String']['output'];
  sequence_number_range: Scalars['int8range']['output'];
  timestamp_range: Scalars['int8range']['output'];
  topic_id: Scalars['bigint']['output'];
};

/** aggregated selection of "topic_message_lookup" */
export type Topic_Message_Lookup_Aggregate = {
  __typename?: 'topic_message_lookup_aggregate';
  aggregate?: Maybe<Topic_Message_Lookup_Aggregate_Fields>;
  nodes: Array<Topic_Message_Lookup>;
};

/** aggregate fields of "topic_message_lookup" */
export type Topic_Message_Lookup_Aggregate_Fields = {
  __typename?: 'topic_message_lookup_aggregate_fields';
  avg?: Maybe<Topic_Message_Lookup_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Topic_Message_Lookup_Max_Fields>;
  min?: Maybe<Topic_Message_Lookup_Min_Fields>;
  stddev?: Maybe<Topic_Message_Lookup_Stddev_Fields>;
  stddev_pop?: Maybe<Topic_Message_Lookup_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Topic_Message_Lookup_Stddev_Samp_Fields>;
  sum?: Maybe<Topic_Message_Lookup_Sum_Fields>;
  var_pop?: Maybe<Topic_Message_Lookup_Var_Pop_Fields>;
  var_samp?: Maybe<Topic_Message_Lookup_Var_Samp_Fields>;
  variance?: Maybe<Topic_Message_Lookup_Variance_Fields>;
};


/** aggregate fields of "topic_message_lookup" */
export type Topic_Message_Lookup_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Topic_Message_Lookup_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Topic_Message_Lookup_Avg_Fields = {
  __typename?: 'topic_message_lookup_avg_fields';
  topic_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "topic_message_lookup". All fields are combined with a logical 'AND'. */
export type Topic_Message_Lookup_Bool_Exp = {
  _and?: InputMaybe<Array<Topic_Message_Lookup_Bool_Exp>>;
  _not?: InputMaybe<Topic_Message_Lookup_Bool_Exp>;
  _or?: InputMaybe<Array<Topic_Message_Lookup_Bool_Exp>>;
  partition?: InputMaybe<String_Comparison_Exp>;
  sequence_number_range?: InputMaybe<Int8range_Comparison_Exp>;
  timestamp_range?: InputMaybe<Int8range_Comparison_Exp>;
  topic_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Topic_Message_Lookup_Max_Fields = {
  __typename?: 'topic_message_lookup_max_fields';
  partition?: Maybe<Scalars['String']['output']>;
  topic_id?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type Topic_Message_Lookup_Min_Fields = {
  __typename?: 'topic_message_lookup_min_fields';
  partition?: Maybe<Scalars['String']['output']>;
  topic_id?: Maybe<Scalars['bigint']['output']>;
};

/** Ordering options when selecting data from "topic_message_lookup". */
export type Topic_Message_Lookup_Order_By = {
  partition?: InputMaybe<Order_By>;
  sequence_number_range?: InputMaybe<Order_By>;
  timestamp_range?: InputMaybe<Order_By>;
  topic_id?: InputMaybe<Order_By>;
};

/** select columns of table "topic_message_lookup" */
export enum Topic_Message_Lookup_Select_Column {
  /** column name */
  Partition = 'partition',
  /** column name */
  SequenceNumberRange = 'sequence_number_range',
  /** column name */
  TimestampRange = 'timestamp_range',
  /** column name */
  TopicId = 'topic_id'
}

/** aggregate stddev on columns */
export type Topic_Message_Lookup_Stddev_Fields = {
  __typename?: 'topic_message_lookup_stddev_fields';
  topic_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Topic_Message_Lookup_Stddev_Pop_Fields = {
  __typename?: 'topic_message_lookup_stddev_pop_fields';
  topic_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Topic_Message_Lookup_Stddev_Samp_Fields = {
  __typename?: 'topic_message_lookup_stddev_samp_fields';
  topic_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "topic_message_lookup" */
export type Topic_Message_Lookup_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Topic_Message_Lookup_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Topic_Message_Lookup_Stream_Cursor_Value_Input = {
  partition?: InputMaybe<Scalars['String']['input']>;
  sequence_number_range?: InputMaybe<Scalars['int8range']['input']>;
  timestamp_range?: InputMaybe<Scalars['int8range']['input']>;
  topic_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Topic_Message_Lookup_Sum_Fields = {
  __typename?: 'topic_message_lookup_sum_fields';
  topic_id?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type Topic_Message_Lookup_Var_Pop_Fields = {
  __typename?: 'topic_message_lookup_var_pop_fields';
  topic_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Topic_Message_Lookup_Var_Samp_Fields = {
  __typename?: 'topic_message_lookup_var_samp_fields';
  topic_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Topic_Message_Lookup_Variance_Fields = {
  __typename?: 'topic_message_lookup_variance_fields';
  topic_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate max on columns */
export type Topic_Message_Max_Fields = {
  __typename?: 'topic_message_max_fields';
  chunk_num?: Maybe<Scalars['Int']['output']>;
  chunk_total?: Maybe<Scalars['Int']['output']>;
  consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "topic_message_consensus_timestamp_iso8601" */
  consensus_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "decoded_topic_message" */
  decoded_message?: Maybe<Scalars['String']['output']>;
  payer_account_id?: Maybe<Scalars['bigint']['output']>;
  running_hash_version?: Maybe<Scalars['smallint']['output']>;
  sequence_number?: Maybe<Scalars['bigint']['output']>;
  topic_id?: Maybe<Scalars['bigint']['output']>;
  valid_start_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "topic_message_valid_start_timestamp_iso8601" */
  valid_start_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "topic_message" */
export type Topic_Message_Max_Order_By = {
  chunk_num?: InputMaybe<Order_By>;
  chunk_total?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  running_hash_version?: InputMaybe<Order_By>;
  sequence_number?: InputMaybe<Order_By>;
  topic_id?: InputMaybe<Order_By>;
  valid_start_timestamp?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Topic_Message_Min_Fields = {
  __typename?: 'topic_message_min_fields';
  chunk_num?: Maybe<Scalars['Int']['output']>;
  chunk_total?: Maybe<Scalars['Int']['output']>;
  consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "topic_message_consensus_timestamp_iso8601" */
  consensus_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "decoded_topic_message" */
  decoded_message?: Maybe<Scalars['String']['output']>;
  payer_account_id?: Maybe<Scalars['bigint']['output']>;
  running_hash_version?: Maybe<Scalars['smallint']['output']>;
  sequence_number?: Maybe<Scalars['bigint']['output']>;
  topic_id?: Maybe<Scalars['bigint']['output']>;
  valid_start_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "topic_message_valid_start_timestamp_iso8601" */
  valid_start_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "topic_message" */
export type Topic_Message_Min_Order_By = {
  chunk_num?: InputMaybe<Order_By>;
  chunk_total?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  running_hash_version?: InputMaybe<Order_By>;
  sequence_number?: InputMaybe<Order_By>;
  topic_id?: InputMaybe<Order_By>;
  valid_start_timestamp?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "topic_message". */
export type Topic_Message_Order_By = {
  chunk_num?: InputMaybe<Order_By>;
  chunk_total?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  consensus_timestamp_iso8601?: InputMaybe<Order_By>;
  decoded_message?: InputMaybe<Order_By>;
  initial_transaction_id?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  running_hash?: InputMaybe<Order_By>;
  running_hash_version?: InputMaybe<Order_By>;
  sequence_number?: InputMaybe<Order_By>;
  topic?: InputMaybe<Entity_Order_By>;
  topic_id?: InputMaybe<Order_By>;
  valid_start_timestamp?: InputMaybe<Order_By>;
  valid_start_timestamp_iso8601?: InputMaybe<Order_By>;
};

/** select columns of table "topic_message" */
export enum Topic_Message_Select_Column {
  /** column name */
  ChunkNum = 'chunk_num',
  /** column name */
  ChunkTotal = 'chunk_total',
  /** column name */
  ConsensusTimestamp = 'consensus_timestamp',
  /** column name */
  InitialTransactionId = 'initial_transaction_id',
  /** column name */
  Message = 'message',
  /** column name */
  PayerAccountId = 'payer_account_id',
  /** column name */
  RunningHash = 'running_hash',
  /** column name */
  RunningHashVersion = 'running_hash_version',
  /** column name */
  SequenceNumber = 'sequence_number',
  /** column name */
  TopicId = 'topic_id',
  /** column name */
  ValidStartTimestamp = 'valid_start_timestamp'
}

/** aggregate stddev on columns */
export type Topic_Message_Stddev_Fields = {
  __typename?: 'topic_message_stddev_fields';
  chunk_num?: Maybe<Scalars['Float']['output']>;
  chunk_total?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  running_hash_version?: Maybe<Scalars['Float']['output']>;
  sequence_number?: Maybe<Scalars['Float']['output']>;
  topic_id?: Maybe<Scalars['Float']['output']>;
  valid_start_timestamp?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "topic_message" */
export type Topic_Message_Stddev_Order_By = {
  chunk_num?: InputMaybe<Order_By>;
  chunk_total?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  running_hash_version?: InputMaybe<Order_By>;
  sequence_number?: InputMaybe<Order_By>;
  topic_id?: InputMaybe<Order_By>;
  valid_start_timestamp?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Topic_Message_Stddev_Pop_Fields = {
  __typename?: 'topic_message_stddev_pop_fields';
  chunk_num?: Maybe<Scalars['Float']['output']>;
  chunk_total?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  running_hash_version?: Maybe<Scalars['Float']['output']>;
  sequence_number?: Maybe<Scalars['Float']['output']>;
  topic_id?: Maybe<Scalars['Float']['output']>;
  valid_start_timestamp?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "topic_message" */
export type Topic_Message_Stddev_Pop_Order_By = {
  chunk_num?: InputMaybe<Order_By>;
  chunk_total?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  running_hash_version?: InputMaybe<Order_By>;
  sequence_number?: InputMaybe<Order_By>;
  topic_id?: InputMaybe<Order_By>;
  valid_start_timestamp?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Topic_Message_Stddev_Samp_Fields = {
  __typename?: 'topic_message_stddev_samp_fields';
  chunk_num?: Maybe<Scalars['Float']['output']>;
  chunk_total?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  running_hash_version?: Maybe<Scalars['Float']['output']>;
  sequence_number?: Maybe<Scalars['Float']['output']>;
  topic_id?: Maybe<Scalars['Float']['output']>;
  valid_start_timestamp?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "topic_message" */
export type Topic_Message_Stddev_Samp_Order_By = {
  chunk_num?: InputMaybe<Order_By>;
  chunk_total?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  running_hash_version?: InputMaybe<Order_By>;
  sequence_number?: InputMaybe<Order_By>;
  topic_id?: InputMaybe<Order_By>;
  valid_start_timestamp?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "topic_message" */
export type Topic_Message_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Topic_Message_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Topic_Message_Stream_Cursor_Value_Input = {
  chunk_num?: InputMaybe<Scalars['Int']['input']>;
  chunk_total?: InputMaybe<Scalars['Int']['input']>;
  consensus_timestamp?: InputMaybe<Scalars['bigint']['input']>;
  initial_transaction_id?: InputMaybe<Scalars['bytea']['input']>;
  message?: InputMaybe<Scalars['bytea']['input']>;
  payer_account_id?: InputMaybe<Scalars['bigint']['input']>;
  running_hash?: InputMaybe<Scalars['bytea']['input']>;
  running_hash_version?: InputMaybe<Scalars['smallint']['input']>;
  sequence_number?: InputMaybe<Scalars['bigint']['input']>;
  topic_id?: InputMaybe<Scalars['bigint']['input']>;
  valid_start_timestamp?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Topic_Message_Sum_Fields = {
  __typename?: 'topic_message_sum_fields';
  chunk_num?: Maybe<Scalars['Int']['output']>;
  chunk_total?: Maybe<Scalars['Int']['output']>;
  consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  payer_account_id?: Maybe<Scalars['bigint']['output']>;
  running_hash_version?: Maybe<Scalars['smallint']['output']>;
  sequence_number?: Maybe<Scalars['bigint']['output']>;
  topic_id?: Maybe<Scalars['bigint']['output']>;
  valid_start_timestamp?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "topic_message" */
export type Topic_Message_Sum_Order_By = {
  chunk_num?: InputMaybe<Order_By>;
  chunk_total?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  running_hash_version?: InputMaybe<Order_By>;
  sequence_number?: InputMaybe<Order_By>;
  topic_id?: InputMaybe<Order_By>;
  valid_start_timestamp?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Topic_Message_Var_Pop_Fields = {
  __typename?: 'topic_message_var_pop_fields';
  chunk_num?: Maybe<Scalars['Float']['output']>;
  chunk_total?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  running_hash_version?: Maybe<Scalars['Float']['output']>;
  sequence_number?: Maybe<Scalars['Float']['output']>;
  topic_id?: Maybe<Scalars['Float']['output']>;
  valid_start_timestamp?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "topic_message" */
export type Topic_Message_Var_Pop_Order_By = {
  chunk_num?: InputMaybe<Order_By>;
  chunk_total?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  running_hash_version?: InputMaybe<Order_By>;
  sequence_number?: InputMaybe<Order_By>;
  topic_id?: InputMaybe<Order_By>;
  valid_start_timestamp?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Topic_Message_Var_Samp_Fields = {
  __typename?: 'topic_message_var_samp_fields';
  chunk_num?: Maybe<Scalars['Float']['output']>;
  chunk_total?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  running_hash_version?: Maybe<Scalars['Float']['output']>;
  sequence_number?: Maybe<Scalars['Float']['output']>;
  topic_id?: Maybe<Scalars['Float']['output']>;
  valid_start_timestamp?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "topic_message" */
export type Topic_Message_Var_Samp_Order_By = {
  chunk_num?: InputMaybe<Order_By>;
  chunk_total?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  running_hash_version?: InputMaybe<Order_By>;
  sequence_number?: InputMaybe<Order_By>;
  topic_id?: InputMaybe<Order_By>;
  valid_start_timestamp?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Topic_Message_Variance_Fields = {
  __typename?: 'topic_message_variance_fields';
  chunk_num?: Maybe<Scalars['Float']['output']>;
  chunk_total?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  running_hash_version?: Maybe<Scalars['Float']['output']>;
  sequence_number?: Maybe<Scalars['Float']['output']>;
  topic_id?: Maybe<Scalars['Float']['output']>;
  valid_start_timestamp?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "topic_message" */
export type Topic_Message_Variance_Order_By = {
  chunk_num?: InputMaybe<Order_By>;
  chunk_total?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  running_hash_version?: InputMaybe<Order_By>;
  sequence_number?: InputMaybe<Order_By>;
  topic_id?: InputMaybe<Order_By>;
  valid_start_timestamp?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Topic_Min_Fields = {
  __typename?: 'topic_min_fields';
  created_timestamp?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
};

/** Ordering options when selecting data from "topic". */
export type Topic_Order_By = {
  admin_key?: InputMaybe<Order_By>;
  created_timestamp?: InputMaybe<Order_By>;
  entity?: InputMaybe<Entity_Order_By>;
  fee_exempt_key_list?: InputMaybe<Order_By>;
  fee_schedule_key?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  submit_key?: InputMaybe<Order_By>;
  timestamp_range?: InputMaybe<Order_By>;
};

/** select columns of table "topic" */
export enum Topic_Select_Column {
  /** column name */
  AdminKey = 'admin_key',
  /** column name */
  CreatedTimestamp = 'created_timestamp',
  /** column name */
  FeeExemptKeyList = 'fee_exempt_key_list',
  /** column name */
  FeeScheduleKey = 'fee_schedule_key',
  /** column name */
  Id = 'id',
  /** column name */
  SubmitKey = 'submit_key',
  /** column name */
  TimestampRange = 'timestamp_range'
}

/** aggregate stddev on columns */
export type Topic_Stddev_Fields = {
  __typename?: 'topic_stddev_fields';
  created_timestamp?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Topic_Stddev_Pop_Fields = {
  __typename?: 'topic_stddev_pop_fields';
  created_timestamp?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Topic_Stddev_Samp_Fields = {
  __typename?: 'topic_stddev_samp_fields';
  created_timestamp?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "topic" */
export type Topic_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Topic_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Topic_Stream_Cursor_Value_Input = {
  admin_key?: InputMaybe<Scalars['bytea']['input']>;
  created_timestamp?: InputMaybe<Scalars['bigint']['input']>;
  fee_exempt_key_list?: InputMaybe<Scalars['bytea']['input']>;
  fee_schedule_key?: InputMaybe<Scalars['bytea']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  submit_key?: InputMaybe<Scalars['bytea']['input']>;
  timestamp_range?: InputMaybe<Scalars['int8range']['input']>;
};

/** aggregate sum on columns */
export type Topic_Sum_Fields = {
  __typename?: 'topic_sum_fields';
  created_timestamp?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type Topic_Var_Pop_Fields = {
  __typename?: 'topic_var_pop_fields';
  created_timestamp?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Topic_Var_Samp_Fields = {
  __typename?: 'topic_var_samp_fields';
  created_timestamp?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Topic_Variance_Fields = {
  __typename?: 'topic_variance_fields';
  created_timestamp?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "total_accounts" */
export type Total_Accounts = {
  __typename?: 'total_accounts';
  count?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** aggregated selection of "total_accounts" */
export type Total_Accounts_Aggregate = {
  __typename?: 'total_accounts_aggregate';
  aggregate?: Maybe<Total_Accounts_Aggregate_Fields>;
  nodes: Array<Total_Accounts>;
};

/** aggregate fields of "total_accounts" */
export type Total_Accounts_Aggregate_Fields = {
  __typename?: 'total_accounts_aggregate_fields';
  avg?: Maybe<Total_Accounts_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Total_Accounts_Max_Fields>;
  min?: Maybe<Total_Accounts_Min_Fields>;
  stddev?: Maybe<Total_Accounts_Stddev_Fields>;
  stddev_pop?: Maybe<Total_Accounts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Total_Accounts_Stddev_Samp_Fields>;
  sum?: Maybe<Total_Accounts_Sum_Fields>;
  var_pop?: Maybe<Total_Accounts_Var_Pop_Fields>;
  var_samp?: Maybe<Total_Accounts_Var_Samp_Fields>;
  variance?: Maybe<Total_Accounts_Variance_Fields>;
};


/** aggregate fields of "total_accounts" */
export type Total_Accounts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Total_Accounts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Total_Accounts_Avg_Fields = {
  __typename?: 'total_accounts_avg_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "total_accounts". All fields are combined with a logical 'AND'. */
export type Total_Accounts_Bool_Exp = {
  _and?: InputMaybe<Array<Total_Accounts_Bool_Exp>>;
  _not?: InputMaybe<Total_Accounts_Bool_Exp>;
  _or?: InputMaybe<Array<Total_Accounts_Bool_Exp>>;
  count?: InputMaybe<Bigint_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** aggregate max on columns */
export type Total_Accounts_Max_Fields = {
  __typename?: 'total_accounts_max_fields';
  count?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** aggregate min on columns */
export type Total_Accounts_Min_Fields = {
  __typename?: 'total_accounts_min_fields';
  count?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** Ordering options when selecting data from "total_accounts". */
export type Total_Accounts_Order_By = {
  count?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "total_accounts" */
export enum Total_Accounts_Select_Column {
  /** column name */
  Count = 'count',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate stddev on columns */
export type Total_Accounts_Stddev_Fields = {
  __typename?: 'total_accounts_stddev_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Total_Accounts_Stddev_Pop_Fields = {
  __typename?: 'total_accounts_stddev_pop_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Total_Accounts_Stddev_Samp_Fields = {
  __typename?: 'total_accounts_stddev_samp_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "total_accounts" */
export type Total_Accounts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Total_Accounts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Total_Accounts_Stream_Cursor_Value_Input = {
  count?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate sum on columns */
export type Total_Accounts_Sum_Fields = {
  __typename?: 'total_accounts_sum_fields';
  count?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type Total_Accounts_Var_Pop_Fields = {
  __typename?: 'total_accounts_var_pop_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Total_Accounts_Var_Samp_Fields = {
  __typename?: 'total_accounts_var_samp_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Total_Accounts_Variance_Fields = {
  __typename?: 'total_accounts_variance_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "transaction" */
export type Transaction = {
  __typename?: 'transaction';
  batch_key?: Maybe<Scalars['bytea']['output']>;
  charged_tx_fee?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "child_transactions" */
  child_transactions?: Maybe<Array<Transaction>>;
  consensus_timestamp: Scalars['bigint']['output'];
  /** A computed field, executes function "transaction_consensus_timestamp_iso8601" */
  consensus_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  crypto_transfer: Array<Crypto_Transfer>;
  /** An aggregate relationship */
  crypto_transfer_aggregate: Crypto_Transfer_Aggregate;
  /** A computed field, executes function "transaction_decoded_memo" */
  decoded_memo?: Maybe<Scalars['String']['output']>;
  entity_id?: Maybe<Scalars['bigint']['output']>;
  errata?: Maybe<Scalars['errata_type']['output']>;
  /** A computed field, executes function "transaction_id" */
  id?: Maybe<Scalars['String']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  initial_balance?: Maybe<Scalars['bigint']['output']>;
  inner_transactions?: Maybe<Array<Scalars['bigint']['output']>>;
  itemized_transfer?: Maybe<Scalars['jsonb']['output']>;
  max_custom_fees?: Maybe<Array<Scalars['bytea']['output']>>;
  max_fee?: Maybe<Scalars['bigint']['output']>;
  memo?: Maybe<Scalars['bytea']['output']>;
  nft_transfer?: Maybe<Scalars['jsonb']['output']>;
  /** An array relationship */
  nft_transfer_list: Array<Nft_Transfer>;
  /** An aggregate relationship */
  nft_transfer_list_aggregate: Nft_Transfer_Aggregate;
  node_account_id?: Maybe<Scalars['bigint']['output']>;
  nonce: Scalars['Int']['output'];
  parent_consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "transaction_parent_consensus_timestamp_iso8601" */
  parent_consensus_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  parent_transaction?: Maybe<Transaction>;
  payer_account_id: Scalars['bigint']['output'];
  result: Scalars['smallint']['output'];
  scheduled: Scalars['Boolean']['output'];
  /** A computed field, executes function "sibling_transactions" */
  sibling_transactions?: Maybe<Array<Transaction>>;
  /** An array relationship */
  staking_reward_transfer: Array<Staking_Reward_Transfer>;
  /** An aggregate relationship */
  staking_reward_transfer_aggregate: Staking_Reward_Transfer_Aggregate;
  /** An array relationship */
  token_transfer: Array<Token_Transfer>;
  /** An aggregate relationship */
  token_transfer_aggregate: Token_Transfer_Aggregate;
  transaction_bytes?: Maybe<Scalars['bytea']['output']>;
  transaction_hash?: Maybe<Scalars['bytea']['output']>;
  transaction_record_bytes?: Maybe<Scalars['bytea']['output']>;
  /** A computed field, executes function "transaction_transfer" */
  transfer?: Maybe<Array<_Transfer>>;
  type: Scalars['smallint']['output'];
  valid_duration_seconds?: Maybe<Scalars['bigint']['output']>;
  valid_start_ns: Scalars['bigint']['output'];
  /** A computed field, executes function "transaction_valid_start_ns_iso8601" */
  valid_start_ns_iso8601?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "transaction" */
export type TransactionChild_TransactionsArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


/** columns and relationships of "transaction" */
export type TransactionCrypto_TransferArgs = {
  distinct_on?: InputMaybe<Array<Crypto_Transfer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Crypto_Transfer_Order_By>>;
  where?: InputMaybe<Crypto_Transfer_Bool_Exp>;
};


/** columns and relationships of "transaction" */
export type TransactionCrypto_Transfer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Crypto_Transfer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Crypto_Transfer_Order_By>>;
  where?: InputMaybe<Crypto_Transfer_Bool_Exp>;
};


/** columns and relationships of "transaction" */
export type TransactionItemized_TransferArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "transaction" */
export type TransactionNft_TransferArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "transaction" */
export type TransactionNft_Transfer_ListArgs = {
  distinct_on?: InputMaybe<Array<Nft_Transfer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Transfer_Order_By>>;
  where?: InputMaybe<Nft_Transfer_Bool_Exp>;
};


/** columns and relationships of "transaction" */
export type TransactionNft_Transfer_List_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nft_Transfer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Transfer_Order_By>>;
  where?: InputMaybe<Nft_Transfer_Bool_Exp>;
};


/** columns and relationships of "transaction" */
export type TransactionSibling_TransactionsArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


/** columns and relationships of "transaction" */
export type TransactionStaking_Reward_TransferArgs = {
  distinct_on?: InputMaybe<Array<Staking_Reward_Transfer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staking_Reward_Transfer_Order_By>>;
  where?: InputMaybe<Staking_Reward_Transfer_Bool_Exp>;
};


/** columns and relationships of "transaction" */
export type TransactionStaking_Reward_Transfer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Staking_Reward_Transfer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staking_Reward_Transfer_Order_By>>;
  where?: InputMaybe<Staking_Reward_Transfer_Bool_Exp>;
};


/** columns and relationships of "transaction" */
export type TransactionToken_TransferArgs = {
  distinct_on?: InputMaybe<Array<Token_Transfer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Token_Transfer_Order_By>>;
  where?: InputMaybe<Token_Transfer_Bool_Exp>;
};


/** columns and relationships of "transaction" */
export type TransactionToken_Transfer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Transfer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Token_Transfer_Order_By>>;
  where?: InputMaybe<Token_Transfer_Bool_Exp>;
};


/** columns and relationships of "transaction" */
export type TransactionTransferArgs = {
  distinct_on?: InputMaybe<Array<_Transfer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<_Transfer_Order_By>>;
  where?: InputMaybe<_Transfer_Bool_Exp>;
};

export type Transaction_Aggregate = {
  __typename?: 'transaction_aggregate';
  aggregate?: Maybe<Transaction_Aggregate_Fields>;
  nodes: Array<Transaction>;
};

/** aggregate fields of "transaction" */
export type Transaction_Aggregate_Fields = {
  __typename?: 'transaction_aggregate_fields';
  avg?: Maybe<Transaction_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Transaction_Max_Fields>;
  min?: Maybe<Transaction_Min_Fields>;
  stddev?: Maybe<Transaction_Stddev_Fields>;
  stddev_pop?: Maybe<Transaction_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Transaction_Stddev_Samp_Fields>;
  sum?: Maybe<Transaction_Sum_Fields>;
  var_pop?: Maybe<Transaction_Var_Pop_Fields>;
  var_samp?: Maybe<Transaction_Var_Samp_Fields>;
  variance?: Maybe<Transaction_Variance_Fields>;
};


/** aggregate fields of "transaction" */
export type Transaction_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Transaction_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "transaction" */
export type Transaction_Aggregate_Order_By = {
  avg?: InputMaybe<Transaction_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Transaction_Max_Order_By>;
  min?: InputMaybe<Transaction_Min_Order_By>;
  stddev?: InputMaybe<Transaction_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Transaction_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Transaction_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Transaction_Sum_Order_By>;
  var_pop?: InputMaybe<Transaction_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Transaction_Var_Samp_Order_By>;
  variance?: InputMaybe<Transaction_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Transaction_Avg_Fields = {
  __typename?: 'transaction_avg_fields';
  charged_tx_fee?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  entity_id?: Maybe<Scalars['Float']['output']>;
  index?: Maybe<Scalars['Float']['output']>;
  initial_balance?: Maybe<Scalars['Float']['output']>;
  max_fee?: Maybe<Scalars['Float']['output']>;
  node_account_id?: Maybe<Scalars['Float']['output']>;
  nonce?: Maybe<Scalars['Float']['output']>;
  parent_consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  result?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['Float']['output']>;
  valid_duration_seconds?: Maybe<Scalars['Float']['output']>;
  valid_start_ns?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "transaction" */
export type Transaction_Avg_Order_By = {
  charged_tx_fee?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  initial_balance?: InputMaybe<Order_By>;
  max_fee?: InputMaybe<Order_By>;
  node_account_id?: InputMaybe<Order_By>;
  nonce?: InputMaybe<Order_By>;
  parent_consensus_timestamp?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  result?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  valid_duration_seconds?: InputMaybe<Order_By>;
  valid_start_ns?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "transaction". All fields are combined with a logical 'AND'. */
export type Transaction_Bool_Exp = {
  _and?: InputMaybe<Array<Transaction_Bool_Exp>>;
  _not?: InputMaybe<Transaction_Bool_Exp>;
  _or?: InputMaybe<Array<Transaction_Bool_Exp>>;
  batch_key?: InputMaybe<Bytea_Comparison_Exp>;
  charged_tx_fee?: InputMaybe<Bigint_Comparison_Exp>;
  child_transactions?: InputMaybe<Transaction_Bool_Exp>;
  consensus_timestamp?: InputMaybe<Bigint_Comparison_Exp>;
  consensus_timestamp_iso8601?: InputMaybe<String_Comparison_Exp>;
  crypto_transfer?: InputMaybe<Crypto_Transfer_Bool_Exp>;
  crypto_transfer_aggregate?: InputMaybe<Crypto_Transfer_Aggregate_Bool_Exp>;
  decoded_memo?: InputMaybe<String_Comparison_Exp>;
  entity_id?: InputMaybe<Bigint_Comparison_Exp>;
  errata?: InputMaybe<Errata_Type_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  index?: InputMaybe<Int_Comparison_Exp>;
  initial_balance?: InputMaybe<Bigint_Comparison_Exp>;
  inner_transactions?: InputMaybe<Bigint_Array_Comparison_Exp>;
  itemized_transfer?: InputMaybe<Jsonb_Comparison_Exp>;
  max_custom_fees?: InputMaybe<Bytea_Array_Comparison_Exp>;
  max_fee?: InputMaybe<Bigint_Comparison_Exp>;
  memo?: InputMaybe<Bytea_Comparison_Exp>;
  nft_transfer?: InputMaybe<Jsonb_Comparison_Exp>;
  nft_transfer_list?: InputMaybe<Nft_Transfer_Bool_Exp>;
  nft_transfer_list_aggregate?: InputMaybe<Nft_Transfer_Aggregate_Bool_Exp>;
  node_account_id?: InputMaybe<Bigint_Comparison_Exp>;
  nonce?: InputMaybe<Int_Comparison_Exp>;
  parent_consensus_timestamp?: InputMaybe<Bigint_Comparison_Exp>;
  parent_consensus_timestamp_iso8601?: InputMaybe<String_Comparison_Exp>;
  parent_transaction?: InputMaybe<Transaction_Bool_Exp>;
  payer_account_id?: InputMaybe<Bigint_Comparison_Exp>;
  result?: InputMaybe<Smallint_Comparison_Exp>;
  scheduled?: InputMaybe<Boolean_Comparison_Exp>;
  sibling_transactions?: InputMaybe<Transaction_Bool_Exp>;
  staking_reward_transfer?: InputMaybe<Staking_Reward_Transfer_Bool_Exp>;
  staking_reward_transfer_aggregate?: InputMaybe<Staking_Reward_Transfer_Aggregate_Bool_Exp>;
  token_transfer?: InputMaybe<Token_Transfer_Bool_Exp>;
  token_transfer_aggregate?: InputMaybe<Token_Transfer_Aggregate_Bool_Exp>;
  transaction_bytes?: InputMaybe<Bytea_Comparison_Exp>;
  transaction_hash?: InputMaybe<Bytea_Comparison_Exp>;
  transaction_record_bytes?: InputMaybe<Bytea_Comparison_Exp>;
  transfer?: InputMaybe<_Transfer_Bool_Exp>;
  type?: InputMaybe<Smallint_Comparison_Exp>;
  valid_duration_seconds?: InputMaybe<Bigint_Comparison_Exp>;
  valid_start_ns?: InputMaybe<Bigint_Comparison_Exp>;
  valid_start_ns_iso8601?: InputMaybe<String_Comparison_Exp>;
};

export type Transaction_Entity_Args = {
  _limit?: InputMaybe<Scalars['Int']['input']>;
  _offset?: InputMaybe<Scalars['Int']['input']>;
  _order?: InputMaybe<Scalars['order_by_consensus_timestamp']['input']>;
};

/** aggregate max on columns */
export type Transaction_Max_Fields = {
  __typename?: 'transaction_max_fields';
  charged_tx_fee?: Maybe<Scalars['bigint']['output']>;
  consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "transaction_consensus_timestamp_iso8601" */
  consensus_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "transaction_decoded_memo" */
  decoded_memo?: Maybe<Scalars['String']['output']>;
  entity_id?: Maybe<Scalars['bigint']['output']>;
  errata?: Maybe<Scalars['errata_type']['output']>;
  /** A computed field, executes function "transaction_id" */
  id?: Maybe<Scalars['String']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  initial_balance?: Maybe<Scalars['bigint']['output']>;
  inner_transactions?: Maybe<Array<Scalars['bigint']['output']>>;
  max_custom_fees?: Maybe<Array<Scalars['bytea']['output']>>;
  max_fee?: Maybe<Scalars['bigint']['output']>;
  node_account_id?: Maybe<Scalars['bigint']['output']>;
  nonce?: Maybe<Scalars['Int']['output']>;
  parent_consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "transaction_parent_consensus_timestamp_iso8601" */
  parent_consensus_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  payer_account_id?: Maybe<Scalars['bigint']['output']>;
  result?: Maybe<Scalars['smallint']['output']>;
  type?: Maybe<Scalars['smallint']['output']>;
  valid_duration_seconds?: Maybe<Scalars['bigint']['output']>;
  valid_start_ns?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "transaction_valid_start_ns_iso8601" */
  valid_start_ns_iso8601?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "transaction" */
export type Transaction_Max_Order_By = {
  charged_tx_fee?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  errata?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  initial_balance?: InputMaybe<Order_By>;
  inner_transactions?: InputMaybe<Order_By>;
  max_custom_fees?: InputMaybe<Order_By>;
  max_fee?: InputMaybe<Order_By>;
  node_account_id?: InputMaybe<Order_By>;
  nonce?: InputMaybe<Order_By>;
  parent_consensus_timestamp?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  result?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  valid_duration_seconds?: InputMaybe<Order_By>;
  valid_start_ns?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Transaction_Min_Fields = {
  __typename?: 'transaction_min_fields';
  charged_tx_fee?: Maybe<Scalars['bigint']['output']>;
  consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "transaction_consensus_timestamp_iso8601" */
  consensus_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "transaction_decoded_memo" */
  decoded_memo?: Maybe<Scalars['String']['output']>;
  entity_id?: Maybe<Scalars['bigint']['output']>;
  errata?: Maybe<Scalars['errata_type']['output']>;
  /** A computed field, executes function "transaction_id" */
  id?: Maybe<Scalars['String']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  initial_balance?: Maybe<Scalars['bigint']['output']>;
  inner_transactions?: Maybe<Array<Scalars['bigint']['output']>>;
  max_custom_fees?: Maybe<Array<Scalars['bytea']['output']>>;
  max_fee?: Maybe<Scalars['bigint']['output']>;
  node_account_id?: Maybe<Scalars['bigint']['output']>;
  nonce?: Maybe<Scalars['Int']['output']>;
  parent_consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "transaction_parent_consensus_timestamp_iso8601" */
  parent_consensus_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  payer_account_id?: Maybe<Scalars['bigint']['output']>;
  result?: Maybe<Scalars['smallint']['output']>;
  type?: Maybe<Scalars['smallint']['output']>;
  valid_duration_seconds?: Maybe<Scalars['bigint']['output']>;
  valid_start_ns?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "transaction_valid_start_ns_iso8601" */
  valid_start_ns_iso8601?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "transaction" */
export type Transaction_Min_Order_By = {
  charged_tx_fee?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  errata?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  initial_balance?: InputMaybe<Order_By>;
  inner_transactions?: InputMaybe<Order_By>;
  max_custom_fees?: InputMaybe<Order_By>;
  max_fee?: InputMaybe<Order_By>;
  node_account_id?: InputMaybe<Order_By>;
  nonce?: InputMaybe<Order_By>;
  parent_consensus_timestamp?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  result?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  valid_duration_seconds?: InputMaybe<Order_By>;
  valid_start_ns?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "transaction". */
export type Transaction_Order_By = {
  batch_key?: InputMaybe<Order_By>;
  charged_tx_fee?: InputMaybe<Order_By>;
  child_transactions_aggregate?: InputMaybe<Transaction_Aggregate_Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  consensus_timestamp_iso8601?: InputMaybe<Order_By>;
  crypto_transfer_aggregate?: InputMaybe<Crypto_Transfer_Aggregate_Order_By>;
  decoded_memo?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  errata?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  initial_balance?: InputMaybe<Order_By>;
  inner_transactions?: InputMaybe<Order_By>;
  itemized_transfer?: InputMaybe<Order_By>;
  max_custom_fees?: InputMaybe<Order_By>;
  max_fee?: InputMaybe<Order_By>;
  memo?: InputMaybe<Order_By>;
  nft_transfer?: InputMaybe<Order_By>;
  nft_transfer_list_aggregate?: InputMaybe<Nft_Transfer_Aggregate_Order_By>;
  node_account_id?: InputMaybe<Order_By>;
  nonce?: InputMaybe<Order_By>;
  parent_consensus_timestamp?: InputMaybe<Order_By>;
  parent_consensus_timestamp_iso8601?: InputMaybe<Order_By>;
  parent_transaction?: InputMaybe<Transaction_Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  result?: InputMaybe<Order_By>;
  scheduled?: InputMaybe<Order_By>;
  sibling_transactions_aggregate?: InputMaybe<Transaction_Aggregate_Order_By>;
  staking_reward_transfer_aggregate?: InputMaybe<Staking_Reward_Transfer_Aggregate_Order_By>;
  token_transfer_aggregate?: InputMaybe<Token_Transfer_Aggregate_Order_By>;
  transaction_bytes?: InputMaybe<Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
  transaction_record_bytes?: InputMaybe<Order_By>;
  transfer_aggregate?: InputMaybe<_Transfer_Aggregate_Order_By>;
  type?: InputMaybe<Order_By>;
  valid_duration_seconds?: InputMaybe<Order_By>;
  valid_start_ns?: InputMaybe<Order_By>;
  valid_start_ns_iso8601?: InputMaybe<Order_By>;
};

/** select columns of table "transaction" */
export enum Transaction_Select_Column {
  /** column name */
  BatchKey = 'batch_key',
  /** column name */
  ChargedTxFee = 'charged_tx_fee',
  /** column name */
  ConsensusTimestamp = 'consensus_timestamp',
  /** column name */
  EntityId = 'entity_id',
  /** column name */
  Errata = 'errata',
  /** column name */
  Index = 'index',
  /** column name */
  InitialBalance = 'initial_balance',
  /** column name */
  InnerTransactions = 'inner_transactions',
  /** column name */
  ItemizedTransfer = 'itemized_transfer',
  /** column name */
  MaxCustomFees = 'max_custom_fees',
  /** column name */
  MaxFee = 'max_fee',
  /** column name */
  Memo = 'memo',
  /** column name */
  NftTransfer = 'nft_transfer',
  /** column name */
  NodeAccountId = 'node_account_id',
  /** column name */
  Nonce = 'nonce',
  /** column name */
  ParentConsensusTimestamp = 'parent_consensus_timestamp',
  /** column name */
  PayerAccountId = 'payer_account_id',
  /** column name */
  Result = 'result',
  /** column name */
  Scheduled = 'scheduled',
  /** column name */
  TransactionBytes = 'transaction_bytes',
  /** column name */
  TransactionHash = 'transaction_hash',
  /** column name */
  TransactionRecordBytes = 'transaction_record_bytes',
  /** column name */
  Type = 'type',
  /** column name */
  ValidDurationSeconds = 'valid_duration_seconds',
  /** column name */
  ValidStartNs = 'valid_start_ns'
}

/** columns and relationships of "transaction_signature" */
export type Transaction_Signature = {
  __typename?: 'transaction_signature';
  consensus_timestamp: Scalars['bigint']['output'];
  /** A computed field, executes function "transaction_signature_consensus_timestamp_iso8601" */
  consensus_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  entity_id?: Maybe<Scalars['bigint']['output']>;
  public_key_prefix: Scalars['bytea']['output'];
  signature: Scalars['bytea']['output'];
  type?: Maybe<Scalars['smallint']['output']>;
};

/** aggregated selection of "transaction_signature" */
export type Transaction_Signature_Aggregate = {
  __typename?: 'transaction_signature_aggregate';
  aggregate?: Maybe<Transaction_Signature_Aggregate_Fields>;
  nodes: Array<Transaction_Signature>;
};

/** aggregate fields of "transaction_signature" */
export type Transaction_Signature_Aggregate_Fields = {
  __typename?: 'transaction_signature_aggregate_fields';
  avg?: Maybe<Transaction_Signature_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Transaction_Signature_Max_Fields>;
  min?: Maybe<Transaction_Signature_Min_Fields>;
  stddev?: Maybe<Transaction_Signature_Stddev_Fields>;
  stddev_pop?: Maybe<Transaction_Signature_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Transaction_Signature_Stddev_Samp_Fields>;
  sum?: Maybe<Transaction_Signature_Sum_Fields>;
  var_pop?: Maybe<Transaction_Signature_Var_Pop_Fields>;
  var_samp?: Maybe<Transaction_Signature_Var_Samp_Fields>;
  variance?: Maybe<Transaction_Signature_Variance_Fields>;
};


/** aggregate fields of "transaction_signature" */
export type Transaction_Signature_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Transaction_Signature_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Transaction_Signature_Avg_Fields = {
  __typename?: 'transaction_signature_avg_fields';
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  entity_id?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "transaction_signature". All fields are combined with a logical 'AND'. */
export type Transaction_Signature_Bool_Exp = {
  _and?: InputMaybe<Array<Transaction_Signature_Bool_Exp>>;
  _not?: InputMaybe<Transaction_Signature_Bool_Exp>;
  _or?: InputMaybe<Array<Transaction_Signature_Bool_Exp>>;
  consensus_timestamp?: InputMaybe<Bigint_Comparison_Exp>;
  consensus_timestamp_iso8601?: InputMaybe<String_Comparison_Exp>;
  entity_id?: InputMaybe<Bigint_Comparison_Exp>;
  public_key_prefix?: InputMaybe<Bytea_Comparison_Exp>;
  signature?: InputMaybe<Bytea_Comparison_Exp>;
  type?: InputMaybe<Smallint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Transaction_Signature_Max_Fields = {
  __typename?: 'transaction_signature_max_fields';
  consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "transaction_signature_consensus_timestamp_iso8601" */
  consensus_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  entity_id?: Maybe<Scalars['bigint']['output']>;
  type?: Maybe<Scalars['smallint']['output']>;
};

/** aggregate min on columns */
export type Transaction_Signature_Min_Fields = {
  __typename?: 'transaction_signature_min_fields';
  consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "transaction_signature_consensus_timestamp_iso8601" */
  consensus_timestamp_iso8601?: Maybe<Scalars['String']['output']>;
  entity_id?: Maybe<Scalars['bigint']['output']>;
  type?: Maybe<Scalars['smallint']['output']>;
};

/** Ordering options when selecting data from "transaction_signature". */
export type Transaction_Signature_Order_By = {
  consensus_timestamp?: InputMaybe<Order_By>;
  consensus_timestamp_iso8601?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  public_key_prefix?: InputMaybe<Order_By>;
  signature?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** select columns of table "transaction_signature" */
export enum Transaction_Signature_Select_Column {
  /** column name */
  ConsensusTimestamp = 'consensus_timestamp',
  /** column name */
  EntityId = 'entity_id',
  /** column name */
  PublicKeyPrefix = 'public_key_prefix',
  /** column name */
  Signature = 'signature',
  /** column name */
  Type = 'type'
}

/** aggregate stddev on columns */
export type Transaction_Signature_Stddev_Fields = {
  __typename?: 'transaction_signature_stddev_fields';
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  entity_id?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Transaction_Signature_Stddev_Pop_Fields = {
  __typename?: 'transaction_signature_stddev_pop_fields';
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  entity_id?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Transaction_Signature_Stddev_Samp_Fields = {
  __typename?: 'transaction_signature_stddev_samp_fields';
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  entity_id?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "transaction_signature" */
export type Transaction_Signature_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Transaction_Signature_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Transaction_Signature_Stream_Cursor_Value_Input = {
  consensus_timestamp?: InputMaybe<Scalars['bigint']['input']>;
  entity_id?: InputMaybe<Scalars['bigint']['input']>;
  public_key_prefix?: InputMaybe<Scalars['bytea']['input']>;
  signature?: InputMaybe<Scalars['bytea']['input']>;
  type?: InputMaybe<Scalars['smallint']['input']>;
};

/** aggregate sum on columns */
export type Transaction_Signature_Sum_Fields = {
  __typename?: 'transaction_signature_sum_fields';
  consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  entity_id?: Maybe<Scalars['bigint']['output']>;
  type?: Maybe<Scalars['smallint']['output']>;
};

/** aggregate var_pop on columns */
export type Transaction_Signature_Var_Pop_Fields = {
  __typename?: 'transaction_signature_var_pop_fields';
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  entity_id?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Transaction_Signature_Var_Samp_Fields = {
  __typename?: 'transaction_signature_var_samp_fields';
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  entity_id?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Transaction_Signature_Variance_Fields = {
  __typename?: 'transaction_signature_variance_fields';
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  entity_id?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev on columns */
export type Transaction_Stddev_Fields = {
  __typename?: 'transaction_stddev_fields';
  charged_tx_fee?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  entity_id?: Maybe<Scalars['Float']['output']>;
  index?: Maybe<Scalars['Float']['output']>;
  initial_balance?: Maybe<Scalars['Float']['output']>;
  max_fee?: Maybe<Scalars['Float']['output']>;
  node_account_id?: Maybe<Scalars['Float']['output']>;
  nonce?: Maybe<Scalars['Float']['output']>;
  parent_consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  result?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['Float']['output']>;
  valid_duration_seconds?: Maybe<Scalars['Float']['output']>;
  valid_start_ns?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "transaction" */
export type Transaction_Stddev_Order_By = {
  charged_tx_fee?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  initial_balance?: InputMaybe<Order_By>;
  max_fee?: InputMaybe<Order_By>;
  node_account_id?: InputMaybe<Order_By>;
  nonce?: InputMaybe<Order_By>;
  parent_consensus_timestamp?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  result?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  valid_duration_seconds?: InputMaybe<Order_By>;
  valid_start_ns?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Transaction_Stddev_Pop_Fields = {
  __typename?: 'transaction_stddev_pop_fields';
  charged_tx_fee?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  entity_id?: Maybe<Scalars['Float']['output']>;
  index?: Maybe<Scalars['Float']['output']>;
  initial_balance?: Maybe<Scalars['Float']['output']>;
  max_fee?: Maybe<Scalars['Float']['output']>;
  node_account_id?: Maybe<Scalars['Float']['output']>;
  nonce?: Maybe<Scalars['Float']['output']>;
  parent_consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  result?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['Float']['output']>;
  valid_duration_seconds?: Maybe<Scalars['Float']['output']>;
  valid_start_ns?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "transaction" */
export type Transaction_Stddev_Pop_Order_By = {
  charged_tx_fee?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  initial_balance?: InputMaybe<Order_By>;
  max_fee?: InputMaybe<Order_By>;
  node_account_id?: InputMaybe<Order_By>;
  nonce?: InputMaybe<Order_By>;
  parent_consensus_timestamp?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  result?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  valid_duration_seconds?: InputMaybe<Order_By>;
  valid_start_ns?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Transaction_Stddev_Samp_Fields = {
  __typename?: 'transaction_stddev_samp_fields';
  charged_tx_fee?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  entity_id?: Maybe<Scalars['Float']['output']>;
  index?: Maybe<Scalars['Float']['output']>;
  initial_balance?: Maybe<Scalars['Float']['output']>;
  max_fee?: Maybe<Scalars['Float']['output']>;
  node_account_id?: Maybe<Scalars['Float']['output']>;
  nonce?: Maybe<Scalars['Float']['output']>;
  parent_consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  result?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['Float']['output']>;
  valid_duration_seconds?: Maybe<Scalars['Float']['output']>;
  valid_start_ns?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "transaction" */
export type Transaction_Stddev_Samp_Order_By = {
  charged_tx_fee?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  initial_balance?: InputMaybe<Order_By>;
  max_fee?: InputMaybe<Order_By>;
  node_account_id?: InputMaybe<Order_By>;
  nonce?: InputMaybe<Order_By>;
  parent_consensus_timestamp?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  result?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  valid_duration_seconds?: InputMaybe<Order_By>;
  valid_start_ns?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "transaction" */
export type Transaction_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Transaction_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Transaction_Stream_Cursor_Value_Input = {
  batch_key?: InputMaybe<Scalars['bytea']['input']>;
  charged_tx_fee?: InputMaybe<Scalars['bigint']['input']>;
  consensus_timestamp?: InputMaybe<Scalars['bigint']['input']>;
  entity_id?: InputMaybe<Scalars['bigint']['input']>;
  errata?: InputMaybe<Scalars['errata_type']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
  initial_balance?: InputMaybe<Scalars['bigint']['input']>;
  inner_transactions?: InputMaybe<Array<Scalars['bigint']['input']>>;
  itemized_transfer?: InputMaybe<Scalars['jsonb']['input']>;
  max_custom_fees?: InputMaybe<Array<Scalars['bytea']['input']>>;
  max_fee?: InputMaybe<Scalars['bigint']['input']>;
  memo?: InputMaybe<Scalars['bytea']['input']>;
  nft_transfer?: InputMaybe<Scalars['jsonb']['input']>;
  node_account_id?: InputMaybe<Scalars['bigint']['input']>;
  nonce?: InputMaybe<Scalars['Int']['input']>;
  parent_consensus_timestamp?: InputMaybe<Scalars['bigint']['input']>;
  payer_account_id?: InputMaybe<Scalars['bigint']['input']>;
  result?: InputMaybe<Scalars['smallint']['input']>;
  scheduled?: InputMaybe<Scalars['Boolean']['input']>;
  transaction_bytes?: InputMaybe<Scalars['bytea']['input']>;
  transaction_hash?: InputMaybe<Scalars['bytea']['input']>;
  transaction_record_bytes?: InputMaybe<Scalars['bytea']['input']>;
  type?: InputMaybe<Scalars['smallint']['input']>;
  valid_duration_seconds?: InputMaybe<Scalars['bigint']['input']>;
  valid_start_ns?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Transaction_Sum_Fields = {
  __typename?: 'transaction_sum_fields';
  charged_tx_fee?: Maybe<Scalars['bigint']['output']>;
  consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  entity_id?: Maybe<Scalars['bigint']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  initial_balance?: Maybe<Scalars['bigint']['output']>;
  max_fee?: Maybe<Scalars['bigint']['output']>;
  node_account_id?: Maybe<Scalars['bigint']['output']>;
  nonce?: Maybe<Scalars['Int']['output']>;
  parent_consensus_timestamp?: Maybe<Scalars['bigint']['output']>;
  payer_account_id?: Maybe<Scalars['bigint']['output']>;
  result?: Maybe<Scalars['smallint']['output']>;
  type?: Maybe<Scalars['smallint']['output']>;
  valid_duration_seconds?: Maybe<Scalars['bigint']['output']>;
  valid_start_ns?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "transaction" */
export type Transaction_Sum_Order_By = {
  charged_tx_fee?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  initial_balance?: InputMaybe<Order_By>;
  max_fee?: InputMaybe<Order_By>;
  node_account_id?: InputMaybe<Order_By>;
  nonce?: InputMaybe<Order_By>;
  parent_consensus_timestamp?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  result?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  valid_duration_seconds?: InputMaybe<Order_By>;
  valid_start_ns?: InputMaybe<Order_By>;
};

export type Transaction_Transfer_Args = {
  transaction_row?: InputMaybe<Scalars['transaction_scalar']['input']>;
};

/** aggregate var_pop on columns */
export type Transaction_Var_Pop_Fields = {
  __typename?: 'transaction_var_pop_fields';
  charged_tx_fee?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  entity_id?: Maybe<Scalars['Float']['output']>;
  index?: Maybe<Scalars['Float']['output']>;
  initial_balance?: Maybe<Scalars['Float']['output']>;
  max_fee?: Maybe<Scalars['Float']['output']>;
  node_account_id?: Maybe<Scalars['Float']['output']>;
  nonce?: Maybe<Scalars['Float']['output']>;
  parent_consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  result?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['Float']['output']>;
  valid_duration_seconds?: Maybe<Scalars['Float']['output']>;
  valid_start_ns?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "transaction" */
export type Transaction_Var_Pop_Order_By = {
  charged_tx_fee?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  initial_balance?: InputMaybe<Order_By>;
  max_fee?: InputMaybe<Order_By>;
  node_account_id?: InputMaybe<Order_By>;
  nonce?: InputMaybe<Order_By>;
  parent_consensus_timestamp?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  result?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  valid_duration_seconds?: InputMaybe<Order_By>;
  valid_start_ns?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Transaction_Var_Samp_Fields = {
  __typename?: 'transaction_var_samp_fields';
  charged_tx_fee?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  entity_id?: Maybe<Scalars['Float']['output']>;
  index?: Maybe<Scalars['Float']['output']>;
  initial_balance?: Maybe<Scalars['Float']['output']>;
  max_fee?: Maybe<Scalars['Float']['output']>;
  node_account_id?: Maybe<Scalars['Float']['output']>;
  nonce?: Maybe<Scalars['Float']['output']>;
  parent_consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  result?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['Float']['output']>;
  valid_duration_seconds?: Maybe<Scalars['Float']['output']>;
  valid_start_ns?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "transaction" */
export type Transaction_Var_Samp_Order_By = {
  charged_tx_fee?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  initial_balance?: InputMaybe<Order_By>;
  max_fee?: InputMaybe<Order_By>;
  node_account_id?: InputMaybe<Order_By>;
  nonce?: InputMaybe<Order_By>;
  parent_consensus_timestamp?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  result?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  valid_duration_seconds?: InputMaybe<Order_By>;
  valid_start_ns?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Transaction_Variance_Fields = {
  __typename?: 'transaction_variance_fields';
  charged_tx_fee?: Maybe<Scalars['Float']['output']>;
  consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  entity_id?: Maybe<Scalars['Float']['output']>;
  index?: Maybe<Scalars['Float']['output']>;
  initial_balance?: Maybe<Scalars['Float']['output']>;
  max_fee?: Maybe<Scalars['Float']['output']>;
  node_account_id?: Maybe<Scalars['Float']['output']>;
  nonce?: Maybe<Scalars['Float']['output']>;
  parent_consensus_timestamp?: Maybe<Scalars['Float']['output']>;
  payer_account_id?: Maybe<Scalars['Float']['output']>;
  result?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['Float']['output']>;
  valid_duration_seconds?: Maybe<Scalars['Float']['output']>;
  valid_start_ns?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "transaction" */
export type Transaction_Variance_Order_By = {
  charged_tx_fee?: InputMaybe<Order_By>;
  consensus_timestamp?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  initial_balance?: InputMaybe<Order_By>;
  max_fee?: InputMaybe<Order_By>;
  node_account_id?: InputMaybe<Order_By>;
  nonce?: InputMaybe<Order_By>;
  parent_consensus_timestamp?: InputMaybe<Order_By>;
  payer_account_id?: InputMaybe<Order_By>;
  result?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  valid_duration_seconds?: InputMaybe<Order_By>;
  valid_start_ns?: InputMaybe<Order_By>;
};

/** columns and relationships of "transactions_last_24hrs" */
export type Transactions_Last_24hrs = {
  __typename?: 'transactions_last_24hrs';
  count?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** aggregated selection of "transactions_last_24hrs" */
export type Transactions_Last_24hrs_Aggregate = {
  __typename?: 'transactions_last_24hrs_aggregate';
  aggregate?: Maybe<Transactions_Last_24hrs_Aggregate_Fields>;
  nodes: Array<Transactions_Last_24hrs>;
};

/** aggregate fields of "transactions_last_24hrs" */
export type Transactions_Last_24hrs_Aggregate_Fields = {
  __typename?: 'transactions_last_24hrs_aggregate_fields';
  avg?: Maybe<Transactions_Last_24hrs_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Transactions_Last_24hrs_Max_Fields>;
  min?: Maybe<Transactions_Last_24hrs_Min_Fields>;
  stddev?: Maybe<Transactions_Last_24hrs_Stddev_Fields>;
  stddev_pop?: Maybe<Transactions_Last_24hrs_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Transactions_Last_24hrs_Stddev_Samp_Fields>;
  sum?: Maybe<Transactions_Last_24hrs_Sum_Fields>;
  var_pop?: Maybe<Transactions_Last_24hrs_Var_Pop_Fields>;
  var_samp?: Maybe<Transactions_Last_24hrs_Var_Samp_Fields>;
  variance?: Maybe<Transactions_Last_24hrs_Variance_Fields>;
};


/** aggregate fields of "transactions_last_24hrs" */
export type Transactions_Last_24hrs_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Transactions_Last_24hrs_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Transactions_Last_24hrs_Avg_Fields = {
  __typename?: 'transactions_last_24hrs_avg_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "transactions_last_24hrs". All fields are combined with a logical 'AND'. */
export type Transactions_Last_24hrs_Bool_Exp = {
  _and?: InputMaybe<Array<Transactions_Last_24hrs_Bool_Exp>>;
  _not?: InputMaybe<Transactions_Last_24hrs_Bool_Exp>;
  _or?: InputMaybe<Array<Transactions_Last_24hrs_Bool_Exp>>;
  count?: InputMaybe<Bigint_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** aggregate max on columns */
export type Transactions_Last_24hrs_Max_Fields = {
  __typename?: 'transactions_last_24hrs_max_fields';
  count?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** aggregate min on columns */
export type Transactions_Last_24hrs_Min_Fields = {
  __typename?: 'transactions_last_24hrs_min_fields';
  count?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** Ordering options when selecting data from "transactions_last_24hrs". */
export type Transactions_Last_24hrs_Order_By = {
  count?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "transactions_last_24hrs" */
export enum Transactions_Last_24hrs_Select_Column {
  /** column name */
  Count = 'count',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate stddev on columns */
export type Transactions_Last_24hrs_Stddev_Fields = {
  __typename?: 'transactions_last_24hrs_stddev_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Transactions_Last_24hrs_Stddev_Pop_Fields = {
  __typename?: 'transactions_last_24hrs_stddev_pop_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Transactions_Last_24hrs_Stddev_Samp_Fields = {
  __typename?: 'transactions_last_24hrs_stddev_samp_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "transactions_last_24hrs" */
export type Transactions_Last_24hrs_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Transactions_Last_24hrs_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Transactions_Last_24hrs_Stream_Cursor_Value_Input = {
  count?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate sum on columns */
export type Transactions_Last_24hrs_Sum_Fields = {
  __typename?: 'transactions_last_24hrs_sum_fields';
  count?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type Transactions_Last_24hrs_Var_Pop_Fields = {
  __typename?: 'transactions_last_24hrs_var_pop_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Transactions_Last_24hrs_Var_Samp_Fields = {
  __typename?: 'transactions_last_24hrs_var_samp_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Transactions_Last_24hrs_Variance_Fields = {
  __typename?: 'transactions_last_24hrs_variance_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "transfer_type". All fields are combined with logical 'AND'. */
export type Transfer_Type_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['transfer_type']['input']>;
  _gt?: InputMaybe<Scalars['transfer_type']['input']>;
  _gte?: InputMaybe<Scalars['transfer_type']['input']>;
  _in?: InputMaybe<Array<Scalars['transfer_type']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['transfer_type']['input']>;
  _lte?: InputMaybe<Scalars['transfer_type']['input']>;
  _neq?: InputMaybe<Scalars['transfer_type']['input']>;
  _nin?: InputMaybe<Array<Scalars['transfer_type']['input']>>;
};
