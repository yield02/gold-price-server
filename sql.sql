USE gia_vang;

CREATE TABLE NGAYBAN(
	NGAY DATE PRIMARY KEY
);

CREATE TABLE KHUVUC(
	MAKV CHAR(5) PRIMARY KEY,
	TenKV VARCHAR(20)
);

CREATE TABLE LOAIVANG(
	MaLV CHAR(5) PRIMARY KEY,
	TenLV VARCHAR(20)
);

CREATE TABLE GIAVANGgia_vanggiavangloaivangkhuvuc(
	MaLV CHAR(5),
	MaKV CHAR(5),
	NGAYBAN DATE,
	Muavao FLOAT,
	Banra FLOAT,
	PRIMARY KEY (MaLV, MaKV, NGAYBAN),
	FOREIGN KEY (MaLV) REFERENCES LOAIVANG(MaLV),
	FOREIGN KEY (MaKV) REFERENCES KHUVUC(MaKV),
	FOREIGN KEY (NGAYBAN) REFERENCES NGAYBAN(NGAY)
);
gia_vang