create table account (id integer not null, created_at date, deleted_at date, modified_at date, email varchar(255) not null, password varchar(255) not null, role varchar(32) default 'USER', username varchar(20) not null, primary key (id));
create table account_detail (id integer not null, created_at date, deleted_at date, modified_at date, city varchar(50) not null, detailed_address varchar(30), district varchar(50) not null, first_name varchar(50) not null, is_default boolean default false, last_name varchar(50) not null, phone_number varchar(20) not null, account_id integer, primary key (id));
create table account_order (id integer not null, created_at date, deleted_at date, modified_at date, status varchar(32) default 'PENDING' not null, total integer not null, username varchar(20) not null, account_id integer, primary key (id));
create table account_order_order_details (account_order_id integer not null, order_details_id integer not null);
create table brand (id integer not null, created_at date, deleted_at date, modified_at date, brand_name varchar(20) not null, primary key (id));
create table category (id integer not null, created_at date, deleted_at date, modified_at date, name varchar(20) not null, primary key (id));
create table order_detail (id integer not null, created_at date, deleted_at date, modified_at date, purchase_discount float default 0 not null, purchase_price float4 not null, account_order_id integer, product_warranty_id integer, primary key (id));
create table order_information (created_at date, deleted_at date, modified_at date, address varchar(100) not null, email varchar(60) not null, fullname varchar(100) not null, note varchar(100) not null, phone_number varchar(20) not null, username varchar(20) not null, account_order_id integer not null, primary key (account_order_id));
create table product (id integer not null, created_at date, deleted_at date, modified_at date, discount float default 0, price float4, product_line varchar(50) not null, product_name varchar(150) not null, brand_id integer, category_id integer, warranty_period_id integer, primary key (id));
create table product_info (id integer not null, created_at date, deleted_at date, modified_at date, product_information varchar(255) not null, product_id integer, primary key (id));
create table product_product_infos (product_id integer not null, product_infos_id integer not null);
create table product_product_warranties (product_id integer not null, product_warranties_id integer not null);
create table product_warranty (id integer not null, created_at date, deleted_at date, modified_at date, product_warranty_id varchar(50) not null, purchased_at timestamp(6), warranty_period timestamp(6), product_id integer, primary key (id));
create table warranty_period (id integer not null, created_at date, deleted_at date, modified_at date, months integer not null, primary key (id));
alter table if exists account drop constraint if exists UK_gex1lmaqpg0ir5g1f5eftyaa1;
alter table if exists account add constraint UK_gex1lmaqpg0ir5g1f5eftyaa1 unique (username);
alter table if exists account_order_order_details drop constraint if exists UK_ml4l5pifjavp1dy1292re3595;
alter table if exists account_order_order_details add constraint UK_ml4l5pifjavp1dy1292re3595 unique (order_details_id);
alter table if exists product drop constraint if exists UK_eb5w4lgpcoqymm6soaf5n3lar;
alter table if exists product add constraint UK_eb5w4lgpcoqymm6soaf5n3lar unique (product_line);
alter table if exists product_product_infos drop constraint if exists UK_a8hxoa5tf8ehviq1mtnk25kmn;
alter table if exists product_product_infos add constraint UK_a8hxoa5tf8ehviq1mtnk25kmn unique (product_infos_id);
alter table if exists product_product_warranties drop constraint if exists UK_a0p5mwjasasos3q5jwt9qybmn;
alter table if exists product_product_warranties add constraint UK_a0p5mwjasasos3q5jwt9qybmn unique (product_warranties_id);
alter table if exists product_warranty drop constraint if exists UK_tox165jmqro2scx31bgemvkwo;
alter table if exists product_warranty add constraint UK_tox165jmqro2scx31bgemvkwo unique (product_warranty_id);
alter table if exists account_detail add constraint FKgmcrvfpbrxux7hy3svk9oy0cx foreign key (account_id) references account;
alter table if exists account_order add constraint FKrwakkftq9hw5bgj495jja09a6 foreign key (account_id) references account;
alter table if exists account_order_order_details add constraint FKlsd10qk2yx81p920tiww5mga2 foreign key (order_details_id) references order_detail;
alter table if exists account_order_order_details add constraint FKgqhl7v18swjqcrg5km4bv9mqt foreign key (account_order_id) references account_order;
alter table if exists order_detail add constraint FK6tba737u3gd8dff7ef8vkkju5 foreign key (account_order_id) references account_order;
alter table if exists order_detail add constraint FKqtorb9cva09qp7rx5vsnajqc9 foreign key (product_warranty_id) references product_warranty;
alter table if exists order_information add constraint FK5cahnba0pkb7gqdhxi9pjbmx4 foreign key (account_order_id) references account_order;
alter table if exists product add constraint FKs6cydsualtsrprvlf2bb3lcam foreign key (brand_id) references brand;
alter table if exists product add constraint FK1mtsbur82frn64de7balymq9s foreign key (category_id) references category;
alter table if exists product add constraint FK23c314w1sey6l97g1kh5wnruh foreign key (warranty_period_id) references warranty_period;
alter table if exists product_info add constraint FK51m6a4nrmlfdj3o2o69r6wn1q foreign key (product_id) references product;
alter table if exists product_product_infos add constraint FKr2bj4pcnmjpwao7q6rwi794ae foreign key (product_infos_id) references product_info;
alter table if exists product_product_infos add constraint FKetamvpxgwxatqdqhuvg7l0qno foreign key (product_id) references product;
alter table if exists product_product_warranties add constraint FK4w9urqpvu9fqorft5mxwf1dux foreign key (product_warranties_id) references product_warranty;
alter table if exists product_product_warranties add constraint FKbmnfda0n571tjc3so9m3e3los foreign key (product_id) references product;
alter table if exists product_warranty add constraint FKr4g0m5hgh0d6eiqxmari9ob1a foreign key (product_id) references product;
