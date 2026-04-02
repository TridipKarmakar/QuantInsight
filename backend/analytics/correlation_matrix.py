import pandas as pd

def compute_correlation_matrix(df) :
    corr_matrix = round(df.corr(),2)
    return corr_matrix


