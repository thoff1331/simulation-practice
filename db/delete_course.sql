DELETE
FROM golf
WHERE course_id = $1;


SELECT *
FROM golf
ORDER BY course_id;