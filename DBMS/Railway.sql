CREATE DATABASE RAILWAY;

---------------------------CREATE A PAX INFO TABLE-------------------------
CREATE TABLE PAX_INFO(
    PASSENGER_ID INT PRIMARY KEY,
    PASSENGER_SEX VARCHAR(7),
    PASSENGER_AGE INT,
    PASSENGER_NAME VARCHAR(50),
    SI_NO INT,
    FARE INT,
    SEAT_NO INT
);

-------------------------CREATE A LOGIN TABLE-------------------------------
CREATE TABLE LOGIN_ACC(
    LOGIN_ID INT PRIMARY KEY,
    PASSWORD VARCHAR(50),
    PASSENGER_ID INT FOREIGN KEY (PASSENGER_ID) REFERENCES PAX_INFO(PASSENGER_ID)
);

-----------------------CREATE TRAIN TABLE------------------------------
CREATE TABLE TRAIN_INFO(
    PASSENGER_ID INT,
    TRAIN_NO INT PRIMARY KEY,
    TRAIN_NAME VARCHAR(100),
    TRAIN_TYPE VARCHAR(100),
    TRAIN_FARE INT,
    DEPT_TIME DECIMAL(4, 2),
    ARIVEL_TIME DECIMAL(4, 2),
    FOREIGN KEY (PASSENGER_ID) REFERENCES PAX_INFO(PASSENGER_ID)
) ----------------------CREATE A TICKET RESERVESITION TABLE------------------------
CREATE TABLE TICKET_REV(
    TICKET_SR INT PRIMARY KEY,
    FROM_STATION VARCHAR(50),
    TO_STATION VARCHAR(50),
    TO_KM INT,
    FROM_KM INT,
    FROM_DATE DATETIME,
    TO_DATE DATETIME,
    PASSENGER_ID INT,
    TRAIN_NO INT,
    FOREIGN KEY (PASSENGER_ID) REFERENCES PAX_INFO(PASSENGER_ID),
    FOREIGN KEY (TRAIN_NO) REFERENCES TRAIN_INFO(TRAIN_NO)
)
SELECT
    *
FROM
    PAX_INFO;

SELECT
    *
FROM
    LOGIN_ACC;

CREATE
OR ALTER VIEW ID AS
SELECT
    P.PASSENGER_NAME,
    P.PASSENGER_ID,
    P.PASSENGER_SEX,
    L.LOGIN_ID,
    L.PASSWORD
FROM
    PAX_INFO P
    JOIN LOGIN_ACC L ON P.PASSENGER_ID = L.PASSENGER_ID
SELECT
    *
FROM
    ID ---------------------- insert query in tables----------------------------
INSERT INTO
    PAX_INFO
VALUES
(100001, 'MALE', 20, 'PRIYANK SOLANKI', 200001, 300, 3),
    (100002, 'FEMALE', 19, 'AROHI SHARMA', 100002, 800, 48),
    (100003, 'MALE', 20, 'YASH GAMDHA', 322163, 300, 10),
    (100004, 'FEMALE', 21, 'MAYA JETHVA', 325546, 213, 16),
    (100005, 'FEMALE', 55, 'AGAM MEATHA', 323554, 1020, 22),
    (100006, 'MALE', 25, 'PRATIXA', 213556, 3645, 30),
    (100007, 'FEMALE', 30, 'PALAK', 124652, 651, 55) 
	----INSERT INTO THIS TABLE USEING TRIGER
INSERT INTO
    LOGIN_ACC
VALUES
(3232323, 'PASSWORD', 101) 
---------INSERT A TRAIN TABLE-----------------------
INSERT INTO
    TRAIN_INFO
VALUES
    (
        100001,
        19545,
        'VERAVAL-JAMNAGER INTERCITY',
        'MAIL EXPRESS',
        200,
        12.50,
        01.00
    ),
    (
        100002,
        01654,
        'TIRUVANTPURAM-JAMNAGER HUMSUFAR EXPRESS',
        'EXPRESS',
        3000,
        01.50,
        13.00
    ),
    (
        100003,
        27546,
        'JUBALPUR-VERAVAL EXPRESS',
        'INTERCITY EXPRESS',
        2200,
        01.56,
        01.14
    ),
    (
        100004,
        33452,
        'MUMBAI-DEHAGAM INTRCITY',
        'MAIL EXPRESS',
        1000,
        17.50,
        09.00
    ),
    (
        100005,
        19541,
        'JAMNAGER-VERAVAL INTERCITY',
        'MAIL EXPRESS',
        200,
        12.50,
        01.30
    ) -----------------INSERT VALUES IN TECKET_REV TABLE---------------------------
INSERT INTO
    TICKET_REV
VALUES
    (
        230001,
        'RAJKOT',
        'VERAVAL',
        0,
        150,
        '2025-03-20',
        '2025-03-20',
        100001,
        27546
    ),
    (
        230002,
        'RAJKOT',
        'JUNAGADH',
        0,
        100,
        '2025-03-20',
        '2025-03-20',
        100002,
        27546
    ),
    (
        230003,
        'TIRUVANTPURAM',
        'MUMBAI',
        0,
        1500,
        '2025-03-20',
        '2025-03-21',
        100003,
        1654
    ),
    (
        230004,
        'VERAVAL',
        'JAMNAGAR',
        0,
        130,
        '2025-03-22',
        '2025-03-22',
        100004,
        19545
    ),
    (
        230005,
        'MUMBAI',
        'DAHEGAM',
        0,
        1000,
        '2025-03-30',
        '2025-03-31',
        100005,
        33452
    ) --------------------UPDATE TABLE PAX INFO------------------------------
UPDATE
    PAX_INFO
SET
    PASSENGER_NAME = 'AGAM MATHA',
    PASSENGER_SEX = 'MALE'
WHERE
    PASSENGER_ID = 100005;

UPDATE
    PAX_INFO
SET
    PASSENGER_SEX = 'FEMALE'
WHERE
    PASSENGER_ID = 100006
UPDATE
    PAX_INFO
SET
    SEAT_NO = 31
WHERE
    PASSENGER_ID = 100002 ------------------------BASIC JOIN OPRATION ON TABLE-----------------------
    --1=>GIVE ME DETAILS PASSENGER WHOSE PASSENGER_ID IS 100001
    --TRAVEL IN WHICH TRAIN FULL DETAILS.
SELECT
    P.PASSENGER_ID,
    P.PASSENGER_NAME,
    P.PASSENGER_AGE,
    T.FROM_STATION,
    T.TO_STATION,
    T.TICKET_SR,
    T.TRAIN_NO,
    T.FROM_DATE,
    TI.TRAIN_NAME
FROM
    PAX_INFO P
    JOIN TICKET_REV T ON P.PASSENGER_ID = T.PASSENGER_ID
    JOIN TRAIN_INFO TI ON T.PASSENGER_ID = TI.PASSENGER_ID
WHERE
    P.PASSENGER_ID = 100001 
--2=>GIVE ME DETAILS PASSENGER WHOSE PASSENGER_ID IS 100004
--TRAVEL IN WHICH TRAIN FULL DETAILS.
SELECT
    P.PASSENGER_ID,
    P.PASSENGER_NAME,
    P.PASSENGER_AGE,
    T.FROM_STATION,
    T.TO_STATION,
    T.TICKET_SR,
    T.TRAIN_NO,
    T.FROM_DATE,
    TI.TRAIN_NAME
FROM
    PAX_INFO P
    JOIN TICKET_REV T ON P.PASSENGER_ID = T.PASSENGER_ID
    JOIN TRAIN_INFO TI ON T.PASSENGER_ID = TI.PASSENGER_ID
WHERE
    P.PASSENGER_ID = 100005 
--3=>GIVE ME DETAILS PASSENGER WHOSE PASSENGER_ID IS 100003
--TRAVEL IN WHICH TRAIN FULL DETAILS.
SELECT
    P.PASSENGER_ID,
    P.PASSENGER_NAME,
    P.PASSENGER_AGE,
    T.FROM_STATION,
    T.TO_STATION,
    T.TICKET_SR,
    T.TRAIN_NO,
    T.FROM_DATE,
    TI.TRAIN_NAME
FROM
    PAX_INFO P
    JOIN TICKET_REV T ON P.PASSENGER_ID = T.PASSENGER_ID
    JOIN TRAIN_INFO TI ON T.PASSENGER_ID = TI.PASSENGER_ID
WHERE
    P.PASSENGER_ID = 100003 
--4=>GIVE ME INFOMATION OF CUSTOMER TICKET INFOMATION ON TICKET SR NO
SELECT
    TR.TICKET_SR,
    TI.PASSENGER_ID,
    TI.TRAIN_NAME,
    TI.TRAIN_FARE,
    TI.TRAIN_NO,
    TI.ARIVEL_TIME
FROM
    TICKET_REV TR
    JOIN TRAIN_INFO TI ON TR.PASSENGER_ID = TI.PASSENGER_ID
WHERE
    TR.TICKET_SR = 230003 
--5=>GIVE ME INFOMATION ABOUT CUSTOMER NAME WHICH TRAVEL IN GIVEN TRAIN
CREATE
OR ALTER PROCEDURE SP_TRAIN_INFO2 @PAX_ID INT AS BEGIN
SELECT
    *
FROM
    DBO.PAX_INFO P
    INNER JOIN DBO.TRAIN_INFO T ON P.PASSENGER_ID = T.PASSENGER_ID
WHERE
    P.PASSENGER_ID = @PAX_ID;

END EXECUTE SP_TRAIN_INFO2 100001 
--6=>CREATE SP ENTER A DPATURE TIME SHOW FROM_STATION AND TO_STATION
CREATE
OR ALTER PROCEDURE SP_SHOW_STATION_1 @DEP_TIME DECIMAL(4, 2) AS BEGIN
SELECT
    T.DEPT_TIME,
    TR.FROM_STATION,
    TR.TO_STATION,
    TR.FROM_KM
FROM
    TRAIN_INFO T
    INNER JOIN TICKET_REV TR ON T.TRAIN_NO = TR.TRAIN_NO
WHERE
    T.DEPT_TIME = @DEP_TIME
END EXEC SP_SHOW_STATION_1 12.50 
--7=>SHOW ALL DETAILS OF TRAIN WHERE NEME MATCH GIVEN NAME
CREATE OR ALTER PROCEDURE SP_PAX_DETAILS_1 
@NAME VARCHAR(20)
AS
BEGIN
SELECT * FROM
PAX_INFO P
JOIN
TICKET_REV TR
ON P.PASSENGER_ID=TR.PASSENGER_ID
WHERE P.PASSENGER_NAME=@NAME
END

EXEC SP_PAX_DETAILS_1 'PRIYANK SOLANKI'
--8=>CREATE PROCEDURE FOR ENTER A DATA IN PAX_INFO TABLE
CREATE OR ALTER PROCEDURE INS_PRO
    @PASSENGER_ID INT,
    @PASSENGER_SEX VARCHAR(7),
    @PASSENGER_AGE INT,
    @PASSENGER_NAME VARCHAR(50),
    @SI_NO INT,
    @FARE INT,
    @SEAT_NO INT
AS
BEGIN
    BEGIN TRY
        INSERT INTO PAX_INFO
        (PASSENGER_ID, PASSENGER_SEX, PASSENGER_AGE, PASSENGER_NAME, SI_NO, FARE, SEAT_NO)
        VALUES
        (@PASSENGER_ID, @PASSENGER_SEX, @PASSENGER_AGE, @PASSENGER_NAME, @SI_NO, @FARE, @SEAT_NO)
    END TRY
    BEGIN CATCH
        PRINT 'An error occurred: ' + ERROR_MESSAGE();
    END CATCH
END
EXECUTE INS_PRO 100008,'MALE',55,'PADAMKAMAL HIRALAL',456542,800,45
--9=>CREATE PROCEDURE FOR ENTER A DATA IN TICKET_REV TABLE
CREATE OR ALTER PROCEDURE PRO_INS1
@T_SI INT,
@FROM_STATION VARCHAR(50),
@TO_STATION VARCHAR(50),
@TO_KM INT,
@FROM_KM INT,
@FROM_DATE DATETIME,
@TO_DATE DATETIME,
@PASSENGER_ID INT,
@TRAIN_NO INT
AS
BEGIN
	BEGIN TRY
		INSERT INTO TICKET_REV
		VALUES(@T_SI,@FROM_STATION,@TO_STATION,@TO_KM,@FROM_KM,@FROM_DATE,@TO_DATE,@PASSENGER_ID,@TRAIN_NO)
	END TRY
	BEGIN CATCH
		PRINT 'ERROR IS '+ERROR_MESSAGE()
	END CATCH
END
BEGIN TRY
EXECUTE PRO_INS1 173256,'AHAMDABAD','PRYAGRAJ',1050,0,'2025-03-06','2025-03-07',100008,17654
END TRY
BEGIN CATCH
PRINT 'ERROR IS '+ERROR_MESSAGE()
END CATCH
--10=>CREATE FUNCTION FOR SELECT PASSENGRER NAME
CREATE FUNCTION SELECT_NAME(@ID INT)
RETURNS TABLE
AS
RETURN(SELECT P.PASSENGER_NAME FROM PAX_INFO P
WHERE P.PASSENGER_ID=@ID)
SELECT * FROM DBO.SELECT_NAME(100001)
--11=>SEARCH FROM_STATION TO TO_STATION GIVEN TICKET NO.
CREATE OR ALTER FUNCTION STATION1(@TI_NO INT)
RETURNS TABLE
AS
RETURN(SELECT TR.FROM_STATION,TR.TO_STATION FROM TICKET_REV TR
WHERE TR.TICKET_SR=@TI_NO)
SELECT * FROM DBO.STATION1(230001)
--11=>SHOW TOTAL INCOME USEING FUNCTION
CREATE OR ALTER FUNCTION TOTAL_INCOME()
RETURNS INT
AS
BEGIN
RETURN(SELECT SUM(P.FARE) AS TOTAL FROM PAX_INFO P)
END
SELECT DBO.TOTAL_INCOME()
--12=>SELECT ALL ITEM IN TRAIIN INFO TABLE ON TRAIN NUMBER
CREATE OR ALTER FUNCTION TRAIN_DETAILS(@TR_NO1 INT)
RETURNS TABLE
AS
RETURN(SELECT TI.PASSENGER_ID,TI.DEPT_TIME,TI.TRAIN_NAME,TI.TRAIN_TYPE,
TI.ARIVEL_TIME FROM TRAIN_INFO TI
WHERE TI.TRAIN_NO=@TR_NO1)
SELECT * FROM DBO.TRAIN_DETAILS(19545)
--13=>CREATE INSERT MASSEGE TRIGER
CREATE TRIGGER INS_PAX
ON PAX_INFO
AFTER INSERT
AS
BEGIN 
PRINT 'DATA INSERT IN PAX_INFO'
END
--14=>CREATE INSERT MASSEGE TRIGER
CREATE TRIGGER INS_TICKET
ON TICKET_REV
AFTER INSERT
AS
BEGIN 
PRINT 'DATA INSERT IN TICKET_REV'
END
--15=>CREATE INSERT MASSEGE TRIGER
CREATE TRIGGER INS_TRAIN
ON TRAIN_INFO
AFTER INSERT
AS
BEGIN 
PRINT 'DATA INSERT IN TRAIN_INFO'
END
--16=>CREATE INSERT MASSEGE TRIGER
CREATE TRIGGER UPDATE_PAX
ON PAX_INFO
AFTER UPDATE
AS
BEGIN 
PRINT 'DATA UPDATE IN PAX_INFO'
END
--17=>CREATE INSERT MASSEGE TRIGER
CREATE TRIGGER UPDATE_TICKET
ON TICKET_REV
AFTER UPDATE
AS
BEGIN 
PRINT 'DATA UPDATE IN TICKET_REV'
END
--18=>CREATE INSERT MASSEGE TRIGER
CREATE TRIGGER UPDATE_TRAIN
ON TRAIN_INFO
AFTER UPDATE
AS
BEGIN 
PRINT 'DATA UPDATE IN TRAIN_INFO'
END
--19 KM FARE
CREATE TRIGGER UpdateTrainFare
ON TICKET_REV
AFTER INSERT
AS
BEGIN
    DECLARE @fare_per_km INT = 10; -- Assuming fare is 10 per km
    DECLARE @distance INT;
    DECLARE @train_no INT;

    SELECT @distance = (TO_KM - FROM_KM), @train_no = TRAIN_NO
    FROM inserted;

    UPDATE TRAIN_INFO
    SET TRAIN_FARE = @distance * @fare_per_km
    WHERE TRAIN_NO = @train_no;
END;
--20=>Cursor to Display All Train Information
DECLARE @passenger_id INT;
DECLARE @train_no1 INT;
DECLARE @train_name VARCHAR(100);
DECLARE @train_type VARCHAR(100);
DECLARE @train_fare INT;
DECLARE @dept_time DECIMAL(4, 2);
DECLARE @arivel_time DECIMAL(4, 2);

DECLARE train_cursor CURSOR FOR
SELECT PASSENGER_ID, TRAIN_NO, TRAIN_NAME, TRAIN_TYPE, TRAIN_FARE, DEPT_TIME, ARIVEL_TIME
FROM TRAIN_INFO;

OPEN train_cursor;
FETCH NEXT FROM train_cursor INTO @passenger_id, @train_no1, @train_name, @train_type, @train_fare, @dept_time, @arivel_time;

WHILE @@FETCH_STATUS = 0
BEGIN
    PRINT 'Train No: ' + CAST(@train_no1 AS VARCHAR) + ', Name: ' + @train_name + ', Type: ' + @train_type;
    FETCH NEXT FROM train_cursor INTO @passenger_id, @train_no1, @train_name, @train_type, @train_fare, @dept_time, @arivel_time;
END;

CLOSE train_cursor;
DEALLOCATE train_cursor;
--21=>Cursor to Calculate Total Fare for Each Passenger
DECLARE @passenger_id1 INT;
DECLARE @total_fare INT;

DECLARE fare_cursor CURSOR FOR
SELECT PASSENGER_ID, TRAIN_FARE
FROM TRAIN_INFO;

OPEN fare_cursor;
FETCH NEXT FROM fare_cursor INTO @passenger_id1, @train_fare;

WHILE @@FETCH_STATUS = 0
BEGIN
    SET @total_fare = @total_fare + @train_fare;
    FETCH NEXT FROM fare_cursor INTO @passenger_id1, @train_fare;
END;

PRINT 'Total Fare for All Passengers: ' + CAST(@total_fare AS VARCHAR);

CLOSE fare_cursor;
DEALLOCATE fare_cursor;