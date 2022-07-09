function addNum(n, total = 0) {
    if (n <= 0) return total;
    return addNum(n - 1, total += n);
}