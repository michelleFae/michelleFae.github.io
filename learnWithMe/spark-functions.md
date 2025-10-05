# Apache Spark Functions Cheat Sheet & Best Practices

## 1️⃣ Transformations vs Actions

| Type | Description |
|------|-------------|
| **Transformations** | Create new RDDs from existing ones. **Lazy** — they only build the DAG, not executed until an action is called. Examples: `map`, `flatMap`, `filter`, `groupByKey`, `reduceByKey`. |
| **Actions** | Trigger computation and return results (to driver) or save output. Examples: `collect`, `count`, `reduce`, `fold`, `aggregate`. |

💡 **Fun Spark Tip:**  
> Spark only computes when an **action** is called. This **lazy evaluation** allows memory efficiency and fault tolerance.

---

## 2️⃣ Key RDD Transformations

### 🔹 `map(func)`
Apply a function to each element.

```python
rdd = sc.parallelize([1, 2, 3])
rdd2 = rdd.map(lambda x: x * x)
print(rdd2.collect())  # [1, 4, 9]
````

---

### 🔹 `flatMap(func)`

1-to-many transformation; flattens the results.

```python
rdd = sc.parallelize(["hello world", "good morning"])
flat_mapped = rdd.flatMap(lambda x: x.split(" "))
print(flat_mapped.collect())
# ['hello', 'world', 'good', 'morning']
```

---

### 🔹 `groupBy(func)`

Group elements by a function; returns `(key, iterable)` pairs.

```python
rdd = sc.parallelize([1, 2, 3, 4, 5])
grouped = rdd.groupBy(lambda x: "even" if x % 2 == 0 else "odd")
print({k: list(v) for k, v in grouped.collect()})
# {'odd': [1, 3, 5], 'even': [2, 4]}
```

---

### 🔹 `groupByKey()` (Pair RDDs)

Group values by key; returns `(key, iterable)`.

⚠️ **Be careful:** This can be **expensive** — it shuffles all values across the network.

```python
pairs = sc.parallelize([("a", 1), ("b", 2), ("a", 3)])
grouped = pairs.groupByKey()
print({k: list(v) for k, v in grouped.collect()})
# {'a': [1, 3], 'b': [2]}
```

---

### 🔹 `reduceByKey(func)` (Pair RDDs)

Aggregate values **per key** efficiently (combines locally first, reduces shuffle).

```python
pairs = sc.parallelize([("a", 1), ("b", 2), ("a", 3)])
reduced = pairs.reduceByKey(lambda x, y: x + y)
print(reduced.collect())
# [('a', 4), ('b', 2)]
```

✅ **Tip:** Prefer `reduceByKey` over `groupByKey` for performance.

---

### 🔹 `coalesce(n)` vs `repartition(n)`

| Function         | Use                                          | Shuffle |
| ---------------- | -------------------------------------------- | ------- |
| `coalesce(n)`    | Reduce partitions without shuffle            | ❌ No    |
| `repartition(n)` | Increase or decrease partitions with shuffle | ✅ Yes   |

```python
rdd = sc.parallelize(range(10), 4)
rdd2 = rdd.coalesce(2)      # faster, no shuffle
rdd3 = rdd.repartition(6)   # triggers shuffle
```

💡 **Tip:** Use `coalesce` after filtering to reduce small partitions efficiently.
Use `repartition` to increase parallelism.

---

### 🔹 `cache()` and `persist()`

* **`cache()`** → store RDD in memory (default)
* **`persist()`** → store RDD in memory, disk, or combination

```python
rdd2 = rdd.map(lambda x: x * x).cache()
rdd2.collect()  # triggers computation and stores in memory
rdd2.count()    # reuses cached data; no recomputation
```

💡 **Fun Spark Tip:**

> Spark recomputes RDDs for every action if not cached — this avoids unnecessary memory usage but is why repeated actions can be slower.
> Caching enables **re-use**, speeding up multiple actions.

Use `persist()` for large RDDs that **don’t fit in memory**, or when you want **disk backup**.

---

## 3️⃣ Actions

### 🔹 `collect()`

Returns all elements to the driver. Use carefully for large datasets.

```python
print(rdd.collect())
```

---

### 🔹 `count()`

Number of elements in the RDD.

```python
print(rdd.count())
```

---

### 🔹 `reduce(func)`

Aggregates elements using a function.

```python
rdd = sc.parallelize([1, 2, 3, 4])
print(rdd.reduce(lambda a, b: a + b))  # 10
```

---

### 🔹 `fold(zero)(func)`

Like `reduce`, but with an **initial value** per partition.

```python
rdd = sc.parallelize([1, 2, 3, 4])
print(rdd.fold(0, lambda a, b: a + b))  # 10
```

---

### 🔹 `aggregate(zero)(seqOp, combOp)`

Flexible aggregation: allows **different operations within partitions and across partitions**.

```python
rdd = sc.parallelize([1, 2, 3, 4])
result = rdd.aggregate(
    (0, float('-inf')),  # initial (sum, max)
    lambda acc, x: (acc[0] + x, max(acc[1], x)),        # within partition
    lambda acc1, acc2: (acc1[0] + acc2[0], max(acc1[1], acc2[1]))  # across partitions
)
print(result)  # (10, 4)
```

💡 **Tip:** Use `aggregate` for **custom, multi-value computations** across partitions.

---

## 4️⃣ Optimization and Spark Tricks

1. **Lazy evaluation**

   * Transformations are only computed when an **action** is called.
   * Saves memory and enables **fault tolerance**.

2. **Cache RDDs used multiple times**

   * Avoids recomputation. Example: map → collect → count.

3. **Prefer reduceByKey over groupByKey**

   * Reduces shuffle → faster and more memory efficient.

4. **Use coalesce after filtering**

   * Reduces partitions efficiently **without shuffle**.

5. **Use persist for large datasets**

   * Memory + disk for huge RDDs.

6. **RDD Lineage**

   * Spark tracks transformations for fault recovery: lost partition → recompute from original RDD.

7. **FlatMap for 1-to-many transformations**

   * Splits or expands elements into multiple outputs per element.

---

## ✅ Key Takeaways

* **Transformations** = lazy recipes → build DAG
* **Actions** = trigger computation
* **Caching / persisting** = avoid recomputation, speed up repeated actions
* **RDD optimizations**:

  * `reduceByKey` > `groupByKey`
  * `coalesce` vs `repartition`
  * `cache()` for reuse, `persist()` for large RDDs

---

✨ **Benefits of Spark Design**

> Spark’s lazy and lineage-based model provides:
>
> * ⚙️ **Fault tolerance** (lost partitions are recomputed from lineage)
> * 💾 **Memory efficiency** (intermediate results not stored unless cached)
> * ⚡ **Parallel consistency** (results recomputed consistently each time)

---